import React from 'react';
import BannerLogo from '../../assets/banner-main.png'








const Banner = () => {
    return (
        <div className='bg-bg-image bg-cover  bg-black text-white rounded-xl w-11/12 mx-auto ' >

          <div className='py-12'>
            <div className='flex justify-center '> <img className='w-[300px} mx-auto  ' src={BannerLogo} alt="" /></div>
             <div className='text-center py-6 '>
                 <h2 className=' text-4xl font-bold'>
                  Assemble Your Ultimate Dream 11 Cricket Team
                  </h2>

                  <p className=' py-4 text-[rgba(255, 255, 255, 0.7)]   '>Beyond Boundaries Beyond Limits</p>

                  <button className='btn box-border p-3 text-black font-bold bg-[#E7FE29] rounded-xl outline-[#E7FE29] hover:bg-[#D6E527] outline-offset-4 border-none'>
                      Claim Free Credit
                    </button>
             </div>

          </div>
         
        </div>
    );
};

export default Banner;