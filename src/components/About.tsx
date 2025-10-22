import { Code2, Gamepad2, Globe } from "lucide-react";
import { Card } from "./ui/card";

export function About() {
  const highlights = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Building modern web applications with Next.js, TypeScript, and cutting-edge frameworks."
    },
    {
      icon: Gamepad2,
      title: "Game Development",
      description: "Creating immersive 3D experiences and interactive games using Unity and C#."
    },
    {
      icon: Code2,
      title: "Full-Stack",
      description: "From mobile apps in Kotlin to backend systems with Prisma and PostgreSQL."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">About Me</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            An aspiring web developer with a passion for creating diverse digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl mb-2">{highlight.title}</h3>
                <p className="text-slate-600">{highlight.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto text-lg text-slate-700 space-y-4">
          <p>
            I'm a developer who enjoys working across multiple domains - from web applications 
            to game development. With experience in TypeScript, Next.js, Unity, and Kotlin, 
            I bring ideas to life across different platforms.
          </p>
          <p>
            Currently exploring the intersection of web technologies and interactive experiences, 
            while building projects that challenge me to grow as a developer. Check out my GitHub 
            to see what I'm working on!
          </p>
        </div>
      </div>
    </section>
  );
}
