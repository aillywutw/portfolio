import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      padding: "0 20px",
      background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 100%)",
    }}>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ color: "#e91e8c", fontSize: "1rem", letterSpacing: "4px", marginBottom: "16px" }}
      >
        FRONTEND DEVELOPER
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{ fontSize: "4rem", color: "white", margin: "0 0 16px", lineHeight: 1.2 }}
      >
        Hi, I'm <span style={{ color: "#e91e8c" }}>Ailly Wu</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        style={{ color: "#aaa", fontSize: "1.2rem", maxWidth: "600px", lineHeight: 1.8, marginBottom: "40px" }}
      >
        擁有 5 年以上前端開發經驗，專注於打造流暢的使用者體驗。
        從 HTML/CSS/jQuery 到 React，持續學習與成長。
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        style={{ display: "flex", gap: "16px" }}
      >
        <a href="https://github.com/aillywutw" target="_blank" rel="noreferrer" style={btnPrimary}>
          GitHub
        </a>
        <a href="#works" style={btnSecondary}>
          View Works
        </a>
      </motion.div>
    </div>
  );
}

const btnPrimary = {
  padding: "14px 32px", background: "#e91e8c", color: "white",
  borderRadius: "8px", textDecoration: "none", fontSize: "1rem",
};
const btnSecondary = {
  padding: "14px 32px", background: "transparent", color: "white",
  borderRadius: "8px", textDecoration: "none", fontSize: "1rem",
  border: "1px solid #444",
};