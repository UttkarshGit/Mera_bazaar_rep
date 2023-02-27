function Recently()
{
    let product_name=localStorage.getItem('product_name');
    let product_prize=localStorage.getItem('product_prize');
    let email=localStorage.getItem('login_user');
    let product_image=localStorage.getItem("product_image");
    let url=localStorage.getItem('url');
    return(
        <>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{"height":"40px","marginBottom":"10px"}}>
            <h3 style={{"color":"white"}}>Recently Viewed</h3>
        </nav>
        {

        }
           <div class="col-sm-2">
    <div class="card">
      <div class="card-body">
      <a href={url} ><img style={{"width":"7rem"}} src={product_image}/></a>
      </div>
    </div>
  </div>
        </>
    )
}

export default Recently;