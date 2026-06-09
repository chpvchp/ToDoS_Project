import Button from "./Button"

type CardInputProps = {
  label: string
}

export default function CardInput({ label } : CardInputProps) {
  return (
    <div className="p-2 bg-white rounded-md border border-gray-400 flex gap-2">
      <input
        className="p-2 border border-gray-300 rounded-md transition duration-200 hover:border-gray-400"
        type="text"
        placeholder="Input Title Todo..."
      />
      <Button
        label={label}
      />
    </div>
  )
}