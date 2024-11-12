import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { AlertBody } from "./styles";

type MessageProps = {
  issue: string | undefined;
  issueCriticality: string | undefined;
};

function AlertMessage({ issue, issueCriticality }: MessageProps) {
  const [variant] = useState<string>("warning");
  const [open, setOpen] = useState<boolean>(true);

  useEffect(() => {
    setOpen(!open);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <strong>{issue}</strong> alterado para criticalidade{" "}
          <strong>{issueCriticality}</strong>
        </p>
      </AlertBody>
    </Alert>
  );
}

export default AlertMessage;
