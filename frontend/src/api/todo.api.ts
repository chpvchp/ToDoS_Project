import axios from "axios"

const BASE_URL = "/api";

export const getTodos = async () => {
  const res = await axios.get(`${BASE_URL}/todos`);
  return res.data;
};

export const postTodo = async (title: string) => {
  const res = await axios.post(`${BASE_URL}/todos`, { title: title });
  return res.data
}

export const deleteTodo = async (id: number) => {
  await axios.delete(`${BASE_URL}/todos/${id}`);
};

export const putTodo = async (id: number, title: string) => {
  const res = await axios.put(`${BASE_URL}/todos/${id}`, { title: title});
  return res.data
}