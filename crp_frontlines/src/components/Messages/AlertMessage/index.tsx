import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { AlertBody } from "./styles";

type MessageProps = {
  issue?: string | undefined;
  issueCriticality?: string | undefined;
  alertText: string | undefined;
  trigger?: boolean
};

function AlertMessage({ issue, issueCriticality, alertText, trigger }: MessageProps) {
  const [variant] = useState<string>("warning");
  const [open, setOpen] = useState(trigger)


  useEffect(() => {
    //setOpen(!open);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [issueCriticality]);

  return (
    <Alert
      //onClose={() => setOpen(!open)}
      onClose={() => setOpen(!trigger)}
      show={open}
      dismissible
      key={variant}
      variant={variant}
    >
      <AlertBody>
        <p>
          <strong>{issue ? issue : ''}</strong> {" "}
          <strong>{issueCriticality ? issueCriticality : ""}</strong>
          <strong>{alertText ? alertText : ""}</strong>
        </p>
      </AlertBody>
    </Alert>
  );
}

export default AlertMessage;
