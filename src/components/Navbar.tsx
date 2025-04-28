import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-900">
          My Brain Health
        </Link>
        {/* Nav Links */}
        <div className="hidden md:flex gap-8 text-base font-medium text-gray-800">
          <Link href="#how-it-works" className="hover:text-blue-600 transition-colors">How It Works</Link>
          <Link href="#who-we-help" className="hover:text-blue-600 transition-colors">Who We Help</Link>
          <Link href="#resources" className="hover:text-blue-600 transition-colors">Resources</Link>
          <Link href="#community" className="hover:text-blue-600 transition-colors">Community</Link>
        </div>
        {/* Get Started Button */}
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 text-base font-semibold">
          Get Started
        </Button>
      </div>
    </nav>
  );
} 