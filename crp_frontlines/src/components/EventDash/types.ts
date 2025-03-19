import { ReactNode } from "react";

export type EventDashProps = {
    id?: number;
    created_at?: string;
    active?: boolean;
    eventTitle?: string;
    eventType?: string;
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