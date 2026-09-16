//!State

// import { useState } from "react"

// const ControlledForms = () => {
//   let [details, setDetails] = useState({
//     name: "",
//     email: "",
//     password: "",
//     age: "",
//     date: "",
//     time: "",
//     week: "",
//     month: "",
//     datetime: "",
//     phone: "",
//     gender: "",
//     skills: [],
//     photo: "",
//     country: "",
//     feedback: "",
//     color: "#000000",
//     range: ""
//   })
//   let { name, email, password, age, date, time, week, month, datetime, phone, gender, skills, photo, country, feedback, color, range } = details
//   let handleChange = (e) => {
//     let { name, value, type, files, checked } = e.target
//     if (type === "checkbox") {
//       let copiedSkills = [...skills]
//       if (checked) {
//         copiedSkills.push(value)
//       } else {
//         copiedSkills = copiedSkills.filter((item) => {
//           return item != value
//         })
//       }
//       setDetails({ ...details, [name]: copiedSkills })
//     } else if (type === "file") {
//       setDetails({ ...details, [name]: files[0].name })
//     } else {
//       setDetails({ ...details, [name]: value })
//     }

//   }
//   let handleSubmit = (e) => {
//     e.preventDefault()
//     console.log(details)
//   }
//   return (
// <form onSubmit={handleSubmit}>
//   <fieldset>
//     <legend>Registration Form 🔥</legend>
//     <label htmlFor="name">Name:</label>
//     <input type="text" id="name" name="name" value={name} onChange={handleChange} />
//     <br /><br />
//     <label htmlFor="email">Email:</label>
//     <input type="email" id="email" name="email" value={email} onChange={handleChange} />
//     <br /><br />
//     <label htmlFor="password">Password:</label>
//     <input type="password" id="password" name="password" value={password} onChange={handleChange} />
//     <br /><br />
//     <label htmlFor="age">Age:</label>
//     <input type="number" name="age" id="age" value={age} onChange={handleChange} />
//     <br /><br />
//     <label>Dob:</label>
//     <input type="date" name="date" value={date} onChange={handleChange} />
//     <input type="time" name="time" value={time} onChange={handleChange} />
//     <input type="week" name="week" value={week} onChange={handleChange} />
//     <input type="month" name="month" value={month} onChange={handleChange} />
//     <input type="datetime-local" name="datetime" value={datetime} onChange={handleChange} />
//     <br /><br />
//     <label htmlFor="phone">Phone:</label>
//     <input type="tel" name="phone" id="phone" value={phone} onChange={handleChange} />
//     <br /><br />
//     <label htmlFor="gender">Gender:</label>
//     <input type="radio" id="male" name="gender" value="Male" onChange={handleChange} />
//     <label htmlFor="male">Male</label>
//     <input type="radio" id="female" name="gender" value="Female" onChange={handleChange} />
//     <label htmlFor="female">Female</label>
//     <br /><br />
//     <label htmlFor="skills">Skills:</label>
//     <input type="checkbox" name="skills" id="html" value="Html" onChange={handleChange} />
//     <label htmlFor="html">Html</label>
//     <input type="checkbox" name="skills" id="css" value="Css" onChange={handleChange} />
//     <label htmlFor="css">Css</label>
//     <input type="checkbox" name="skills" id="js" value="Js" onChange={handleChange} />
//     <label htmlFor="js">Js</label>
//     <input type="checkbox" name="skills" id="react" value="react" onChange={handleChange} />
//     <label htmlFor="react">React.js</label>
//     <br /><br />
//     <label htmlFor="photo">Upload Id:</label>
//     <input type="file" name="photo" id="photo" onChange={handleChange} />
//     <br /><br />
//     <label htmlFor="country">Country:</label>
//     <select name="country" id="country" onChange={handleChange}>
//       <option value="India">India</option>
//       <option value="Australia">Australia</option>
//       <option value="Russia">Russia</option>
//     </select>
//     <br /><br />
//     <label htmlFor="feedback">Feedback:</label>
//     <textarea name="feedback" id="feedback" value={feedback} onChange={handleChange}></textarea>
//     <br /><br />
//     <label htmlFor="color">Color:</label>
//     <input type="color" name="color" id="color" value={color} onChange={handleChange} />
//     <br /><br />
//     <label htmlFor="range">Range:</label>
//     <input type="range" name="range" id="range" value={range} onChange={handleChange} />
//     <br /><br />
//     <input type="submit" value="Register ❤️‍🔥" />
//     <input type="reset" />
//   </fieldset>
// </form>
//   )
// }

// export default ControlledForms


//!React Hook Form (Library)
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from "yup"

const ControlledForms = () => {
  const schema = yup.object({
    name: yup.string().required("Name is Required").min(3, "Minimum of 3 characters required").max(10, "Maximum of 10 characters allowed"),
    email: yup.string().required("Email is required").email("Invalid Email Format")
  })
  let { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })
  console.log(errors)
  let formData = (data) => {
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(formData)}>
      <fieldset>
        <legend>Registration Form 🔥</legend>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" {...register("name")} />
        <p style={{ color: "red" }}>{errors?.name?.message}</p>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" {...register("email")} />
        <p style={{ color: "red" }}>{errors?.email?.message}</p>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" {...register("password")} />
        <br /><br />
        <label htmlFor="age">Age:</label>
        <input type="number" {...register("age")} />
        <br /><br />
        <label>Dob:</label>
        <input type="date"  {...register("date")} />
        <input type="time"  {...register("time")} />
        <input type="week"  {...register("week")} />
        <input type="month" {...register("month")} />
        <input type="datetime-local" {...register("datetime")} />
        <br /><br />
        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" {...register("phone")} />
        <br /><br />
        <label htmlFor="gender">Gender:</label>
        <input type="radio" id="male" value="Male" name="gender" {...register("gender")} />
        <label htmlFor="male">Male</label>
        <input type="radio" id="female" value="Female" name="gender" {...register("gender")} />
        <label htmlFor="female">Female</label>
        <br /><br />
        <label htmlFor="skills">Skills:</label>
        <input type="checkbox" id="html" value="Html" {...register("skills")} />
        <label htmlFor="html">Html</label>
        <input type="checkbox" id="css" value="Css" {...register("skills")} />
        <label htmlFor="css">Css</label>
        <input type="checkbox" id="js" value="Js" {...register("skills")} />
        <label htmlFor="js">Js</label>
        <input type="checkbox" id="react" value="react" {...register("skills")} />
        <label htmlFor="react">React.js</label>
        <br /><br />
        <label htmlFor="photo">Upload Id:</label>
        <input type="file" id="photo" {...register("photo")} />
        <br /><br />
        <label htmlFor="country">Country:</label>
        <select {...register("country")} id="country">
          <option value="India">India</option>
          <option value="Australia">Australia</option>
          <option value="Russia">Russia</option>
        </select>
        <br /><br />
        <label htmlFor="feedback">Feedback:</label>
        <textarea id="feedback" {...register("feedback")} ></textarea>
        <br /><br />
        <label htmlFor="color">Color:</label>
        <input type="color" id="color" {...register("color")} />
        <br /><br />
        <label htmlFor="range">Range:</label>
        <input type="range" id="range" {...register("range")} />
        <br /><br />
        <input type="submit" value="Register ❤️‍🔥" />
        <input type="reset" />
      </fieldset>
    </form>
  )
}

export default ControlledForms