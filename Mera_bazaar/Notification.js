import { useState } from "react";

function Notification()
{
    let email=localStorage.getItem("login_user");
    const[codd,setcodd]=useState([{
        "email":"",
    "product_prize":"",
    "product_name":"",
    }]);

    const[creditt,setcreditt]=useState([{
    "email":"",
    "product_prize":"",
    "product_name":"",
    "cardholder":"",
    "cardno":"",
    "cvv":""
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
    }
   credit()
    const[upii,setupii]=useState([{
        "email":"",
        "product_prize":"",
        "product_name":"",
        "upi_id":""
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
    return(
        <>
        <div className="container">
            <h2 className="my-3" style={{'textAlign':'center','color':'white'}}>Notification</h2>
        {
            codd.map((e)=>{
                return <div class="vstack gap-3 my-3">
                <div className="bg-dark border" style={{'color':'white','paddingTop':'3px','paddingBottom':'3px'}}><b style={{'marginLeft':'2%'}}>{e.product_name+" "}</b>Successfully placed of Rs:{ e.product_prize}</div>
                </div>
                
            })
        
        }
        {
           creditt.map((e)=>{
            return <div class="vstack gap-3 my-3">
            <div className="bg-dark border" style={{'color':'white','paddingTop':'3px','paddingBottom':'3px'}}><b style={{'marginLeft':'2%'}}>{e.product_name+" "}</b>Successfully placed of Rs:{ e.product_prize}</div>
            </div>
            
        })
        
        }
        {
          upii.map((e)=>{
            return <div class="vstack gap-3 my-3">
            <div className="bg-dark border" style={{'color':'white','paddingTop':'3px','paddingBottom':'3px'}}><b style={{'marginLeft':'2%'}}>{e.product_name+" "}</b>Successfully placed of Rs:{ e.product_prize}</div>
            </div>
            
        })
        
        }
       </div>
        </>
    )
}

export default Notification;