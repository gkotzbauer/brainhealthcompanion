import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { WaitlistForm } from "@/components/WaitlistForm";

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
          <DropdownMenu>
            <DropdownMenuTrigger className="hover:text-blue-600 transition-colors">
              Who We Help
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/families-and-caregivers">Families & Caregivers</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/care-agencies">Care Agencies</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-gray-400 cursor-not-allowed">
                Clinicians (Coming Soon)
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="#resources" className="hover:text-blue-600 transition-colors">Resources</Link>
          <Link href="#community" className="hover:text-blue-600 transition-colors">Community</Link>
        </div>
        {/* Get Started Button */}
        <WaitlistForm triggerText="Get Started" />
      </div>
    </nav>
  );
} 