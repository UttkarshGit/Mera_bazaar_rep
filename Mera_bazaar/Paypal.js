import { useState } from "react";
import Verify from "./Verify";

function Paypal()
{
    const[check,setcheck]=useState(false);
    const[userupi,setuserupi]=useState("");
    const[domain,setdomain]=useState("@upi");
    function verification()
    {
        setcheck(true);
        localStorage.setItem('user_upi',userupi+domain);
    }
    const[styy,setstyy]=useState({
            "margin": "auto",
            "width":"65%",
            "padding":"10px"
        
    })
    return(
        <>
        <div className="container my-3" style={styy}>
        <h3 style={{'color':'white','textAlign':'center'}}>UPI/BHIM</h3>
        <div class="card" style={styy}>
  <img src="./bhim.png" class="card-img-top" alt="..."/>
  <div class="card-body">
  <h6 style={{'color':'black'}}>Enter your UPI ID</h6>
  <div class="input-group mb-3">
  <input type="text" class="form-control" onChange={(e)=>{setuserupi(e.target.value)}} placeholder="Recipient's Upi id" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <select value={domain} id="cars" onChange={(e)=>{setdomain(e.target.value)}}>
  <option value="@upi">@upi</option>
    <option value="@okaxis">@okaxis</option>
    <option value="@icici">@icici</option>
    <option value="@kotak">@kotak</option>
    <option value="@centralbank">@centralbank</option>
    <option value="@barodampay">@barodampay</option>
    <option value="@idbibank">@idbibank</option>
    <option value="@okhdfcbank">@okhdfcbank</option>
  </select>
 
</div>
<div class="d-grid gap-2 col-8 mx-auto">
<button class="btn btn-success" type="button" onClick={verification}>Verify</button>

</div>
{check?<Verify/>:""}
</div>
</div></div>
        </>
    )
}

export default Paypal;