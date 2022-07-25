import React from "react";
import SectionHeader from "./SectionHeader";
import Image1 from "../assets/pexels-photo-8348457.jpg";
import SVG from '../assets/vite.svg';
import "tailwindcss/tailwind.css";



function Solution() {
  return (
    <div>
      <SectionHeader
        title="解决方案"
        subTitle="解决方案解决方案解决方案解决方案解决方案解决方案解决方案"
      />
      {/* 在比较大的屏幕下使用2列布局,左列表,右图片,小的屏幕只用1列显示,上列表,下图片 */}
      <div className="grid lg:grid-cols-2 mt-20 gap-20 ">
        {/* 下面是左侧列表 */}
        <div>
          <h3 className="mt-7 text-[32px] font-bold">强有力的工具</h3>
          <p className="mt-4 mb-8">强有力的工具</p>
          <ul className="grid gap-3">
            {[1, 2, 3].map((item) => {
              return (
                <li
                  className={`p-5 justify-between rounded border border-zinc-100 
                ${item === 1 && "bg-zinc-100"}
                `}
                  key={item}
                >
                  <p className="text-lg font-bold">构建简单的生态系统</p>
                  
                  <div className="flex justify-between items-center relative">
                    <p className="text-lg leading-7 mt-1">
                      构建简单的生态系统构建简单的生态系统构建简单的生态系统构建简单的生态系统构
                    </p>
                    <img src={SVG} alt="" />
                  </div>
                  
                </li>
              );
            })}
          </ul>
        </div>
        <img src={Image1} alt="" />
      </div>
    </div>
  );
}

export default Solution;
