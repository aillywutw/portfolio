import { motion } from "framer-motion";

const SKILLS = [
  { name: "HTML / CSS", level: 95 },
  { name: "JavaScript", level: 95 },
  { name: "jQuery", level: 90 },
  { name: "React", level: 80 },
  { name: "API 串接 / Integration", level: 90 },
  { name: "RWD", level: 100 },
  { name: "Git", level: 75 },
  { name: "Firebase", level: 65 },
];

const CONTENT = {
    zh: { tag: "SKILLS", title: "技能" },
    en: { tag: "SKILLS", title: "Skills" },
  };
  
  export default function Skills({ lang }) {
    const c = CONTENT[lang];
  
    return (
      <div id="skills" style={{ padding: "100px 20px", maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ color: "#e91e8c", letterSpacing: "4px", fontSize: "0.9rem", marginBottom: "12px" }}>{c.tag}</p>
        <h2 style={{ color: "white", fontSize: "2.5rem", marginBottom: "48px" }}>{c.title}</h2>
  
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <span style={{ color: "white", fontSize: "0.95rem" }}>{skill.name}</span>
                <span style={{ color: "#aaa", fontSize: "0.85rem" }}>{skill.level}%</span>
              </div>
              <div style={{ background: "#2a2a2a", borderRadius: "99px", height: "8px" }}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                  style={{ background: "#e91e8c", height: "8px", borderRadius: "99px" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }