export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="planet-container">
        <div className="planet"></div>
      </div>

      <div className="hero-content">
        <h1>Your Internet. Your Rules.</h1>
        <p>
          AegisVPN provides encrypted, private, and unrestricted internet access
          using ultra-fast global VPN servers built for modern privacy needs.
        </p>
        <a href="#pricing">
          <button className="cta">Secure My Connection</button>
        </a>

      </div>
    </section>
  );
}
