//!Example 1:
import axios from 'axios'
import { RiBankLine } from "react-icons/ri";
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
const FetchData = () => {
  let [data, setData] = useState(null)
  useEffect(() => {
    let apiData = async () => {
      let { data: { recipes } } = await axios.get("https://dummyjson.com/recipes")
      setData(recipes)
    }
    apiData()
  }, [])
  let notify = () => {
    toast.error("Happy Ganesh Chaturthi")
  }
  return (
    <table border={1} rules="all" cellPadding={10} width="100%">
      <RiBankLine />
      <button onClick={notify}>Toastify</button>
      <ToastContainer/>
      <thead>
        <tr>
          <th>Sl.No.</th>
          <th>Recipe</th>
          <th>Cuisine</th>
          <th>Ingredients</th>
          <th>Instructions</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {
          data && data.map((item) => {
            return <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.cuisine}</td>
              <td>{item.ingredients}</td>
              <td>{item.instructions}</td>
              <td><img src={item.image} alt={item.name} height={200} width={200} /></td>
            </tr>
          })
        }
      </tbody>
    </table>
  )
}

export default FetchData