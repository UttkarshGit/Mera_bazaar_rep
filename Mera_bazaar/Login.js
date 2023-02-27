import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Login()
{
    const[email,setemail]=useState("");
    const[password,setpass]=useState("");
    const navigate=useNavigate();

    async function log()
    {
        let count=1;
    let signup_data= await fetch("http://localhost:4000/logged_in_user",{
        method:'post',
        body:JSON.stringify({count}),
        headers:{
            'Content-Type':'application/json'
        }
    });
    let datas=await signup_data.json();
    localStorage.setItem("_id",datas._id);
    console.log(localStorage.getItem("_id"));
    }
    async function submitbtn()
    {
        if(email.length!==0 && password.length!==0)
        {
            let res=await fetch("http://localhost:4000/login",{
                method:'post',
                body:JSON.stringify({email,password}),
                headers:{
                    'Content-Type':'application/json'
               }
            });
            res=await res.json();
            if(res.rest==='no user exist')
            {
               
                alert("please fill the correct email or password");
            }
            else{
    //             localStorage.setItem("user_exist",res.name);
    //             localStorage.setItem("id",res._id)
    //             localStorage.setItem("email",res.email);
    //             localStorage.setItem("prof_imag","user.png")
    //             setTimeout(()=>{
    // window.location.reload(false)

    //             },1000/1000)
    localStorage.setItem('login_user',email);
     log();
        navigate('/');
               
            }
        }
        else
        {
            alert("please fill all fields");
        }
    }
    return(
        <>
            <h1 className="my-3" style={{'textAlign':'center','color':'white'}}>Login</h1>

         <div className="container my-3 clp" style={{background: "#f4e7e2",'borderRadius':'20px'}}>
 
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

export default Login;