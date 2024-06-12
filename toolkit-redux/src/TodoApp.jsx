import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis";

export const TodoApp = () => {
  //const {isLoading, data: todos=[]}= useGetTodosQuery();
  //console.log({isLoading, todos})

  const [todoId, setTodoId] = useState(1);

  const { data: todo = 1, isLoading } = useGetTodoQuery(todoId);
  console.log(todo);

  const nextTodo = () => {
    setTodoId(todoId + 1);
  };

  const prevTodo = () => {
    if (todoId === 1) return;
    setTodoId(todoId - 1);
  };

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>isLoading: {JSON.stringify(isLoading)}</h4>
      <h4>data</h4>
      <pre>{JSON.stringify(todo)}</pre>

      <button onClick={prevTodo}>Prev Todo</button>
      <button onClick={nextTodo}>Next Todo</button>

      {/* <ul>
        {
          todos?.map((todo) => (
            <li key={todo.id}>
              <strong>{todo.completed ? 'Done ': 'Pending '}</strong>
              {todo.title}
              </li>
          ))
        }
      </ul> */}
    </>
  );
};
