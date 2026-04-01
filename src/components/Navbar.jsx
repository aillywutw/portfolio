import { Link } from "react-scroll";

const LINKS = {
  zh: ["關於我", "技能", "作品"],
  en: ["About", "Skills", "Works"],
};

const TARGETS = ["about", "skills", "works"];

export default function Navbar({ lang, setLang }) {
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

      <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
        {LINKS[lang].map((link, i) => (
          <Link
            key={link}
            to={TARGETS[i]}
            smooth={true}
            duration={500}
            style={{ color: "#aaa", cursor: "pointer", fontSize: "0.95rem", textDecoration: "none" }}
          >
            {link}
          </Link>
        ))}

        {/* 語言切換 */}
        <button
          onClick={() => setLang(lang === "zh" ? "en" : "zh")}
          style={{
            padding: "6px 16px", borderRadius: "20px",
            border: "1px solid #444", background: "transparent",
            color: "#aaa", cursor: "pointer", fontSize: "0.85rem",
          }}
        >
          {lang === "zh" ? "EN" : "中文"}
        </button>
      </div>
    </nav>
  );
}