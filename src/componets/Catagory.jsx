import React from 'react';

const Catagory = () => {
    return (
        <div className=' flex justify-between mx-auto py-12 w-11/12'>
              <div>
                <p className='text-2xl font-bold'>Available Players</p>
             </div>

             <div className=''>
            <button className=' font-bold p-2 px-7 rounded-xl  border border-[rgba(7,4,12,0.1)] '>Available </button>
            <button className= 'ml-1 font-bold p-2 px-7 rounded-xl  border border-[rgba(7,4,12,0.1)] '>Selected </button>
             </div>
        </div>
    );
};

export default Catagory;