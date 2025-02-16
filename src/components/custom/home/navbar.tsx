import Link from "next/link";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/common/mode-toggle";
import SearchInput from "./search-input";
import { getOrCreateUser } from "@/actions/user";
import MobileMenu from "./mobile-menu";

export default async function Navbar() {
  const user = await getOrCreateUser(); // Fetch user on the server

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left Section - Logo & Desktop Navigation */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  Byte
                </span>
                <span className="text-foreground">Code</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/articles"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Articles
              </Link>
              <Link
                href="/tutorials"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Tutorials
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                About
              </Link>
              <Link
                href="/dashboard"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Dashboard
              </Link>
            </div>
          </div>

          {/* Right Section - Search & Actions */}
          <div className="flex items-center gap-4">
            {/* Search Bar (Desktop) */}
            <SearchInput />

            {/* Theme Toggle */}
            <ModeToggle />

            {/* User Actions */}
            {user ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <SignedOut>
                <div className="hidden md:flex items-center gap-2">
                  <SignInButton>
                    <Button variant="outline">Login</Button>
                  </SignInButton>
                </div>
              </SignedOut>
            )}

            {/* Mobile Menu (Client Component) */}
            <Suspense fallback={<p>Loading menu...</p>}>
              <MobileMenu />
            </Suspense>
          </div>
        </div>
      </div>
    </nav>
  );
}
