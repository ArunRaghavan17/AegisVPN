export default function Features() {
  return (
    <section>
      <h2>VPN Features</h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 20
        }}
      >
        <div className="card">Encrypted Secure Tunnel</div>
        <div className="card">IP Masking & Privacy Protection</div>
        <div className="card">Global Server Access</div>
        <div className="card">Live Status Dashboard (UI Demo)</div>
      </div>
    </section>
  );
}
