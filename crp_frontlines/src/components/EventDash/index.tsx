import { useState } from "react";
import {
  Container,
  HeaderInfo,
  EventTitle,
  EventAction,
  PointerField,
  SectorButton,
  PointerContainer,
  CriticButton,
  AreaButton,
  PrioritySelect,
  DescriptionField,
  BodyInfo,
  EventCategory,
  EventType,
  EventActive,
  PointerPill,
  DeleteButton,
  CloseIssueDesc
} from "./styles";
import expand from "../assets/expand.svg";
import headset from "../assets/headset.svg";
import { EventDashProps, dateOptions, CloseFormInputs } from "./types";
import { message, Modal } from "antd";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { CloseIssueSelect } from "../EventHub/styles";
import axios from "axios";

function EventDash({ data }: EventDashProps) {
  const { register, getValues, handleSubmit } = useForm<CloseFormInputs>();
  const {
    id,
    active,
    created_at,
    eventTitle,
    eventSector,
    eventArea,
    eventCriticality,
    eventDescription,
    eventPriority,
  } = data;
  let { eventCriticalityColor } = data

  const created = new Date(created_at)
  const [open, setOpen] = useState<boolean>(true);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  const now = new Date()
  const start = Math.floor(created.getTime() / (3600 * 24 * 1000));
  const end = Math.floor(now.getTime() / (3600 * 24 * 1000));
  const diff = Math.abs(start - end);

  switch (eventCriticality) {
    case 1:
      eventCriticalityColor = "var(--primary-blue)"
      break;
    case 2:
      eventCriticalityColor = "var(--primary-yellow)"
      break;
    case 3:
      eventCriticalityColor = "var(--primary-red)"
      break;
    default:
      break;
  }

  function FinishIssue() {

    try {

      const values = getValues()
      const putData = { ...data, eventCloseDesc: values.closeDesc, eventFinalStatus: values.closeStatus };

      console.log(putData);

      /* axios.put(`http://172.16.239.177:8000/api/v1/chamados/${id}`)
      message.info('Chamado finalizado!') */

      setIsModalOpen(!isModalOpen)
    } catch (error) {
      console.log(error);
      console.log(id);

    }
    finally {
      setTimeout(() => {
        navigate('/newissue')
      }, 3000);
    }
  }

  return (
    <>
      <Modal okText="Finalizar chamado"
        okType="danger"
        cancelText="Voltar"
        open={isModalOpen}
        title="Tellarus Support - CRP"
        onCancel={() => setIsModalOpen(!isModalOpen)}
        onOk={() => handleSubmit(FinishIssue)()}
      >

        <label>Estado de encerramento</label>
        <CloseIssueSelect {...register("closeStatus")} >
          <option selected>...</option>
          <option value={'true'}>Atendido</option>
          <option value={'false'}>Não atendido</option>
        </CloseIssueSelect>

        <label>Motivação</label>
        <CloseIssueDesc
          {...register("closeDesc")} />

      </Modal>
      <Container key={data.id}>
        <HeaderInfo>
          <EventCategory $levelcolor={eventCriticalityColor} />
          <EventType>
            <img src={headset} />
          </EventType>
          <EventTitle>
            <span>{eventTitle}</span>
            <p>{created.toLocaleDateString('pt-BR', dateOptions)}</p>
            <p>Idade do chamado: {diff} dias</p>
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
                <SectorButton>{eventSector}</SectorButton>
              </PointerPill>
            </PointerContainer>
            {/* ------------------Area--------------------------*/}
            <PointerContainer>
              <PointerPill>
                <label>Area Afetada</label>
                <AreaButton>{eventArea}</AreaButton>
              </PointerPill>
            </PointerContainer>
            {/* ------------------Criticality------------------ */}
            <PointerContainer>
              <PointerPill>
                <label>Criticalidade</label>
                <CriticButton $levelcolor={eventCriticalityColor}>
                  {eventCriticality}
                </CriticButton>
              </PointerPill>
            </PointerContainer>
            {/* ------------------Priority--------------------- */}
            <PointerContainer>
              <PointerPill>
                <label>Prioridade</label>
                <PrioritySelect
                  $levelcolor={eventCriticalityColor}
                >
                  {eventPriority}
                </PrioritySelect>
              </PointerPill>
            </PointerContainer>
          </PointerField>
          <DescriptionField defaultValue={eventDescription} disabled />
          <DeleteButton onClick={() => setIsModalOpen(!isModalOpen)} >Finalizar chamado</DeleteButton>
        </BodyInfo>
      </Container>
    </>
  );
}

export default EventDash;
