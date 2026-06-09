type ButtonProps = {
  label: string
}

export default function Button({ label }: ButtonProps) {
  return (
    <button
      className="p-2 bg-blue-600 text-white rounded-md font-bold transition duration-200 hover:bg-blue-800"
    >
      {label}
    </button>
  )
}