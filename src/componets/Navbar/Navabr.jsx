import React from 'react';
import Profile from '../../assets/logo.png'


function Navabr() {
    return (
        <div className='flex justify-between py-7 mx-auto w-11/12'>
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
                    
                    Coin <span className='px-2'  ><i class="fa-solid fa-sack-dollar"></i></span> </button>
            </div>
        </div>
    );
}

export default Navabr;