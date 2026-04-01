import { motion } from "framer-motion";

const CONTENT = {
  zh: {
    tag: "ABOUT ME",
    title: "關於我",
    p1: "我是 Ailly Wu，一名擁有 10 年以上經驗的前端工程師。曾任職於交友網站產業，負責開發與維護多個前端專案，包含 Landing Page、會員系統、表單串接、搜尋功能等。",
    p2: "技術路徑從 HTML / CSS / jQuery 演進至 React，熟悉 API 串接、Firebase 認證、RWD 響應式設計，並善用 AI 工具提升開發效率。",
  },
  en: {
    tag: "ABOUT ME",
    title: "About Me",
    p1: "I'm Ailly Wu, a frontend developer with 10+ years of experience. I've worked in the dating website industry, responsible for developing and maintaining multiple frontend projects including landing pages, membership systems, form integrations, and search features.",
    p2: "My tech journey evolved from HTML / CSS / jQuery to React. I'm proficient in API integration, Firebase authentication, RWD design, and leveraging AI tools to boost development efficiency.",
  },
};

export default function About({ lang }) {
  const c = CONTENT[lang];

  return (
    <div id="about" style={{ padding: "100px 20px", maxWidth: "800px", margin: "0 auto" }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p style={{ color: "#e91e8c", letterSpacing: "4px", fontSize: "0.9rem", marginBottom: "12px" }}>{c.tag}</p>
        <h2 style={{ color: "white", fontSize: "2.5rem", marginBottom: "24px" }}>{c.title}</h2>
        <p style={{ color: "#aaa", fontSize: "1.1rem", lineHeight: 2, marginBottom: "16px" }}>{c.p1}</p>
        <p style={{ color: "#aaa", fontSize: "1.1rem", lineHeight: 2 }}>{c.p2}</p>
      </motion.div>
    </div>
  );
}