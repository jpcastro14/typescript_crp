import { useRef, FunctionComponent } from "react";

interface TextFieldProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  props: {
    title: string;
    age: number;
  };
  configProps:{
    title:string;
    age:string;
  }
}
const TextField: FunctionComponent<TextFieldProps> = ({ onChange, configProps, props }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <label>Nome</label>
      <input
        ref={inputRef}
        onChange={onChange}
        defaultValue={props.title}
        title={configProps.title}
      />
      <label>Idade</label>
      <input
        ref={inputRef}
        onChange={onChange}
        defaultValue={props.age}
        title={configProps.age}
      />
    </div>
  );
};

export default TextField;
