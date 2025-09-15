import { ZapIcon, Heart, Github, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-background/80 backdrop-blur-sm overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/5 rounded-full blur-2xl"></div>
      </div>

      {/* Top animated border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-pulse"></div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* BRAND SECTION */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl backdrop-blur-sm border border-primary/30 group-hover:border-primary/50 transition-all duration-300">
                <ZapIcon className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              </div>
              <span className="text-3xl font-black font-mono tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground">Fit</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent bg-[length:200%_100%] animate-gradient">Buddy</span>
                <span className="text-primary/70 text-xl">.AI</span>
              </span>
            </Link>
            
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Revolutionizing fitness through advanced AI technology. 
              <span className="text-primary font-semibold"> Personalized programs</span> created 
              in minutes, not hours.
            </p>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>by codeflex.ai</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {[
                { Icon: Github, href: "#", label: "Github" },
                { Icon: Twitter, href: "#", label: "Twitter" },
                { Icon: Linkedin, href: "#", label: "LinkedIn" }
              ].map(({ Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="p-2 text-muted-foreground hover:text-primary transition-colors duration-300 hover:bg-primary/10 rounded-lg"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-foreground">Quick Links</h3>
            <div className="space-y-3">
              {[
                { href: "/about", label: "About Us" },
                { href: "/generate-program", label: "Generate Program" },
                { href: "/profile", label: "My Profile" },
                { href: "/contact", label: "Contact" }
              ].map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">
                    {label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* LEGAL & SUPPORT */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-foreground">Support</h3>
            <div className="space-y-3">
              {[
                { href: "/help", label: "Help Center" },
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms of Service" },
                { href: "/blog", label: "Blog" }
              ].map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">
                    {label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* COPYRIGHT */}
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} <span className="text-primary font-medium">FitBuddy AI</span> - All rights reserved
            </p>
          </div>

          {/* STATUS INDICATOR */}
          <div className="flex items-center gap-3 px-4 py-2 border border-border/50 rounded-lg bg-background/50 backdrop-blur-sm">
            <div className="relative">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-green-500 animate-ping opacity-75"></div>
            </div>
            <span className="text-xs font-mono font-medium text-green-600 dark:text-green-400">
              AI SYSTEMS OPERATIONAL
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;