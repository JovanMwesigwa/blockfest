import React from 'react'
import backgroundImage from '../assets/img/cloth.jpg'

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen px-4 ">
      <div className="text-center">
        <h1 className="mb-4 text-5xl font-bold text-gray-800 md:text-9xl">
          Welcome to the Blockchain DevFest
        </h1>
        <p className="mb-8 text-lg text-gray-600 sm:text-xl md:text-2xl">
          Join us for an exciting week leading up to the main event, where we'll
          host an ideathon that encourages participants to generate and refine
          ideas for potential blockchain applications that address pressing
          African challenges.
        </p>
        <button className="p-5 px-8 text-lg font-bold text-white rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Home
