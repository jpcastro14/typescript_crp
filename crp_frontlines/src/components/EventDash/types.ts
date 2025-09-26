import { ReactNode } from "react";

export type EventDashProps = {
    id?: number;
    created_at?: string;
    active?: boolean;
    title?: string;
    type?: string;
    eventSector?: string;
    eventArea?: string;
    eventCriticality?: number | string;
    eventCriticalityColor?: string;
    eventPriority?: number;
    eventDescription?: string;
    eventMoment?: string | ReactNode;
    eventTime?: Date | undefined;
    eventCloseDesc?: string | undefined;
    eventFinalStatus?: boolean;
};

export const dateOptions: any = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}

export type IssueDataType = {
    eventType: string;
    filtered: string;
}

export type CloseFormInputs = {
    closeDesc: string;
    closeStatus: number;
}

export const baseURL = `http://172.28.248.82:8000/api/v1/tickets/`;
export const baseUpdateURL = `http://172.28.248.82:8000/api/v1/tickets/update/`;