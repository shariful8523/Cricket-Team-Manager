
import Navabr from './componets/Navbar/Navabr'

import Catagory from './componets/Catagory'
import Footer from './componets/Footer/Footer'
import { useEffect, useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';







function App() {
   


    const [selectItem, setSelectecItem] = useState ([]);
      

    const [coin ,setCoin] = useState (0);
          

    const handelAdd = () => {
       const newCoin = coin + 100000;
       setCoin (newCoin)
       toast ('Coin claim Successful ')
    }

    
    const [blogs, setBlogs] = useState([]);

    useEffect( () => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))

    }, [])



  // select btn section

  const [view, setView] = useState ('Available Player')

       const Available = () => {
         
        const avilable = 'Available Player' 

        setView(avilable)

        
       };

       const Selected = () => {

       const Selected = `Selected Player(0/6)`

       setView(Selected)

       };








         

    const handelDelete = (playerId) => {
      
      const removePlayer = selectItem.filter((p)=> p.playerId!=playerId);
      setSelectecItem(removePlayer);
      toast('Player Delete Successful ')
      
}




    const handelItem = (item) =>{

      const isexist = selectItem.find((i)=>i.playerId == item.playerId);
         
       if (isexist){
     
        toast('Player Already Added')
       }
       else if(selectItem.length >5 ){
        return toast('6 Player Already Added');
       }
     else if (item.biddingPrice > coin ){
        return toast('No Coin Available ')
     }

      else{
        setCoin (coin - item.biddingPrice)
        
        const newItem = [...selectItem,item];
        setSelectecItem(newItem);
        toast('Player Added Successfully ')
      }

      
      

    }





  return (
    <>
      
     <Navabr coin={coin} handelAdd={handelAdd} ></Navabr>
    
    <Catagory  Selected={Selected}  Available={Available}  view={view}     blogs={blogs}  handelDelete={handelDelete}  handelItem={handelItem} selectItem={selectItem}
    ></Catagory>

    
    <Footer></Footer>
   

     
    </>
  )
}

export default App
