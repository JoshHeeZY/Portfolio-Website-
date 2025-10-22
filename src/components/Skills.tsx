import { Badge } from "./ui/badge";

export function Skills() {
  const skillCategories = [
    {
      category: "Web Development",
      skills: ["TypeScript", "Next.js", "React", "Prisma", "PostgreSQL", "HTML/CSS"]
    },
    {
      category: "Game Development",
      skills: ["Unity", "C#", "ShaderLab", "3D Modeling", "Game Design"]
    },
    {
      category: "Mobile & Data",
      skills: ["Kotlin", "Python", "Machine Learning", "Jupyter", "Git"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Skills & Technologies</h2>
          <p className="text-lg text-slate-600">
            Technologies I work with on a regular basis
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-2xl text-center md:text-left">{category.category}</h3>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="outline" className="px-4 py-2">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
