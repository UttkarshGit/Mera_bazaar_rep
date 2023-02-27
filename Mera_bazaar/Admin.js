import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";function Admin()
{
  
    const[email,setemail]=useState("");
    const[password,setpass]=useState("");
    const navigate=useNavigate();
    async function submitbtn()
    {
        if(email.length!==0 && password.length!==0)
        {
            let res=await fetch("http://localhost:4000/login_admin",{
                method:'post',
                body:JSON.stringify({email,password}),
                headers:{
                    'Content-Type':'application/json'
               }
            });
            let dig=await res.json();
            console.log(dig);
            if(dig.rest==='no')
            {
               
                alert("please fill the correct email or password");
            }
            else{
    localStorage.setItem('login_user',email);
    localStorage.setItem("admin_name",dig.name);
    localStorage.setItem('admin_email',dig.email);
    localStorage.setItem("admin_position",dig.position);
    localStorage.setItem("admin_image",dig.adm_image);
                navigate('/admin_data');
            }
        }
        else
        {
            alert("please fill all fields");
        }
    }

    return(
    <>
    <h1 className="my-3" style={{'textAlign':'center','color':'white'}}>Admin Pannel</h1>
      <div className="container my-3 clp" style={{background: "#f4e7e2",'borderRadius':'10px'}}>
 
 <div className="mb-3 form-group w-60 topp">
<label htmlFor="exampleInputEmail1" className="form-label"><b>Email address</b></label>
<input type="email" onChange={(e)=>{setemail(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
</div>
<div className="mb-3 form-group w-60 topp">
<label htmlFor="exampleInputPassword1" className="form-label"><b>Password</b></label>
<input onChange={(e)=>{setpass(e.target.value)}} className="form-control" id="exampleInputPassword1"/>
</div>
<button onClick={submitbtn} className="btn btn-primary topp" style={{'marginBottom':'20px'}}>Submit</button>
</div>


    </>
    )
}

export default Admin;