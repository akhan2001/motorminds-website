"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useState } from "react"

export function Navbar() {
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [isAtTop, setIsAtTop] = useState(true)

    useMotionValueEvent(useScroll().scrollY, "change", (latest) => {
        // Check if we're at the top
        setIsAtTop(latest < 20)

        // Determine scroll direction and update visibility
        if (latest > lastScrollY) {
            // Scrolling down
            setIsVisible(false)
        } else {
            // Scrolling up
            setIsVisible(true)
        }

        setLastScrollY(latest)
    })

    const navVariants = {
        visible: { 
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 30
            }
        },
        hidden: { 
            y: -100,
            opacity: 0,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 30
            }
        }
    }

    return (
        <motion.header 
            variants={navVariants}
            animate={isVisible ? "visible" : "hidden"}
            initial="visible"
            className={`fixed top-0 left-0 right-0 z-50 bg-black ${
                !isAtTop ? 'bg-opacity-50 backdrop-blur-md shadow-lg' : 'bg-opacity-90'
            } transition-all duration-300`}
        >
            <nav className="container mx-auto px-4 py-6 border-b border-[#5d5d5d]">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="font-bold text-xl">
                            <Link href="/">
                                <Image
                                    src="/motorminds-horizontal-logo-black.png"
                                    alt="Motorminds Logo"
                                    width={180}
                                    height={40}
                                />
                            </Link>
                        </div>
                        <div className="hidden md:flex space-x-6 ml-10">
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
                    <Button className="bg-transparent hover:bg-[#e5383b] text-[#e5383b] border border-[#e5383b] hover:border-[#e5383b] hover:text-white rounded-full px-6 transition-all duration-200 cursor-pointer">
                        LOGIN
                        <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                </div>
            </nav>
        </motion.header>
    )
}