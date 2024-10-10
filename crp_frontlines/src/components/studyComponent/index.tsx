type Props = {
  data: {
    name: string;
    surname: string;
  }[];
};

function StudyComponent({ data }: Props) {
  return (
    <>
      {data.map((el) => (
        <p>{el.name}</p>
      ))}
    </>
  );
}

export default StudyComponent;
