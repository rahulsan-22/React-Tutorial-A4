const Places = ({data}) => {
  return (
    <div>
      {
        data.map((item) => {
          return <div key={item.id}>
            <h1>Place: {item.name}</h1>
            <h1>Distance: {item.distanceInKms}kms</h1>
            <hr />
          </div>
        })
      }
    </div>
  )
}

export default Places