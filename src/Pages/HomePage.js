import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import data from '../Component/data'

const  HomePage = () => {
    const navigate = useNavigate()

    return(
        <div className=' w-full  bg-gradient-to-r from-gray-700 via-gray-900 to-black'>
        <div className=" cursor-pointer w-full h-[4rem] flex font-semibold justify-between pr-5 bg-black ">
          <div className="flex ml-3 items-center space-x-6 ">
            <div className="hover:bg-opacity-50 mr-10 font-extrabold text-2xl scale-y-[1.8]  text-stone-50 px-4 flex justify-center bg-red-600">MARVEL </div>
            </div>
            <div className='flex justify-between items-center w-[45rem]'>
              <div className="hover:scale-[1.2] transition-transform  text-stone-50  text-center">NEWS</div>
              <div className="hover:scale-[1.2] transition-transform  text-stone-50  text-center">COMICS</div>
              <div className="hover:scale-[1.2] transition-transform  text-stone-50  text-center">CHARACTERS</div>
              <div className="hover:scale-[1.2] transition-transform  text-stone-50  text-center">MOVIES</div>
              <div className="hover:scale-[1.2] transition-transform  text-stone-50  text-center">TV SHOWS</div>
              <div className="hover:scale-[1.2] transition-transform  text-stone-50  text-center">GAMES</div>
          </div>
          <div className='flex items-center space-x-4'>
            <div className="bg-red-500 rounded-[8px] px-3 py-1 cursor-pointer text-lg">Sign up</div>
          </div>
        </div>
  
  
        <div className=" h-[25rem] w-[100%]  bg-[#3f1212bf] flex-col flex items-center ">
          <img alt='Not Found' className='h-[25rem] w-[100%] object-cover' src='https://ik.imagekit.io/40vqc4eyk/project/marvel2.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1670955227626' />
  
        </div>
        <div className=' w-[100%] flex flex-col relative mt-8'>
          <div className='font-bold text-xl px-5 rounded-md  py-1 border-[2px] ml-10 w-[15rem] h-[2.6rem] shadow-[0px_0px_5px_3px] shadow-neutral-800 hover:shadow-neutral-600 cursor-pointer text-stone-300'>UPCOMING MOVIES</div>
  
        </div>
  
        <div className='flex py-10 px-10 flex-wrap justify-between  '>
          {data.map((items, index) => (
            <div onClick={() => navigate(`/video/${items.id}`) } className='group w-[12rem] ' key={index}>
              <img alt='Not Found' className=' w-[12rem]  h-[17rem] object-cover group-hover:-translate-y-2 shadow-lg shadow-neutral-600 transition-transform duration-[0.25s] ease-in-out rounded-xl ' src={items.image} />
              <div className='text-left font-bold mt-3 group-hover:text-red-500 transition-colors duration-[0.25s] text-stone-300 cursor-pointer'>{items.name}</div>
              <div className=' text-left text-sm font-bold opacity-60 cursor-pointer text-stone-400'>{items.date}</div>
            </div>
  
          ))}
        </div>
        <div className='h-[25rem] group'>
          <div className='  h-[20rem] flex '>
            <img alt='Not Found' className='h-[20rem] w-[20%] object-cover hover:scale-110 hover:rounded-2xl ease-in-out transition-all duration-500 hover:shadow-[0px_0px_5px_3px] hover:shadow-sky-600 ' src='/ironlogo.jpg' />
            <img alt='Not Found' className='h-[20rem] w-[20%] object-cover hover:scale-110 hover:rounded-2xl ease-in-out transition-all duration-500 hover:shadow-[0px_0px_5px_3px] hover:shadow-sky-600 ' src='/captain.jpg' />
            <img alt='Not Found' className='h-[20rem] w-[20%] object-cover hover:scale-110 hover:rounded-2xl ease-in-out transition-all duration-500 hover:shadow-[0px_0px_5px_3px] hover:shadow-sky-600 ' src='/ave.jpg' />
            <img alt='Not Found' className='h-[20rem] w-[20%] object-cover hover:scale-110 hover:rounded-2xl ease-in-out transition-all duration-500 hover:shadow-[0px_0px_5px_3px] hover:shadow-sky-600 ' src='/th.jpg' />
            <img alt='Not Found' className='h-[20rem] w-[20%] object-cover hover:scale-110 hover:rounded-2xl ease-in-out transition-all duration-500 hover:shadow-[0px_0px_5px_3px] hover:shadow-sky-600 ' src='/hulklogo3.jpg' />
          </div>
          <div className='font-extrabold text-center  group-hover:text-gray-200 transition-colors duration-[0.25s] hover:text text-5xl h-[4rem] text-black cursor-pointer  '>The Avengers: Earth's Mightiest Heroes
          </div>
        </div>
        <div className=' h-[3rem]'>
          <div className='  flex flex-col'>
            <div className='bg-gray-700 shadow-[0px_0px_4px_1px] shadow-neutral-900 hover:shadow-neutral-500 font-bold text-xl border-[3px] ml-10 py-1 px-10 text-stone-100 bg- rounded-md w-[15rem] h-[2.6rem] cursor-pointer'>Trending topics </div>
          </div>
        </div>
        <div className=' w-[100%] flex py-10 px-10 flex-wrap justify-between'>
          {data1.map((items, index) => (
            <div className='group' key={index}>
              <div className='  w-[100%] mt-7'>
                <img alt='Not Found' className=' w-[12rem] h-[17rem] object-cover rounded-xl  group-hover:-translate-y-2 shadow-lg shadow-neutral-600 transition-transform duration-[0.25s] ease-in-out  ' src={items.image} />
                <div className=' text-left font-bold mt-3  px-2  w-[12rem]  group-hover:text-red-500 transition-colors duration-[0.25s] text-stone-300 cursor-pointer '>{items.name}  </div>
                <div className='font-bold px-2 opacity-60 text-left cursor-pointer text-sm text-stone-400'>{items.date}</div>
              </div>
            </div>
          ))}
        </div>
        <div className=' w-[100%] ' >
          <div className='text-center font-extrabold text-6xl transition-colors duration-[1s] hover:text-yellow-500 text-stone-900 cursor-pointer'>All About 'MARVEL' Studio</div>
          <img alt='Not Found' className=' py-9 ml-11 object-center' src='/marvelgroup.png ' />
  
        </div>
        <div className='-red-400 h-[7rem] flex'>
          < div className=' h-[5rem] w-[14%] ml-11'>
            <img alt='Not Found' className='object-cover mt-5  h-[5rem] ' src='/marvelm.png ' />
          </div>
          <div className=' ml-16 mt-3 '>
            <div className='text-stone-300 hover:opacity-30 cursor-pointer'>ABOUT</div>
            <div className='text-stone-300 hover:opacity-30 cursor-pointer'>HELP</div>
            <div className='text-stone-300 hover:opacity-30 cursor-pointer'>CAREERS</div>
            <div className='text-stone-300 hover:opacity-30 cursor-pointer'>INTERNSHIP</div>
          </div>
          <div className=' ml-28 mt-3 '>
            <div className='text-stone-300 hover:opacity-30 cursor-pointer'>ADVERTISING</div>
            <div className='text-stone-300 hover:opacity-30 cursor-pointer'>DISNEY+</div>
            <div className='text-stone-300 hover:opacity-30 cursor-pointer'>MARVELHQ.COM</div>
            <div className='text-stone-300 hover:opacity-30 cursor-pointer'>DIGITAL COMICS</div>
          </div>
        </div>
      </div> 
    )
}
export default HomePage
  
  const data1 = [
    {
      name: "Captain America:New World Order",
      image: "/canwo.jpg",
      date: "MAY 3, 2024"
  
    },
    {
      name: "Thunderbolts",
      image: "/tb.jpg",
      date: "JUL 26, 2024"
  
    },
    {
      name: "Guardians Of The Galaxy",
      image: "/Gotg.jpg",
      date: "MAY 05 2023"
  
    },
  
    {
      name: "The Marvels",
      image: "/tm.jpg",
      date: "JUL 28, 2025"
  
    },
  
    {
      name: "Spider-Man: No Way Home ",
      image: "/Gotg6.jpg",
      date: "DEC 17 2021"
    },
  
    {
      name: "Black Panther: Wakanda Forever",
      image: "/Gotg3.jpg",
      date: "NOV 11 2022"
    },
    {
      name: "Thor: Love and Thunder",
      image: "/Gotg4.jpg",
      date: "JULY 08 2022"
    },
    {
      name: "Doctor Strange in the Multiverse of Madness",
      image: "/Gotg5.jpg",
      date: "MAY 06 2022"
    },
    {
      name: "Eternals",
      image: "/eternals.jpg",
      date: "2021"
    },
  
    {
      name: "Shang-Chi And The Legend Of Ten Rings",
      image: "/shangchi.jpg",
      date: "SEP 3, 2021"
    },
  
    {
      name: "Black Widow",
      image: "/bw.jpg",
      date: "JUL 9, 2021"
    },
  
    {
      name: "Spider Man",
      image: "/sm.jpg",
      date: " JUL 2, 2019"
    },
    {
      name: "Avengers: Endgame",
      image: "/ae.jpg",
      date: "APRIL 26, 2019"
    },
    {
      name: "Captain Marvel",
      image: "/cm.jpg",
      date: "2019"
    },
    {
      name: "Avengers: Infinity War",
      image: "/aiw.jpg",
      date: "2018"
    },
  
    {
      name: "Ant-Man and The Wasp",
      image: "/amw.jpg",
      date: "2018"
    },
  
    {
      name: "Black Panther",
      image: "/bp.jpg",
      date: "2018"
    },
  
    {
      name: "Thor: Ragnarok",
      image: "/tr.jpg",
      date: "2017"
    },
    {
      name: "Spide Man: Homecoming",
      image: "/smhc.jpg",
      date: "2017"
    },
    {
      name: "Guardians of The Galaxy vol 2",
      image: "/gotg1.jpg",
      date: "2017"
    },
    {
      name: "Doctor Strange",
      image: "/ds.jpg",
      date: "2016"
    },
  
    {
      name: "Captain America: Civil War",
      image: "/cacw.jpg",
      date: "2016"
    },
  
    {
      name: "Ant-Man",
      image: "/am.jpg",
      date: "2015"
    },
  
    {
      name: "Avengers: Age of Ultron",
      image: "/au.jpg",
      date: "2015"
    },
  
  ]
