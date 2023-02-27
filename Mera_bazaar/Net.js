import { useState } from "react";

function Net()
{

    let product_name=localStorage.getItem('product_name');
    let product_prize=localStorage.getItem('product_prize');
    let email=localStorage.getItem('login_user');
    let product_image=localStorage.getItem("product_image");
    const[userupi,setuserupi]=useState("");
    async function verification()
    {
        if(userupi==product_prize)
        {
            let signup_data= await fetch("http://localhost:4000/payment_net",{
                method:'post',
                body:JSON.stringify({email,product_prize,product_name,product_image}),
                headers:{
                    'Content-Type':'application/json'
                }
            })   
             const all=await signup_data.json();
             if(all)
             {
                alert("your order is successfully placed");
             }
             else{
                alert("please try again");
             }
            }
            else{
                alert("please fill the valid amount");
            }
    }


    const[styy,setstyy]=useState({
            "margin": "auto",
            "width":"65%",
            "padding":"10px"
        
    })


    return(
        <>
          <div className="container my-3" style={styy}>
            <h1 style={{'textAlign':'center','color':'white','marginBottom':'2%'}}>Cash On Delivery</h1>
        <div class="card" style={styy}>
  <div class="card-body">
  <h6 style={{'color':'black'}}>Enter amout:<b>{" "+product_prize}</b></h6>
  <h6 style={{'color':'black'}}>Product_name:<b>{" "+product_name}</b></h6>
  <div class="input-group mb-3">
  <input type="text" class="form-control" onChange={(e)=>{setuserupi(e.target.value)}} placeholder="Enter Amount" aria-label="Recipient's username" aria-describedby="button-addon2"/>
</div>
<div class="d-grid gap-2 col-8 mx-auto">
<button class="btn btn-success" type="button" onClick={verification}>Place Order</button>
</div>
</div>
</div></div>
        </>
    )
}

export default Net;