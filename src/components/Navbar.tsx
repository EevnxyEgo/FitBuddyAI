"use client";

import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { DumbbellIcon, HomeIcon, UserIcon, ZapIcon, Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";

const Navbar = () => {
  const { isSignedIn } = useUser();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-border py-4 transition-all duration-300">
      {/* Animated top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* PREMIUM LOGO */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative p-2 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg backdrop-blur-sm border border-primary/30 group-hover:border-primary/50 transition-all duration-300">
            <ZapIcon className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg blur-lg group-hover:blur-xl transition-all duration-300"></div>
          </div>
          <span className="text-2xl font-black font-mono tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground">Fit</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent bg-[length:200%_100%] animate-gradient">Buddy</span>
            <span className="text-primary/70 text-lg">.AI</span>
          </span>
        </Link>

        {/* NAVIGATION */}
        <nav className="hidden md:flex items-center gap-8">
          {isSignedIn ? (
            <>
              <Link
                href="/"
                className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors group"
              >
                <HomeIcon size={18} className="group-hover:scale-110 transition-transform duration-200" />
                <span>Home</span>
              </Link>

              <Link
                href="/generate-program"
                className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors group"
              >
                <DumbbellIcon size={18} className="group-hover:rotate-12 transition-transform duration-200" />
                <span>Generate</span>
              </Link>

              <Link
                href="/profile"
                className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors group"
              >
                <UserIcon size={18} className="group-hover:scale-110 transition-transform duration-200" />
                <span>Profile</span>
              </Link>
              
              <Button
                asChild
                variant="outline"
                className="relative overflow-hidden border-primary/30 text-primary hover:text-white bg-transparent hover:bg-primary/90 backdrop-blur-sm transition-all duration-300 group"
              >
                <Link href="/generate-program" className="relative z-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  Get Started
                </Link>
              </Button>
              
              <div className="relative">
                <UserButton 
                  appearance={{
                    elements: {
                      avatarBox: "w-10 h-10 border-2 border-primary/30 hover:border-primary/50 transition-colors duration-300"
                    }
                  }}
                />
              </div>
            </>
          ) : (
            <>
              <SignInButton>
                <Button
                  variant={"outline"}
                  className="border-primary/30 text-primary hover:text-white hover:bg-primary/90 backdrop-blur-sm transition-all duration-300 group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <span className="relative z-10">Sign In</span>
                </Button>
              </SignInButton>

              <SignUpButton>
                <Button className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:from-secondary hover:to-primary shadow-lg hover:shadow-primary/25 transition-all duration-300 group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <span className="relative z-10">Sign Up</span>
                </Button>
              </SignUpButton>
            </>
          )}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button 
          className="md:hidden p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors duration-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border animate-slideDown">
          <nav className="container mx-auto px-4 py-6 space-y-4">
            {isSignedIn ? (
              <>
                <Link
                  href="/"
                  className="flex items-center gap-3 text-sm font-medium hover:text-primary transition-colors p-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <HomeIcon size={18} />
                  <span>Home</span>
                </Link>

                <Link
                  href="/generate-program"
                  className="flex items-center gap-3 text-sm font-medium hover:text-primary transition-colors p-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <DumbbellIcon size={18} />
                  <span>Generate</span>
                </Link>

                <Link
                  href="/profile"
                  className="flex items-center gap-3 text-sm font-medium hover:text-primary transition-colors p-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <UserIcon size={18} />
                  <span>Profile</span>
                </Link>
                
                <div className="pt-4 border-t border-border/50">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:from-secondary hover:to-primary"
                  >
                    <Link href="/generate-program" onClick={() => setIsMobileMenuOpen(false)}>
                      Get Started
                    </Link>
                  </Button>
                </div>
              </>
            ) : (
              <div className="space-y-3">
                <SignInButton>
                  <Button
                    variant={"outline"}
                    className="w-full border-primary/30 text-primary hover:bg-primary/10"
                  >
                    Sign In
                  </Button>
                </SignInButton>

                <SignUpButton>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground">
                    Sign Up
                  </Button>
                </SignUpButton>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};
export default Navbar;