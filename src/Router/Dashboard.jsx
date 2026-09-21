import { NavLink, Outlet, useNavigate } from 'react-router-dom'

const Dashboard = () => {
  let navigate = useNavigate()
  let handleNavigate = () => {
    localStorage.removeItem("isLoggedIn")
    navigate("/login")
  }
  return (
    <div>
      <NavLink to="/dashboard/jobportal">Job Portal</NavLink>
      <NavLink to="/dashboard/applications">Applications</NavLink>
      <NavLink to="/dashboard/rejectedoffers">Rejected Offers</NavLink>
      <h1>Heading</h1>
      <p>Lorem ipsum dolor sit, amet </p>
      <img src="favicon.svg" alt="favicon" />
      <button onClick={handleNavigate}>Logout</button>
      <Outlet/>
    </div>
  )
}

export default Dashboard