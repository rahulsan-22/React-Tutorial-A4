import useFetch from "./useFetch"

const ProductsData = () => {
  let {apiData} = useFetch("https://dummyjson.com/products")
  return <>
    <table border={1} cellPadding={10} rules='all' width="100%">
      <thead>
        <tr>
          <th>Sl.No.</th>
          <th>Product</th>
          <th>Category</th>
          <th>Description</th>
          <th>Image</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {
           apiData?.products.map((item) => {
            return <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.category}</td>
              <td>{item.description}</td>
              <td><img src={item.images[0]} alt={item.name} height={200} width={200}/></td>
              <td>{item.price}</td>
            </tr>
          })
        }
      </tbody>
    </table>
  </>
}

export default ProductsData