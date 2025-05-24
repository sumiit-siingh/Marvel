import React from "react";
import { useParams } from "react-router-dom";
import data from "../Component/data";
import { FcClapperboard } from 'react-icons/fc';

function VideoPage() {
  const { id } = useParams();
  const info = data.find((item) => item.id === id);

  return (
    <div className="pb-16 w-full text-white bg-black">
      {/* Poster Image */}
      <div className="w-full flex flex-col items-center">
        <img
          className="object-cover w-full h-[15rem] sm:h-[20rem] md:h-[25rem] lg:h-[30rem] xl:h-[35rem]"
          src={info.poster}
          alt="Poster"
        />
      </div>

      {/* Title Section */}
      <div className="flex items-center justify-center h-20 sm:h-24">
        <div className="text-base sm:text-lg md:text-xl lg:text-2xl border-b-2 flex items-center space-x-2 sm:space-x-3 font-semibold">
          <FcClapperboard className="text-2xl sm:text-3xl md:text-[37px]" />
          <span>OFFICIAL TRAILER</span>
        </div>
      </div>

      {/* Trailer Iframe */}
      <div className="w-full flex justify-center px-4 sm:px-8">
        <iframe
          width="100%"
          height="315"
          className="rounded-xl w-full max-w-6xl aspect-video"
          src={info.trailer}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </div>
  );
}

export default VideoPage;
