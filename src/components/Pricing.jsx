function subscribe(plan) {
  alert(`You have successfully subscribed to the ${plan} plan!`);
}

export default function Pricing() {
  return (
    <section id="pricing" className="section pricing-section">
      <h2>Choose Your VPN Plan</h2>
      <p className="pricing-subtext">
        Simple, transparent pricing. No hidden fees. Cancel anytime.
      </p>

      <div className="pricing-grid">

        {/* BASIC */}
        <div className="price-card glow-card">
          <h3>Basic</h3>
          <p className="price">$5 / month</p>
          <ul>
            <li>✔ Secure Browsing</li>
            <li>✔ 5 Server Locations</li>
            <li>✔ 1 Device</li>
            <li>✔ Basic Encryption</li>
          </ul>
          <button
            className="subscribe-btn"
            onClick={() => subscribe("Basic")}
          >
            Buy Subscription
          </button>
        </div>

        {/* PRO */}
        <div className="price-card glow-card featured">
          <span className="badge">Most Popular</span>
          <h3>Pro</h3>
          <p className="price">$10 / month</p>
          <ul>
            <li>✔ Everything in Basic</li>
            <li>✔ 50+ Server Locations</li>
            <li>✔ 5 Devices</li>
            <li>✔ No-Logs Policy</li>
            <li>✔ High-Speed Streaming</li>
          </ul>
          <button
            className="subscribe-btn"
            onClick={() => subscribe("Pro")}
          >
            Buy Subscription
          </button>
        </div>

        {/* ULTIMATE */}
        <div className="price-card glow-card">
          <h3>Ultimate</h3>
          <p className="price">$15 / month</p>
          <ul>
            <li>✔ Unlimited Locations</li>
            <li>✔ Unlimited Devices</li>
            <li>✔ Maximum Speed</li>
            <li>✔ IP & DNS Leak Protection</li>
            <li>✔ Priority Support</li>
          </ul>
          <button
            className="subscribe-btn"
            onClick={() => subscribe("Ultimate")}
          >
            Buy Subscription
          </button>
        </div>

      </div>
    </section>
  );
}
