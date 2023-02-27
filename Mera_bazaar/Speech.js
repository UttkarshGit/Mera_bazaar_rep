import React, { useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
const Speech=()=>{
    const{transcript,resetTranscript}=useSpeechRecognition();

    function startt()
    {
        SpeechRecognition.startListening({continuous:true})
    }

   function stopp()
    {
        SpeechRecognition.stopListening();
        resetTranscript();
    }

    useEffect(() => {
    }, [transcript])

    return(
        <div >
<button type="button" onClick={startt} data-bs-toggle="modal" data-bs-target="#exampleModal">
<img src='speech.png'/>
</button>
<div className="modal fade" style={{'color':'white'}} id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div style={{'backgroundColor':'black','border':'5px solid white'}} className="modal-dialog">
    <div style={{'backgroundColor':'black'}} className="modal-content">
      <div style={{'backgroundColor':'black'}} className="modal-header">
        <div className='container' ><img style={{'width':'100%','height':'100px'}} src='listen.gif'/></div>
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
    )
}




export default Speech;