//!1)TERNARY OPERATOR

//!Example 1:
// const Condition = () => {
//   let isAdmin = false;
//   return (
//     <div>
//       {isAdmin ? <h1>Welcome Admin 😎</h1> : <h1>Welcome User 😉</h1>}
//     </div>
//   )
// }

// export default Condition

//!Example 2:
// import Love from './Love';
// import Money from './Money';

// const Condition = () => {
//   let isLoveImportant = true
//   return (
//     <div>
//       { isLoveImportant ? <Love/> : <Money/>}
//     </div>
//   )
// }

// export default Condition

//!Example 3:
// const Condition = () => {
//   let age = 15
//   return (
//     <div>
//       {age>= 18 ? <h1>Eligible to Vote 🤗</h1> : <h1>Not Eligible to Vote 🥺</h1>}
//     </div>
//   )
// }

// export default Condition

//!2)SHORT-CIRCUIT &&

//!Example 1:
// const Condition = () => {
//   let weekend = false;
//   return (
//     <div>
//       {
//         weekend && <h1>Sleep Nicely 😉</h1>
//       }
//     </div>
//   )
// }
// export default Condition

//!Example 2:
// import Love from './Love'

// const Condition = () => {
//   let isLoveImportant = true
//   return (
//     <div>
//       {isLoveImportant && <Love />}
//     </div>
//   )
// }

// export default Condition

//! 3)IF-ELSE STATEMENT

//!Example 1:
// const Condition = () => {
//   let haveMoney = true
//   if (haveMoney) {
//     return <h1>Eat Outside 😉</h1>
//   } else {
//     return <h1>Do Upavasam 🥺</h1>
//   }
// }

// export default Condition

//!Example 2:
// const Condition = () => {
//   let marks = 20
//   if (marks >= 90) {
//     return <h1>Grade A</h1>
//   } else if (marks >= 75) {
//     return <h1>Grade B</h1>
//   } else if (marks >= 50) {
//     return <h1>Grade C</h1>
//   } else {
//     return <h1>Fail</h1>
//   }
// }

// export default Condition

//!4)Element Variable
// const Condition = () => {
//   let trainer = "Rahul"
//   let result;
//   if (trainer == "Pavan") {
//     result = "Core Java Trainer"
//   } else if (trainer == "Yasin") {
//     result = "Sql Trainer"
//   } else if (trainer == "Monty") {
//     result = "Python Trainer"
//   } else {
//     result = "Not a famous one"
//   }
//   return result
// }

// export default Condition

//!Real Time Example
const Condition = () => {
  let darkMode = true
  return (
    <button className={darkMode && "Dark"}>
      {darkMode ? "Dark Mode" : "Light Mode"}
    </button>
  )
}

export default Condition