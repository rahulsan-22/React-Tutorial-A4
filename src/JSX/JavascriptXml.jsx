//!JSX
// const JavascriptXml = () => {
//   return <h1>JSX</h1>
// }

// export default JavascriptXml

//!RULES:

//!1: Multiple JSX Elements must be wrapped in a single parent
// const JavascriptXml = () => {
//   return (
//   <div>
//     <h1>Heading</h1>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, aut!</p>
//     <button>Click</button>
//     </div>
//   )
// }
// export default JavascriptXml

//!2: Unpaired Tags must be closed properly
// const JavascriptXml = () => {
//   return <section>
//     <img src="favicon.svg" />
//     <input type="text"></input>
//   </section>
// }
// export default JavascriptXml

//!3: Attributes like class and for should be replaced with className and htmlFor
// const JavascriptXml = () => {
//   return (
//     <div>
//       <h1 className="heading">Hello</h1>
//       <label htmlFor="name">Name:</label>
//       <input id="name" type="text"/>
//     </div>
//   )
// }
// export default JavascriptXml

//!4: JSX Elements must be written in lowercase
// const JavascriptXml = () => {
//   return <button>Click</button>
// }
// export default JavascriptXml

//!Fragments
// import { Fragment } from 'react'

// const JavascriptXml = () => {
//   return <>
//     <h1>Heading</h1>
//     <p>Lorem ipsum dolor sit amet.</p>
//     <button>Click</button>
//   </>
// }

// export default JavascriptXml

//!Expression
const JavascriptXml = () => {
  let trainerName = "Pavan"
  function subject() {
    return "Core Java"
  }
  let isSingle = false
  let hobbies = ["Cooking", "Singing", "Motivation"]
  return (
    <div>
      <h1>My name is: {trainerName}</h1>
      <p>I am {30 - 5} years old</p>
      <p>I teach {subject()}</p>
      <p>Relationship Status: {isSingle ? "Single" : "Committed"}</p>
      <h1>Hobbies</h1>
      <ol>
        {
          hobbies.map((ele) => {
            return <li>{ele}</li>
          })
        }
      </ol>
    </div>
  )
}
export default JavascriptXml
