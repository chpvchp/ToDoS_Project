import CardInput from "../components/CardInput";

export default function TodoPage() {
  return (
    <main className="m-2 pt-4 rounded-lg border border-gray-200 bg-gray-50 flex-1 flex flex-col gap-2 items-center">
      <CardInput
        label="Add"
      />

      <p className="mt-2 italic">--- List Todo ---</p>

      <div>

      </div>

    </main>
  )
}