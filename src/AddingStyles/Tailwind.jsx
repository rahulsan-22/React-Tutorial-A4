//!Navbar
// const Tailwind = () => {
//   return (
//     <nav className="h-22 bg-blue-500 flex">
//       <aside className="basis-[30%] flex justify-center items-center">
//         <h1 className="text-white text-5xl font-medium">Tailwind CSS</h1>
//       </aside>
//       <aside className="basis-[70%] text-white text-2xl font-medium flex justify-end items-center gap-10 pr-10">
//         <a href="#">Home</a>
//         <a href="#">About</a>
//         <a href="#">Contact</a>
//         <a href="#">Services</a>
//       </aside>
//     </nav>
//   )
// }

// export default Tailwind

//!Hot Wheels
const Tailwind = () => {
  return (
    <>
      <nav className="h-20 flex">
        <aside className="basis-[20%] flex justify-center items-center">
          <h1 className="text-[25px] font-bold">HOT WHEELS🔥</h1>
        </aside>

        <aside className="basis-[80%] flex justify-end items-center gap-16 pr-16 text-[20px]">
          <a href="#">Home</a>
          <a href="#">Cars</a>
          <a href="#">Contact</a>
        </aside>
      </nav>
      <header className="h-[75vh] bg-[url('/heroBackground.jpg')] bg-cover bg-center flex justify-center items-center">
        <div className="h-55 w-110 bg-[#0000008a] rounded-3xl flex flex-col text-white justify-evenly items-center">
          <h2 className="text-5xl font-bold">Premium Toy Cars</h2>
          <p className="text-xl">Collect the coolest miniature cars</p>
          <button className="bg-[royalblue] px-6 py-3 rounded-4xl">Shop Now</button>
        </div>
      </header>
      <section className="h-[55vh]">
        <h2 className="py-8 text-center text-4xl font-bold">Featured Toy Cars</h2>
        <main className="h-[45vh] flex justify-evenly items-center">
          <div className="h-70 w-95  rounded-2xl p-2 flex flex-col justify-between shadow-xl">
            <img src="https://hotwheelspremium.netlify.app/assets/car1.jfif" alt="car1" className="h-[70%] object-cover rounded-2xl" />
            <h1 className="text-2xl font-bold">Yellow Drift Car</h1>
            <p>Limited edition drift model</p>
            <p className="text-blue-700 font-bold">₹499</p>
          </div>
          <div className="h-70 w-95 rounded-2xl p-2 flex flex-col justify-between shadow-xl">
            <img src="https://hotwheelspremium.netlify.app/assets/car1.jfif" alt="car1" className="h-[70%] object-cover rounded-2xl" />
            <h1 className="text-2xl font-bold">Yellow Drift Car</h1>
            <p>Limited edition drift model</p>
            <p className="text-blue-700 font-bold">₹499</p>
          </div>
          <div className="h-70 w-95 rounded-2xl p-2 flex flex-col justify-between shadow-xl">
            <img src="https://hotwheelspremium.netlify.app/assets/car1.jfif" alt="car1" className="h-[70%] object-cover rounded-2xl" />
            <h1 className="text-2xl font-bold">Yellow Drift Car</h1>
            <p>Limited edition drift model</p>
            <p className="text-blue-700 font-bold">₹499</p>
          </div>
        </main>
      </section>
      <section className="h-[55vh] mt-7">
        <h2 className="py-8 text-center text-4xl font-bold">Why Choose Us?</h2>
        <main className="h-[45vh] flex justify-evenly items-center">
          <div className="h-40 w-70 rounded-4xl flex flex-col justify-center items-center gap-2 shadow-md">
            <p className="text-6xl">🚗</p>
            <h1 className="text-2xl font-bold">Premium Collections</h1>
          </div>
          <div className="h-40 w-70 rounded-4xl flex flex-col justify-center items-center gap-2 shadow-md">
            <p className="text-6xl">🚗</p>
            <h1 className="text-2xl font-bold">Premium Collections</h1>
          </div>
          <div className="h-40 w-70 rounded-4xl flex flex-col justify-center items-center gap-2 shadow-md">
            <p className="text-6xl">🚗</p>
            <h1 className="text-2xl font-bold">Premium Collections</h1>
          </div>
        </main>
      </section>
      <footer className="h-18 bg-gray-700 text-white text-center text-2xl flex justify-center items-center">
        © 2026 Toys Car Store - All Rights Reserved
      </footer>
    </>
  )
}

export default Tailwind
