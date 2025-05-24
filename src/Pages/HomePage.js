import React from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../Component/data';
import data2 from '../Component/data2';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white">
      {/* Navbar */}
      <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-black">
        <div className="flex items-center space-x-4">
          <div className="bg-red-600 text-stone-50 text-2xl font-extrabold px-4 py-1 rounded-md">MARVEL</div>
        </div>
        <div className="flex flex-wrap gap-4 justify-center md:justify-between w-full md:w-auto mt-2 md:mt-0">
          {['NEWS', 'COMICS', 'CHARACTERS', 'MOVIES', 'TV SHOWS', 'GAMES'].map((item) => (
            <div key={item} className="text-sm md:text-base hover:scale-110 transition-transform cursor-pointer">{item}</div>
          ))}
        </div>
        <div className="mt-2 md:mt-0">
          <div className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer">Sign up</div>
        </div>
      </div>

      {/* Banner */}
      <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px]">
        <img
          src="https://ik.imagekit.io/40vqc4eyk/project/marvel2.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1670955227626"
          alt="Marvel Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Upcoming Movies */}
      <div className="mt-6 px-4">
        <div className="text-lg sm:text-xl font-bold border-2 px-4 py-2 rounded-md w-fit shadow-md hover:shadow-neutral-500">
          UPCOMING MOVIES
        </div>
      </div>

      {/* Movie Cards */}
      <div className="flex flex-wrap justify-center gap-6 py-10 px-4 sm:px-8">
        {data.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(`/video/${item.id}`)}
            className="group cursor-pointer w-[80%] sm:w-[45%] md:w-[30%] lg:w-[12rem]"
          >
            <img
              src={item.image}
              alt={`Movie poster of ${item.name}`}
              className="w-full h-[250px] object-cover rounded-xl shadow-lg group-hover:-translate-y-2 transition duration-300"
            />
            <div className="mt-2 font-bold group-hover:text-red-500">{item.name}</div>
            <div className="text-sm opacity-60">{item.date}</div>
          </div>
        ))}
      </div>

      {/* Avengers Section */}
      <div className="group">
        <div className="flex flex-wrap justify-center gap-2 px-4">
          {['/ironlogo.jpg', '/captain.jpg', '/ave.jpg', '/th.jpg', '/hulklogo3.jpg'].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Avenger ${i + 1}`}
              className="w-[45%] sm:w-[30%] md:w-[18%] h-[200px] object-cover rounded-xl hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
        <div className="text-3xl sm:text-4xl text-center font-extrabold mt-4 group-hover:text-gray-200">
          The Avengers: Earth's Mightiest Heroes
        </div>
      </div>

      {/* Trending Topics */}
      <div className="mt-10 px-4">
        <div className="text-lg sm:text-xl font-bold border-2 px-4 py-2 rounded-md w-fit shadow-md hover:shadow-neutral-500">
          Trending topics
        </div>
      </div>

      {/* Trending Cards */}
      <div className="flex flex-wrap justify-center gap-6 py-10 px-4 sm:px-8">
        {data2.map((item, index) => (
          <div
            key={index}
            className="group w-[80%] sm:w-[45%] md:w-[30%] lg:w-[12rem]"
          >
            <img
              src={item.image}
              alt={`Trending: ${item.name}`}
              className="w-full h-[250px] object-cover rounded-xl shadow-lg group-hover:-translate-y-2 transition duration-300"
            />
            <div className="mt-2 font-bold group-hover:text-red-500">{item.name}</div>
            <div className="text-sm opacity-60">{item.date}</div>
          </div>
        ))}
      </div>

      {/* Marvel Info Section */}
      <div className="text-center px-4">
        <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold hover:text-yellow-500 transition-colors">
          All About 'MARVEL' Studio
        </div>
        <img src="/marvelgroup.png" alt="Marvel Group" className="mx-auto my-6 max-w-full h-auto" />
      </div>

      {/* Footer */}
      <div className="bg-black px-4 py-6 text-stone-300 flex flex-wrap justify-around">
        <div>
          <img src="/marvelm.png" alt="Marvel Logo" className="h-16" />
        </div>
        <div className="space-y-2">
          {['ABOUT', 'HELP', 'CAREERS', 'INTERNSHIP'].map((item) => (
            <div key={item} className="hover:opacity-50 cursor-pointer">{item}</div>
          ))}
        </div>
        <div className="space-y-2">
          {['ADVERTISING', 'DISNEY+', 'MARVELHQ.COM', 'DIGITAL COMICS'].map((item) => (
            <div key={item} className="hover:opacity-50 cursor-pointer">{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
