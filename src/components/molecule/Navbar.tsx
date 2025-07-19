"use client"

import Link from "next/link"
import { Icon } from "@iconify/react";

interface NavLink {
    title: string
    path: string
}

const navLinks: NavLink[] = [
    { title: "Home", path: "/" },
    { title: "Projects", path: "/projects" },
    // { title: "Experience", path: "/experience" }
]

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out border-b border-gray-300 backdrop-blur-lg inset-x-0 backdrop-white bg-[#f0eae7]/90">
            <div className="w-full px-4 lg:px-6">
                <div className="w-full max-w-4xl mx-auto undefined">
                    <div className="relative flex items-center ltablet:justify-start justify-between h-15">
                        <div className="flex-1 ltablet:flex-none lg:flex-none flex items-center justify-center lg:items-stretch lg:justify-start ltablet:ml-6">
                            <div className="flex-shrink-0 flex items-center"></div>
                            <div className="flex items-center lg:ml-6">
                                <div className="h-9 flex gap-x-4">
                                    {navLinks.map((item, index) => (
                                        <Link key={`${item.title}-${index}`} href={item.path} className="text-gray-500 hover:text-gray-800 h-9 flex items-center justify-center px-4 text-sm rounded-lg transition-colors duration-300">
                                            {item.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 ltablet:flex-none lg:flex-none ltablet:ml-auto lg:ml-auto flex items-center ptablet:justify-end ltablet:justify-end lg:justify-end gap-4 sm:static">
                            <div className="relative p-1 rounded-full max-w-[104px] bg-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-300">
                                <div className="relative flex">
                                    <Link href="https://github.com/AE4041" target="blank" className="relative z-10 h-8 w-8 flex items-center justify-center">
                                        <Icon icon="ph:github-logo-duotone" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}