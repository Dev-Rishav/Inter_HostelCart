import React, { useEffect, useRef,useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { gsap } from "gsap";

const Hero = () => {
    const textRef = useRef(null);

  useEffect(() => {
    const letters = textRef.current.querySelectorAll(".letter");

    gsap.fromTo(
      letters,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.05, // Delay between each letter animation
        ease: "power2.out"
      }
    );
  }, []);

                                                       //search bar

  const searchRef = useRef(null);
  const placeholderRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Animation for the search bar
    gsap.fromTo(
      searchRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 3, ease: "back.out(1.7)" }
    );

    // Animation for the placeholder text with bounce effect
    const letters = placeholderRef.current.querySelectorAll(".letter");
    gsap.fromTo(
      letters,
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.05,
        ease: "power2.out",
      }
    );
  }, []);
    return (
        <div className="w-11/12 xl:w-4/5 h-[350px] m-auto mt-8 bg-stone-200 rounded-xl" >
            <div className="w-full h-full flex justify-center items-center">
                <div className="w-11/12 xl:w-1/2 p-5 space-y-5">
                    <h1 className="text-5xl font-semibold">
                       
                        <span ref={textRef} className="inline-block">
                             {"Find the Perfect Product  Online".split("").map((letter, index) => (
                            <span key={index} className="letter inline-block">
                                {letter === " " ? "\u00A0" : letter}
                            </span>
                            ))}
                        </span>
                    </h1>
                    {/* <div className="bg-white flex items-center space-x-2 px-5 py-2 rounded-full">
                        <AiOutlineSearch size={"1.2rem"} />
                        <input type="text" placeholder="Search..." className="outline-0 w-full" />
                    </div> */}
                    <div  className="mb-4 ">
                        <h1 className="text-4xl font-bold text-red-500 mb-2">
                            <span ref={placeholderRef} className="inline-block">
                                {"Search...".split("").map((letter, index) => (
                                <span key={index} className="letter inline-block">
                                    {letter === " " ? "\u00A0" : letter}
                                </span>
                                ))}
                            </span>
                        </h1>

                        {/* Search Input Field */}
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Type your search here..."
                            className=" px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-800"
                        />
                    </div>

                </div>
            </div>
        </div>
    )
};

export default Hero;