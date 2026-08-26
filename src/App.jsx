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
import Counter from './useState/Counter'

const App = () => {
  return (
    <div>
      <Counter/>
    </div>
  )
}

export default App