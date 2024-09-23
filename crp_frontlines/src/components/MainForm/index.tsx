import { useRef, FunctionComponent } from "react";

interface TextFieldProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  props: {
    title: string;
    age: number;
  };
}
const TextField: FunctionComponent<TextFieldProps> = ({ onChange, props }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <label>Nome</label>
      <input
        ref={inputRef}
        onChange={onChange}
        defaultValue={props.title}
        title="title"
      />
      <label>Idade</label>
      <input
        ref={inputRef}
        onChange={onChange}
        defaultValue={props.age}
        title="age"
      />
    </div>
  );
};

export default TextField;
