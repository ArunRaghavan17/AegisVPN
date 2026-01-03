export default function Pricing() {
  return (
    <section>
      <h2>Pricing Plans</h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 20
        }}
      >
        <div className="card">
          <h3>Basic</h3>
          <p>RM 9 / month</p>
        </div>

        <div className="card">
          <h3>Plus</h3>
          <p>RM 19 / month</p>
        </div>

        <div className="card">
          <h3>Ultimate</h3>
          <p>RM 29 / month</p>
        </div>
      </div>
    </section>
  );
}
