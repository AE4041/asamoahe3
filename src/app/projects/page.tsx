

export default function Projects() {
    return (
        <div className="w-full py-20 px-4 lg:px-6 min-h-screen pb-0">
            <div className="w-full max-w-4xl mx-auto">
                <div className="relative pb-20">
                    <div className="pt-10 sm:pt-10 mb-8 space-y-5 text-gray-700">
                        <h1 className="prose text-gray-800 text-2xl font-medium">My projects</h1>
                        <p>
                            Since 2021, I've designed and built several projects, including landing pages, e-commerce, and dashboards. Below are some key highlights from my projects.
                        </p>

                        <div className="grid sm:grid-cols-2 ltablet:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6">
                            <div className="relative group">
                                <div className="border border-gray-300 p-3 rounded-xl">
                                    <div className="relative">
                                        <img src="/images/curare.png" alt="" className="relative w-full h-64 bg-muted-100 dark:bg-muted-700/20 rounded-lg overflow-hidden group-hover:opacity-75 object-center object-cover transition-opacity duration-300" />
                                    </div>
                                    <div className="mt-2">
                                        <h3 className="font-medium text-lg capitalize text-gray-700 group-hover:text-primary-500 transition-colors duration-300">Curare Pro Landing Page</h3>
                                        <p className="text-xs text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nemo nimium beatus est.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative group">
                                <div className="border border-gray-300 p-3 rounded-xl">
                                    <div className="relative">
                                        <img src="/images/sedis.png" alt="" className="relative w-full h-64 bg-muted-100 dark:bg-muted-700/20 rounded-lg overflow-hidden group-hover:opacity-75 object-center object-cover transition-opacity duration-300" />
                                    </div>
                                    <div className="mt-2">
                                        <h3 className="font-medium text-lg capitalize text-gray-700 group-hover:text-primary-500 transition-colors duration-300">Curare Pro Landing Page</h3>
                                        <p className="text-xs text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nemo nimium beatus est.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative group">
                                <div className="border border-gray-300 p-3 rounded-xl">
                                    <div className="relative">
                                        <img src="/images/curare-pro.png" alt="" className="relative w-full h-64 bg-muted-100 dark:bg-muted-700/20 rounded-lg overflow-hidden group-hover:opacity-75 object-center object-cover transition-opacity duration-300" />
                                    </div>
                                    <div className="mt-2">
                                        <h3 className="font-medium text-lg capitalize text-gray-700 group-hover:text-primary-500 transition-colors duration-300">Curare Pro Landing Page</h3>
                                        <p className="text-xs text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nemo nimium beatus est.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative group">
                                <div className="border border-gray-300 p-3 rounded-xl">
                                    <div className="relative">
                                        <img src="/images/carevoucher.png" alt="" className="relative w-full h-64 bg-muted-100 dark:bg-muted-700/20 rounded-lg overflow-hidden group-hover:opacity-75 object-center object-cover transition-opacity duration-300" />
                                    </div>
                                    <div className="mt-2">
                                        <h3 className="font-medium text-lg capitalize text-gray-700 group-hover:text-primary-500 transition-colors duration-300">Curare Pro Landing Page</h3>
                                        <p className="text-xs text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nemo nimium beatus est.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}