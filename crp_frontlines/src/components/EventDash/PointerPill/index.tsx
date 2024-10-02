import { FunctionComponent } from "react";
import { PillContainer } from "./styles";

type PointerPillProps = {
  text: string;
};

const PointerPill: FunctionComponent<PointerPillProps> = ({ text }) => {
  return <PillContainer>{text}</PillContainer>;
};

export default PointerPill;
