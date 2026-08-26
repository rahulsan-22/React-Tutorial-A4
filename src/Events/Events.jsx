//! 1) CLICK

//!Example 1:
// const Events = () => {
//   let handleTime = () => {
//     alert(new Date().toTimeString())
//   }
//   return (
//     <div>
//       <button onClick={handleTime}>Display Time</button>
//     </div>
//   )
// }
// export default Events

//!Example 2:
// const Events = () => {
//   return (
//     <div>
//       <button onClick={()=>console.log(Math.random())}>Generate Random Number</button>
//     </div>
//   )
// }

// export default Events

//!Example 3:
// const Events = () => {
//   let handleGreet = (user) => {
//     console.log(`Good Afternoon ${user}`)
//   }
//   return (
//     <div>
//       <button onClick={()=>handleGreet("Yasin")}>Greet User</button>
//     </div>
//   )
// }
// export default Events

//!Event Object
// const Events = () => {
//   let demo = (e) => {
//     console.log(e)
//     console.log(e.target)
//     console.log(e.type)
//     console.log(e.target.innerHTML)
//   }
//   return (
//     <div>
//       <button onClick={demo}>CLICK the Button</button>
//     </div>
//   )
// }

// export default Events

//!FOCUS , BLUR ,CHANGE
// const Events = () => {
//   let handleFocus = (e) => {
//     e.target.style.background = "red"
//   }
//   let handleBlur = (e) => {
//     e.target.style.background = "yellow"
//   }
//   let handleChange = (e) => {
//     e.target.style.background = "blue"
//   }
//   return (
//     <div>
//       <input type="text" onFocus={handleFocus} onBlur={handleBlur} onChange={handleChange}/>
//     </div>
//   )
// }

// export default Events

//!SUBMIT
const Events = () => {
  let handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form Submitted 🥳")
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Enter your email" />
      <br /><br />
      <input type="password" placeholder="Enter your password" />
      <br /><br />
      <input type="submit" value="Login"/>
    </form>
  )
}

export default Events

//!MOUSEENTER , MOUSEMOVE , MOUSELEAVE
const Events = () => {
  let handleMouseEnter = (e) => {
    e.target.style.background = "red"
  }
  let handleMouseMove = (e) => {
    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)
    e.target.style.background = `rgb(${red},${green},${blue})`
  }
  let handleMouseLeave = (e) => {
    e.target.style.background = "blue"
    
  }
  return (
    <div>
      <textarea rows="20" cols="100" onMouseEnter={handleMouseEnter} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}></textarea>
    </div>
  )
}

export default Events