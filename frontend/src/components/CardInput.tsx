import Button from "./Button"

type CardInputProps = {
  label: string;
  value: string;
  onClick: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CardInput({ label, value, onClick, onChange } : CardInputProps) {
  return (
    <div className="p-2 bg-white rounded-md border border-gray-400 flex gap-2">
      <input
        className="p-2 border border-gray-300 rounded-md transition duration-200 hover:border-gray-400"
        type="text"
        value={value}
        placeholder="Input Title Todo..."
        onChange={onChange}
      />
      <Button
        label={label}
        onClick={onClick}
      />
    </div>
  )
}