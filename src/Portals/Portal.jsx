import { createPortal } from "react-dom"

const Portal = () => {
  return createPortal(<div>
      <h1>HAPPY GANESH CHATURTHI 🥳</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, cumque molestias voluptas modi ea voluptatibus sint  hic architecto ex unde sunt cupiditate iure.</p>
      <button>Click</button>
    </div>,document.getElementById("portal"))
}

export default Portal