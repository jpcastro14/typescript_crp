import { useReducer, useState } from "react";

type IssueProps = {
  issueTitle: string;
  issueType: string;
};

type Action = { type: "add"; text: string; issueType: string };

const initialState: IssueProps[] = [];

function reducer(state: IssueProps[], action: Action) {
  switch (action.type) {
    case "add":
      console.log(state);
      return [
        ...state,
        {
          issueTitle: action.text,
          issueType: "Teste de tipo 01",
        },
      ];
  }
}

function CreateEvent() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function addIssue() {
    dispatch({
      type: "add",
      text: "Teste de issue 01",
      issueType: "Teste de tipo de issue 01",
    });
  }

  return <p>Create Event</p>;
  <button onClick={addIssue}>Criar teste</button>;
}

export default CreateEvent;
