import { useState } from "react";

function Contact()
{
    const [nam,setnam]=useState("");
    const [emai,setemai]=useState("");
    const[messag,setmessag]=useState("");
    const[check,setcheck]=useState(false);
    const serviceID="service_otciq7j";
    const templateID="template_9k6lyf7";
    var params={
      name:nam,
      email:emai,
      message:messag
    }
    
    function sendmail()
    {
        if(nam && emai && messag)
        {
        setcheck(true);
        console.log(params)
      window.emailjs.send(serviceID,templateID,params).then((res)=>{
        alert("Thank you for contacting !!! we will reach you soon")
        document.getElementById("na").value="";
        document.getElementById("em").value="";
        document.getElementById("me").value="";
        setcheck(false)
      })
    }
    else{
        alert("please fill all details")
    }
    } 

    return(
        <>
        {check?<h1 style={{'color':'green'}}>PLease wait !!!</h1>:""}
        name:
        <input id="na" onChange={(e)=>{setnam(e.target.value)}}/>
        email:
        <input  id="em" onChange={(e)=>{setemai(e.target.value)}}/>
        message:
        <input id="me" onChange={(e)=>{setmessag(e.target.value)}}/>
        <button  onClick={sendmail}>Send</button>
        </>
    )
}

export default Contact;