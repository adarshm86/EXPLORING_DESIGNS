function Navbar() {
  return (
    <div style={{
      position: "fixed",
      top: "20px",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 10
    }}>
      
      <div className="glass-nav">
        <span style={{marginRight:"20px"}}>Home</span>
        <span style={{marginRight:"20px"}}>Projects</span>
        <a href="#about" className="nav-link">About</a>
      </div>

    </div>
  )
}

export default Navbar