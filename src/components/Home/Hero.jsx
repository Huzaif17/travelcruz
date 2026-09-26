import React from "react";
import TravelImage from "../../assets/TravelImage/Trave1.png";


const Hero = () => {
    return (
        <div>
            <section className="relative h-screen flex items-center">

                <div className="absolute left-12 top-[50%] -translate-y-1/2 z-10">

                    <p className="text-xs uppercase tracking-[0.2em] text-white">
                        Travel Agency
                    </p>

                    <h1 className="text-7xl font-bold tracking-tight text-white">
                        TravelCruz
                        <span className='block mt-2 italic'>
                            Different
                        </span>
                    </h1>

                    <p className='mt-6 text-xl max-w-xs text-white font-bold'>
                        Plan less. Experience more.
                    </p>

                </div>
                <img
                    className="w-full h-full absolute object-cover ml-auto mr-3 rounded-sm"

                    src={TravelImage}
                    alt='Travel'
                // style={{ clipPath: 'polygon(0 3%,100% 0, 100% 94%, 97% 96%, 94% 95%, 91% 98%, 87% 96%, 83% 99%, 78% 96%, 73% 98%, 68% 95%, 63% 99%, 58% 96%, 52% 98%, 47% 95%, 41% 99%, 35% 96%, 29% 98%, 23% 95%, 17% 99%, 10% 96%, 0 100%)' }}
                />

                {/* <video
                    src={TravelVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                ></video>
                <div className="absolute inset-0 bg-black/30"></div> */}

            </section>
        </div>
    )
}

export default Hero
