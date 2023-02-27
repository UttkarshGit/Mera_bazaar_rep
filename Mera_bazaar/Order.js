import { useState } from "react";

function Order()
{
    let email=localStorage.getItem("login_user");
    const[del,setdel]=useState(false);
    const[check,setcheck]=useState(false);
    const[opp,setopp]=useState(false);
    const[codd,setcodd]=useState([{
        "email":"",
    "product_prize":"",
    "product_name":"",
    "product_image":""
    }]);

    const[creditt,setcreditt]=useState([{
    "email":"",
    "product_prize":"",
    "product_name":"",
    "cardholder":"",
    "cardno":"",
    "cvv":"",
    "product_image":""
    }])
    async function cod()
    {
        let coddata= await fetch("http://localhost:4000/payment_cod_get",{
            method:'post',
            body:JSON.stringify({email}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        let c_data= await coddata.json();
        setcodd(c_data);
    }
    cod()
    async function credit()
    {
        let creditdata= await fetch("http://localhost:4000/payment_credit_get",{
            method:'post',
            body:JSON.stringify({email}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        let c_data= await creditdata.json();
        setcreditt(c_data);
        if(c_data)
        {
            setcheck(true);
        }
    }
   credit()
    const[upii,setupii]=useState([{
        "email":"",
        "product_prize":"",
        "product_name":"",
        "upi_id":"",
        "product_image":""
        }])
    async function upi()
    {
        let upidata= await fetch("http://localhost:4000/payment_upi_get",{
            method:'post',
            body:JSON.stringify({email}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        let c_data= await upidata.json();  
        setupii(c_data);
       
    }
    upi()

    async function alldata_credit(product_image,product_prize,product_name)
    {
      if (window.confirm("Do you really want to cancel the Order!") == true) {
      setdel(true);
      let credio= await fetch("http://localhost:4000/cancelorder_credit",{
        method:'post',
        body:JSON.stringify({product_image,product_prize,product_name}),
        headers:{
            'Content-Type':'application/json'
        }
    });
    let tot=await credio.json();
    if(tot.rest==="no")
    {
      alert("soemnthing went wrong");
    }
    else{
      alert("Order Canceled");
      setdel(false);
    }
  }
    }

    async function alldata_upi(product_image,product_prize,product_name)
    {
      if (window.confirm("Do you really want to cancel the Order!") == true) {
      setdel(true);
      let upidata= await fetch("http://localhost:4000/cancelorder_upi",{
        method:'post',
        body:JSON.stringify({product_image,product_prize,product_name}),
        headers:{
            'Content-Type':'application/json'
        }
    });
    let tot=await upidata.json();
    if(tot.rest==="no")
    {
      alert("soemnthing went wrong");
    }
    else{
    
      alert("Order canceled");
      setdel(false);
    }
    }
  }

    
    async function alldata_cod(product_image,product_prize,product_name)
    {
      if (window.confirm("Do you really want to cancel the Order!") == true) {
      setdel(true);
      let cod_data= await fetch("http://localhost:4000/cancelorder_cod",{
        method:'post',
        body:JSON.stringify({product_prize,product_name}),
        headers:{
            'Content-Type':'application/json'
        }
    });
    let tot=await cod_data.json();
    console.log(tot);
    if(tot.rest==="no")
    {
      alert("soemnthing went wrong");
    }
    else{
      alert("Order canceled");
      setdel(false);
    }
    }
  }
    return(
        <>
        {del?<h1 style={{'color':'green'}} >Please wait order is cancellling ..........</h1>:""}
        <div className="container" style={{'marginTop':'1%'}}>
        {check===true?<h1 style={{'marginBottom':'2%','color':'white'}}>Your Orders</h1>:<h1 style={{'color':'white'}}>Your never order</h1>}
        {
        codd.map((e)=>{
            return <div className="card mb-3" style={{ "maxWidth": "540px",'border':'1px solid black'}}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img style={{'width':'190px','height':"150px"}} src={`.${e.product_image}`} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <div style={{ 'display': 'flex' }}>
                      <h5 className="card-title">{e.product_name}</h5>
                      <div style={{ 'display': 'flex' }}>
                        <h5 style={{ 'marginLeft': '20%' }} className="card-title">Amount:<b>{e.product_prize}</b></h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button type="button" class="btn btn-outline-success mx-3" onClick={() => { alldata_cod(e.image, e.prize, e.product_name) }}>Cancel Order</button>
            </div>
        })
    }
     {
        creditt.map((e)=>{
            return <div className="card mb-3" style={{ "maxWidth": "540px",'border':'1px solid black'}}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img style={{'width':'190px','height':"150px"}} src={`.${e.product_image}`} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <div style={{ 'display': 'flex' }}>
                      <h5 className="card-title">{e.product_name}</h5>
                      <div style={{ 'display': 'flex' }}>
                        {/* <h5 style={{ 'marginLeft': '90%','marginTop':'6px' }} className="fa fa-inr" aria-hidden="true">Amount{e.product_prize}</h5> */}
                        <h5 style={{ 'marginLeft': '20%' }} className="card-title">Amount:<b>{e.product_prize}</b></h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button type="button" class="btn btn-outline-success mx-3" onClick={() => { alldata_credit(e.image, e.prize, e.product_name) }}>Cancel Order</button>
            </div>
        })
    }
     {
        upii.map((e)=>{
            return <div className="card mb-3" style={{ "maxWidth": "540px",'border':'1px solid black'}}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img style={{'width':'190px','height':"150px"}} src={`.${e.product_image}`} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <div style={{ 'display': 'flex' }}>
                      <h5 className="card-title">{e.product_name}</h5>
                      <div style={{ 'display': 'flex' }}>
                        {/* <h5 style={{ 'marginLeft': '90%','marginTop':'6px' }} className="fa fa-inr" aria-hidden="true">Amount{e.product_prize}</h5> */}
                        <h5 style={{ 'marginLeft': '20%' }} className="card-title">Amount:<b>{e.product_prize}</b></h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button type="button" class="btn btn-outline-success mx-3" onClick={() => { alldata_upi(e.image, e.prize, e.product_name) }}>Cancel Order</button>
            </div>
        })
    }
    </div>
        </>
    )
}

export default Order;