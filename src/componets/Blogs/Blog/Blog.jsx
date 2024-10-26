import React from 'react';
import PropTypes from 'prop-types'; 



const Blog = ({blog,handelItem}) => {
          console.log(handelItem);
         

    const { playerId, name, country, image, role, battingType, bowlingType, biddingPrice } =blog;
    return (


          <div>

         <div className='  border border-[rgba(19,19,19,0.1)]  mx-auto justify-between items-center p-5 rounded-xl'>
           
            <img className=' mb-3 rounded-xl w-[380px] h-[300px]' src={image} alt="" />

          
            <h1 className=' mb-3 text-xl font-bold'> <span><i class="fa-solid fa-user"></i></span> {name} </h1>

           <div className=' justify-between mb-3 flex gap-10 font-bold '>
             <p> <span><i class="fa-solid fa-flag"></i></span> {country} </p>
             <p> {role} </p>
           </div>
           <hr />
           <div className=' justify-between mt-2  mb-3 flex gap-10 font-bold '>
            <p> {battingType} </p>
            <p> {bowlingType} </p>
            </div>

            <div className=' justify-between flex gap-10 font-bold '>
            <p className='mt-2'> Price:${biddingPrice} </p>
            <button className='box-border border p-2 border-[rgba(19,19,19,0.1)] rounded-lg'
               onClick={()=>handelItem(blog)}
            >Choose Player</button>

            </div>

        </div>


          </div>

        
        


    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;