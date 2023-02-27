import React, { useEffect, useState } from "react";
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




function Trending()
{

  let email=localStorage.getItem("login_user");
  const[item,setitem]=useState([{
    "email":"clasher@gmail.com",
    "image_name":"3baeb0845e2830a91cab60d057fa3a6c",
  "prize":"34",
  "color":"reddd"
  }]);

  const[num,setnum]=useState([{
    "email":"",
    "image_name":"",
  "prize":"",
  "color":""
  }])
  
  
  async function allitems()
  {
    let uploadingfile= await fetch("http://localhost:4000/up_image",{
      method:'post',
      body:JSON.stringify({email}),
      headers:{
          'Content-Type':'application/json'
      }
  })

  let upload_image =await uploadingfile.json();
  setitem(upload_image);
  }


  async function all_upload()
  {
    let uploadingfile= await fetch("http://localhost:4000/all_image");
  let upload_image =await uploadingfile.json();
  setTimeout(() => {
    setnum(upload_image);
  }, 1000);
  console.log(num);
  
  }



  allitems();

  useEffect(() => {
    all_upload();
  }, []); 


    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{"height":"40px","marginBottom":"10px"}}><h3 style={{'color':'white'}}>Your Products</h3></nav>
        <div className="row" style={{"margin":"15px"}}>
        {
   item.map((e)=>{
    return  <div className="col-sm-2">
    <div className="card">
      <div className="card-body">
       <img style={{"width":"9rem"}} src={"./uploads/"+e.image_name}/>
      </div>
      <div style={{'display':'flex'}}>
        <div>
          <h6>Amount:</h6>
          </div>
          <div>
            <h5>{e.prize}</h5>
          </div>
        </div>
        <h6>Colour: {e.color}</h6>
        <button type="button" class="btn btn-outline-success mx-3" >Add from Cart</button>
        <button type="button" class="btn btn-outline-success mx-3 my-3" >want to buy</button>
    </div>
    
  </div>
   })
       
  
}
</div>
  <div className="col-sm-4">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <Link to="#" className="btn btn-primary">Go somewhere</Link>
      </div>
    </div>
  </div>





{/* All Items......... */}

  <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{"height":"40px","marginBottom":"10px"}}>
            <h3 style={{"color":"white"}}>ALL   ITEMS   HERE</h3>
        </nav>
        <div className="row" style={{"margin":"15px"}}>
          {
            num.map((e)=>{
              return   <div className="col-sm-2">
              <div className="card">
                <div className="card-body">
                <Link to="/customer" ><img onClick={()=>{localStorage.setItem('product_prize',e.prize);localStorage.setItem('product_image',e.image_name)}} style={{"width":"7rem"}} src={"./uploads/"+e.image_name}/></Link>
                </div>
              </div>
            </div>
            })
          }
</div>



{/* mobile */}

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{"height":"40px","marginBottom":"10px"}}>
            <h3 style={{"color":"white"}}>Mobiles</h3>
        </nav>
        <div className="row" style={{"margin":"15px"}}>
  <div className="col-sm-2">
    <div className="card">
      <div className="card-body">
      <Link to="/Iphone" ><img style={{"width":"7rem"}} src="./Iphone/iphone1.jfif"/></Link>
      </div>
    </div>
  </div>
  <div className="col-sm-2">
    <div className="card">
      <div className="card-body">
      <Link to="/oppo" ><img style={{"width":"4.3rem"}} src="./oppo/oppo1.webp"/></Link>
      </div>
    </div>
  </div>
  <div className="col-sm-2">
    <div className="card">
      <div className="card-body">
      <Link to="/realme" ><img style={{"width":"7rem"}}src="./realme_mobile/realme_6s_1.jfif"/></Link>
      </div>
    </div>
  </div>
  <div className="col-sm-2">
    <div className="card">
      <div className="card-body">
      <Link to="/redminote"><img style={{"width":"9rem"}}src="./redmi_note_9/redmi_note_9_1.png"/></Link>
      </div>
    </div>
  </div>
  <div className="col-sm-2">
    <div className="card">
      <div className="card-body">
      <Link to="/vivo"><img style={{"width":"6.8rem"}} src="./vivo/vivo1.webp"/></Link>
      </div>
    </div>
  </div>
</div>










{/* Electronics */}
<nav className="navbar navbar-expand-lg navbar-dark bg-dark seven" style={{"height":"40px","marginBottom":"10px"}}>
            <h3 style={{"color":"white"}}>Electronics</h3>
        </nav>
        <div className="row" style={{"margin":"15px"}}>
  <div className="col-sm-2">
    <div className="card">
      <div className="card-body">
      <Link to="/refrigerator"><img style={{"width":"9rem"}} src="./Refrigerator/refrigerator1.jpg"/></Link>
      </div>
    </div>
  </div>
  <div className="col-sm-2">
    <div className="card">
      <div className="card-body">
      <Link to="/tv"><img style={{"width":"9rem"}}src="./T.V/TV1.jfif"/></Link> 
      </div>
    </div>
  </div>
  <div className="col-sm-2">
    <div className="card">
      <div className="card-body">
      <Link to=""><img style={{"width":"5rem"}}src="./Watch/watch1.jfif"/></Link>
      </div>
    </div>
  </div>
  <div className="col-sm-2">
    <div className="card">
      <div className="card-body">
      <Link to=""><img style={{"width":"12rem"}}src="./Washing_Machine/Washing_Machine1.jfif"/></Link>
      </div>
    </div>
  </div>
  <div className="col-sm-2">
    <div className="card">
      <div className="card-body">
      <img style={{"width":"9rem"}}src="./Mobile.jpg"/>
      </div>
    </div>
  </div>
  <div className="col-sm-2">
    <div className="card">
      <div className="card-body">
      <img style={{"width":"9rem"}}src="./Mobile.jpg"/>
      </div>
    </div>
  </div>
</div>

{/* Book */}

<nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{"height":"40px","marginBottom":"10px"}}>
            <h3 style={{"color":"white"}}>Books</h3>
        </nav>
        <div className="row" style={{"margin":"15px"}}>
  <div className="col-sm-2">
    <div className="card">
      <div className="card-body">
      <Link to="/c"><img style={{"width":"9rem"}}src="./c/C_book_1.jfif"/></Link>
      </div>
    </div>
  </div>
  <div className="col-sm-2">
    <div className="card">
      <div className="card-body">
      <Link to="/dsa"><img style={{"width":"9rem"}} src="./Dsa_books/dsa1.jfif"/></Link>
      </div>
    </div>
  </div>
  <div className="col-sm-2">
    <div className="card">
      <div className="card-body">
      <Link to="/python"><img style={{"width":"9rem"}} src="./python_books/python1.jfif"/></Link>
      </div>
    </div>
  </div>
  <div className="col-sm-2">
    <div className="card">
      <div className="card-body">
      <Link to="/php"><img style={{"width":"9rem"}} src="./php_books/php1.jfif"/></Link>
      </div>
    </div>
  </div>
  <div className="col-sm-2">
    <div className="card">
      <div className="card-body">
      <img style={{"width":"9rem"}}src="./Mobile.jpg"/>
      </div>
    </div>
  </div>
  <div className="col-sm-2">
    <div className="card">
      <div className="card-body">
      <img style={{"width":"9rem"}}src="./Mobile.jpg"/>
      </div>
    </div>
  </div>
</div>


{/* Furniture */}
<nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{"height":"40px","marginBottom":"10px"}}>
            <h3 style={{"color":"white"}}>Furniture</h3>
        </nav>
        <div className="row" style={{"margin":"15px"}}>
  <div className="col-sm-2">
    <div className="card">
      <div className="card-body">
     <Link to="/sofa"> <img style={{"width":"9rem"}}src="./Sofa/sofa1.jfif"/></Link>
      </div>
    </div>
  </div>
  <div className="col-sm-2">
    <div className="card">
      <div className="card-body">
      <Link to="/bed"> <img style={{"width":"12rem"}} src="./Bed/bed1.jfif"/></Link>
      </div>
    </div>
  </div>
  <div className="col-sm-2">
    <div className="card">
      <div className="card-body">
      <Link to="/studytable"> <img style={{"width":"10rem"}} src="./Study_table/table1.jfif"/></Link>
      </div>
    </div>
  </div>
  <div className="col-sm-2">
    <div className="card">
      <div className="card-body">
      <Link to="/chair"> <img style={{"width":"9rem"}} src="./chair/chair1.jfif"/></Link>
      </div>
    </div>
  </div>
  <div className="col-sm-2">
    <div className="card">
      <div className="card-body">
      <img style={{"width":"9rem"}}src="./Mobile.jpg"/>
      </div>
    </div>
  </div>
  <div className="col-sm-2">
    <div className="card">
      <div className="card-body">
      <img style={{"width":"9rem"}}src="./Mobile.jpg"/>
      </div>
    </div>
  </div>
</div>

{/* Health */}
<nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{"height":"40px","marginBottom":"10px"}}>
            <h3 style={{"color":"white"}}>Health</h3>
        </nav>
        <div className="row" style={{"margin":"15px"}}>
  <div className="col-sm-2">
    <div className="card">
      <div className="card-body">
      <Link to="/oil"><img style={{"width":"9rem"}} src="./Oil/oil1.jfif"/></Link>
      </div>
    </div>
  </div>
  <div className="col-sm-2">
    <div className="card">
      <div className="card-body">
      <Link to="/paste"><img style={{"width":"9rem"}} src="./Paste/paste1.jfif"/></Link>
      </div>
    </div>
  </div>
  <div className="col-sm-2">
    <div className="card">
      <div className="card-body">
      <Link to="/fasewash"><img style={{"width":"9rem"}} src="./Fasewash/fasewash1.jfif"/></Link>
      </div>
    </div>
  </div>
  <div className="col-sm-2">
    <div className="card">
      <div className="card-body">
      <img style={{"width":"9rem"}}src="./Mobile.jpg"/>
      </div>
    </div>
  </div>
  <div className="col-sm-2">
    <div className="card">
      <div className="card-body">
      <img style={{"width":"9rem"}}src="./Mobile.jpg"/>
      </div>
    </div>
  </div>
  <div className="col-sm-2">
    <div className="card">
      <div className="card-body">
      <img style={{"width":"9rem"}}src="./Mobile.jpg"/>
      </div>
    </div>
  </div>


</div>

        </>
    )
}

export default Trending;


