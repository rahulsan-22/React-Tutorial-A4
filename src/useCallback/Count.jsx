import React, { memo } from 'react'

const Count = ({ text, data }) => {
  console.log(`${text} Component Rendering...`)
  return (
    <div>
      <h1>{text} - {data}</h1>
    </div>
  )
}

export default memo(Count)