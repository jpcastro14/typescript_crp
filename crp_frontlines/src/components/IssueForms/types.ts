import { ReactNode } from "react";

export interface mainIssue {
    id?: number;
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
    eventCloseDesc?: string | undefined
}

export type messageProps = {
    trigger: boolean;
    alertText?: string;
    variant?: string;
}