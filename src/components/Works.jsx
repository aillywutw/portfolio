import { motion } from "framer-motion";

const WORKS = {
  zh: [
    {
      title: "Lander Demo",
      desc: "React landing page，包含 Firebase 認證、Google 登入與圖片動畫特效。",
      tags: ["React", "Firebase", "Framer Motion"],
      demo: "https://aillywutw.github.io/lander-demo",
      repo: "https://github.com/aillywutw/lander-demo",
      color: "#e91e8c",
    },
    {
      title: "Movie Search",
      desc: "TMDB 電影搜尋應用，支援無限滾動與流暢的卡片動畫。",
      tags: ["React", "TMDB API", "Axios", "Infinite Scroll"],
      demo: "https://aillywutw.github.io/movie-search",
      repo: "https://github.com/aillywutw/movie-search",
      color: "#2196f3",
    },
    {
      title: "Contact Forms",
      desc: "多功能表單應用，包含聯絡、意見回報、檢舉三種表單，整合 EmailJS 雙向寄信。",
      tags: ["React", "EmailJS", "Framer Motion"],
      demo: "https://aillywutw.github.io/contact-forms",
      repo: "https://github.com/aillywutw/contact-forms",
      color: "#4caf50",
    },
    {
      title: "Member Dashboard",
      desc: "具備 Firebase 認證、Protected Route、中英切換的會員後台系統。",
      tags: ["React", "Firebase", "React Router", "Framer Motion"],
      demo: "https://aillywutw.github.io/member-dashboard",
      repo: "https://github.com/aillywutw/member-dashboard",
      color: "#9c27b0",
    },
  ],
  en: [
    {
      title: "Lander Demo",
      desc: "React landing page with Firebase authentication, Google Login, and image animations.",
      tags: ["React", "Firebase", "Framer Motion"],
      demo: "https://aillywutw.github.io/lander-demo",
      repo: "https://github.com/aillywutw/lander-demo",
      color: "#e91e8c",
    },
    {
      title: "Movie Search",
      desc: "TMDB movie search app with infinite scroll and smooth card animations.",
      tags: ["React", "TMDB API", "Axios", "Infinite Scroll"],
      demo: "https://aillywutw.github.io/movie-search",
      repo: "https://github.com/aillywutw/movie-search",
      color: "#2196f3",
    },
    {
      title: "Contact Forms",
      desc: "Multi-form app with Contact, Feedback, and Report forms. EmailJS integration for two-way email.",
      tags: ["React", "EmailJS", "Framer Motion"],
      demo: "https://aillywutw.github.io/contact-forms",
      repo: "https://github.com/aillywutw/contact-forms",
      color: "#4caf50",
    },
    {
      title: "Member Dashboard",
      desc: "Member dashboard with Firebase auth, protected routes, and bilingual support.",
      tags: ["React", "Firebase", "React Router", "Framer Motion"],
      demo: "https://aillywutw.github.io/member-dashboard",
      repo: "https://github.com/aillywutw/member-dashboard",
      color: "#9c27b0",
    },
  ],
};

const CONTENT = {
    zh: { tag: "WORKS", title: "作品", demo: "預覽", repo: "GitHub" },
    en: { tag: "WORKS", title: "Works", demo: "Demo", repo: "GitHub" },
};

export default function Works({ lang }) {
  const c = CONTENT[lang];
  const works = WORKS[lang];

  return (
    <div id="works" style={{ padding: "100px 20px", maxWidth: "1000px", margin: "0 auto" }}>
      <p style={{ color: "#e91e8c", letterSpacing: "4px", fontSize: "0.9rem", marginBottom: "12px" }}>{c.tag}</p>
      <h2 style={{ color: "white", fontSize: "2.5rem", marginBottom: "48px" }}>{c.title}</h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "center" }}>
        {works.map((work, i) => (
          <motion.div
            key={work.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            style={{
              background: "#1a1a1a", borderRadius: "16px", padding: "32px",
              width: "280px", borderTop: `4px solid ${work.color}`,
              boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            }}
          >
            <h3 style={{ color: "white", marginBottom: "12px", fontSize: "1.2rem" }}>{work.title}</h3>
            <p style={{ color: "#aaa", fontSize: "0.9rem", lineHeight: 1.8, marginBottom: "16px" }}>{work.desc}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
              {work.tags.map(tag => (
                <span key={tag} style={{ padding: "4px 12px", borderRadius: "99px", background: "#2a2a2a", color: "#aaa", fontSize: "0.75rem" }}>
                  {tag}
                </span>
              ))}
            </div>
            <div style={{ display: "flex", gap: "12px" }}>
              <a href={work.demo} target="_blank" rel="noreferrer" style={{ ...linkBtn, background: work.color }}>{c.demo}</a>
              <a href={work.repo} target="_blank" rel="noreferrer" style={{ ...linkBtn, background: "#2a2a2a" }}>{c.repo}</a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const linkBtn = { padding: "8px 20px", borderRadius: "8px", color: "white", textDecoration: "none", fontSize: "0.85rem", fontWeight: "bold" };