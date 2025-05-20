"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-[#212529]">
            <nav className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-3">
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
                        <div className="flex items-center space-x-6">
                            <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                                About Us
                            </Link>
                            <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                                Cars
                            </Link>
                            <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                                Features
                            </Link>
                            <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                                Help
                            </Link>
                        </div>
                    </div>
                    <Button className="bg-transparent bg-white text-black border border-white hover:border-white hover:text-white hover:bg-none rounded-full px-7 py-2 transition-all duration-200 cursor-pointer">
                        LOGIN
                        <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                </div>
            </nav>
        </header>
    )
}