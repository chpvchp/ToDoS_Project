type ButtonProps = {
  label: string;
  onClick: () => void;
}

export default function Button({ label, onClick }: ButtonProps) {
  return (
    <button
      className="p-2 bg-blue-600 text-white rounded-md font-bold transition duration-200 hover:bg-blue-800"
      onClick={onClick}
    >
      {label}
    </button>
  )
}