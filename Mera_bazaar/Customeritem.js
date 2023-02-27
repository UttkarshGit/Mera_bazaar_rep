function Customeritem()
{
    let product_name=localStorage.getItem('product_name');
    let product_prize=localStorage.getItem('product_prize');
    let email=localStorage.getItem('login_user');
    let product_image=localStorage.getItem("product_image");

  
    return(
        <>
        <div className="container my-3">
        {
        email?<div class="card mb-3" style={{ "maxWidth": "540px", 'border': '1px solid black' }} >
        <div class="row g-0">
            <div class="col-md-4">

                <img src={`./uploads/${product_image}`} class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <div style={{ 'display': 'flex' }}>
                        <h5 class="card-title">{product_name}</h5>
                        <div style={{ 'display': 'flex' }}>
                            <h5 style={{ 'marginLeft': '90%', 'marginTop': '6px' }} class="fa fa-inr" aria-hidden="true"></h5>
                            <h5 style={{ 'marginLeft': '20%' }} class="card-title"><b>{product_prize}</b></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
        <a className="btn btn-outline-success mx-3" style={{'textDecoration':"none",'color':'black','marginBottom':'3%','marginTop':'3%'}} href="/payment">Want to buy</a>
    </div>
    </div>:"Please login first"
        }
        </div>
        </>
    )
}

export default Customeritem;