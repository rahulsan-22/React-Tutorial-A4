const Son = ({ name, age, isEmployee, salary, hasAttitude, hobbies, address: { place, state }, fun }) => {
  return (
    <div>
      <p>Girls Name : {name}</p>
      <p>Age : {age}</p>
      <p>Employee : {isEmployee ? "Working" : "Home Maker"}</p>
      <p>Salary: {salary==undefined && "Not Disclosed"}</p>
      <p>hasAttitude : {hasAttitude==null && "Not there in my dictionary"}</p>
      <p>Hobbies:{hobbies}</p>
      <p>Place:{place}</p>
      <p>State:{state}</p>
      <p>Approval Status:{fun()}</p>
    <hr />
    </div>
  )
}

export default Son