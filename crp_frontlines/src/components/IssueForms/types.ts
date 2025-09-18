import { ReactNode } from "react";

export type mainIssue = {
    id?: number;
    created_at?: string;
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
    eventFinalStatus?: boolean;
}


export type messageProps = {
    trigger: boolean;
    alertText?: string;
    variant?: string;
}