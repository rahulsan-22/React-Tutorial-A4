import { Component } from 'react'

class Theme extends Component {
  constructor() {
    super()
    this.state = {
      isLightTheme : true
    }
  }
  render() {
    return (
      <div>
        <h1>Theme : { this.state.isLightTheme ? "Light" : "Dark"}</h1>
        <button onClick={()=>this.setState({isLightTheme:!(this.state.isLightTheme)})}>{this.state.isLightTheme ? "Dark Theme" : "Light Theme"}</button>
      </div>
    )
  }
}
export default Theme