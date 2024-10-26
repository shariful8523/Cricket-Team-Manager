import React, { useState } from 'react';
import Blogs from '../componets/Blogs/Blogs'
import Player from './Blogs/Player';

      



const Catagory = ({handelItem, selectItem,  handelDelete}) => {
    
   

      const [view, setView] = useState ('Available Player')

       const Available = () => {
         
        const avilable = 'Available Player' 

        setView(avilable)

        
       };

       const Selected = () => {

       const Selected = `Selected Player(0/6)`

       setView(Selected)

       };




    return (
       <div>

        <div className=' flex justify-between mx-auto py-12 w-11/12'>
              <div>
                <p className='text-2xl font-bold'> {view} select</p>
             </div>

             <div className=''>

            <button onClick={Available} className= {` ${view==='Available Player'&&'bg-yellow-400' } font-bold p-2 px-7 rounded-xl  border border-[rgba(7,4,12,0.1)] `} >Available </button>

            <button onClick={Selected} className= {` ${view==='Selected Player(0/6)'&&'bg-yellow-400'} ml-1 font-bold p-2 px-7 rounded-xl  border border-[rgba(7,4,12,0.1)] `}>Selected </button>
             </div>
             
        </div>
          {/* blogs option */}
         <div className={` ${view==='Selected Player(0/6)' && 'hidden' }`}> 

         <Blogs handelItem={handelItem}  ></Blogs>
         
          </div>
          
          <div className={` ${view==='Available Player' && 'hidden' } `}>
           <Player  selectItem={selectItem}  handelDelete={handelDelete} ></Player>
          </div>

       </div>
    );
};

export default Catagory;