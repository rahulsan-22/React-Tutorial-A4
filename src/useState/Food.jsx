import { useState } from "react"

const Food = () => {
  let [food, setFood] = useState("")

  let handleChickenBiryani = () => {
    setFood("Chicken Biryani")
  }
  let handleMuttonBiryani = () => {
    setFood("Mutton Biryani")
  }
  let handleFishBiryani = () => {
    setFood("Fish Biryani")
  }
  
  return (
    <div>
      <h1>My Fav food is: {food}</h1>
      <button onClick={handleChickenBiryani}>🐔</button>
      <button onClick={handleMuttonBiryani}>🐐</button>
      <button onClick={handleFishBiryani}>🐟</button>
    </div>
  )
}

export default Food