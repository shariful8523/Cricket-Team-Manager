import React, { useEffect, useState } from 'react';
import Blog from './Blog/Blog';

const Blogs = ({handelItem}) => {
    
      

    const [blogs, setBlogs] = useState([]);

    useEffect( () => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))

    }, [])



    return (
        <div>
           
            
            <div className=' grid grid-cols-3  gap-3 p-6  '>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handelItem={handelItem} ></Blog>)
            }
            </div>

        </div>
    );
};

export default Blogs;