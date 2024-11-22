import React from 'react'
import Navbar from '../components/Navbar'

const Homepage = () => {
    return (
        <>
            <main className="px-4 lg:px-8 pt-16">
                <div
                    id="recent-works-1"
                    className="your-class grid grid-cols-1  gap-4 lg:gap-3 mb-6"
                    style={{ width: "100%" }}
                >
                    <div className="your-carousel flex" />
                    {/* Recent works here  */}
                </div>
                <section className="lg:py-14 flex justify-center items-center">
                    <div className="container flex flex-col items-center text-center">
                        {/* Main content */}
                        <div>
                            {/* Career Objective */}
                            <div className="objective mb-16">
                                <div className="flex flex-col w-full">
                                    <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 w-full mb-6 text-justify">
                                        M3TFluiD lab
                                    </h1>
                                    <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 w-full mb-6 text-justify">
                                        M3TFluiD lab is dedicated to exploring the complex and
                                        multidisciplinary nature of climate adaptation and environmental
                                        mitigation strategies (CAEMS) in the built environment using
                                        fundamental fluid dynamics, advanced data-driven models, and
                                        multi-fidelity computational techniques.
                                    </h1>
                                    <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 w-full text-justify">
                                        The M3TFluiD lab outcomes have a broad range of applications in
                                        building energy modeling, advanced air mobility, smart city
                                        planning, and renewable energy solutions. These outcomes also
                                        support empowering local communities with the required tools and
                                        knowledge to use and support CAEMS.
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Homepage