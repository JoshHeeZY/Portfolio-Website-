import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "ChefMate",
      description: "A recipe web app built with Next.js, Prisma, and PostgreSQL. Browse, search, and save your favorite recipes with a modern, intuitive interface.",
      image: "https://images.unsplash.com/photo-1726713357919-64c34d622097?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNpcGUlMjBhcHAlMjBmb29kJTIwZGlzaHxlbnwxfHx8fDE3NjExNjQyMDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "https://github.com/JoshHee21/ChefMate",
      status: null
    },
    {
      title: "CookBook",
      description: "A mobile cookbook application built with Kotlin. Discover new recipes, organize your favorites, and cook with step-by-step instructions on the go.",
      image: "https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBjb29rYm9vayUyMGFwcHxlbnwxfHx8fDE3NjExNjM4Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Kotlin", "Android", "Mobile", "Recipe App"],
      liveUrl: "#",
      githubUrl: "https://github.com/JoshHee21/CookBook",
      status: null
    },
    {
      title: "NetflixClone",
      description: "A Netflix-inspired streaming platform clone featuring user authentication, video browsing, and a responsive design built with modern web technologies.",
      image: "https://images.unsplash.com/photo-1685440663653-fa3e81dd109c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXRmbGl4JTIwc3RyZWFtaW5nfGVufDF8fHx8MTc2MTE2MjgwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["TypeScript", "React", "API Integration"],
      liveUrl: "#",
      githubUrl: "https://github.com/JoshHee21/NetflixClone",
      status: null
    },
    {
      title: "3D Fighting Game",
      description: "An immersive 3D fighting game built in Unity with custom shaders and physics-based combat mechanics. Features character controls and dynamic animations.",
      image: "https://images.unsplash.com/photo-1633287453177-24823499b02c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml0eSUyMDNkJTIwZ2FtZXxlbnwxfHx8fDE3NjExNjI4MDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Unity", "C#", "ShaderLab", "3D"],
      liveUrl: "#",
      githubUrl: "https://github.com/JoshHee21/3d-fighting-game",
      status: null
    },
    {
      title: "Morning Summariser",
      description: "An intelligent app that curates and summarizes your morning news and updates, helping you start the day informed and organized.",
      image: "https://images.unsplash.com/photo-1605160780878-e5786731a854?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JuaW5nJTIwY29mZmVlJTIwbmV3c3BhcGVyfGVufDF8fHx8MTc2MTEzOTg1OXww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["TypeScript", "API Integration", "Automation"],
      liveUrl: "#",
      githubUrl: "https://github.com/JoshHee21/Morning-Summariser",
      status: null
    },
    {
      title: "Premier League Statistics",
      description: "A data visualization project analyzing Premier League 2024-2025 season statistics with interactive charts and player/team insights.",
      image: "https://images.unsplash.com/photo-1643796903573-68834ffadcb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaWVyJTIwbGVhZ3VlJTIwZm9vdGJhbGx8ZW58MXx8fHwxNzYxMTQwNDg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Data Analysis", "Visualization", "Sports"],
      liveUrl: "#",
      githubUrl: "https://github.com/JoshHee21/Premier-League-2024-2025-Statistics",
      status: null
    },
    {
      title: "Card Game",
      description: "An interactive card game built with Unity. Strategic gameplay with smooth animations and engaging mechanics. Currently in development with more features coming soon!",
      image: "https://images.unsplash.com/photo-1685252709558-336878d46e50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGF5aW5nJTIwY2FyZHMlMjBnYW1lfGVufDF8fHx8MTc2MTExMDM2MHww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Unity", "C#", "Game Design"],
      liveUrl: "#",
      githubUrl: "#",
      status: "Coming Soon"
    },
    {
      title: "Blog",
      description: "A full-stack blogging platform built with the MERN stack (MongoDB, Express, React, Node.js). Share stories, tutorials, and insights with a clean, modern interface.",
      image: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9nJTIwd3JpdGluZ3xlbnwxfHx8fDE3NjExNTYwMjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["MongoDB", "Express", "React", "Node.js"],
      liveUrl: "#",
      githubUrl: "#",
      status: "Coming Soon"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Featured Projects</h2>
          <p className="text-lg text-slate-600">
            A selection of my recent work
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-2xl">{project.title}</h3>
                  {project.status && (
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      {project.status}
                    </Badge>
                  )}
                </div>
                <p className="text-slate-600">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button variant="default" size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2" size={16} />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2" size={16} />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
