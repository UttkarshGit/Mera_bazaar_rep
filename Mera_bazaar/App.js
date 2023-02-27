// import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Upper from './Upper';
// import Crousal from './Crousal';
// import Trending from './Treding';
// import Mobile from './Mobile';
// import Electronics from './Electronics';
// import Books from './Books';
// import Furniture from './Furniture';
// import Health from './Health';
import Recently from './Recently';
import Iphone from './Iphone';
import React, { useEffect } from "react";
import {
  Switch,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

import Allelem from './Allelem';
import Cart from './Cart';
import Oppo from './Oppo';
import Realme from './Realme';
import Redminote from './Redminote';
import Vivo from './Vivo';
import Php from './Php';
import C from './C';
import Dsa from './Dsa';
import Sofa from './Sofa';
import Bed from './Bed';
import Study from './Study';
import Paste from './Paste';
import Fasewash from './Facewash';
import Chair from './Chair';
import Login from './Login';
import Signup from './Signup';
import Logout from './Logout';
// import Movie from './Movie';
import Reel from './Reel';
import Entertainment from './Entertainment';
import Picture from './Picture';
import Payments from './Payments';
import Credit from './Credit';
import Paypal from './Paypal';
import Net from './Net';
import Debit from './Debit';
import Notification from './Notification';
import Order from './Order';
import Admin from './Admin';
import Admin_data from './Admin_data';
import UploadProduct from './UploadProduct';
import Contact from './Contact';
import Search from './Search';
import Show from './Show';
import UserSign from './UserSign';
import Sellerlogin from './Sellerlogin';
import Customeritem from './Customeritem';
import Game from "./Game";
// import Picture from './Movie';

// localStorage.getItem("us");
function App() {
  let product_name=localStorage.getItem('product_name');
    let product_prize=localStorage.getItem('product_prize');
    let email=localStorage.getItem('login_user');
    let product_image=localStorage.getItem("product_image");


   
    async function update()
    {
      let res=await fetch("http://localhost:4000/recent_update",{
        method:'post',
        body:JSON.stringify({product_name,product_prize,email,product_image}),
        headers:{
            'Content-Type':'application/json'
       }
    });
    }

    async function send()
    {
      let res=await fetch("http://localhost:4000/recent_send",{
        method:'post',
        body:JSON.stringify({product_name,product_prize,email,product_image}),
        headers:{
            'Content-Type':'application/json'
       }
    });
    }
    async function recent()
    {
      let res=await fetch("http://localhost:4000/recent",{
        method:'post',
        body:JSON.stringify({email}),
        headers:{
            'Content-Type':'application/json'
       }
    }); 
    let ress=await res.json();
    if(ress.ch==="find")
    {
       update();
    }
    else{
      send();
    }
    }
    useEffect(() => {
      recent();
     }, [])
  return (
   <>
<Nav/>
<Upper/>

<BrowserRouter>
<Routes>
  <Route path="/" element={<Allelem/>}></Route>
  <Route path='/Iphone' element={<Iphone/>} />
  <Route path='/login' element={<Login/>} />
  <Route path='/logout' element={<Logout/>} />
  <Route path='/signup' element={<Signup/>} />
  <Route path='/oppo' element={<Oppo/>} />
  <Route path='/realme' element={<Realme/>} />
  <Route path='/redminote' element={<Redminote/>} />
  <Route path='/vivo' element={<Vivo/>} />
  <Route path='/php' element={<Php/>} />
  <Route path='/c' element={<C/>} />
  <Route path='/dsa' element={<Dsa/>} />
  <Route path='/sofa' element={<Sofa/>} />
  <Route path='/chair' element={<Chair/>} />
  <Route path='/bed' element={<Bed/>} />
  <Route path='/studytable' element={<Study/>} />
  <Route path='/paste' element={<Paste/>} />
  <Route path='/fasewash' element={<Fasewash/>} />
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/picture' element={<Picture/>}/>
  <Route path='/reel' element={<Reel/>}/>
  <Route path='/entertainment' element={<Entertainment/>}/>
  <Route path='/payment' element={<Payments/>}/>
  <Route path='/credit' element={<Credit/>}/>
  <Route path='/paypal' element={<Paypal/>}/>
  <Route path='/net' element={<Net/>}/>
  <Route path='/debit' element={<Debit/>}/>
  <Route path='/notification' element={<Notification/>}/>
  <Route path='/order' element={<Order/>}/>
  <Route path='/admin' element={<Admin/>}/>
  <Route path='/admin_data' element={<Admin_data/>}/>
  <Route path='/upload' element={<UploadProduct/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/search' element={<Search/>}/>
  <Route path='/show' element={<Show/>}/>
  <Route path='/usersign' element={<UserSign/>}/>
  <Route path='/sellerlogin' element={<Sellerlogin/>}/>
  <Route path='/customer' element={<Customeritem/>}/>
  <Route path='/game' element={<Game/>}/>
</Routes>
</BrowserRouter>
{localStorage.getItem("login_user")?<Recently/>:""} 
{/* {localStorage.getItem("_id")?<Recently/>:<h1>Not Valued</h1>} */}
   </>
  );
}

export default App;
