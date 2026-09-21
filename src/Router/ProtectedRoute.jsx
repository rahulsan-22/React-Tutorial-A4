import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  let loginStatus = localStorage.getItem("isLoggedIn")
  if (loginStatus) {
    return children
  }
  return <Navigate to="/login"/>
}

export default ProtectedRoute