import data from './json/Trending.json';
function Upper()
{
    let val=Math.floor(Math.random()*2);
    return(
        <>
        <div style={{"display":"flex"}}>
        
        {
            data.map((e)=>{
                if(e.rand==val)
                {
                return  <div className="card" style={{"width": "10%","heigth":"11%","marginRight":"4px"}}>
                        <a href='/show' ><img onClick={()=>{localStorage.setItem('product_name',e.product_name);localStorage.setItem('product_prize',e.prize);localStorage.setItem('product_image',e.image)}}  className="card-img-top" src={e.image} alt="Card image cap"/></a>
            </div>
            }})
        }
        </div>
        </>
    )
}
export default Upper;