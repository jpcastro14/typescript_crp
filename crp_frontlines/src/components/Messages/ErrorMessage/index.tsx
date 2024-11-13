import { ErrMessage } from "./styles";

type ErrMessageProps = {
  mainmessage?: string;
  errcode?: number;
};

function ErrorMessage({ mainmessage, errcode }: ErrMessageProps) {
  return (
    <ErrMessage>
      <p>{mainmessage}</p>
      <span>{errcode}</span>
    </ErrMessage>
  );
}

export default ErrorMessage;
