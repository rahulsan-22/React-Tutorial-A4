import { Component } from 'react'
class User extends Component {
  constructor() {
    super()
    this.state = {
      name: "Monty",
      age: 28
    }
  }
  render() {
    return (
      <div>
        <h1>Name : {this.state.name}</h1>
        <h1>Age : {this.state.age}</h1>
        <button onClick={() => this.setState({
          name: "Pavan",
          age: 26
        })}>Change Info</button>
      </div>
    )
  }
}
export default User