import { memo } from "react"

const MemoComp = ({ tname }) => {
  console.log("Memo Component Rendering...")
  return (
    <div>MemoComp - {tname}</div>
  )
}

export default memo(MemoComp)