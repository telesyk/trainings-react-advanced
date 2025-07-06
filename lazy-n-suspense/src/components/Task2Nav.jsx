import { NavLink } from 'react-router'

export default function Task2Nav() {
  return (
    <nav className="menu menu-horizontal bg-base-200 rounded-box gap-3">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  )
}
