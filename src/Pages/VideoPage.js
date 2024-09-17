import React from "react";
import { useParams } from "react-router-dom";
import data from "../Component/data";
import { FcClapperboard } from 'react-icons/fc'

function VideoPage() {
    const items = useParams();
    const info = data.find((item) => item.id == items.id)
    console.log(info)
    return (
        <div className="pb-16 ">
            <div className="w-[100%] flex-col  flex items-center">
                <img className="object-cover h-[35rem] w-[100%] " src={info.poster} />
            </div>
            <div className="h-[7rem] items-center flex  ">
                <div className=" ml-36 font-medium text-2xl border-b-[2px] flex items-center space-x-3"><FcClapperboard className="text-[37px]"/><span>OFFICIAL TRAILER</span></div>
            </div>
            <div className="w-full flex justify-center h-[40rem] ">
                <iframe
                    width="80%"
                    height="100%"
                    src={info.trailer}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
            {/* <div>{info.name}</div> */}
        </div>
    );
}
export default VideoPage

