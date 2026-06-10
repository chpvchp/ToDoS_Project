import { useState } from "react";
import Button from "../components/Button";
import CardInput from "./CardInput";

type CardTodoProps = {
  title: string
  onDel: () => void;
  onSave: (newTitle: string) => void;
}

export default function CardTodo({ title, onDel, onSave }: CardTodoProps) {
  const [editing, setEditting] = useState(false)
  const [newTitle, setNewTitle] = useState("")

  return (
    <>
      {editing ? (
        <CardInput
          label="Save"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onClick={() => {
            onSave(newTitle);
            setNewTitle("");
            setEditting(false);
          }}
        />
      ) : (

      <div className="p-2 bg-white rounded-md border border-gray-400 flex flex-col gap-2 justify-center items-center">
        <p className="p-2 border border-gray-400 rounded-md">{title}</p>
        <Button 
          label="Edit"
          onClick={() => setEditting(true)}
        />
        <Button 
          label="Delete"
          onClick={onDel}
        />
      </div>
      )}
    </>
  )
}