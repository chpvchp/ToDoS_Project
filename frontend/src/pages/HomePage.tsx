export default function HomePage() {
  return (
    <main className="m-2 rounded-lg border border-gray-200 bg-gray-50 flex-1 flex flex-col gap-2 justify-center items-center">
      <p className="font-bold text-2xl">Welcome to ToDoS Project CRUD (Create, Read, Update, and Delete)</p>
      
      <p className="italic">with</p>

      <h2 className="font-bold text-xl">Frontend</h2>

      <div>
        <a className="flex gap-2" href="https://skillicons.dev">
          <img src="https://skillicons.dev/icons?i=react" alt="React" />
          <img src="https://skillicons.dev/icons?i=ts" alt="TypeScript" />
          <img src="https://skillicons.dev/icons?i=tailwindcss" alt="Tailwind CSS" />
          <img src="https://skillicons.dev/icons?i=vite" alt="Vite" />
          <img src="https://skillicons.dev/icons?i=npm" alt="NPM" />
        </a>
      </div>

      <h2 className="pt-2 font-bold text-xl">Backend</h2>

      <div>
        <a className="flex gap-2" href="https://skillicons.dev">
          <img src="https://skillicons.dev/icons?i=python" alt="Python" />
          <img src="https://skillicons.dev/icons?i=fastapi" alt="FastAPI" />
          <img src="https://skillicons.dev/icons?i=postgresql" alt="PostgreSQL" />
        </a>
      </div>

      <h2 className="pt-2 font-bold text-xl">Developments Tool and OS</h2>

      <div>
        <a className="flex gap-2" href="https://skillicons.dev">
          <img src="https://skillicons.dev/icons?i=vscode" alt="VSC" />
          <img src="https://skillicons.dev/icons?i=docker" alt="Docker" />
          <img src="https://skillicons.dev/icons?i=git" alt="Git" />
          <img src="https://skillicons.dev/icons?i=github" alt="GitHub" />
          <img src="https://skillicons.dev/icons?i=windows" alt="Windows" />
          <img src="https://skillicons.dev/icons?i=ubuntu" alt="Ubuntu" />
          <img src="https://skillicons.dev/icons?i=linux" alt="Linux" />
        </a>
      </div>

    </main>
  )
}