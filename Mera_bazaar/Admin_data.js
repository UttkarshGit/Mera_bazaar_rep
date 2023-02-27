import { useEffect, useState } from "react";

function Admin_data()
{

    const[sidata,setsidata]=useState([{}])
    const[cart,setcart]=useState([{}]);
    const[cash_item,setcash_item]=useState([{}]);
    const[credit_item,setcredit_item]=useState([{}]);
    const[active_user,setactive_user]=useState([{}]);
    const[upi_item,setupi_item]=useState([{}]);
    const[upload_item,setupload_item]=useState([{}]);
    const[log_item,setlog_item]=useState([{}]);
    const[c_sign,setc_sign]=useState(0);
    const[cart_val,setcart_val]=useState(0);
    const[cash,setcash]=useState(0);
    const[credit,setcredit]=useState(0);
    const[upi,setupi]=useState(0);
    const[active,setactive]=useState(0);
    const[upload,setupload]=useState(0);
    const[log,setlog]=useState(0);

    async function getsignup()
    {
        let upidata= await fetch("http://localhost:4000/signup_all_data");
        let data=await upidata.json();
        setsidata(data);
        sidata.map((e,k)=>{
            setc_sign(k+1)
        })
    }
  
    useEffect(()=>{
        getsignup();
    },[c_sign])


    async function getcart()
    {
        let cartt= await fetch("http://localhost:4000/cart_all_data");
        let data=await cartt.json();
        setcart(data);
        cart.map((e,k)=>{
            setcart_val(k+1)
        })
    }
  
    useEffect(()=>{
        getcart();
    },[cart_val])


    async function getcash()
    {
        let upidata= await fetch("http://localhost:4000/cash_all_data");
        let data=await upidata.json();
        setcash_item(data);
        cash_item.map((e,k)=>{
            setcash(k+1)
        })
    }
  
    useEffect(()=>{
        getcash();
    },[cash])

    async function getcredit()
    {
        let upidata= await fetch("http://localhost:4000/credit_all_data");
        let data=await upidata.json();
        setcredit_item(data);
        credit_item.map((e,k)=>{
            setcredit(k+1)
        })
    }
  
    useEffect(()=>{
        getcredit();
    },[credit])

    async function getupi()
    {
        let upidata= await fetch("http://localhost:4000/upi_all_data");
        let data=await upidata.json();
        setupi_item(data);
        upi_item.map((e,k)=>{
            setupi(k+1)
        })
    }
  
    useEffect(()=>{
        getupi();
    },[upi])


    async function getactive()
    {
        let upidata= await fetch("http://localhost:4000/active_all_data");
        let data=await upidata.json();
        setactive_user(data);
        active_user.map((e,k)=>{
            setactive(k+1)
        })
    }
  
    useEffect(()=>{
        getactive();
    },[active])


    async function getupload()
    {
        let upidata= await fetch("http://localhost:4000/upload_all_data");
        let data=await upidata.json();
        setupload_item(data);
        upload_item.map((e,k)=>{
            setupload(k+1)
        })
    }
  
    useEffect(()=>{
        getupload();
    },[upload])



    async function getlogincurrent()
    {
        let upidata= await fetch("http://localhost:4000/loggs");
        let data=await upidata.json();
        setlog_item(data);
        log_item.map((e,k)=>{
            setlog(k+1)
        })
    }
  
    useEffect(()=>{
        getlogincurrent();
    },[upload])

    return(
        <>
        <h1  className="my-3" style={{'color':'#ff7722','textAlign':'center'}}>ALL INFORMATIONS ABOUT MERA BAZAAR</h1>
        <div style={{'display':'flex'}} className="container my-3" >
            <div>
            <h5 style={{'color':'aqua'}}><b>Welcome {" "+localStorage.getItem("admin_name")}</b></h5>
            <h5 style={{'color':'aqua'}}><b>Admin Email:{" "+localStorage.getItem("admin_email")}</b></h5> 
            <h5 style={{'color':'aqua'}}><b>Admin Position:{" "+localStorage.getItem("admin_position")}</b></h5> 
            </div>
        <div >
            <img src={"./admin_profile/"+localStorage.getItem('admin_image')} style={{"marginLeft":'50%','width':"90px",'borderRadius':'5px'}}/>
        </div>
        </div>
<div className="container my-3">
        <table class="table my-3">
  <thead>gree
    <tr>
      <th style={{'color':'#ff7722'}} scope="col">Total no of users  signup</th>
      <th style={{'color':'#ff7722'}} scope="col">Total no of Admin</th>
      <th style={{'color':'#ff7722'}} scope="col">Total no of items which is in cart</th>
    </tr>
  </thead>
  <tbody>
    <tr style={{'textAlign':'center'}} >
    <td style={{'color':'white'}}> <h5>{c_sign}</h5></td>
      <td style={{'color':'white'}}> <h5>4</h5></td>
      <td style={{'color':'white'}}> <h5>{cart_val}</h5></td>
    </tr>
  </tbody>
</table>
</div>

<div className="container" style={{'marginTop':'60px'}}>
<h3 className="my-3" style={{'color':'white'}}><b>Payment Information :</b></h3>
<table class="table my-3">
  <thead>
    <tr>
      <th style={{'color':'#ff7722'}} scope="col">Total No of cash On delivery Payment</th>
      <th style={{'color':'#ff7722'}} scope="col">Total No of credit card Payment</th>
      <th style={{'color':'#ff7722'}} scope="col">Total No of UPI Payment</th>
    </tr>
  </thead>
  <tbody>
    <tr style={{'textAlign':'center'}} >
    <td style={{'color':'white'}}> <h5>{cash}</h5></td>
      <td style={{'color':'white'}}> <h5>{credit}</h5></td>
      <td style={{'color':'white'}}> <h5>{upi}</h5></td>
    </tr>
  </tbody>
</table>
</div >


<div className="container" style={{'marginTop':'60px'}}>
<h3 className="my-2" style={{'color':'white'}}><b>Active users and Uploaded item by user</b></h3>
<table class="table my-3">
  <thead>
    <tr>
      <th style={{'color':'#ff7722'}} scope="col">Total No of active users </th>
      <th style={{'color':'#ff7722'}} scope="col">Total No of  Uploaded item by user</th>
    </tr>
  </thead>
  <tbody>
    <tr  >
    <td style={{'color':'white'}}> <h5>{active}</h5></td>
      <td style={{'color':'white'}}> <h5>{upload}</h5></td>
    </tr>
  </tbody>
</table>
</div >

<div className="container" style={{'marginTop':'60px'}}>
<h3 className="my-2" style={{'color':'white'}}><b>Current user Login </b></h3>
<table class="table my-3">
  <thead>
    <tr>
      <th style={{'color':'#ff7722'}} scope="col">Total No of users login </th>
    </tr>
  </thead>
  <tbody>
    <tr  >
    <td style={{'color':'white'}}> <h5>{log}</h5></td>
    </tr>
  </tbody>
</table>
</div >
        </>
    )
}

export default Admin_data;