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
          <Link href="/about" className="hover:text-blue-600 transition-colors ml-auto">About Us</Link>
        </div>
      </div>
    </nav>
  );
} 