import React from 'react';
import footerImage from '../../assets/logo-footer.png'
const Footer = () => {
    return (

        <div>
           
           <div className="bg-[#06091a] w-full py-20">

            

               <div className='absolute -mt-[150px] ml-[470px] '>


               <div className='p-4 border border-white border-[1px] rounded-xl'>
            <div class="max-w-xl mx-auto bg-gradient-to-r from-blue-100 via-white to-yellow-100 p-8 rounded-2xl shadow-lg text-center">
    <h2 class="text-2xl font-bold text-gray-800 mb-2">Subscribe to our Newsletter</h2>
    <p class="text-gray-600 mb-4">Get the latest updates and news right in your inbox!</p>
    
    <div class="flex justify-center items-center">
        <input 
            type="email" 
            placeholder="Enter your email" 
            class="p-2 rounded-l-full border border-gray-300 outline-none w-full max-w-xs"
        />
        <button class="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-4 py-2 rounded-r-full font-semibold">
            Subscribe
        </button>
    </div>
    </div>

        </div>






               </div>


            <div className='relative'> 
            
           <img className="justify-center mx-auto mt-36" src={footerImage} alt="Footer Logo" />

           <footer className="bg-[#06091a] text-white text-opacity-60 p-10 flex justify-around">
    
    {/* About Section */}
    <div>
      <h6 className="footer-title text-lg font-semibold mb-2">About Us</h6>
      <p className="text-sm">
        We are a passionate team <br /> dedicated to providing the best <br></br> services to our customers.
      </p>
    </div>
    
    {/* Quick Links */}
    <nav>
      <h6 className="footer-title text-lg font-semibold mb-2">Quick Links</h6>
      <ul className="space-y-1">
        <li><a href="#" className="link link-hover">Home</a></li>
        <li><a href="#" className="link link-hover">Services</a></li>
        <li><a href="#" className="link link-hover">About</a></li>
        <li><a href="#" className="link link-hover">Contact</a></li>
      </ul>
    </nav>

    {/* Subscribe Section */}
    <form className="text-white text-opacity-60">
      <h6 className="footer-title text-lg font-semibold mb-2">Subscribe</h6>
      <fieldset className="form-control w-full">
        <label className="label text-sm">
          Subscribe to our newsletter for the <br></br> latest updates.
        </label>
        <div className="flex">
          <input
            type="email"
            placeholder="username@site.com"
            className="input input-bordered flex-grow mr-2"
          />
          <button className="btn btn-primary">Subscribe</button>
        </div>
      </fieldset>
    </form>

           </footer>

           <div className="text-center mt-8 text-sm text-white text-opacity-60">
          <p>@2024 Your Company. All Rights Reserved.</p>
              </div>

             </div>

          </div>

        
        </div>
    );
};

export default Footer;