import { motion } from "framer-motion";

const SKILLS = {
  zh: [
    {
      category: "語言",
      items: ["HTML", "CSS", "JavaScript", "TypeScript"],
    },
    {
      category: "框架 / 函式庫",
      items: ["React", "jQuery", "Framer Motion"],
    },
    {
      category: "工具 / 服務",
      items: ["Git", "Firebase", "REST API", "RWD", "Vite"],
    },
    {
      category: "AI 工具",
      items: ["Cursor", "ChatGPT", "Claude"],
    },
  ],
  en: [
    {
      category: "Languages",
      items: ["HTML", "CSS", "JavaScript", "TypeScript"],
    },
    {
      category: "Frameworks / Libraries",
      items: ["React", "jQuery", "Framer Motion"],
    },
    {
      category: "Tools / Services",
      items: ["Git", "Firebase", "REST API", "RWD", "Vite"],
    },
    {
      category: "AI Tools",
      items: ["Cursor", "ChatGPT", "Claude"],
    },
  ],
};

const CONTENT = {
  zh: { tag: "SKILLS", title: "技能" },
  en: { tag: "SKILLS", title: "Skills" },
};

export default function Skills({ lang }) {
  const c = CONTENT[lang];
  const skills = SKILLS[lang];

  return (
    <div id="skills" style={{ padding: "100px 20px", maxWidth: "800px", margin: "0 auto" }}>
      <p style={{ color: "#e91e8c", letterSpacing: "4px", fontSize: "0.9rem", marginBottom: "12px" }}>{c.tag}</p>
      <h2 style={{ color: "white", fontSize: "2.5rem", marginBottom: "48px" }}>{c.title}</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p style={{ color: "#aaa", fontSize: "0.85rem", letterSpacing: "2px", marginBottom: "16px", textTransform: "uppercase" }}>
              {group.category}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              {group.items.map(item => (
                <span
                  key={item}
                  style={{
                    padding: "8px 20px",
                    borderRadius: "99px",
                    background: "#1a1a1a",
                    color: "white",
                    fontSize: "0.9rem",
                    border: "1px solid #333",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}