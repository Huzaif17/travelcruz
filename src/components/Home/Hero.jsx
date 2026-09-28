import React, { useEffect, useRef } from "react";
import TravelImage from "../../assets/TravelImage/Trave2.png";
import BoyImage from "../../assets/Animation/Boy2.png";
import { animate } from "animejs";

const Hero = () => {

    const boyRef = useRef(null);
    const headingRef = useRef(null)
    const labelRef = useRef(null)
    const taglineRef = useRef(null)



    // Boy entrance animation
    useEffect(() => {
        animate(boyRef.current, {
            translateY: [-20, 0],
            opacity: [0, 1],
            duration: 1000,
        });
    }, []);

    // Boy scroll animation
    useEffect(() => {
        const handleScroll = () => {
            const scroll = Math.min(window.scrollY / 500, 1);

            animate(boyRef.current, {
                scale: 1 + scroll * 2,
                duration: 100,
                ease: "linear"
            });
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        animate(headingRef.current, {
            opacity: [0, 1],
            translateY: [40, 0],
            duration: 1000,
            delay: 300,
            ease: "outExpo"
        })
    }, [])

    useEffect(() => {
        animate(labelRef.current, {
            opacity: [0, 1],
            translateY: [-15, 0],
            duration: 700,
            delay: 100,
            ease: "outExpo",
        })
    }, [])

    useEffect(() => {
        animate(taglineRef.current, {
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 800,
            delay: 500,
            ease: "outExpo"
        })
    }, [])


    return (
        <div>
            <section className="relative h-screen flex items-center">

<div className="absolute left-12 top-[50%] -translate-y-1/2 z-10">

                    <p ref={labelRef} className="text-xs uppercase tracking-[0.2em] text-white">
                        Travel Agency
                    </p>

                    <h1 ref={headingRef} className="text-7xl font-bold tracking-tight text-white">
                        TravelCruz
                        <span className="block mt-2 italic">
                            Different
                        </span>
                    </h1>

                    <p ref={taglineRef} className="mt-6 text-xl max-w-xs text-white font-bold">
                        Plan less. Experience more.
                    </p>

                </div>

                <img
                    className="w-full h-full absolute object-cover ml-auto mr-3 rounded-sm"
                    src={TravelImage}
                    alt="Travel" />

                <img
                    ref={boyRef}
                    src={BoyImage}
                    alt="Boy"
                    className="absolute bottom-0 left-[30%] w-[300px] z-20" />

            </section>
        </div>
    );
};

export default Hero;









{/* <video
                    src={TravelVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                ></video>
                <div className="absolute inset-0 bg-black/30"></div> */}