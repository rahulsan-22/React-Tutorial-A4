import  { Component } from 'react'

export default class Regular extends Component {
  constructor() {
    super()
    this.state = {
      name:"Monty"
    }
  }
  render() {
    console.log("Regular Component Rendering....")
    return (
      <div>
        <h1>Name: {this.state.name}</h1>
        <button onClick={()=>this.setState({name:"Pavan"})}>Regular Component</button>
      </div>
    )
  }
}
