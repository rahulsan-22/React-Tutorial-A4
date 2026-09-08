import { useState } from "react"
const User = () => {
  let [info, setInfo] = useState({
    name: "Monty",
    age: 28
  })
  let { name, age } = info
  let handleAge = () => {
    setInfo({...info,age:30})
  }
  return (
    <div>
      <h1>Name : {name}</h1>
      <h1>Age : {age}</h1>
      <button onClick={handleAge}>Update Age</button>
      <hr />
    </div>
  )
}

export default User