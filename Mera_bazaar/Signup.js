import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup()
{
    const[name,setname]=useState("");
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");
    const navigate=useNavigate();

    async function nowcalllogin()
    {
        let signup_data= await fetch("http://localhost:4000/register",{
            method:'post',
            body:JSON.stringify({name,email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        })
        signup_data =await signup_data.json();
        if(signup_data.name)
        {
           navigate('/login');
        }
        else{
            alert("something went wrong");
        }
    }
    async function Signed_In()
    {
        if(name.length!=0 && email.length!==0 && password.length!==0)
        {
            let res=await fetch("http://localhost:4000/login_sign",{
                method:'post',
                body:JSON.stringify({email}),
                headers:{
                    'Content-Type':'application/json'
               }
            });
            res=await res.json();
            if(res.rest==='no user exist')
            {
               
               nowcalllogin();
            }
            else{
              alert("please insert another email");
            }
        }
        else{
            alert("fill all the fields");
        }
    } 
    return(
        <>
        <h1 style={{'textAlign':'center','marginTop':'5px','color':'white'}}>Sign Up</h1>
        <div className="container my-3 clp" style={{background: "#e6f4f7",'borderRadius':'10px'}}>
        <div className="mb-3 form-group w-60 topp">
    <label style={{'paddingTop':'2%'}} htmlFor="exampleInputName1" className="form-label"><b>Full Name</b></label>
    <input type="text" onChange={(e)=>{setname(e.target.value)}} className="form-control" id="exampleInputName1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3 form-group w-60 topp">
    <label htmlFor="exampleInputEmail1" className="form-label"><b>Email address</b></label>
    <input type="email" onChange={(e)=>{setemail(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3 form-group w-60 topp">
    <label htmlFor="exampleInputPassword1" className="form-label"><b>Password</b></label>
    <input onChange={(e)=>{setpassword(e.target.value)}} className="form-control" id="exampleInputPassword1"/>
  </div>
  <button style={{'marginBottom':'3%'}} onClick={Signed_In} className="btn btn-primary topp">Submit</button>
</div>

        </>
    )
}

export default Signup;