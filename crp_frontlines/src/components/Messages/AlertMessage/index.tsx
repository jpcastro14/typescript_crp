import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { AlertBody } from "./styles";

type MessageProps = {
  issue: string | undefined;
  issueCriticality: string | undefined;
};

function AlertMessage({ issue, issueCriticality }: MessageProps) {
  const [variant, setVariant] = useState<string>("primary");
  const [open, setOpen] = useState<boolean>(true);

  useEffect(() => {
    setOpen(!open);
  }, [issueCriticality]);

  return (
    <Alert
      onClose={() => setOpen(!open)}
      show={open}
      dismissible
      key={variant}
      variant={variant}
    >
      <AlertBody>
        <p>
          <strong>
            <u>{issue}</u>
          </strong>{" "}
          alterado para criticalidade <strong>{issueCriticality}</strong>
        </p>
      </AlertBody>
    </Alert>
  );
}

export default AlertMessage;
