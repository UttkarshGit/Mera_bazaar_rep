require("./reel.css");
function Reel()
{
    let val=[
        {
            "music":"shivali",
            "reel":"./reel_video/video_1.mp4",
            "user":"rohan singh",
            "like":"1290",
            "comment":"345",
            "share":"235",
            "description":"love",
            'ran':Math.floor(Math.random()*6)
        },
        {
            "music":"mujhe mulane walo ki...",
            "reel":"./reel_video/video_2.mp4",
            "user":"nikhil singh",
            "like":"12900",
            "comment":"355",
            "share":"215",
            "description":"shiv bhakti",
            'ran':Math.floor(Math.random()*6)
        },
        {
            "music":"dil tujhe de di",
            "reel":"./reel_video/video_3.mp4",
            "user":" rahul",
            "like":"1200",
            "comment":"355",
            "share":"315",
            "description":"cricket shorts ",
            'ran':Math.floor(Math.random()*6)
        },
        {
            "music":"chal ghar chale",
            "reel":"./reel_video/video_4.mp4",
            "user":" riya soni",
            "like":"12000",
            "comment":"455",
            "share":"315",
            "description":"sad status  ",
            'ran':Math.floor(Math.random()*6)
        },
        {
            "music":"desh mere",
            "reel":"./reel_video/video_5.mp4",
            "user":"annu malik ",
            "like":"20000",
            "comment":"355",
            "share":"315",
            "description":"kohli sorts ",
            'ran':Math.floor(Math.random()*6)
        },
        {
            "music":"kahndi hudi si",
            "reel":"./reel_video/video_6.mp4",
            "user":" tannu singh",
            "like":"20000",
            "comment":"355",
            "share":"315",
            "description":"actor vdo  ",
            'ran':Math.floor(Math.random()*6)
        },
        {
            "music":"tu aake dhekh le ",
            "reel":"./reel_video/video_7.mp4",
            "user":" sarth singh ",
            "like":"2000",
            "comment":"3550",
            "share":"355",
            "description":"cricketing short ",
            'ran':Math.floor(Math.random()*6)
        },
        {
            "music":" yar tera superstar",
            "reel":"./reel_video/video_8.mp4",
            "user":"alia kapoor",
            "like":"200",
            "comment":"55",
            "share":"31",
            "description":"romantic reel ",
            'ran':Math.floor(Math.random()*6)
        },
        {
            "music":"english song",
            "reel":"./reel_video/video_9.mp4",
            "user":"ritika",
            "like":"1234",
            "comment":"675",
            "share":"388",
            "description":"my sqaud ",
            'ran':Math.floor(Math.random()*6)
        },
        {
            "music":" duniya te chori chori dil mang di",
            "reel":"./reel_video/video_10.mp4",
            "user":"yogita pandey",
            "like":"20000",
            "comment":"5500",
            "share":"31",
            "description":"romatic dance ",
            'ran':Math.floor(Math.random()*6)
        },
        {
            "music":" superstar",
            "reel":"./reel_video/video_11.mp4",
            "user":" itsashish",
            "like":"2000",
            "comment":"515",
            "share":"31",
            "description":"kohali awards",
            'ran':Math.floor(Math.random()*6)
        },
        {
            "music":" tu jo mere sath hai",
            "reel":"./reel_video/video_12.mp4",
            "user":"raj_sharma ",
            "like":"2090",
            "comment":"565",
            "share":"31",
            "description":" bhakti vibes ",
            'ran':Math.floor(Math.random()*6)
        },
        {
            "music":"desi kalakar",
            "reel":"./reel_video/video_13.mp4",
            "user":"prtik_12 ",
            "like":"9880",
            "comment":"3675",
            "share":"31",
            "description":"smriti crickting shots",
            'ran':Math.floor(Math.random()*6)
        },
        {
            "music":"duniya te chori chori dil mang di ",
            "reel":"./reel_video/video_14.mp4",
            "user":"its_nikhill",
            "like":"200",
            "comment":"55",
            "share":"31",
            "description":"romatic dance  ",
            'ran':Math.floor(Math.random()*6)
        },
        {
            "music":"tere liye har roj hai jite",
            "reel":"./reel_video/video_15.mp4",
            "user":"@suhani_12",
            "like":"200",
            "comment":"55",
            "share":"31",
            "description":"arijit singh songs ",
            'ran':Math.floor(Math.random()*6)
        },
        {
            "music":" main wo chand jiska",
            "reel":"./reel_video/video_16.mp4",
            "user":"anlge_priya",
            "like":"2009",
            "comment":"5205",
            "share":"300",
            "description":"sad sayari  ",
            'ran':Math.floor(Math.random()*6)
        },
        {
            "music":" jitu bhaiya",
            "reel":"./reel_video/video_17.mp4",
            "user":"soumya_11",
            "like":"209",
            "comment":"505",
            "share":"300",
            "description":"mmotivational sayari ",
            'ran':Math.floor(Math.random()*6)
        },
        {
            "music":"gulzar sayri ",
            "reel":"./reel_video/video_18.mp4",
            "user":"@sayar_1",
            "like":"2009",
            "comment":"5205",
            "share":"300",
            "description":"motivational lines",
            'ran':Math.floor(Math.random()*6)
        },
        {
            "music":" desi kalakar",
            "reel":"./reel_video/video_19.mp4",
            "user":"@sudhanshu_soni",
            "like":"209",
            "comment":"505",
            "share":"30",
            "description":" smriti crickting shots",
            'ran':Math.floor(Math.random()*6)
        },
        {
            "music":" bhojpuri romantic songs",
            "reel":"./reel_video/video_20.mp4",
            "user":"@ramesh_gupta",
            "like":"2090",
            "comment":"5005",
            "share":"30",
            "description":"bhojpuri song",
            'ran':Math.floor(Math.random()*6)
        },
        {
            "music":"bholenath ",
            "reel":"./reel_video/video_21.mp4",
            "user":"@sudheer_soni",
            "like":"209",
            "comment":"505",
            "share":"30",
            "description":"mahadev songs",
            'ran':Math.floor(Math.random()*6)
        },
        {
            "music":" ho gaya begana",
            "reel":"./reel_video/video_22.mp4",
            "user":"ig_utkarsh",
            "like":"2009",
            "comment":"50005",
            "share":"30",
            "description":"break up songs",
            'ran':Math.floor(Math.random()*6)
        },
        {
            "music":" tu meri rani main tera raza",
            "reel":"./reel_video/video_23.mp4",
            "user":"its_gaytri",
            "like":"209",
            "comment":"505",
            "share":"30",
            "description":"mood fresh reels",
            'ran':Math.floor(Math.random()*6)
        },
        {
            "music":"aarambh hai prchand",
            "reel":"./reel_video/video_24.mp4",
            "user":"sudheer_mishraa",
            "like":"2009",
            "comment":"505",
            "share":"30",
            "description":" shrre krishna motivational speech",
            'ran':Math.floor(Math.random()*6)
        },
        {
            "music":"rat kya hoti hai humse puchiye ",
            "reel":"./reel_video/video_25.mp4",
            "user":"sayri_sad",
            "like":"10000",
            "comment":"5005",
            "share":"300",
            "description":"sayri",
            'ran':Math.floor(Math.random()*6)
        },
        {
            "music":"ola tim tari ",
            "reel":"./reel_video/video_26.mp4",
            "user":"@sneha_9",
            "like":"209",
            "comment":"505",
            "share":"30",
            "description":"study to grt PG degree",
            'ran':Math.floor(Math.random()*6)
        },
        {
            "music":" king",
            "reel":"./reel_video/video_27.mp4",
            "user":"@virta_fans",
            "like":"2090",
            "comment":"5005",
            "share":"302",
            "description":"india winnings the series moment ",
            'ran':Math.floor(Math.random()*6)
        },
        {
            "music":"mera hal tum puchte ho tumhe malum hona chahiye ",
            "reel":"./reel_video/video_28.mp4",
            "user":"@rajan345",
            "like":"20900",
            "comment":"505",
            "share":"30",
            "description":"sad_syari",
            'ran':Math.floor(Math.random()*6)
        },
        {
            "music":"wait a minute ",
            "reel":"./reel_video/video_29.mp4",
            "user":"warden_23",
            "like":"9889",
            "comment":"8705",
            "share":"30",
            "description":"african dance vdo",
            'ran':Math.floor(Math.random()*6)
        },
        {
            "music":" kya karu main sharm se",
            "reel":"./reel_video/video_30.mp4",
            "user":"@tusar_singh",
            "like":"6734",
            "comment":"535",
            "share":"30",
            "description":"surat multi national bridge",
            'ran':Math.floor(Math.random()*6)
        },
        {
            "music":"tera nasha",
            "reel":"./reel_video/video_31.mp4",
            "user":"nikhil_13",
            "like":"2090000",
            "comment":"508965",
            "share":"3760",
            "description":"cake lovers",
            'ran':Math.floor(Math.random()*6)
        },
        {
            "music":"mujhe kya parwah is duniya ki",
            "reel":"./reel_video/video_32.mp4",
            "user":"@tanisha12",
            "like":"209",
            "comment":"505",
            "share":"30",
            "description":"romantic songs reel",
            'ran':Math.floor(Math.random()*6)
        },
        {
            "music":"motivational sayri ",
            "reel":"./reel_video/video_33.mp4",
            "user":"@sayar_riya",
            "like":"20099",
            "comment":"5035",
            "share":"3980",
            "description":"rahat indaori sayri ",
            'ran':Math.floor(Math.random()*6)
        },
        {
            "music":" doni lovers",
            "reel":"./reel_video/video_34.mp4",
            "user":"@shikhar_23",
            "like":"1119",
            "comment":"1505",
            "share":"130",
            "description":"live match highlights ",
            'ran':Math.floor(Math.random()*6)
        },
        {
            "music":"sun mere humsfar ",
            "reel":"./reel_video/video_35.mp4",
            "user":"@anjalli09",
            "like":"2092",
            "comment":"505",
            "share":"30",
            "description":"cricket vdo",
            'ran':Math.floor(Math.random()*6)
        },
        {
            "music":"pta chla ki glt leke main pta nikla",
            "reel":"./reel_video/video_36.mp4",
            "user":"@broken_heart",
            "like":"12099",
            "comment":"505",
            "share":"30",
            "description":"new home overview",
            'ran':Math.floor(Math.random()*6)
        },
        {
            "music":" sami sami kyu kahta hai",
            "reel":"./reel_video/video_37.mp4",
            "user":"@rohan_kumar",
            "like":"209",
            "comment":"505",
            "share":"30",
            "description":"little cute girl dance",
            'ran':Math.floor(Math.random()*6)
        },
        {
            "music":"dil ka dariya  ",
            "reel":"./reel_video/video_38.mp4",
            "user":"@santani_rohit",
            "like":"2000009",
            "comment":"50005",
            "share":"3000",
            "description":" shree krishna motivational_speech",
            'ran':Math.floor(Math.random()*6)
        },
        {
            "music":"brown munde",
            "reel":"./reel_video/video_40.mp4",
            "user":"@priya_hi",
            "like":"26509",
            "comment":"5058",
            "share":"309",
            "description":"cute dance steps",
            'ran':Math.floor(Math.random()*6)
        },
        {
            "music":"tum hi yar mera ",
            "reel":"./reel_video/video_41.mp4",
            "user":"@utkarsh_soni",
            "like":"206769",
            "comment":"5085",
            "share":"309",
            "description":"shiv ji vdo",
            'ran':Math.floor(Math.random()*6)
        },
        {
            
            "music":"sad rigtones",
            "reel":"./reel_video/video_42.mp4",
            "user":"@mukesh_g",
            "like":"202",
            "comment":"55",
            "share":"30",
            "description":"motivational lines",
            'ran':Math.floor(Math.random()*6)
        },
        {
            "music":"main dhekhu tei photo",
            "reel":"./reel_video/video_43.mp4",
            "user":"@arushi_singh",
            "like":"8792",
            "comment":"585",
            "share":"300",
            "description":"hot romantic video ",
            'ran':Math.floor(Math.random()*6)
        },
        {
            "music":"rokstar rigtones",
            "reel":"./reel_video/video_44.mp4",
            "user":"@mukesh_g",
            "like":"678",
            "comment":"505",
            "share":"301",
            "description":"virat agression video",
            'ran':Math.floor(Math.random()*6)
        },
        {
            "music":"jeena jeena ",
            "reel":"./reel_video/video_45.mp4",
            "user":"nik_98",
            "like":"202",
            "comment":"55",
            "share":"30",
            "description":"web series short video",
            'ran':Math.floor(Math.random()*6)
        },
        {
            "music":"tere bin",
            "reel":"./reel_video/video_46.mp4",
            "user":"@anikita_killler",
            "like":"202",
            "comment":"55",
            "share":"30",
            "description":"shushant singh rajput sad videos",
            'ran':Math.floor(Math.random()*6)
        },
        {
            "music":"justin biber songs",
            "reel":"./reel_video/video_47.mp4",
            "user":"@jastin_maker",
            "like":"702",
            "comment":"155",
            "share":"30",
            "description":"fifa world cup videos",
            'ran':Math.floor(Math.random()*6)
        },
        {
            "music":"he dhukh bhnjan maruti nandan",
            "reel":"./reel_video/video_48.mp4",
            "user":"@ram123",
            "like":"202",
            "comment":"55",
            "share":"30",
            "description":"hanuman ji shorts videos",
            'ran':Math.floor(Math.random()*6)
        },
        {
            "music":"tere bin na lage jiya ",
            "reel":"./reel_video/video_49.mp4",
            "user":"@nisha_gurgain",
            "like":"202",
            "comment":"55",
            "share":"30",
            "description":"sad love songs",
            'ran':Math.floor(Math.random()*6)
        }
    
    ]
    ;

    let a=Math.floor(Math.random()*6);
    return(
        <>
        <div className="container" >
        {
            val.map((e)=>{
                if(e.ran==a)
                {
                return <div>
                    
                    <video className="frs" src={e.reel} width="300" height="100%" loop="true"  onMouseOver={(e) => {
                    e.target.play();
                
                  }} onMouseOut={(e)=>{
                    e.target.pause();
                  }} ></video><div style={{"display":"flex"}}><p className="fr" style={{'color':'white'}}>{e.user}</p><div><p className="fr" style={{'color':'white'}}>{e.music}</p></div><p className="fr" style={{'color':'white'}}>{e.like}</p></div> </div>;
}})
        
        }
        {
              val.map((e)=>{
                if(e.ran!=a)
                {
                return <div>
                    
                    <video className="frs" src={e.reel} width="300" height="100%"  loop="true" onMouseOver={(e) => {
                    e.target.play();
                  }} onMouseOut={(e)=>{
                    e.target.pause();
                  }}  ></video><div style={{"display":"flex"}}><p className="fr" style={{'color':'white'}}>{e.user}</p><div><p className="fr" style={{'color':'white'}}>{e.music}</p></div><p className="fr" style={{'color':'white'}}>{e.like}</p></div> </div>;
}}) 
        }
        </div>
        </>
    )
}

export default Reel;