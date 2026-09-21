import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/student/1/Monty/monty@gmail.com">Monty</NavLink>
      <NavLink to="/student/2/Pavan/pavan@gmail.com">Pavan</NavLink>
      <NavLink to="/student/3/Yasin/yasin@gmail.com">Yasin</NavLink>
      <br />
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
    </nav>
  )
}

export default Navbar