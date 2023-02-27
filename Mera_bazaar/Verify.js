import { useState } from "react";

function Verify()
{
    let product_name=localStorage.getItem('product_name');
    let product_prize=localStorage.getItem('product_prize');
    let email=localStorage.getItem('login_user');
    let product_image=localStorage.getItem("product_image");
    let upi_id=localStorage.getItem('user_upi');
    const[amount,setamount]=useState("");
    async function send_payment()
    {
        if(product_prize==amount)
        {
        let signup_data= await fetch("http://localhost:4000/payment",{
            method:'post',
            body:JSON.stringify({email,product_prize,product_name,upi_id,product_image}),
            headers:{
                'Content-Type':'application/json'
            }
        })
        signup_data =await signup_data.json();
        if(signup_data)
        {
            alert("your order has been successfully placed");
        }
    }
    else{
        alert("Please pay the valid amount");
    } 
}
    return(
        <>
        <p className="my-2">Item name :{localStorage.getItem('product_name')}</p>
        <p>Item prize :{localStorage.getItem('product_prize')}</p>
        <h5>Total Payement Amout : <b>{localStorage.getItem('product_prize')}</b></h5>
        <input type="text" class="form-control my-3" onChange={(e)=>{setamount(e.target.value)}} placeholder="Amount" aria-label="Recipient's username" aria-describedby="button-addon2"/>
        <div class="d-grid gap-2 col-8 mx-auto">
            <button class="btn btn-success" onClick={send_payment} type="button">Pay</button>
        </div>
        </>
    )
}

export default Verify;