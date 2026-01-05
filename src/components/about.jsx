export default function About() {
  return (
    <section id="about" className="section why-vpn">
      <h2 className="gradient-title">Why You Need a VPN</h2>

      <div className="why-grid">
        {/* TEXT SIDE */}
        <div className="why-text">
          <p>
            Every time you connect to the internet without protection, your
            digital identity is exposed. Your IP address, physical location,
            browsing history, and personal data can be monitored by Internet
            Service Providers, advertisers, cybercriminals, and even governments.
          </p>

          <p>
            AegisVPN creates an encrypted tunnel between your device and the
            internet. This tunnel scrambles your data using military-grade
            encryption, making it unreadable to anyone attempting to intercept
            it — even on public Wi-Fi networks.
          </p>

          <p>
            Whether you are streaming content, gaming online, working remotely,
            or accessing sensitive information, AegisVPN ensures total privacy,
            unrestricted access, and complete control over your digital presence.
          </p>

          <p className="bold">
            We operate under a strict no-logs policy. We do not track, store, or
            sell your data. Your privacy is not a feature — it is our foundation.
          </p>
        </div>

        {/* GRAPHIC SIDE */}
        <div className="why-graphic">
          <div className="data-path">
            <div className="node danger">ISP</div>
            <div className="node danger">Hackers</div>
            <div className="node safe">AegisVPN</div>
            <div className="node danger">Trackers</div>
          </div>

          <div className="shield">
            
            <span>Encrypted Tunnel</span>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="why-stats">
        <div className="stat-card">
          <h3>90%</h3>
          <p>Public Wi-Fi attacks target unprotected users</p>
        </div>
        <div className="stat-card">
          <h3>256-bit</h3>
          <p>Military-grade AES encryption</p>
        </div>
        <div className="stat-card">
          <h3>0 Logs</h3>
          <p>Your data is never stored</p>
        </div>
        <div className="stat-card">
          <h3>100%</h3>
          <p>Private & anonymous browsing</p>
        </div>
      </div>
    </section>
  );
}
