export default function Footer() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Your message has been sent! We’ll get back to you shortly.");
    e.target.reset();
  }

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT: CONTACT FORM */}
        <div className="footer-box footer-form">
          <h3>Contact Us</h3>
          <p>
            Have questions about AegisVPN or need support?  
            Send us a message and our team will respond promptly.
          </p>

          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="4" required />
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* RIGHT: COMPANY INFO */}
        <div className="footer-box footer-info">
          <h3>AegisVPN</h3>
          <p>
            AegisVPN is a privacy-first virtual private network service designed
            to protect users from surveillance, data tracking, and cyber threats.
            We provide secure, encrypted, and unrestricted internet access for
            individuals and businesses.
          </p>

          <ul>
            <li>Penang, Malaysia</li>
            <li>+60 12-345 6789</li>
            <li>
              {" "}
              <a href="mailto:aegisvpn.support@gmail.com">
                aegisvpn.support@gmail.com
              </a>
            </li>
            <li>Service Hours: 9:00 AM – 6:00 PM (GMT+8)</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        © 2026 AegisVPN. All Rights Reserved.
      </div>
    </footer>
  );
}
