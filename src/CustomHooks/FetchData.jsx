import useFetch from './useFetch'

const FetchData = () => {
  let { apiData } = useFetch("https://dummyjson.com/recipes")
  console.log(apiData)
  return (
    <>
      <table border={1} cellPadding={10} rules='all' width="100%">
        <thead>
          <tr>
            <th>Sl.No.</th>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Ingredients</th>
            <th>Instructions</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {
            apiData?.recipes.map((item) => {
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
    </>
  )
}

export default FetchData