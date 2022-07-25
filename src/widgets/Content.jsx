import React from "react";
import Video from "../assets/1.mp4";
import playSVG from '../assets/play.svg';
import "tailwindcss/tailwind.css";

function Content() {
  return (
    <div className="grid justify-items-center gap-8 pt-28 relative">
      <p className="text-4xl md:text-6xl font-black text-center leading-tight md:leading-normal">
        打造一个完美的,现象的充满创造力的网站
      </p>
      <p className="text-xl text-gray-700 md:w-1/2 text-center">
        这是一个完美的工具 这是一个完美的工具 这是一个完美的工具
        这是一个完美的工具
      </p>
      <div>
        <button className="rounded bg-blue-500 text-base text-white py-3 px-8">
          立即试用
        </button>
        <button className="rounded bg-gray-500 text-base text-white py-3 px-8 ml-3">
          了解更多
        </button>
      </div>
      <div className=" relative grid justify-items-center">
        <video
          src={Video}
          controls
          className=" w-[856] h-[480] object-cover object-left-top rounded"
        ></video>
        <div className="flex  absolute rounded-full bg-white -bottom-7 px-5 py-4 drop-shadow-xl">
          <img src={playSVG} alt="" />
          查看演示视频
        </div>
      </div>
    </div>
  );
}

export default Content;
