import { useContext } from 'react'
import { IcecreamContext, ItemContext } from './Zepto'

const Chaitanyapuri = () => {
  let icecream = useContext(IcecreamContext)
  let items = useContext(ItemContext)
  let { biscuit, chips, chocolate: { choco1, choco2 }, softDrinks } = items
  return (
    <div>
      <h1>I received {icecream} Icecream</h1>
      <h1>I received</h1>
      <ol>
        <li>{biscuit}</li>
        <li>{chips}</li>  
        <li>{choco1}</li>
        <li>{choco2}</li>
        <li>{softDrinks()}</li>
      </ol>
    </div>
  )
}

export default Chaitanyapuri