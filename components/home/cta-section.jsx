"use client";

import { ArrowRight, Mail, Calendar, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Ready to Start Your
              <br />
              <span className="text-primary">Next Project?</span>
            </h2>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Let's collaborate and bring your ideas to life. I'm always excited
              to work on innovative projects and help businesses grow through
              technology.
            </p>
          </div>

          {/* ================= ACTION BUTTONS ================= */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <Button size="lg" className="group">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Button size="lg" variant="outline">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Call
            </Button>

            <Button size="lg" variant="ghost">
              <Download className="mr-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
              Download Resume
            </Button>
          </div>

          {/* ================= STATS ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-primary">50+</h3>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-primary">3+</h3>
              <p className="text-muted-foreground">Years Experience</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-primary">24h</h3>
              <p className="text-muted-foreground">Response Time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
