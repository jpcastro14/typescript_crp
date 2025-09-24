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
} from "./styles";
import expand from "../assets/expand.svg";
import headset from "../assets/headset.svg";
import { dateOptions, CloseFormInputs } from "./types";
import { message, Modal } from "antd";
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

/* type State = {
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

type Action = { type: "priority1" } | { type: "priority2" };

function Reducer(state: State, action: Action) {
  switch (action.type) {
    case "priority1":
      return { ...state, priority: 1 };
    case "priority2":
      return { ...state, priority: 2 };
    default:
      break;
  }
} */

function EventDash({ ticket }: EventDashProps) {
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

  const [open, setOpen] = useState<boolean>(true);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const created = new Date(created_at);
  const now = new Date();
  const start = Math.floor(created.getTime() / (3600 * 24 * 1000));
  const end = Math.floor(now.getTime() / (3600 * 24 * 1000));
  const diff = Math.abs(start - end);

  switch (criticality) {
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
    const baseURL = `http://172.28.248.82:8000/api/v1/tickets/${id}`;

    try {
      fetch(baseURL, {
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
      /* setTimeout(() => {
        navigate("/newissue");
      }, 3000); */
    }
  }

  return (
    <>
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

      <Container key={ticket.id}>
        <HeaderInfo>
          <EventCategory $levelcolor={criticalityColor} />
          <EventType>
            <img src={headset} />
          </EventType>
          <EventTitle onClick={() => setOpen(!open)}>
            <span>{title}</span>
            <p>{created.toLocaleDateString("pt-BR", dateOptions)}</p>
            <p>
              Idade do chamado: {diff} {diff > 1 ? "dias" : "dia"}
            </p>
          </EventTitle>
          <EventAction>
            <button onClick={() => setOpen(!open)}>
              <img src={expand} />
            </button>
          </EventAction>
          <EventActive $activeIssue={active} />
        </HeaderInfo>
        <BodyInfo open={open}>
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
          <Actions>
            {active && (
              <>
                <DeleteButton onClick={() => setIsModalOpen(!isModalOpen)}>
                  Finalizar chamado
                </DeleteButton>
                <DeleteButton onClick={() => setIsModalOpen(!isModalOpen)}>
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
