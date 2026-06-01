import { motion } from "framer-motion";

const SKILLS = {
  zh: [
    {
      category: "現代前端",
      items: ["React", "Component-Based Architecture", "JavaScript (ES6+)", "HTML5", "CSS3"],
    },
    {
      category: "傳統技術 / 函式庫",
      items: ["jQuery", "AJAX", "JSON Integration"],
    },
    {
      category: "效能 / UI/UX",
      items: ["RWD", "Cross-Browser Optimization", "Performance Tuning", "Troubleshooting & Debugging"],
    },
    {
      category: "工作流程 / 工具",
      items: ["Git / GitHub", "Jira", "Slack", "Agile / Scrum"],
    },
    {
      category: "AI 工具",
      items: ["Cursor", "ChatGPT", "Gemini", "Claude"],
    },
    {
      category: "AI 認證",
      items: ["Google AI Essentials", "Use AI Responsibly", "Discover the Art of Prompting", "Maximize Productivity With AI Tools"],
    },
  ],
  en: [
    {
      category: "Modern Frontend",
      items: ["React", "Component-Based Architecture", "JavaScript (ES6+)", "HTML5", "CSS3"],
    },
    {
      category: "Legacy & Libraries",
      items: ["jQuery", "AJAX", "JSON Integration"],
    },
    {
      category: "Performance & UI/UX",
      items: ["RWD", "Cross-Browser Optimization", "Performance Tuning", "Troubleshooting & Debugging"],
    },
    {
      category: "Workflow & Tools",
      items: ["Git / GitHub", "Jira", "Slack", "Agile / Scrum"],
    },
    {
      category: "AI Tools",
      items: ["Cursor", "ChatGPT", "Gemini", "Claude"],
    },
    {
      category: "AI Certifications",
      items: ["Google AI Essentials", "Use AI Responsibly", "Discover the Art of Prompting", "Maximize Productivity With AI Tools"],
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