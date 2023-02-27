import { useEffect, useState } from "react";
import Clock from "./Clock";

function Game() {
    let first=[{
        'word':'everyday',
        'rand':0
    },
    {
        'word':'functional',
        'rand':1
    },
    {
        'word':'accompany',
        'rand':2
    },
    {
        'word':'attorney',
        'rand':0
    },
    {
        'word':'confidence',
        'rand':1
    },
    {
        'word':'essential',
        'rand':2
    },
    {
        'word':'vocabulary',
        'rand':0
    },
    {
        'word':'boundary',
        'rand':1
    },
    {
        'word':'graduate',
        'rand':2
    },

]


let second=[{
    'word':'household',
    'rand':1
},
{
    'word':'importance',
    'rand':2
},
{
    'word':'maintenance',
    'rand':0
},
{
    'word':'improvement',
    'rand':1
    
},
{
    'word':'investigator',
    'rand':2
},
{
    'word':'nonetheless',
    'rand':0
},
{
    'word':'opportunity',
    'rand':1
},
{
    'word':'politically',
    'rand':2
},
{
    'word':'psychological',
    'rand':0
},
]

let third=[{
    'word':'organization',
    'rand':1
},
{
    'word':'violence',
    'rand':2
},
{
    'word':'widespread',
    'rand':0
},
{
    'word':'yesterday',
    'rand':1
},
{
    'word':'tournament',
    'rand':2
},
{
    'word':'successfully',
    'rand':0
},
{
    'word':'reinforce',
    'rand':1
},
{
    'word':'secretary',
    'rand':2
},
{
    'word':'rapidly',
    'rand':0
},
]
   let rand_first=Math.floor(Math.random()*2);
   let rand_second=Math.floor(Math.random()*2);
   let rand_third=Math.floor(Math.random()*2);
   const[inp,setinp]=useState("");
   const[score,setscore]=useState(0);
   const[counter,setCounter]=useState(1);
   function change(e)
   {
    let docc=document.getElementsByClassName(""+e.target.value);
    if(docc.length==1)
    {
        docc[0].innerHTML="";
        let cha=document.getElementById('changing');
        cha.value="";
        setscore(score+1);

    }

   }
    


    return(
        <><h1 style={{'text-align':'center','color':'green'}}>
            Typo Gamer
        </h1>
          <div style={{'margin':'3%','border':'2px solid white'}}>
        <h5 style={{'color':'orange','margin':'1%'}}>Highest Score: 27</h5>
        <h5 style={{'color':'orange','margin':'1%'}}>Your Score: {score}</h5>
        <h5 style={{'color':'orange','margin':'1%'}}>Time: {<Clock/>}</h5>
        <div style={{"display":'flex','marginLeft':"16%"}}>
            <div>
             {first.map((e)=>{
                if(e.rand===rand_first){
                return <div className={e.word}>
                <img src="./rocket.gif" style={{'width':'22%'}}/>
                <p style={{'color':'RED'}}>{e.word}</p>
                </div>
                }
             })}
        </div>

        <div>
             {second.map((e)=>{
                if(e.rand===rand_second){
                return <div className={e.word}>
                <img src="./rocket.gif" style={{'width':'22%'}}/>
                <p style={{'color':'RED'}}>{e.word}</p>
                </div>
                }
             })}
        </div>

        <div>
             {third.map((e)=>{
                if(e.rand===rand_third){
                return <div className={e.word}>
                <img src="./rocket.gif" style={{'width':'22%'}}/>
                <p style={{'color':'RED'}}>{e.word}</p>
                </div>
                }
             })}
        </div>

        </div>
        
          </div>
          <div class="form-group mx-sm-3 mb-2">
              <input placeholder="Type Here" onChange={change} class="form-control" id="changing"  style={{'width':'50%','marginLeft':'25%','marginBottom':'2%','border':'4px solid aqua'}} />
          </div> 
        </> 
    ) 
}

export default Game;