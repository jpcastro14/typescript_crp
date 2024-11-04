import { useEffect } from "react";

function TestApi() {
  useEffect(() => {
    fetch("https://api.sympla.com.br/public/v4/events?id=1", {
      method: "GET",
      headers: {
        S_TOKEN:
          "68cb6e3010dcc3efd815c5547971a281c5c1cf91f8b94463c9e4faaf4523b5ae",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  });

  return <p>Leomar</p>;
}

export default TestApi;
