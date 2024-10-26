import React from 'react';




const Player = ({selectItem, handelDelete }) => {

    

    return (
        <div className="flex flex-col items-center space-y-4 mb-40">
            
            {selectItem.map((item) => (
                <div
                    key={item.id}
                    className="box-border border p-4 flex items-center justify-between border-[rgba(19,19,19,0.1)] rounded-lg w-full max-w-4xl mx-auto"
                >
                   
                    <div className="flex items-center space-x-4">
                        <img className="w-20 h-20 rounded-lg" src={item.image} alt={item.name} />
                        <div>
                            <h3 className="font-semibold text-gray-800">{item.name}</h3>
                            <p className="text-sm text-gray-500">{item.battingType}</p>
                        </div>
                    </div>

                    
                    <button onClick={()=> handelDelete(item.playerId)} className="text-red-500">
                    <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
                
            ))}
              <div class=" mb-32 ">
           <button  class=" -ml-[440px] mt-10 bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg border border-black">
            Add More Player
              </button>
              </div>

        </div>
    );
};

export default Player;
