"use client"

import Link from "next/link"
import { ProjectData } from "./data"

export default function Projects() {
    return (
        <div className="w-full py-20 px-4 lg:px-6 min-h-screen pb-0">
            <div className="w-full max-w-4xl mx-auto">
                <div className="relative pb-20">
                    <div className="pt-10 sm:pt-10 mb-8 space-y-5 text-gray-700">
                        <h1 className="prose text-gray-800 text-2xl font-medium">My projects</h1>
                        <p>
                            Since 2021, I&apos;ve designed and built several projects, including landing pages, e-commerce, and dashboards. Below are some key highlights from my projects.
                        </p>

                        <div className="grid sm:grid-cols-2 ltablet:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6">
                            {ProjectData.map((item, index) => (
                                <Link href={item.url} target="blank" className="relative group" key={`${item.url} + ${index}`}>
                                    <div className="border border-gray-300 p-3 rounded-xl">
                                        <div className="relative">
                                            <img src={item.imageUrl} alt="" className="relative w-full h-64 bg-muted-100 dark:bg-muted-700/20 rounded-lg overflow-hidden group-hover:opacity-75 object-center object-cover transition-opacity duration-300" />
                                        </div>
                                        <div className="mt-2">
                                            <h3 className="font-medium text-lg capitalize text-gray-700 group-hover:text-primary-500 transition-colors duration-300">{item.title}</h3>
                                            <p className="text-xs text-gray-500">{item.description}</p>
                                            <div className="flex flex-wrap items-center gap-2 mt-3">
                                                {item.tags?.map((tg, index) => (
                                                    <span key={`tags-${tg}-${index}`} className="flex-none text-xs font-medium px-2 py-1 rounded-lg bg-orange-100 text-orange-500 ring-1 ring-inset">
                                                        {tg}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}