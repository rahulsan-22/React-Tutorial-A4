import  { memo } from 'react'

const Button = ({ text, fun }) => {
  console.log(`Increment ${text} Component Rendering...`)
  return (
    <button onClick={fun}>Increment {text}</button>
  )
}

export default memo(Button)