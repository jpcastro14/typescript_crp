import { useRef, FunctionComponent } from "react";

const TextField: FunctionComponent<TextFieldProps> = ({ onChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <input ref={inputRef} onChange={onChange} />
      <ul></ul>
    </div>
  );
};

export default TextField;
