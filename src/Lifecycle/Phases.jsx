import { Component } from 'react'
import Unmount from './Unmount'

class Phases extends Component {
  constructor() {
    super()
    console.log("Constructor Method Triggered...")
    this.state = {
      salary: 10000
    }
  }
  componentDidMount() {
    console.log("Component Did Mount Method Triggered...")
  }
  componentDidUpdate() {
    console.log("Component Did Update Method Triggered...")
  }
  render() {
    console.log("Render Method Triggered...")
    return (
      <div>
        <h1>Salary:{this.state.salary}</h1>
        <button onClick={() => this.setState({ salary: this.state.salary + 10000 })}>Increment Salary</button>
        {this.state.salary <=50000 && <Unmount/>}
      </div>
    )
  }
}
export default Phases
