const Inline = () => {
  let stylesForPara = {
    color: "yellow",
    backgroundColor: "green",
    padding:"40px"
  }
  let stylesForBtn = {
    color: "white",
    backgroundColor: "royalblue",
    width: "100%",
    padding:"15px"
  }
  return (
    <div>
      <h1 style={{color:"white",backgroundColor:"red",textAlign:"center"}}>Happy Krishna Janmashtami 🥳</h1>
      <p style={stylesForPara}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate cupiditate odio excepturi vel sapiente natus perferendis nemo temporibus dignissimos? Distinctio exercitationem, nam corrupti dolore omnis eius eos libero provident excepturi voluptatum dicta tempora cupiditate magnam odio minima qui minus labore quo optio sapiente! Eveniet, obcaecati necessitatibus doloribus dicta atque reiciendis?</p>
      <button style={stylesForBtn}>Click</button>
    </div>
  )
}

export default Inline