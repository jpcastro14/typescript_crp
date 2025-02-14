import { ReactNode } from "react"

export type TopInfoProps = {
    title?: string
    children?: JSX.Element[] | HTMLElement[] | JSX.Element
    type: string;
}