"use client";

import { Download, ExternalLink, Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/zenoguy", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/in/shreyanghosh", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com/zenoguy", icon: Twitter },
  { name: "Email", href: "mailto:shreyanghosh.dev@gmail.com", icon: Mail },
];

export default function HeroSection() {
  return (
    <section className="min-h-screen relative flex items-center">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ================= LEFT: TEXT ================= */}
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-primary font-medium text-lg">
                Hello, I’m
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
                Shreyan Ghosh
                <br />
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Zenoguy
                </span>
              </h1>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-muted-foreground">
                Full-Stack Developer & Creative Technologist
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                I craft exceptional digital experiences using cutting-edge technologies.
                Specializing in React, Next.js, and Node.js to build scalable web applications
                that actually matter.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/projects">
                <Button size="lg">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Projects
                </Button>
              </Link>

              <Button variant="outline" size="lg">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>

              <Link href="/contact">
                <Button variant="outline" size="lg">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Button>
              </Link>
            </div>

            <div className="flex space-x-4 pt-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* ================= RIGHT: IMAGE ================= */}
          <div className="relative flex justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-600 rounded-full opacity-20 blur-xl" />

              <div className="relative w-full h-full rounded-full overflow-hidden p-2 bg-gradient-to-br from-primary/20 to-blue-600/20">
                <img
                  src="https://raw.githubusercontent.com/Zenoguy/Zen/refs/heads/main/SG.png"
                  alt="Shreyan Ghosh"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
