import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()
  return (
    <>
      <h1>Home</h1>
      <button onClick={()=>navigate("/about",{state:{name:"Rahul",age:26}})}>Go to about page</button>
    </>
  )
}

export default Home