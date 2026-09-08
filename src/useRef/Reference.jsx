//!Example 1: (Focusing Input Field)
// import { useRef } from 'react'

// const Reference = () => {
//   let inputRef = useRef(null)
//   let handleFocus = () => {
//     inputRef.current.focus()
//   }
//   return (
//     <div>
//       <input type="text" ref={inputRef} />
//       <button onClick={handleFocus}>Click to Focus</button>
//     </div>
//   )
// }

// export default Reference

//!Example 2 : (Set the value of input)
// import { useRef } from 'react'

// const Reference = () => {
//   let inputRef = useRef(null)
//   let handleValue = () => {
//     inputRef.current.value = "Rahul"
//     inputRef.current.style.background = "aqua"
//   }
//   return (
//     <div>
//       <input type="text" ref={inputRef} />
//       <button onClick={handleValue}>Set Value</button>
//     </div>
//   )
// }
// export default Reference

//!Example 3: (Storing a mutable value)
import { useRef } from 'react'

const Reference = () => {
  let count = useRef(0)
  console.log(count)
  let handleCount = () => {
    count.current++
    console.log(count.current)
  }
  return (
    <div>
      <h1>{count.current}</h1>
      <button onClick={handleCount}>Increment Count</button>
    </div>
  )
}

export default Reference
