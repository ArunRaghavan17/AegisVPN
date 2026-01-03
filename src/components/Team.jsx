export default function Team() {
  return (
    <section>
      <h2>Our Team</h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 20
        }}
      >
        {/* Team Member 1 */}
        <div className="card">
          <div
            style={{
              height: 160,
              background: '#0b0f1a',
              borderRadius: 10,
              marginBottom: 10
            }}
          ></div>
          <strong>Arunpillai A/L Raghavan</strong>
          <p>Project Lead</p>
        </div>

        {/* Team Member 2 */}
        <div className="card">
          <div
            style={{
              height: 160,
              background: '#0b0f1a',
              borderRadius: 10,
              marginBottom: 10
            }}
          ></div>
          <strong>Heriss Raj A/L Ravi</strong>
          <p>Frontend Developer</p>
        </div>

        {/* Team Member 3 */}
        <div className="card">
          <div
            style={{
              height: 160,
              background: '#0b0f1a',
              borderRadius: 10,
              marginBottom: 10
            }}
          ></div>
          <strong>Sharrvesh A/L Sukumaran</strong>
          <p>Research & Content</p>
        </div>
      </div>
    </section>
  );
}
