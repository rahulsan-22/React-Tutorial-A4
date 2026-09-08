import { use, useContext } from 'react'
import Chaitanyapuri from './Chaitanyapuri'
import { GulabJamunContext } from './Zepto'

const Dilsukhnagar = () => {
  let jamun = use(GulabJamunContext)
  return (
    <div>
      <h1>I received {jamun}</h1>
      <Chaitanyapuri/>
    </div>
  )
}

export default Dilsukhnagar