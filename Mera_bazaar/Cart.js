import { useEffect, useState } from "react";
function Cart() {
    const[iphone,setiphone]=useState([{
        "image":"./Iphone/iphone2",
        "product_name":"iphone13",
        "prize":"Iphone11pro",
        "user_login":"99999"
    }]);
    
    var cond="Nothing in Cart";
    let last=localStorage.getItem("login_user");
    async function getdata()
    {
        const fetch_data=await fetch("http://localhost:4000/get_data");
        var findata= await fetch_data.json(); 
        setiphone(findata);
        // console.log(findata);
    
    }
    
    useEffect(()=>{
        getdata();
    },[])
    
    async function alldata(image,prize,name)
    {
        let product_name=name;
        const delete_data=await fetch("http://localhost:4000/remove",{
            method:'post',
            body:JSON.stringify({product_name}),
            headers:{
                'Content-Type':'application/json'
           }
        });
        if(delete_data)
        {
            alert('succesfully removed for the cart');
            window. location. reload();
        }
    }
  
    return (
        
        <div style={{'marginLeft':'19%','marginTop':'3%'}}>
            {            
               iphone.map((e)=>{
               
                if(e.user_login===last)
                {
                    cond="";
                    console.log(e);
                return  <div class="card mb-3" style={{ "maxWidth": "540px", 'border': '1px solid black' }} >
                <div class="row g-0">
                    <div class="col-md-4">

                        <img src={`.${e.image}`} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <div style={{ 'display': 'flex' }}>
                                <h5 class="card-title">{e.product_name}</h5>
                                <div style={{ 'display': 'flex' }}>
                                    <h5 style={{ 'marginLeft': '90%', 'marginTop': '6px' }} class="fa fa-inr" aria-hidden="true"></h5>
                                    <h5 style={{ 'marginLeft': '20%' }} class="card-title"><b>{e.prize}</b></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                <button type="button" class="btn btn-outline-danger mx-3" onClick={() => { alldata(e.image, e.prize, e.product_name) }}>Remove from Cart</button>
                <button type="button" class="btn btn-outline-success" onClick={() => { alldata(e.image, e.prize, e.product_name) }}>Want To Buy</button>
            </div>
            </div>
                }
               })  
            }
            
         <h1>{cond}</h1>
        </div>
        
    )
}

export default Cart;