"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, X } from "lucide-react";
import { SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden text-muted-foreground hover:text-foreground"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {isOpen && (
        <div className="md:hidden py-4 space-y-4 border-t">
          {/* Search Bar (Mobile) */}
          <div className="px-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles..."
                className="pl-10 w-full focus-visible:ring-1"
              />
            </div>
          </div>

          {/* Mobile Navigation Links */}
          <div className="space-y-2 px-4">
            <Link
              href="/articles"
              className="block px-3 py-2 text-base font-medium text-foreground"
              onClick={() => setIsOpen(false)}
            >
              Articles
            </Link>
            <Link
              href="/tutorials"
              className="block px-3 py-2 text-base font-medium text-foreground"
              onClick={() => setIsOpen(false)}
            >
              Tutorials
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-base font-medium text-foreground"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/dashboard"
              className="block px-3 py-2 text-base font-medium text-foreground"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
          </div>

          {/* Mobile Auth Buttons */}
          <SignedOut>
            <div className="px-4 flex flex-col gap-2">
              <SignInButton>
                <Button variant="outline" className="w-full">
                  Login
                </Button>
              </SignInButton>
              <SignUpButton>
                <Button className="w-full">Sign up</Button>
              </SignUpButton>
            </div>
          </SignedOut>
        </div>
      )}
    </>
  );
}
