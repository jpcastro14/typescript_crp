import { ReactNode } from "react";

export type mainIssue = {
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
}


export type messageProps = {
    trigger: boolean;
    alertText?: string;
    variant?: string;
}