import { useState } from 'react';
import { json } from 'react-router-dom';
import Cart from './Cart';
import iphone from './json/Chairr.json';
import './mobileacc.css';
function Chair() {

  async function alldata(image,prize,name)
  {
    let user_login=localStorage.getItem("login_user");
    if(user_login!==null)
    {
      let product_name=name;
    let res=await fetch("http://localhost:4000/send_data",{
                method:'post',
                body:JSON.stringify({image,product_name,prize,user_login}),
                headers:{
                    'Content-Type':'application/json'
               }
            });
            if(res)
            {
              alert('succesfully added to the cart');
            }
  }
  else{
    alert("please login first");
  }
  }
  const [val, setval] = useState(iphone[0].prize);
  const [star1, setstart1] = useState("");
  const [star2, setstart2] = useState("");
  const [star3, setstart3] = useState("");
  const [star4, setstart4] = useState("");
  const [star5, setstart5] = useState("");
  if (val == 0 || val == 1) {
    setval(40000)
  }
  else if (val == 2) {
    setval(val * 20000)
  }
  else if (val == 3) {
    setval(val * 20000)
  }
  else if (val == 4) {
    setval(val * 40000)
  }
  else if (val == 5) {
    setval(val * 100000)
  }
  function clicked1() {
    setstart1("checked");
  }
  function clicked2() {
    setstart2("checked");
    setstart1("checked");
  }
  function clicked3() {
    setstart3("checked");
    setstart2("checked");
    setstart1("checked");
  }
  function clicked4() {
    setstart4("checked");
    setstart3("checked");
    setstart2("checked");
    setstart1("checked");
  }
  function clicked5() {

    setstart5("checked");
    setstart4("checked");
    setstart3("checked");
    setstart2("checked");
    setstart1("checked");
  }
  
  let values=iphone[0];
  localStorage.setItem('user',JSON.stringify(values));

let fin=localStorage.getItem('user');

console.log(JSON.parse(fin));

  return (
    <>
<div style={{'display':'flex'}}>
        <div className="sticky-div" style={{ "width": "25%", "backgroundColor": 'rgb(247, 244, 239)', 'color': "black",'borderRight':'2px solid black' }}>
          <div className='container' style={{ "marginTop": "8%" }}>
            <h6>Prize Range</h6>
            <input type="range" style={{ "width": "80%" }} onChange={(e) => { setval(e.target.value) }} className="form-range" min="0" max="5" id="customRange2" />

            <p style={{ "color": "red" }}>{val}</p>
            <h6>Discount</h6>
            <input type="checkbox" /> 20%
            <br />
            <input type="checkbox" /> 40%
            <br />
            <input type="checkbox" /> 60%
            <br />
            <br />
            <h6>RAM</h6>
            <input type="checkbox" /> 4GB
            <br />
            <input type="checkbox" /> 6GB
            <br />
            <input type="checkbox" /> 8GB
            <br />
            <br />

            <div className="accordion accordion-flush" id="accordionFlushExample">
              <div className="accordion-item">
                <h5 className="accordion-header" id="flush-headingOne">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    AVAILABILITY
                  </button>
                </h5>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    Instock
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h5 className="accordion-header" id="flush-headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Customer Rating
                  </button>
                </h5>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <span className={`fa fa-star ${star1} `} onClick={clicked1}></span>
                    <span className={`fa fa-star ${star2} `} onClick={clicked2} ></span>
                    <span className={`fa fa-star ${star3} `} onClick={clicked3}></span>
                    <span className={`fa fa-star ${star4} `} onClick={clicked4}></span>
                    <span className={`fa fa-star ${star5} `} onClick={clicked5}></span>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h5 className="accordion-header" id="flush-headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Display
                  </button>
                </h5>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <input type="checkbox" /> Full HD
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      <div style={{'marginLeft':'10%',}} >
      <h1 style={{'marginTop':'1%','textAlign':'center','backgroundColor':'rgb(236, 250, 250)'}}>{iphone[0].product_name}</h1>
        {
          iphone.map((e) => {
            return <div className="card mb-3" style={{ "maxWidth": "540px",'border':'1px solid black'}}>
              <div className="row g-0">
                <div className="col-md-4">

                  <img style={{'width':'190px','height':"150px"}} src={`.${e.image}`} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <div style={{ 'display': 'flex' }}>
                      <h5 className="card-title">{e.product_name}</h5>
                      <div style={{ 'display': 'flex' }}>
                        <h5 style={{ 'marginLeft': '90%','marginTop':'6px' }} className="fa fa-inr" aria-hidden="true"></h5>
                        <h5 style={{ 'marginLeft': '20%' }} className="card-title"><b>{e.prize}</b></h5>
                      </div>
                    </div>
                    <p className="card-text">{e.color}</p>
                    <p className="card-text">{e.display}</p>
                    <p className="card-text">{e.storage}</p>
                    <p className="card-text">{e.camera}</p>
                  </div>
                </div>
              </div>
              <button type="button" class="btn btn-outline-success mx-3" onClick={() => { alldata(e.image, e.prize, e.product_name) }}>Add from Cart</button>
            </div>
          })
}
</div>
</div>
    </>
  )
}


export default Chair;