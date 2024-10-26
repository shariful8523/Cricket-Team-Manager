import React, { useEffect, useState } from 'react';
import Blog from './Blog/Blog'

const Blogs = ({handelItem, blogs}) => {
    
      



    return (
        <div>
           
            
            <div className=' grid grid-cols-3  gap-3 p-6  mb-32 '>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handelItem={handelItem} ></Blog>)
            }
            </div>

        </div>
    );
};

export default Blogs;