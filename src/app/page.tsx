import TerminalOverlay from "@/components/TerminalOverlay";
import { Button } from "@/components/ui/button";
import UserPrograms from "@/components/UserPrograms";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen text-foreground overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-50">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-secondary/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-accent/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <section className="relative z-10 py-24 flex-grow backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
            {/* PREMIUM CORNER DECORATION */}
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-tl from-accent/20 via-transparent to-primary/20 rounded-full blur-3xl animate-pulse animation-delay-2000" />

            {/* LEFT SIDE CONTENT */}
            <div className="lg:col-span-7 space-y-10 relative z-10">
              {/* Glowing badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full text-sm font-medium text-primary animate-pulse">
                <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
                AI-Powered Fitness Revolution
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tight leading-none">
                <div className="overflow-hidden">
                  <span className="inline-block animate-slide-up text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground">Redefine</span>
                </div>
                <div className="overflow-hidden">
                  <span className="inline-block animate-slide-up animation-delay-200 text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent bg-[length:200%_100%] animate-gradient">Fitness</span>
                </div>
                <div className="pt-2 overflow-hidden">
                  <span className="inline-block animate-slide-up animation-delay-400 text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground">With</span>
                </div>
                <div className="pt-2 overflow-hidden">
                  <span className="inline-block animate-slide-up animation-delay-600 text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground">AI </span>
                  <span className="inline-block animate-slide-up animation-delay-800 text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent bg-[length:200%_100%] animate-gradient"> Power</span>
                </div>
              </h1>

              {/* PREMIUM SEPARATOR LINE */}
              <div className="relative">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
                <div className="absolute inset-0 h-px w-full bg-gradient-to-r from-transparent via-secondary/30 to-transparent animate-pulse"></div>
              </div>

              <div className="space-y-6">
                <p className="text-xl lg:text-2xl text-muted-foreground w-4/5 leading-relaxed animate-fade-in animation-delay-1000">
                  Discover the next generation of fitness: 
                  <span className="text-primary font-semibold"> an AI coach </span>
                  that builds a program uniquely tailored to your body, your ambitions, and the way you live
                </p>

                {/* Enhanced feature highlights */}
                <div className="flex flex-wrap gap-3 animate-fade-in animation-delay-1200">
                  {['Instant Generation', 'Smart Analytics', 'Voice Interaction', 'Real-time Adaptation'].map((feature, i) => (
                    <span key={i} className="px-4 py-2 bg-card/50 backdrop-blur-sm border border-border rounded-full text-sm font-medium hover:border-primary/50 transition-colors">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* PREMIUM STATS */}
              <div className="flex items-center gap-12 py-8 font-mono animate-fade-in animation-delay-1400">
                {[
                  { value: '500+', label: 'Active Users', color: 'primary' },
                  { value: '3min', label: 'Generation', color: 'secondary' },
                  { value: '100%', label: 'Personalized', color: 'accent' }
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col group">
                    <div className={`text-4xl font-black text-${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                      {stat.value}
                    </div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                      {stat.label}
                    </div>
                    <div className={`h-0.5 w-0 bg-${stat.color} group-hover:w-full transition-all duration-500 mt-2`}></div>
                  </div>
                ))}
              </div>

              {/* ENHANCED BUTTON */}
              <div className="flex flex-col sm:flex-row gap-6 pt-8 animate-fade-in animation-delay-1600">
                <Button
                  size="lg"
                  asChild
                  className="group overflow-hidden relative bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-primary-foreground px-10 py-8 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-primary/25 transition-all duration-500 border border-primary/20"
                >
                  <Link href={"/generate-program"} className="flex items-center font-mono relative z-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    Build Your Program
                    <ArrowRightIcon className="ml-3 size-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="group px-10 py-8 text-xl font-bold rounded-2xl border-2 border-primary/30 hover:border-primary bg-transparent hover:bg-primary/5 backdrop-blur-sm transition-all duration-300"
                >
                  <Link href="#programs" className="flex items-center font-mono">
                    View Examples
                    <div className="ml-3 w-2 h-2 bg-primary rounded-full group-hover:animate-ping"></div>
                  </Link>
                </Button>
              </div>
            </div>

            {/* RIGHT SIDE CONTENT */}
            <div className="lg:col-span-5 relative animate-fade-in animation-delay-1800">
              {/* PREMIUM CORNER PIECES */}
              <div className="absolute -inset-6 pointer-events-none">
                <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-primary/50 rounded-tl-lg"></div>
                <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-secondary/50 rounded-tr-lg"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-accent/50 rounded-bl-lg"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-primary/50 rounded-br-lg"></div>
              </div>

              {/* PREMIUM IMAGE CONTAINER */}
              <div className="relative aspect-square max-w-lg mx-auto group">
                {/* Glowing background */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-card/80 to-background/60 backdrop-blur-sm border border-primary/20 shadow-2xl group-hover:shadow-primary/20 transition-all duration-500">
                  <Image
                    src="/ai.png"
                    alt="AI Fitness Coach"
                    width={500}
                    height={500}
                    className="size-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* ENHANCED SCAN LINE */}
                  <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,transparent_calc(50%-2px),theme(colors.primary)_50%,transparent_calc(50%+2px),transparent_100%)] bg-[length:100%_12px] animate-scanline pointer-events-none opacity-70"></div>

                  {/* PREMIUM DECORATIONS */}
                  <div className="absolute inset-0 pointer-events-none">
                    {/* Animated targeting circle */}
                    <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 border-2 border-primary/60 rounded-full animate-spin-slow"></div>
                    <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 border border-secondary/40 rounded-full animate-pulse"></div>

                    {/* Enhanced targeting lines */}
                    <div className="absolute top-1/2 left-0 w-1/3 h-0.5 bg-gradient-to-r from-primary via-secondary to-transparent animate-pulse"></div>
                    <div className="absolute top-1/2 right-0 w-1/3 h-0.5 bg-gradient-to-l from-primary via-secondary to-transparent animate-pulse"></div>
                    <div className="absolute top-0 left-1/2 h-1/3 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent animate-pulse"></div>
                    <div className="absolute bottom-0 left-1/2 h-1/3 w-0.5 bg-gradient-to-t from-primary via-secondary to-transparent animate-pulse"></div>
                    
                    {/* Corner accents */}
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-4 h-4 border-2 border-primary animate-ping"
                        style={{
                          top: i < 2 ? '10%' : '90%',
                          left: i % 2 === 0 ? '10%' : '90%',
                          transform: 'translate(-50%, -50%)',
                          animationDelay: `${i * 0.5}s`
                        }}
                      />
                    ))}
                  </div>

                  {/* Enhanced gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>
                  
                  {/* Data points overlay */}
                  <div className="absolute top-4 right-4 space-y-2">
                    {['CPU: 67%', 'RAM: 4.2GB', 'GPU: 89%'].map((stat, i) => (
                      <div key={i} className="text-xs font-mono text-primary/80 bg-background/60 px-2 py-1 rounded backdrop-blur-sm animate-pulse" style={{animationDelay: `${i * 0.3}s`}}>
                        {stat}
                      </div>
                    ))}
                  </div>
                </div>

                {/* ENHANCED TERMINAL OVERLAY */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-11/12">
                  <TerminalOverlay />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="programs">
        <UserPrograms />
      </section>
    </div>
  );
};
export default HomePage;