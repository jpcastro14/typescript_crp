import { ReactNode } from "react";

export type mainIssue = {
    id: number;
    created_at: string;
    active?: boolean;
    title: string;
    type: string;
    sector: number;
    area: string;
    criticality?: 1 | 2 | 3;
    priority?: 1 | 2 | 3;
    description: string;
    eventMoment: string | ReactNode;
    eventTime: Date | undefined;
    closeDesc: string | undefined;
    eventFinalStatus: boolean;
}

export type messageProps = {
    trigger: boolean;
    alertText?: string;
    variant?: string;
}

export interface ISector {
    id: number
    name: string
    code: number
    description: string
}