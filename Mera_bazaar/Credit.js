import { useState } from "react";

require("./sty.css");
function Credit()
{
    const[cardno,setcardno]=useState("");
    const[cvv,setcvv]=useState("");
    const[cardholder,setcardholder]=useState("");
    const[month,setmonth]=useState("");
    const[year,setyear]=useState("");
    let product_name=localStorage.getItem('product_name');
    let product_prize=localStorage.getItem('product_prize');
    let email=localStorage.getItem('login_user');
    let product_image=localStorage.getItem("product_image");
    async function paying()
    {
        let signup_data= await fetch("http://localhost:4000/payment_credit",{
            method:'post',
            body:JSON.stringify({email,product_prize,product_name,cardholder,cardno,cvv,product_image}),
            headers:{
                'Content-Type':'application/json'
            }
        })
        signup_data =await signup_data.json();
        if(signup_data)
        {
            alert("Payment successfull ");
        }

    }
    return(
        <>
        <div className="container" style={{'marginBottom':'5%','marginTop':'3%'}}>
        <div id="card-success" class="hidden">
  <i class="fa fa-check"></i>
  <p>Payment Successful!</p>
</div>
<div id="form-errors" class="hidden">
  <i class="fa fa-exclamation-triangle"></i>
  <p id="card-error">Card error</p>
</div>
<div id="form-container">

  <div id="card-front">
    <div id="shadow"></div>
    <div id="image-container">
      <span id="amount">paying: <strong>{localStorage.getItem('product_prize')}</strong></span>
      <span id="card-image">
      
        </span>
    </div>

    <label for="card-number">
        Card Number
      </label>
    <input className="inpppp"type="text" id="card-number" placeholder="1234 5678 9101 1112" length="16" onChange={(e)=>{setcardno(e.target.value)}}/>
    <div id="cardholder-container">
      <label for="card-holder">Card Holder
      </label>
      <input className="inpppp"type="text" id="card-holder" placeholder="e.g. John Doe" onChange={(e)=>{setcardholder(e.target.value)}} />
    </div>

    <div id="exp-container">
      <label for="card-exp">
          Expiration
        </label>
      <input className="inpppp"id="card-month" type="text" placeholder="MM" length="2" onChange={(e)=>{setmonth(e.target.value)}}/>
      <input className="inpppp"id="card-year" type="text" placeholder="YY" length="2" onChange={(e)=>{setyear(e.target.value)}} />
    </div>
        <div id="cvc-container">
      <label for="card-cvc"> CVC/CVV</label>
      <input className="inpppp"id="card-cvc" placeholder="XXX-X" type="text" min-length="3" max-length="4" onChange={(e)=>{setcvv(e.target.value)}} />
      <p>Last 3 or 4 digits</p>
    </div>

  </div>

  <div id="card-back">
    <div id="card-stripe">
    </div>

  </div>

  <input className="inpppp"type="text" id="card-token" />
  <button type="button" id="card-btn" onClick={paying}>Pay</button>

</div>
</div>
        </>
    )
}
export default Credit;