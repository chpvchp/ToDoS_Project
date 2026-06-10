import Button from "../components/Button";

type CardTodoProps = {
  title: string
}

export default function CardTodo({ title }: CardTodoProps) {
  return (
    <div className="p-2 bg-white rounded-md border border-gray-400 flex flex-col gap-2 justify-center items-center">
      <p className="p-2 border border-gray-400 rounded-md">{title}</p>
      <Button label="Edit" />
      <Button label="Delete" />
    </div>
  )
}