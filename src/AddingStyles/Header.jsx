import Styles from "./Header.module.css"
console.log(Styles)
const Header = () => {
  return (
    <div>
      <h1 id={Styles.heading}>Header</h1>
    </div>
  )
}

export default Header