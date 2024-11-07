import { createContext } from "react";

type User = {
    userName: string
    text?: string
}
export const DashContext = createContext<User | undefined>(undefined);
