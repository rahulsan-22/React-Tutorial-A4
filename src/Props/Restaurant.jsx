import React from 'react'

const Restaurant = ({ title, food = "Chicken Biryani", price = 400, children }) => {
  return (
    <div>
      <h1>Name:{title}</h1>
      <h1>Famous Dish:{food}</h1>
      <h1>Price:{price}</h1>
      {children}
      <hr />
    </div>
  )
}

export default Restaurant