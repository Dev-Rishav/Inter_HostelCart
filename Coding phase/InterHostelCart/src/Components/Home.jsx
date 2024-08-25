import React from 'react';
import pc from '../assets/pc-bg1.jpg'

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-[#f1f4f5] to-[#a2d6ee] text-[#543310] min-h-screen">
      <div className="p-6">
        <main className="max-w-6xl mx-auto">
          <div className="bg-gray-800 rounded-3xl p-12 mb-12 relative overflow-hidden  shadow-2xl  ">
            <img
              src={pc}
              className=" md:block hidden absolute inset-0 w-full h-full object-cover opacity-50"
              alt="Background"
            />
            <div className="p-4 relative z-10 w-1/2 pr-4 text-white slide-in-left">
              <p className="text-sm mb-2 text-yellow-400">IBM CBR'S</p>
              <h1 className="text-5xl font-bold mb-6">Sustainable Development</h1>
            </div>
        </div>
        </main>
        </div>
        </div>
  )
}

export default Home