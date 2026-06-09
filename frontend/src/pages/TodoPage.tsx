export default function TodoPage() {
  return (
    <main className="m-2 pt-4 rounded-lg border border-gray-200 bg-gray-50 flex-1 flex flex-col gap-2 items-center">
      <div className="p-2 bg-white rounded-md border border-gray-400 flex gap-2">
        <input
          className="p-2 border border-gray-300 rounded-md transition duration-200 hover:border-gray-400"
          type="text"
          placeholder="Input Title Todo..."
        />
        <button
          className="p-2 bg-blue-600 text-white rounded-md font-bold transition duration-200 hover:bg-blue-800"
        >
          Add
        </button>
      </div>

      <p className="mt-2 italic">--- List Todo ---</p>

      <div>
        
      </div>

    </main>
  )
}