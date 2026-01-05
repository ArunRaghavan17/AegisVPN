import arunImg from "../assets/Arun.jpeg";
import herissImg from "../assets/Heriss.jpeg";
import sharvveshImg from "../assets/Sharvvesh.jpeg";

export default function Team() {
  return (
    <section id="team" className="section team-section">
      <h2 className="gradient-title">Meet Our Team</h2>
      <p className="team-subtext">
        AegisVPN is built by passionate computer science graduates focused on
        privacy, security, and reliable digital freedom.
      </p>

      <div className="team-grid">
        {/* Arun */}
        <div className="team-card">
          <div className="avatar-wrapper">
            <img src={arunImg} alt="ArunpillaI A/L Raghavan" />
          </div>
          <h3>ArunpillaI A/L Raghavan</h3>
          <span className="role">Co-Founder</span>
          <p>
            Leads the overall vision and architecture of AegisVPN, ensuring the
            platform delivers strong security while remaining accessible and
            user-friendly.
          </p>
        </div>

        {/* Heriss */}
        <div className="team-card">
          <div className="avatar-wrapper">
            <img src={herissImg} alt="Heriss Raj A/L Ravi" />
          </div>
          <h3>Heriss Raj A/L Ravi</h3>
          <span className="role">Co-Founder</span>
          <p>
            Responsible for frontend development and UI design, translating
            complex VPN technology into an intuitive and visually engaging
            experience.
          </p>
        </div>

        {/* Sharvvesh */}
        <div className="team-card">
          <div className="avatar-wrapper">
            <img src={sharvveshImg} alt="Sharvvesh A/L Sukumaran" />
          </div>
          <h3>Sharvvesh A/L Sukumaran</h3>
          <span className="role">Co-Founder</span>
          <p>
            Focuses on research, documentation, and content accuracy, ensuring
            AegisVPN follows industry best practices and communicates security
            concepts clearly.
          </p>
        </div>
      </div>
    </section>
  );
}
