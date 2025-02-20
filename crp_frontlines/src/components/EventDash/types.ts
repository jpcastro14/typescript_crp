export interface EventDashProps {
    data: {
        id: number;
        active: boolean;
        created_at: string;
        eventType: string;
        eventTitle: string;
        eventSector: string;
        eventArea: string;
        eventCriticality: number;
        eventCriticalityColor: string | undefined;
        eventPriority: string;
        eventDescription: string;
    }
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