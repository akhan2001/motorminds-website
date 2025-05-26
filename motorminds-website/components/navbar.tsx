"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, ChevronRight } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const navLinks = [
  { href: "/about-us", label: "About Us" },
  { href: "/features", label: "Features" },
  { href: "/products", label: "Products" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact-us", label: "Contact Us" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-[#212529]">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-3 mr-10">
              <Link href="/" className="flex items-center space-x-3 hover:opacity-90 transition-all duration-200 group">
                <Image
                  src="/motorminds-logo-white.png"
                  alt="Motorminds Logo"
                  width={25}
                  height={25}
                  className="group-hover:opacity-90 transition-opacity duration-200"
                />
                <span className="text-white text-l font-semibold group-hover:opacity-90 transition-opacity duration-200">MOTORMINDS</span>
              </Link>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button className="hidden md:flex bg-transparent bg-white text-black border border-white hover:border-white hover:text-white hover:bg-black rounded-full px-7 py-2 transition-all duration-200 cursor-pointer"
              onClick={() => window.open("https://app.motorminds.ca", "_blank")}
            >
              LOGIN
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="md:hidden p-2"
                >
                  <Menu className="h-6 w-6 text-white" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-black/95 border-l border-[#212529] p-0">
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b border-[#212529]">
                    <Link href="/" className="flex items-center space-x-3">
                      <Image
                        src="/motorminds-logo-white.png"
                        alt="Motorminds Logo"
                        width={25}
                        height={25}
                      />
                      <span className="text-white text-l font-semibold">MOTORMINDS</span>
                    </Link>
                  </div>
                  <div className="flex-1 p-6">
                    <nav className="flex flex-col space-y-4">
                      {navLinks.map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          className="text-gray-300 hover:text-white transition-colors py-2 text-lg"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </nav>
                  </div>
                  <div className="p-6 border-t border-[#212529]">
                    <Button className="w-full bg-white text-black hover:bg-gray-100 rounded-full"
                      onClick={() => window.open("https://app.motorminds.ca", "_blank")}
                    >
                      LOGIN
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  )
}