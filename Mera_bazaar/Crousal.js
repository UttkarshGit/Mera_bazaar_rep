function Crousal()
{
    return(
        <>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={{'marginTop':"15px"}} >
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img style={{"height":"200px"}} className="d-block w-100" src="./Mobile.jpg" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img style={{"height":"200px"}} className="d-block w-100" src="./Mobile.jpg" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img style={{"height":"200px"}} className="d-block w-100" src="./Mobile.jpg" alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-pclassmarev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" ></span>
    <span className="sr-only">Previous</span>
  </a>
  <a  className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span  className="carousel-control-next-icon" ></span>
    <span  className="sr-only">Next</span>
  </a>
</div>
        </>
    )
}

export default Crousal;