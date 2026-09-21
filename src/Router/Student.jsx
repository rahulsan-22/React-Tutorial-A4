import { useParams } from 'react-router-dom'

const Student = () => {
 let {id,name,mail}=useParams()
  return (
    <div>
      <h1>Id:{id}</h1>
      <h1>Name:{name}</h1>
      <h1>Mail:{mail}</h1>
    </div>
  )
}

export default Student