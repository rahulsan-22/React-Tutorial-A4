import { useState } from "react"

const Rakhi = () => {
  let [rakhi, setRakhi] = useState(["Spiderman", "Silver", "Light", "ChotaBheem"])
  let handleRakhi = () => {
    setRakhi([...rakhi,"Doraemon"])
  }
  return (
    <div>
      <h1>Types of Rakhi</h1>
      <ol>
        {
          rakhi.map((item,index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ol>
      <button onClick={handleRakhi}>Add Rakhi</button>
    </div>
  )
}

export default Rakhi