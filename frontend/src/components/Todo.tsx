import { useEffect, useState } from "react";
import axios from "axios";

export const Todo = () => {
  interface Todo {
    id?: number;
    tittle: string;
    completed?: boolean;
  }

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get<Todo[]>("http:localhost:3000/todos");
      console.log(response);
    }

    fetchData();
  }, []);

  const [todo] = useState<string>("");

  return (
    <div>
      <div>todo</div>
      <div>{todo}</div>
    </div>
  );
};
