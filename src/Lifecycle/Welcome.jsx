const Welcome = ({ trainer }) => {
  if (trainer === "Monty") {
    throw new Error("Something went Wrong")
  }
  return (
    <div>Welcome - {trainer}</div>
  )
}

export default Welcome