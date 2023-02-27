import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function Mobile()
{
    return(
        <>
        <Router>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style={{"height":"40px","marginBottom":"10px"}}>
            <h3 style={{"color":"white"}}>Mobiles</h3>
        </nav>
        <div class="row" style={{"margin":"15px"}}>
  <div class="col-sm-2">
    <div class="card">
      <div class="card-body">
      <Link to="/iphone" ><img style={{"width":"7rem"}} src="./Iphone/iphone1.jfif"/></Link>
      <button>click</button>
      </div>
    </div>
  </div>
  <div class="col-sm-2">
    <div class="card">
      <div class="card-body">
 <img style={{"width":"9rem"}} src="./Iphone/iphone1.jfif"/>
      </div>
    </div>
  </div>
  <div class="col-sm-2">
    <div class="card">
      <div class="card-body">
      <Link to="/realme_mobile" ><img style={{"width":"9rem"}} src="./Mobile.jpg"/></Link>
      </div>
    </div>
  </div>
  <div class="col-sm-2">
    <div class="card">
      <div class="card-body">
      <Link to="/redmi_note_9" ><img style={{"width":"9rem"}} src="./Mobile.jpg"/></Link>
      </div>
    </div>
  </div>
  <div class="col-sm-2">
    <div class="card">
      <div class="card-body">
      <Link to="/vivo" ><img style={{"width":"9rem"}} src="./Mobile.jpg"/></Link>
      </div>
    </div>
  </div>
  <div class="col-sm-2">
    <div class="card">
      <div class="card-body">
      <img style={{"width":"9rem"}} src="./Mobile.jpg"/>
      </div>
    </div>
  </div>
</div>
</Router>
        </>
    )
}

export default Mobile;