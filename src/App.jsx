
import Navabr from './componets/Navbar/Navabr'

import Catagory from './componets/Catagory'
import Footer from './componets/Footer/Footer'
import { useState } from 'react'


function App() {
   


    const [selectItem, setSelectecItem] = useState ([]);
          
         

    const handelDelete = (playerId) => {
      const removePlayer = selectItem.filter((p)=> p.playerId!=playerId);
      setSelectecItem(removePlayer);
}




    const handelItem = (item) =>{

      const isexist = selectItem.find((i)=>i.playerId == item.playerId);
         
       if (isexist){

         alert("r sdd kora ase")
       }
      else{
        const newItem = [...selectItem,item];
      setSelectecItem(newItem);
      }

      
      

    }





  return (
    <>
      
     <Navabr></Navabr>
    
    <Catagory  handelDelete={handelDelete}  handelItem={handelItem} selectItem={selectItem}
    ></Catagory>

    
    <Footer></Footer>
   

     
    </>
  )
}

export default App
