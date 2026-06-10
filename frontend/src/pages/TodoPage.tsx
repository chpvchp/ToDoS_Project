import { useState } from "react";
import CardInput from "../components/CardInput";
import CardTodo from "../components/CardTodo";
import { useTodo } from "../hook/useTodo";

export default function TodoPage() {
  const [title, setTitle] = useState("");
  const {
    todos,
    createTodo,
    removeTodo,
    editTodo,
  } = useTodo();

  return (
    <main className="m-2 pt-4 rounded-lg border border-gray-200 bg-gray-50 flex-1 flex flex-col gap-2 items-center">
      <CardInput
        label="Add"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onClick={() => {
          createTodo(title);
          setTitle("");
        }}
      />

      <p className="mt-2 italic">--- List Todo ---</p>

      <div className="flex gap-2">
        {todos.map((todo) => (
          <CardTodo
            key={todo.id}
            title={todo.title}
            onDel={() => removeTodo(todo.id)}
            onSave={(newTitle) => editTodo(todo.id, newTitle)}
          />
        ))}

      </div>

    </main>
  )
}