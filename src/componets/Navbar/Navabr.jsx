import React, { useState } from 'react';
import Profile from '../../assets/logo.png'
import BannerLogo from '../../assets/banner-main.png'

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';




function Navabr({coin,handelAdd}) {

        


    return (

        <div>
        <div className='   flex justify-between py-7 mx-auto w-11/12  '>
            <div className='w-14'>
            <img src={Profile} alt="" />
            </div>


            <div className=' font-medium text-[rgba(19,19,19,0.7)] ml-auto px-9 mt-2 flex gap-8'>
                <p>Home</p>
                <p>Fixture</p>
                <p>Teams</p>
                <p>Schedules</p>
            </div>
            <div>
            <button className='  font-bold p-2 px-7 rounded-lg  border border-[rgba(59,44,44,0.1)] '>
                
               {coin}  Coin <span className='px-2'  >
                    
                    <i class="fa-solid fa-sack-dollar"></i></span> </button>
            </div>
        </div>
          
          <div  className='bg-bg-image bg-cover  bg-black text-white rounded-xl w-11/12 mx-auto '>
          
              <div className='py-12' >
               <div className='flex justify-center '> 
                <img className='' src={BannerLogo} alt="" />
               </div>
               
               <div>
               <div className='text-center py-6 '>
                 <h2 className=' text-4xl font-bold'>
                  Assemble Your Ultimate Dream 11 Cricket Team
                  </h2>

                  <p className=' py-4 text-[rgba(255, 255, 255, 0.7)]   '>Beyond Boundaries Beyond Limits</p>

                  <button  onClick={handelAdd} className='btn box-border p-3 text-black font-bold bg-[#E7FE29] hover:bg-[#E7FE29] rounded-xl outline-[#E7FE29] hover:bg-[#D6E527] outline-offset-4 border-none'>
                      Claim Free Credit
                    </button>

                    <ToastContainer></ToastContainer>
             </div>

               </div>


              </div>
            




          </div>

           
        </div>
    );
}

export default Navabr;