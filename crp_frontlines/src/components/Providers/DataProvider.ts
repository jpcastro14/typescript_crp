import { createContext } from "react";

type OpenType = false | true

export const DashContext = createContext<OpenType | undefined>(undefined);
