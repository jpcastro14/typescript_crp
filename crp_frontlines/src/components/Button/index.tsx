import { FunctionComponent } from "react";
import { Container } from "./styles";

interface ButtonProps {
  text: "dark" | "light";
  onClick: () => void;
}

const Button: FunctionComponent<ButtonProps> = ({ text }) => {
  return <Container>{text}</Container>;
};

export default Button;
