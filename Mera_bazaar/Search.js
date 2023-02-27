import { useEffect, useState } from 'react';
import search from './json/Search.json';
function Search()
{
   
    let search_item=localStorage.getItem('search_item');

    const[dig,setdig]=useState();
    useEffect(() => {
        search.map((e)=>{
            if(Object.keys(e)==search_item)
            {
             setdig(e);
            }
         })
    }, [])
    
var show=[{
    "product_name":"lee",
    "prize":"1200",
    "product_image":"./top/lee.jpeg",
    "color":"red",
    "quantity":"9"
}];
    
    for( var key in dig)
    {
        show=dig[key];
    }
    
    async function alldata(image,prize,name)
    {
      let user_login=localStorage.getItem("login_user");
      localStorage.setItem("url","http://localhost:3000/Iphone/");
      if(user_login!==null)
      {
        let product_name=name;
        console.log(image);
        console.log(prize);
        console.log(name);
      let res=await fetch("http://localhost:4000/send_data",{
                  method:'post',
                  body:JSON.stringify({image,product_name,prize,user_login}),
                  headers:{
                      'Content-Type':'application/json'
                 }
              });
    
              if(res)
              {
                alert('succesfully added to the cart');
              }
    }
    else{
      alert("please login first");
    }
    }
    return(
        <>
        <div>
            {
                show.map((e)=>{
                    return <div className="card mb-3 container" style={{ "maxWidth": "540px",'border':'1px solid black'}}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={`.${e.product_image}`} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <div style={{ 'display': 'flex' }}>
                      <h5 className="card-title">{e.product_name}</h5>
                      <div style={{ 'display': 'flex' }}>
                        <h5 style={{ 'marginLeft': '90%','marginTop':'6px' }} className="fa fa-inr" aria-hidden="true"></h5>
                        <h5 style={{ 'marginLeft': '20%' }} className="card-title"><b>{e.prize}</b></h5>
                      </div>
                    </div>
                    <p className="card-text">{e.color}</p>
                    <p className="card-text">{e.quantity}</p>
                  </div>
                </div>
              </div>
        
              <button type="button" class="btn btn-outline-success mx-3" onClick={() => { alldata(e.product_image, e.prize, e.product_name) }}>Add from Cart</button>
             <a className="btn btn-outline-success mx-3" onClick={()=>{localStorage.setItem("product_name",e.product_name);localStorage.setItem('product_image',e.product_image);localStorage.setItem('product_prize',e.prize)}} style={{'textDecoration':"none",'color':'black','marginBottom':'3%','marginTop':'3%'}} href="/payment">Want to buy</a>
            </div>
                })
            }
        </div>
        
        </>
    )
}

export default Search;