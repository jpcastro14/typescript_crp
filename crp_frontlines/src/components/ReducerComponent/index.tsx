import React, { ReactNode, useReducer } from "react";

/* type State = {
  counter: number;
  age?: number;
  name?: string;
}; */

export type EventDashProps = {
  id?: number;
  created_at?: any;
  active?: boolean;
  title?: string;
  type?: string;
  sector?: string;
  area?: string;
  criticality?: number | string;
  criticalityColor?: string;
  priority?: number;
  description?: string;
  eventMoment?: string | ReactNode;
  eventTime?: Date | undefined;
  closeDesc?: string | undefined;
  finalStatus?: boolean;
};

type Action = { type: "increment" } | { type: "decrement" };

function reducer(state: EventDashProps, action: Action) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        area: "searp",
      };
    case "decrement":
      return {
        ...state,
      };
    default:
      return state;
  }
}

function ReducerComponent() {
  const [state, dispatch] = useReducer(reducer, {} as EventDashProps);

  function increment() {
    dispatch({ type: "increment" });
  }
  function decrement() {
    dispatch({ type: "decrement" });
  }

  return (
    <>
      <div>ReducerComponent</div>
      <p>Os valores são:{state.area}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </>
  );
}

export default ReducerComponent;
