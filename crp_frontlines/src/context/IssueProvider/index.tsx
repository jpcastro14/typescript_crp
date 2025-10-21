import { createContext, ReactNode, useEffect, useState } from "react";
import { IssueApi } from "../../services/api";

interface IssueProviderProps {
  children: ReactNode;
}

//o que será enviado via context
interface IssueContextData {
  issue: IssueProps[];
  sector: SectorProps[];
  createIssue: (issue: CreateIssueProps) => void;
  updateIssue: (issue: testType) => void;
}

type testType = Partial<IssueProps>;

// tipagem das props de setor
interface SectorProps {
  id: number;
  name: string;
  code: string;
  description: string;
}

// tipagem do que será enviado
export interface IssueProps {
  id: number;
  created_at: string;
  active: boolean;
  title: string;
  type: string;
  sector: string;
  area: string;
  criticality: number | string;
  priority: number;
  description: string;
  eventCloseDesc: string | undefined;
  eventFinalStatus: boolean;
}

// tipagem dos argumentos recebidos pela função CreateIssueProps
export interface CreateIssueProps {
  title: string;
  type: string;
  sector: string;
  area: string;
  criticality: number;
  priority: number;
  description: string;
}

export const IssueContext = createContext({} as IssueContextData);

function IssueProvider({ children }: IssueProviderProps) {
  const [issue, setIssue] = useState<IssueProps[]>([]);
  const [sector, setSector] = useState<SectorProps[]>([]);

  useEffect(() => {
    async function getData() {
      await Promise.all([IssueApi.get("/tickets"), IssueApi.get(`/sector`)])
        .then((values) => [setIssue(values[0].data), setSector(values[1].data)])
        .catch((error) => console.log(error.code))
        .finally(() => console.log(issue));
    }
    getData();
  }, []);

  function createIssue(issue: CreateIssueProps) {
    IssueApi.post("/tickets/", issue).then((response) => console.log(response));
  }

  function updateIssue(issue: testType) {
    IssueApi.put(`/tickets/update/${issue.id}`, issue)
      .then((response) => {
        response.status == 200 && console.log("Deu certo essa solicitação");
      })
      .then(() => window.location.reload());
  }

  return (
    <IssueContext.Provider value={{ issue, sector, createIssue, updateIssue }}>
      {children}
    </IssueContext.Provider>
  );
}

export default IssueProvider;
