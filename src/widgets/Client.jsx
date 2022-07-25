import React from 'react';
import SectionHeader from './SectionHeader';
import airbnbSVG from '../assets/airbnb.svg';
import facebookSVG from '../assets/facebook.svg';
import amazonSVG from '../assets/amazon.svg';
import hubspotSVG from '../assets/hubspot.svg';
import tinderSVG from '../assets/tinder.svg';
import dog from '../assets/dog.jpg';
import "tailwindcss/tailwind.css";



function Client() {
  return (
      <div>
          <SectionHeader
            title="被全球100000个客户信任"
            subTitle="被全球100000个客户信任被全球100000个客户信任被全球100000个客户信任"
          />
          <div className=' flex flex-col lg:flex-row   md:justify-between items-center p-4'>
              <img src={airbnbSVG} alt="" />
              <img src={facebookSVG} alt="" />
              <img src={amazonSVG} alt="" />
              <img src={hubspotSVG} alt="" />
              <img src={tinderSVG} alt="" />

      </div>
      <div className=' grid justify-items-center border-2 rounded px-14 mt-28'>
        
        <img src={dog} alt="" className='w-24 h-24 rounded-full -translate-y-1/2' />
        <p className='mt-5 mb-4 text-2xl font-medium'>
          我非常信任这家公司,非常棒非常棒非常棒非常棒非常棒非常棒非常棒
        </p>
        <p className='text-lg font-bold'>
          凯文
          
        </p>
        <p className=' text-gray-500 mb-8'>
          晏总
        <a href="#" className='text-blue-500'>@Company</a>
        </p>
      </div>

    </div>
  )
}

export default Client