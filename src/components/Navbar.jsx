import { Link } from "react-scroll";

const LINKS = ["About", "Skills", "Works"];

export default function Navbar() {
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0,
      background: "rgba(15,15,15,0.9)",
      backdropFilter: "blur(10px)",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "16px 40px", zIndex: 100,
      borderBottom: "1px solid #222",
    }}>
      <span style={{ color: "white", fontWeight: "bold", fontSize: "1.2rem" }}>Ailly Wu</span>
      <div style={{ display: "flex", gap: "32px" }}>
        {LINKS.map(link => (
          <Link
            key={link}
            to={link.toLowerCase()}
            smooth={true}
            duration={500}
            style={{ color: "#aaa", cursor: "pointer", fontSize: "0.95rem", textDecoration: "none" }}
          >
            {link}
          </Link>
        ))}
      </div>
    </nav>
  );
}