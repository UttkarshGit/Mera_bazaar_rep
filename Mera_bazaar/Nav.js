import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function Nav() {

  const [val, setval] = useState("");
  const { transcript, resetTranscript } = useSpeechRecognition();

  function startt() {
    SpeechRecognition.startListening({ continuous: true });
  }


function stopp() { 
    setval(transcript);
    localStorage.setItem('search_item', transcript);
    SpeechRecognition.stopListening();
    resetTranscript();
  }

  function searching() {
    alert("we are going to search your data " + val);
  }

  useEffect(() => {
  }, [transcript])


  function navv() {
    localStorage.setItem('search_item', val);
    window.open("/search");
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">{localStorage.getItem('login_user')}</a>

        <a className="navbar-brand" href="/">bazaarrr</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="/signup">signup</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              {localStorage.getItem('login_user') ? <a className="navbar-brand" href="/logout">Logout</a> : <a className="nav-link" href="/login">Login <span className="sr-only">(current)</span></a>}
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                More
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="/">24 x 7 Customer Care</a>
                <a className="dropdown-item" href="/notification">Notification</a>
                <a className="dropdown-item" href="/admin">Admin pannel</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/cart">Cart</a>
            </li>
            <li>
              <a className="nav-link btn btn-outline-success mx-3" href="/entertainment">Entertainment</a>
            </li>
            <li>
              <a className="nav-link btn btn-outline-success mx-3" href="/order">Order</a>
            </li>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle btn btn-outline-success mx-3" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Seller
              </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="/usersign">Seller SignUp</a>
                <a className="dropdown-item" href="/sellerlogin">Seller Login</a>
              </div>
              {/* <a className="nav-link btn btn-outline-success mx-3" href="/upload">Upload Item</a> */}
            </li>
          </ul>
          <div className="form-inline my-2 my-lg-0">
            <button><input className="form-control mr-sm-2" placeholder="Search" onChange={(e) => { setval(e.target.value) }} value={val} aria-label="Search" />
            </button>
            <button type="button" style={{ 'height': '5%' }} >
              <img data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={startt} style={{ 'width': '20px', 'height': '30px' }} src='speech.png' />
            </button>
            <button type="button" class="btn btn-outline-success mx-3 my-3" onClick={navv} >Search</button>
            <div className="modal fade" style={{ 'color': 'white' }} id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div style={{ 'backgroundColor': 'black', 'border': '5px solid white' }} className="modal-dialog">
                <div style={{ 'backgroundColor': 'black' }} className="modal-content">
                  <div style={{ 'backgroundColor': 'black' }} className="modal-header">
                    <div className='container' ><img style={{ 'width': '100%', 'height': '100px' }} src='./listen.gif' /></div>
                  </div>
                  <div className="modal-body">
                    {transcript}
                  </div>
                  <div className="modal-footer">
                    <button onClick={stopp} data-bs-dismiss="modal">Stop</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav;