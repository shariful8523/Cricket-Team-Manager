import React from 'react';

const newsLetter = () => {
    return (
        <div>
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
    );
};

export default newsLetter;