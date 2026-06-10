import { useEffect, useState } from "react";
import { deleteTodo, getTodos, postTodo, putTodo } from "../api/todo.api"

type ToDoS = {
  id: number;
  title: string
}

export const useTodo = () => {
  const [todos, setTodos] = useState<ToDoS[]>([])

  // Get
  const getListTodo = async () => {
    const data = await getTodos();
    setTodos(data);
  };

  // Post
  const createTodo = async (title: string) => {
    const data = await postTodo(title);
    setTodos((prev) => [...prev, data])
  };

  // Delete
  const removeTodo = async (id: number) => {
    await deleteTodo(id);
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // Put
  const editTodo = async (id: number, title: string) => {
    const data = await putTodo(id, title);
    setTodos((prev) => prev.map((todo) => todo.id === id ? data : todo))
  }

  useEffect(() => {
    getListTodo();
  });

  return {
    todos,
    getListTodo,
    createTodo,
    removeTodo,
    editTodo,
    refetch: getListTodo  
  }
};