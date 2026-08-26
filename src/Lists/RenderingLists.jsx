//!Example 1: (Array of strings)
// const RenderingLists = () => {
//   let restaurants = ["Krishnapatnam","Krithunga","Pista House","Paradise","Swagath"]
//   return (
//     <div>
//       <h1>List of Restaurants 😉</h1>
//       <ol>
//         {
//           restaurants.map((item,index) => <li key={index}>{item}</li>)
//         }
//       </ol>
//     </div>
//   )
// }

// export default RenderingLists

//!Example 2: (Array of numbers)
// const RenderingLists = () => {
//   let marks = [0, 10, 55, 30, 25]
//   return (
//     <div>
//       <h1>List of marks 😭</h1>
//       <ul type="square">
//         {
//           marks.map((item, index) => <li key={index}>{item}</li>)
//         }
//       </ul>
//     </div>
//   )
// }

// export default RenderingLists

//!Example 3: (Array of objects)
// import { Fragment } from "react"
// const RenderingLists = () => {
//   let restaurants = [
//     {
//       id: 1,
//       name: "Mehfil",
//       loc: "Dilsukhnagar"
//     },
//     {
//       id: 2,
//       name: "Shah Ghouse",
//       loc: "LB Nagar"
//     },
//     {
//       id: 3,
//       name: "Paradise",
//       loc: "Secunderabad"
//     }
//   ]
//   return (
//     <div>
//       <h1>List of Restaurants and thier location 🔥</h1>
//       {
//         restaurants.map((item) => {
//           return <Fragment key={item.id}>
//             <h1>{item.name}</h1>
//             <h1>{item.loc}</h1>
//             <hr />
//           </Fragment>
//         })
//       }
//     </div>
//   )
// }

// export default RenderingLists

//!Example 4 : (Array of Objects)
// import  { Fragment } from 'react'

// const RenderingLists = () => {
//   let movies = [
//     { id: 1, name: "Salaar", hero: "Prabhas", herione: "Shruthi Hasan" },
//     { id: 2, name: "Mirchi", hero: "Prabhas", herione: "Anushka Shetty" },
//     { id: 3, name: "OG", hero: "Pawan Kalyan", herione: "Priyanka Mohan" }
//   ]
//   return (
//     <div>
//       <h1>List of Movies and their cast 💖</h1>
//       {
//         movies.map((item) => {
//           return <Fragment key={item.id}>
//             <h1>{item.name}</h1>
//             <h1>{item.hero}</h1>
//             <h1>{item.herione}</h1>
//             <hr />
//           </Fragment>
//         })
//       }
//     </div>
//   )
// }
// export default RenderingLists

//!Example 5:
import Places from './Places'

const RenderingLists = () => {
  let famousPlaces = [
    {
      id: 1,
      name: "Charminar",
      distanceInKms:6
    },
    {
      id: 2,
      name: "Birla Mandir",
      distanceInKms:10
    },
    {
      id: 3,
      name: "Tank Bund",
      distanceInKms:9
    }
  ]
  return <Places data={famousPlaces} />
}

export default RenderingLists