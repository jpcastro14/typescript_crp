import { createContext, ReactNode, useEffect, useState } from "react";
import { IssueApi } from "../../services/api";

interface IssueProviderProps {
  children: ReactNode;
}

//o que será enviado via context
interface IssueContextData {
  issue: IssueProps[];
  sector: SectorProps[];
  createIssue: (issue: IssueProps) => void;
}

interface SectorProps {
  id: number;
  name: string;
  code: string;
  description: string;
}

// tipagem do que será enviado
export interface IssueProps {
  id?: number;
  created_at?: string;
  active?: boolean;
  title?: string;
  type?: string;
  sector?: string;
  area?: string;
  criticality?: number | string;
  priority?: number;
  description?: string;
  eventCloseDesc?: string | undefined;
  eventFinalStatus?: boolean;
}

export interface CreateIssueProps {
  issue: IssueProps;
}

export const IssueContext = createContext({} as IssueContextData);

function IssueProvider({ children }: IssueProviderProps) {
  const [issue, setIssue] = useState<IssueProps[]>([]);
  const [sector, setSector] = useState<SectorProps[]>([]);

  useEffect(() => {
    async function getData() {
      const response = await Promise.all([
        IssueApi.get("/tickets"),
        IssueApi.get("/sector"),
      ]);
      setIssue(response[0].data);
      setSector(response[1].data);
    }
    getData();
  }, []);

  function createIssue(issue: IssueProps) {
    IssueApi.post("/tickets/", issue).then((response) => console.log(response));
  }

  return (
    <IssueContext.Provider value={{ issue, sector, createIssue }}>
      {children}
    </IssueContext.Provider>
  );
}

export default IssueProvider;
