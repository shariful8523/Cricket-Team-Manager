import React from 'react';
import footerImage from '../../assets/logo-footer.png'
const Footer = () => {
    return (
        <div>
           
           <div className="bg-[#06091a] w-full py-20">
  <img className="justify-center mx-auto mb-10" src={footerImage} alt="Footer Logo" />

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
    );
};

export default Footer;