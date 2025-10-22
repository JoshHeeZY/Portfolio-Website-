import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    { icon: Mail, label: "Email", href: "mailto:josh@example.com" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Github, label: "GitHub", href: "https://github.com/JoshHee21" },
    { icon: Twitter, label: "Twitter", href: "#" }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Get In Touch</h2>
          <p className="text-lg text-slate-600">
            Have a project in mind? Let's work together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2">Name</label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </Card>

          <div className="space-y-8">
            <Card className="p-8">
              <h3 className="text-2xl mb-4">Let's Connect</h3>
              <p className="text-slate-600 mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-3">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.href}
                      className="flex items-center gap-3 text-slate-700 hover:text-blue-600 transition-colors"
                    >
                      <Icon size={20} />
                      <span>{link.label}</span>
                    </a>
                  );
                })}
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
              <h3 className="text-2xl mb-2">GitHub Achievement</h3>
              <p className="opacity-90 mb-3">
                🦈 Pull Shark - Actively contributing to projects and open source!
              </p>
              <p className="text-sm opacity-80">
                Check out my GitHub to see what I'm currently working on.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
