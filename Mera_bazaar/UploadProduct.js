import axios from "axios";
import { useState } from "react";

function UploadProduct()
{
    const[image,setimage]=useState("");
    const[prize,setprize]=useState("");
    let email=localStorage.getItem('login_user');
    const[color,setcolor]=useState("");
    let[totitem,settotitem]=useState(0);
    const upload=(e)=>{
        setimage(e.target.files[0]);
    }

    async function upload_images()
    {
        let uploadingfile= await fetch("http://localhost:4000/api/upload_image",{
            method:'post',
            body:JSON.stringify({email,prize,color}),
            headers:{
                'Content-Type':'application/json'
            }
        })
        upload_image =await upload_image.json();
        console.log(upload_image);

          
    }
    
    async function upload_image()
    {
        if(email!==null)
            {
        const formData=new FormData();
        formData.append('image',image);
        axios.post("http://localhost:4000/api/image",formData).then((res)=>{
            console.log("done");
            alert("product uploaded succesfully")

            upload_images()

        }).catch((err)=>{
            console.log(err)
        })   
    }
    else{
        alert("please login for upload product")
    }
}

async function count_tot_item()
{
    let uploadingfile= await fetch("http://localhost:4000/up_image",{
            method:'post',
            body:JSON.stringify({email}),
            headers:{
                'Content-Type':'application/json'
            }
        })
        uploadingfile =await uploadingfile.json();
            settotitem(uploadingfile.length)
}
count_tot_item();
    return(
    <>
    
<h1 className="my-3" style={{'textAlign':'center','color':'green'}}>Upload Your Product</h1>
<div className="container">
<h5 style={{'color':'white'}}>Welocome: {localStorage.getItem('login_user')}</h5>
<div class="mb-3">
  <h4 style={{'color':'aqua'}}>Upload Image</h4>
  <input class="form-control" type="file" id="formFile" onChange={upload}/>
  {image===""?"":<img style={{'width':'20%','height':'300px'}} src={URL.createObjectURL(image)}/>}
</div>
<div class="mb-3 row">
    <h4  style={{'color':'aqua'}} class="col-sm-2 col-form-label">Prize of you Product</h4>
    <div class="col-sm-10">
      <input onChange={(e)=>{setprize(e.target.value)}}  class="form-control"/>
    </div>
  </div>
  <div class="mb-3 row">
    <h4  style={{'color':'aqua'}} class="col-sm-2 col-form-label">Color of you Product</h4>
    <div class="col-sm-10">
      <input onChange={(e)=>{setcolor(e.target.value)}}  class="form-control"/>
    </div>
  </div>
  {/* <a className="" href="/upload">Upload Item</a> */}
    <button className="nav-link btn btn-outline-success mx-3" style={{'paddingLeft':'5%','paddingRight':'5%','paddingTop':'0.5%','paddingBottom':'0.5%','color':'white'}} onClick={upload_image} >Upload</button>
    </div>
    <div className="my-3 container" style={{'display':'flex','paddingTop':'2%'}}>
       
        <div style={{'color':'white'}}><h4>Total no of item you uploaded</h4></div>
        <div>
            <h4 style={{'marginTop':'2%'}}>:< b style={{'color':'orange'}}>{totitem}</b></h4>
        </div>
    </div>
    </>
    
    )
}

export default UploadProduct;