import { useLocation, useNavigate } from 'react-router-dom'

const About = () => {
  let location = useLocation()
  let navigate = useNavigate()
  return (
    <>
      <h1>About</h1>
      <p>{location?.state?.name} {location?.state?.age}</p>
      <button onClick={() => navigate(-2)}>Go 2 pages backward</button>
    </>
  )
}

export default About