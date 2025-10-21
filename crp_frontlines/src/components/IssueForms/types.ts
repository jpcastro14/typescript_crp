import { ReactNode } from "react";


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