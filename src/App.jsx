//!07/08/2026 (Components)

//!Functional Components
// const App = () => {
//   return <h1>I am Function Based Component🍻</h1>
// }
// export default App

//!Class Component
// import { Component } from "react";
// class App extends Component{
//   render() {
//     return <h1>I am Class Component 🥳</h1>
//   }
// }
// export default App

//!Reusability
// import Message from "./Components/Message"
// const App = () => {
//   return <div>
//     <Message />
//     <Message />
//     <Message />
//   </div>
// }
// export default App

//!10/08/2026 (JSX)
// import JavascriptXml from './JSX/JavascriptXml'
// const App = () => {
//   return <JavascriptXml/>
// }

// export default App

//!12/08/2026 (PROPS)
// import Greet from './Props/Greet'
// import Mother from './Props/Mother'
// import Restaurant from './Props/Restaurant'

// const App = () => {
//   return <>
//     {/* <Greet trainer="Yasin"/>
//     <Greet trainer="Monty"/>
//     <Greet trainer="Pavan"/>
//     <Greet trainer="Deva"/> */}
//     {/* <Mother/> */}
//     <Restaurant title="Krishnapatnam" food="Biryani" price={500} />
//     <Restaurant title="Pista House" food="Biryani" />
//     <Restaurant title="Mehfil">
//       <p>Cheap and best</p>
//     </Restaurant>
//     <Restaurant title="Lucky">
//       <h1>This is my fav Restaurant</h1>
//     </Restaurant>
//   </>
// }
// export default App

//!17/08/2026 (Rendering Lists)
// import RenderingLists from './Lists/RenderingLists'

// const App = () => {
//   return <RenderingLists/>
// }

// export default App

//!18/08/2026 (Conditional Rendering)
// import Condition from './ConditionalRendering/Condition'

// const App = () => {
//   return <Condition/>
// }

// export default App

//!19/08/2026 (Events)
// import Events from "./Events/Events"
// const App = () => {
//   return <Events/>
// }

// export default App

//!24/08/2026 (State)
// import Counter from './State/Counter'
// import Theme from './State/Theme'
// import User from './State/User'

// const App = () => {
//   return <>
//     <Counter />
//     <Theme />
//     <User/>
//   </>
// }

// export default App

//!25/08/2026 (Lifecycle Methods)
// import FallbackUI from './Lifecycle/FallbackUI'
// import Phases from './Lifecycle/Phases'
// import Welcome from './Lifecycle/Welcome'

// const App = () => {
//   return <>
//     {/* <Phases /> */}
//     <FallbackUI>
//       <Welcome trainer="Yasin" />
//     </FallbackUI>
//     <FallbackUI>
//       <Welcome trainer="Monty" />
//     </FallbackUI>
//     <FallbackUI>
//       <Welcome trainer="Pavan" />
//     </FallbackUI>
//   </>
// }

// export default App

//!26/08/2026 (useState)
// import Counter from './useState/Counter'
// import Food from './useState/Food'
// import Rakhi from './useState/Rakhi'
// import Salary from './useState/Salary'
// import Theme from './useState/Theme'
// import User from './useState/User'

// const App = () => {
//   return (
//     <div>
//       <Counter />
//       <Food />
//       <Theme />
//       <Rakhi />
//       <User />
//       <Salary/>
//     </div>
//   )
// }

// export default App

//!29/08/2026 (useEffect)
// import Effect from './useEffect/Effect'

// const App = () => {
//   return <Effect/>
// }

// export default App

//!31/08/2026 (useContext)
// import Malakpet from './useContext/Malakpet'
// import { GulabJamunContext, IcecreamContext, ItemContext } from './useContext/Zepto'

// const App = () => {
//   let products = {
//     biscuit: "Jim-Jam",
//     chips: ["Bingo", "Lays", "Kurkure", "SoyaSticks"],
//     softDrinks: () => "Coke",
//     chocolate: {
//       choco1:"5 Star",
//       choco2:"Munch"
//     }
//   }
//   return (
//     <IcecreamContext.Provider value='Chocolate'>
//       <GulabJamunContext value="Gulab Jamun">
//         <ItemContext.Provider value={products}>
//           <Malakpet/>
//         </ItemContext.Provider>
//       </GulabJamunContext>
//     </IcecreamContext.Provider>
//   )
// }
// export default App

//!01/09/2026 (useRef)
// import Reference from './useRef/Reference'

// const App = () => {
//   return (
//     <div>
//       <Reference/>
//     </div>
//   )
// }

// export default App

//!02/09/2026 (useMemo)
// import AgeSalary from './useMemo/AgeSalary'

// const App = () => {
//   return (
//     <div>
//       <AgeSalary/>
//     </div>
//   )
// }

// export default App

//!02/09/2026 (useCallback)
// import { useCallback, useState } from 'react'
// import Title from './useCallback/Title'
// import Count from './useCallback/Count'
// import Button from './useCallback/Button'

// const App = () => {
//   let [age, setAge] = useState(22)
//   let [salary, setSalary] = useState(10000)
//   let handleAge = useCallback(() => {
//     setAge(age + 1)
//   }, [age])
//   let handleSalary = useCallback(() => {
//     setSalary(salary + 5000)
//   }, [salary])
//   return (
//     <div>
//       <Title />
//       <Count text="Age" data={age} />
//       <Button text="Age" fun={handleAge} />
//       <Count text="Salary" data={salary} />
//       <Button text="Salary" fun={handleSalary} />
//     </div>
//   )
// }

// export default App

//!04/09/2026 (Addig Styles)
// import Global from './AddingStyles/Global'
// import Header from './AddingStyles/Header'
// import Inline from './AddingStyles/Inline'
// import Navbar from './AddingStyles/Navbar'
// import Tailwind from './AddingStyles/Tailwind'
// // import "./Global.css"
// const App = () => {
//   return (
//     <div>
//       {/* <Inline /> */}
//       {/* <hr /> */}
//       {/* <Global /> */}
//       {/* <hr /> */}
//       {/* <Navbar /> */}
//       {/* <Header /> */}
//       {/* <hr /> */}
//       <Tailwind/>
//     </div>
//   )
// }

// export default App

//!08/09/2026 (Controlled Components)
// import ControlledForms from './FormHandling/ControlledForms'

// const App = () => {
//   return <ControlledForms/>
// }

// export default App

//!12/09/2026 (Axios)
// import FetchData from './Axios/FetchData'

// const App = () => {
//   return <FetchData/>
// }

// export default App

//!16/09/2026 (Pure Components)
import Regular from './PureComponents/Regular'
import Pure from './PureComponents/Pure'

const App = () => {
  return (
    <div>
      <Regular />
      <Pure/>
    </div>
  )
}

export default App