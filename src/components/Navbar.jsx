export default function Navbar() {
  return (
    <nav
      className="card"
      style={{
        margin: 20,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <strong>AegisVPN</strong>
      <div>
        Home | Features | Pricing | Team | Contact
      </div>
    </nav>
  );
}
