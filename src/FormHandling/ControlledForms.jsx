import { useState } from "react"

const ControlledForms = () => {
  let [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    date: "",
    time: "",
    week: "",
    month: "",
    datetime: ""
  })
  let { name, email, password, age, date, time, week, month, datetime } = details
  let handleChange = (e) => {
    let { name, value } = e.target
    setDetails({ ...details, [name]: value })
  }
  let handleSubmit = (e) => {
    e.preventDefault()
    console.log(details)
  }
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Registration Form 🔥</legend>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={handleChange} />
        <br /><br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={handleChange} />
        <br /><br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={password} onChange={handleChange} />
        <br /><br />
        <label htmlFor="age">Age:</label>
        <input type="number" name="age" id="age" value={age} onChange={handleChange} />
        <br /><br />
        <label>Dob:</label>
        <input type="date" name="date" value={date} onChange={handleChange} />
        <input type="time" name="time" value={time} onChange={handleChange} />
        <input type="week" name="week" value={week} onChange={handleChange} />
        <input type="month" name="month" value={month} onChange={handleChange} />
        <input type="datetime-local" name="datetime" value={datetime} onChange={handleChange} />
        <br /><br />
        <input type="submit" value="Register ❤️‍🔥" />
      </fieldset>
    </form>
  )
}

export default ControlledForms