import { useEffect, useState } from 'react'
import Unmount from './Unmount'

const Effect = () => {
  let [age, setAge] = useState(22)
  let [salary, setSalary] = useState(10000)

  //!without dependency - componentDidUpdate()
  // useEffect(() => {
  //   console.log("useEffect Running...")
  // })

  //!with empty dependency - componentDidMount()
  // useEffect(() => {
  //   console.log("useEffect Running...")
  // },[])

  //!with dependency - runs whenever one of its dependencies changes
  // useEffect(() => {
  //   console.log("useEffect Running...")
  // },[age])

  let handleAge = () => {
    setAge(age + 1)
  }
  let handleSalary = () => {
    setSalary(salary + 5000)
  }
  return (
    <div>
      <h1>Age : {age}</h1>
      <button onClick={handleAge}>Increment Age</button>
      <h1>Salary : {salary}</h1>
      <button onClick={handleSalary}>Increment Salary</button>
      {salary <= 25000 && <Unmount />}
    </div>
  )
}

export default Effect