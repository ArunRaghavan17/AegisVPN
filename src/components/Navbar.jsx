import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">

        {/* LEFT: LOGO + HAMBURGER */}
        <div className="nav-left">
          <button
            className="hamburger"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>

          <span className="logo">AegisVPN</span>
        </div>

        {/* DESKTOP MENU */}
        <nav className="nav-links desktop-only">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">Why VPN</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>

      {/* MOBILE POPUP MENU */}
      {open && (
        <div className="mobile-menu">
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#features" onClick={() => setOpen(false)}>Features</a>
          <a href="#pricing" onClick={() => setOpen(false)}>Pricing</a>
          <a href="#about" onClick={() => setOpen(false)}>Why VPN</a>
          <a href="#team" onClick={() => setOpen(false)}>Team</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
}
