import React, { memo } from 'react'

const Title = () => {
  console.log("Title Component Rendering...")
  return (
    <div>
      <h1>useCallback Hook</h1>
    </div>
  )
}

export default memo(Title)