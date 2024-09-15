import { useEffect, useState } from "react";
import axios from "axios";

interface Todo {
  id?: number;
  tittle: string;
  completed?: boolean;
}

export const Todo: React.FC = () => {
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:3000/todo");
      console.log(response.data);
      setTodo(response.data);
    }

    fetchData();
  }, []);

  const [todo, setTodo] = useState<Todo[]>([]);

  return (
    <div>
      <div>todo</div>
      <div>
        {todo.map((t) => (
          <p key={t.id}>{t.tittle}</p>
        ))}
      </div>
    </div>
  );
};
