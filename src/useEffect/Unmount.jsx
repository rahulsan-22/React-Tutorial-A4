import { useEffect } from "react"

const Unmount = () => {
  //!with cleanup function 1 - componentWillUnmount()
  // useEffect(() => {
  //   return () => {
  //     console.log("useEffect Running...")
  //   }
  // }, [])
  //! with cleanup function 2 - componentWillUnmount()
  useEffect(() => {
    let timer = setInterval(() => {
      console.log("Running.....")
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  },[])
  return (
    <div>Unmount</div>
  )
}

export default Unmount