import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/todo">Todo</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  )
}