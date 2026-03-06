function Navbar() {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      
      <div className="
        flex items-center gap-8
        px-8 py-3
        rounded-2xl
        bg-white/10
        backdrop-blur-md
        border border-white/20
        shadow-lg
      ">

        <h1 className="text-white font-semibold">
          Adarsh
        </h1>

        <div className="flex gap-6 text-white/80">
          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

      </div>

    </div>
  )
}

export default Navbar