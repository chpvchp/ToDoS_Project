import { NavLink } from "react-router-dom";

export default function Nav() {
  const classActive = ({ isActive }: {isActive : boolean}) => 
    `p-2 rounded-md ${
    isActive ? "bg-blue-600 text-white font-bold" : "bg-blue-200 text-black font-bold"
  }`;


  return (
    <nav className="p-2 flex gap-2 justify-center">
      <NavLink className={classActive} to="/">Home</NavLink>
      <NavLink className={classActive} to="/todo">Todo</NavLink>
      <NavLink className={classActive} to="/about">About</NavLink>
    </nav>
  )
}