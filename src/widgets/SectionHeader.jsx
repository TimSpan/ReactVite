import React from 'react';
import "tailwindcss/tailwind.css";


// 抽离出来一个共同的头部标题组件
// title显示主标题,subTitle显示副标题
function SectionHeader(props) {
  return (
    <div>
      <h2 className=' text-[2.6em] font-black text-center '>{ props.title}</h2>
      <p className=' text-xl mt-4  text-center text-gray-500  '>{  props.subTitle}</p>
    </div>
  )
}

export default SectionHeader
// function SectionHeader({ title, subTitle }) {
//   return (
//     <div>
//       <h2 className=' text-[2.6em] font-black text-center '>{ title}</h2>
//       <p className=' text-xl mt-4  text-center text-gray-500  '>{ subTitle}</p>
//     </div>
//   )
// }

// export default SectionHeader