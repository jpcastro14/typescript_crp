import { useEffect } from "react";
import { Alert } from "react-bootstrap";
import { AlertBody } from "./styles";

type MessageProps = {
  issue?: string | undefined;
  issueCriticality?: string | undefined;
  alertText?: string | undefined;
  trigger?: boolean
  onClose?: React.ReactEventHandler;
  variant?: string;
};

function AlertMessage({ issue, issueCriticality, alertText, trigger, onClose, variant }: MessageProps) {
  //const [variant] = useState<string>("warning");
  //const [setTrigger] = useState<boolean | React.SetStateAction<boolean>>(trigger)


  useEffect(() => {
    //setOpen(!open);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [issueCriticality]);

  return (
    <Alert
      onClose={onClose}
      show={trigger}
      dismissible
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
