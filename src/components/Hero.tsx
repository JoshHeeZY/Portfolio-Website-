import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl">
            Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Joshua Hee</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600">
            Aspiring Web Developer & Game Enthusiast
          </p>
        </div>
        
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          I build innovative web applications and interactive experiences across multiple platforms. 
          From Next.js web apps to Unity games, I love bringing creative ideas to life through code.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button size="lg" onClick={scrollToProjects}>
            View My Work
          </Button>
          <Button size="lg" variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Get In Touch
          </Button>
        </div>

        <div className="pt-12 animate-bounce">
          <ArrowDown className="mx-auto text-slate-400" size={32} />
        </div>
      </div>
    </section>
  );
}
