import { useState } from "react"

const Salary = () => {
  let [salary, setSalary] = useState(10000)
  let handleSalary = () => {
    setSalary((prevState) => {
      console.log(prevState)
      return prevState+5000
    })
  }
  return (
    <div>
      <h1>Salary : {salary}</h1>
      <button onClick={handleSalary}>Increment Salary</button>
    </div>
  )
}
export default Salary