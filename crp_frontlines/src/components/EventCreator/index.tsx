import { useReducer, useRef, useState } from "react";

type IssueProps = {
  issueTitle: string;
  issueType: number;
};
type Action = { type: "add"; text: string; issueType: number };

const initialState: IssueProps[] = [];

function reducer(state: IssueProps[], action: Action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          issueTitle: action.text,
          issueType: action.issueType,
        },
      ];
  }
}

function CreateEvent() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const titleRef = useRef<HTMLInputElement | null>(null);
  const [typeState, setTypeState] = useState<IssueProps>({
    issueTitle: "",
    issueType: 0,
  });

  function addIssue() {
    dispatch({
      type: "add",
      text: typeState.issueTitle,
      issueType: Date.now(),
    });
  }

  function stateHandle(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setTypeState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <>
      <input
        type="text"
        value={typeState.issueTitle}
        name="issueTitle"
        onChange={stateHandle}
        ref={titleRef}
      />
      <button onClick={addIssue}>Criar Issue</button>
      {state.map((item) => (
        <p key={item.issueType}>{item.issueTitle}</p>
      ))}
    </>
  );
}

export default CreateEvent;
