export default function Features() {
  return (
    <section id="features" className="section">
      <h2>VPN Features</h2>

      <div className="flip-grid">

        <div className="flip-card">
          <div className="flip-inner">
            <div className="flip-front">
              <h3>Military-Grade Encryption</h3>
            </div>
            <div className="flip-back">
              <p>
                All data is protected using AES-256 encryption, the same standard
                trusted by governments and cybersecurity professionals worldwide.
              </p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-inner">
            <div className="flip-front">
              <h3>Global High-Speed Servers</h3>
            </div>
            <div className="flip-back">
              <p>
                Access optimized VPN servers across multiple countries to ensure
                fast, stable, and low-latency connections anywhere in the world.
              </p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-inner">
            <div className="flip-front">
              <h3>No-Logs Privacy Policy</h3>
            </div>
            <div className="flip-back">
              <p>
                We do not track, store, or share your browsing activity. Your
                internet usage remains completely private — always.
              </p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-inner">
            <div className="flip-front">
              <h3>IP & DNS Leak Protection</h3>
            </div>
            <div className="flip-back">
              <p>
                Prevent accidental IP or DNS leaks that expose your real location,
                even during unstable network connections.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
