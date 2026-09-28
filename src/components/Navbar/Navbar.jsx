import React from 'react'
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { animate } from "animejs";

const Navbar = () => {

    const Anima = useRef(null)
    const logoRef = useRef(null)
    const linkRef = useRef(null)
    const ctaRef = useRef(null)

    useEffect(() => {

        // Main Navbar
        animate(Anima.current, {
            translateY: [-30, 0],
            opacity: [0, 1],
            duration: 1000,
            ease: "outExpo"
        })

        // Logo
        animate(logoRef.current, {
            opacity: [0, 1],
            translateX: [-20, 0],
            duration: 800,
            ease: "outExpo",
            delay: 200,
        })

        // Navigation Links
        animate(linkRef.current, {
            opacity: [0, 1],
            translateY: [-15, 0],
            duration: 800,
            ease: "outExpo",
            delay: 400,
        })

        // CTA
        animate(ctaRef.current, {
            opacity: [0, 1],
            translateX: [20, 0],
            duration: 1000,
            ease: "outExpo",
            delay: 600,
        })
    }, [])


    return (
        <div
            ref={Anima}
            className='absolute top-0 left-0 z-50 w-full px-6 py-5 md:px-12'>

            <div className='flex items-center justify-between'>

                {/* Logo */}
                <div>
                    <Link
                        className='text-4xl font-bold tracking-tight text-white'
                        to='/'
                    >
                        <span ref={logoRef}>
                            TravelCruz
                        </span>
                    </Link>
                </div>


                {/* Navbar */}
                <div
                    ref={linkRef}
                    className='flex items-center gap-14'>

                    <Link
                        className='font-semibold text-white text-lg hover:opacity-50 transition-opacity hover:text-[#afce41] hover:underline underline-offset-8 transition-colors'
                        to="/">
                        Home
                    </Link>

                    <Link
                        className='font-semibold text-white text-lg hover:opacity-50 transition-opacity hover:text-[#D9FF4F] hover:underline underline-offset-8 transition-colors'
                        to="/destinations">
                        Destination
                    </Link>

                    <Link
                        className='font-semibold text-white text-lg hover:opacity-50 transition-opacity hover:text-[#D9FF4F] hover:underline underline-offset-8 transition-colors'
                        to="/about">
                        About
                    </Link>

                    <Link
                        className='font-semibold text-white text-lg hover:opacity-50 transition-opacity hover:text-[#D9FF4F] hover:underline underline-offset-8 transition-colors'
                        to="/contact">
                        Contact
                    </Link>

                </div>


                {/* Plan a Trip */}
                <div className='flex items-center'>

                    <Link to='/contact'>
                        <div ref={ctaRef}>
                            <button className="flex items-center gap-3 rounded-full bg-white px-8 py-2 text-base text-black font-bold transition-colors hover:bg-[#D9FF4F] hover:scale-105 transition-transform duration-300 hover:text-black">
                                Plan a Trip
                                <span className='text-xl'>
                                    →
                                </span>
                            </button>
                        </div>
                    </Link>

                </div>

            </div>

        </div>
    )
}

export default Navbar