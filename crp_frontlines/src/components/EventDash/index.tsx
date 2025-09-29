import { ReactNode, useReducer, useState } from "react";
import {
  Container,
  HeaderInfo,
  EventTitle,
  EventAction,
  PointerField,
  SectorButton,
  PointerContainer,
  DescriptionField,
  BodyInfo,
  EventCategory,
  EventType,
  EventActive,
  PointerPill,
  DeleteButton,
  CloseIssueDesc,
  DescriptionContainer,
  ErrorP,
  Actions,
  FinalstatusPill,
  EventAge,
} from "./styles";
import expand from "../assets/expand.svg";
import headset from "../assets/headset.svg";
import { dateOptions, CloseFormInputs, baseURL } from "./types";
import { Button, Col, Flex, message, Modal, Row } from "antd";
import { useForm } from "react-hook-form";
import { CloseIssueSelect } from "../EventHub/styles";

export type EventDashProps = {
  ticket: {
    id?: number;
    created_at?: any;
    active?: boolean;
    title?: string;
    type?: string;
    sector?: string;
    area?: string;
    criticality?: number | string;
    criticalityColor?: string;
    priority?: number;
    description?: string;
    eventMoment?: string | ReactNode;
    eventTime?: Date | undefined;
    closeDesc?: string | undefined;
    finalStatus?: boolean;
  };
};

type State = {
  id?: number;
  created_at?: any;
  active?: boolean;
  title?: string;
  type?: string;
  sector?: string;
  area?: string;
  criticality?: number | string;
  criticalityColor?: string;
  priority?: number;
  description?: string;
  eventMoment?: string | ReactNode;
  eventTime?: Date | undefined;
  closeDesc?: string | undefined;
  finalStatus?: boolean;
};

type Action =
  | { type: "criticality1" }
  | { type: "criticality2" }
  | { type: "criticality3" };

function Reducer(state: State, action: Action) {
  switch (action.type) {
    case "criticality1":
      return {
        ...state,
        criticality: 1,
        priority: 1,
      };
    case "criticality2":
      return {
        ...state,
        criticality: 2,
        priority: 2,
      };
    case "criticality3":
      return {
        ...state,
        criticality: 3,
        priority: 3,
      };
    default:
      return state;
  }
}

function EventDash({ ticket }: EventDashProps) {
  const [state, dispatch] = useReducer(Reducer, ticket);

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<CloseFormInputs>();
  const {
    id,
    active,
    created_at,
    title,
    sector,
    area,
    criticality,
    description,
    priority,
  } = ticket;

  let { criticalityColor } = ticket;

  const [isCardOpen, setIsCardOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const created = new Date(created_at);
  const now = new Date();
  const start = Math.floor(created.getTime() / (3600 * 24 * 1000));
  const end = Math.floor(now.getTime() / (3600 * 24 * 1000));
  const diff = Math.abs(start - end);

  const data = new Date(created_at).getTime();
  const final = Date.now();
  const elapsed = final - data;
  const elapsediff = Math.floor(elapsed / (1000 * 60));

  console.log(elapsediff);

  switch (state.criticality) {
    case 1:
      criticalityColor = "var(--primary-blue)";
      break;
    case 2:
      criticalityColor = "var(--primary-yellow)";
      break;
    case 3:
      criticalityColor = "var(--primary-red)";
      break;
    default:
      break;
  }

  function finishIssue() {
    const values = getValues();
    const putData = {
      ...ticket,
      closeDesc: values.closeDesc,
      finalStatus: values.closeStatus,
      active: false,
    };

    try {
      fetch(`http://172.28.248.82:8000/api/v1/tickets/update/${state.id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(putData),
      }).then((response) => {
        response.ok
          ? console.log("deu certo")
          : console.log("deu errado", response.statusText);
      });
      message.info("Chamado finalizado!");
      setIsModalOpen(!isModalOpen);
    } finally {
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  }

  function updateIssue() {
    const putData = {
      ...state,
      criticality: state.criticality,
    };
    try {
      fetch(`http://172.28.248.82:8000/api/v1/tickets/update/${state.id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(putData),
      }).then((response) => {});
      message.info(`Criticalidade alterada`);
      setIsModalOpen(!isEditModalOpen);
    } finally {
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
    console.log(putData);
  }
  return (
    <>
      <div>
        <Modal
          okText="Finalizar chamado"
          okType="danger"
          cancelText="Voltar"
          open={isModalOpen}
          title="Tellarus Support - CRP"
          onCancel={() => setIsModalOpen(!isModalOpen)}
          onOk={() => handleSubmit(finishIssue)()}
        >
          <label>Estado de encerramento</label>
          <CloseIssueSelect {...register("closeStatus", { required: true })}>
            <option value={""}></option>
            <option value={"true"}>Atendido</option>
            <option value={"false"}>Não atendido</option>
          </CloseIssueSelect>

          <label>Motivação</label>
          <CloseIssueDesc {...register("closeDesc", { required: true })} />
          {errors?.closeDesc?.type === "required" && (
            <ErrorP>O chamado deve possuir uma nota de fechamento !</ErrorP>
          )}
          {errors?.closeStatus?.type === "required" && (
            <ErrorP>
              Você deve definir um status de fechamento de chamado !
            </ErrorP>
          )}
        </Modal>
      </div>

      <Modal
        okText="Alterar estado"
        okType="default"
        cancelText="Voltar"
        open={isEditModalOpen}
        title="Tellarus Support - CRP"
        onCancel={() => setIsEditModalOpen(!isEditModalOpen)}
        onOk={() => updateIssue()}
      >
        <Button
          variant="solid"
          color="primary"
          onClick={() => dispatch({ type: "criticality1" })}
        >
          Criticalidade 1
        </Button>

        <Button
          variant="solid"
          color="yellow"
          onClick={() => dispatch({ type: "criticality2" })}
        >
          Criticalidade 2
        </Button>

        <Button
          variant="solid"
          color="red"
          onClick={() => dispatch({ type: "criticality3" })}
        >
          Criticalidade 3
        </Button>
      </Modal>
      <Container>
        <HeaderInfo>
          <EventCategory $levelcolor={criticalityColor} />
          <EventType>
            <img src={headset} />
          </EventType>

          <EventTitle onClick={() => setIsCardOpen(!isCardOpen)}>
            <h2>{title}</h2>
            <p>{created.toLocaleDateString("pt-BR", dateOptions)}</p>
            {state.finalStatus == true ? (
              <FinalstatusPill $finalStatus={state.finalStatus}>
                Atendido
              </FinalstatusPill>
            ) : (
              <FinalstatusPill>Não atendido</FinalstatusPill>
            )}
            {active && (
              <EventAge>
                {elapsediff < 50
                  ? `Idade do chamado: ${elapsediff} minutos`
                  : `Chamado em descumprimento`}
              </EventAge>
            )}
          </EventTitle>

          <EventAction>
            <button onClick={() => setIsCardOpen(!isCardOpen)}>
              <img src={expand} />
            </button>
          </EventAction>
          <EventActive $activeIssue={state.active} />
        </HeaderInfo>

        {/* ------------------ Header ----------------------*/}
        <BodyInfo open={isCardOpen}>
          <PointerField>
            {/* Div que organiza os botões indicadores */}
            {/* ------------------Setor----------------------*/}
            <PointerContainer>
              <PointerPill>
                <label>Setor</label>
                <SectorButton>{sector}</SectorButton>
              </PointerPill>
            </PointerContainer>
            {/* ------------------Area--------------------------*/}
            <PointerContainer>
              <PointerPill>
                <label>Area Afetada</label>
                <SectorButton>{area}</SectorButton>
              </PointerPill>
            </PointerContainer>
            {/* ------------------Criticality------------------ */}
            <PointerContainer>
              <PointerPill>
                <label>Criticalidade</label>
                <SectorButton $levelcolor={criticalityColor}>
                  {criticality}
                </SectorButton>
              </PointerPill>
            </PointerContainer>
            {/* ------------------Priority--------------------- */}
            <PointerContainer>
              <PointerPill>
                <label>Prioridade</label>
                <SectorButton>{priority}</SectorButton>
              </PointerPill>
            </PointerContainer>
          </PointerField>
          <DescriptionContainer>
            <label>Descrição do Chamado</label>
            <DescriptionField defaultValue={description} disabled />
          </DescriptionContainer>
          {!active && (
            <DescriptionContainer>
              <label>Descrição de fechamento</label>
              <DescriptionField defaultValue={state.closeDesc} disabled />
            </DescriptionContainer>
          )}
          <Actions>
            {active && (
              <>
                <DeleteButton onClick={() => setIsModalOpen(!isModalOpen)}>
                  Finalizar chamado
                </DeleteButton>
                <DeleteButton
                  onClick={() => setIsEditModalOpen(!isEditModalOpen)}
                >
                  Atualizar estado
                </DeleteButton>{" "}
              </>
            )}
          </Actions>
        </BodyInfo>
      </Container>
    </>
  );
}

export default EventDash;
