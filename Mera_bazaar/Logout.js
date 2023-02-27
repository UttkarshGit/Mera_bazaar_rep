import {useNavigate } from "react-router-dom";
function Logout()
{
    const navigate=useNavigate();
    async function dele()
    {
    let name=localStorage.getItem('login_user');
let _id=localStorage.getItem("_id");
    let res=await fetch("http://localhost:4000/del",{
        method:'post',
        body:JSON.stringify({_id}),
        headers:{
            'Content-Type':'application/json'
       }
    });
    res=await res.json();
    }
    dele();

    localStorage.clear();
    localStorage.clear();
    setTimeout(()=>{
        navigate('/');
    },1000/1000)
    return(
        <>
        </>
    )
}
export default Logout;