function Payments()
{
    // {priti.rathore@walkingtree.tech}
	let a=12;
	console.log(localStorage.getItem('product_name'));
	console.log(localStorage.getItem('product_image'));
	console.log(localStorage.getItem('product_prize'));
    return(
       <div className="container my-3">
		<div class="row row-cols-1 row-cols-md-4 g-4" >
  <div class="col">
    <div class="card h-100"  style={{'backgroundColor':"black"}}>
      <a href="/credit"><img src="./credit.jpg" class="card-img-top" alt="..."/></a>
      <div class="card-body">
        <h4 class="card-title" style={{'textAlign':"center",'color':'white'}}><a style={{'textDecoration':'none','color':'white'}} href="/credit">Credit Card</a></h4>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100"  style={{'backgroundColor':"black"}}>
	<a href="/net"><img src="./cod.png" class="card-img-top" alt="..." style={{'width':'220px','marginTop':'5%'}}/></a>
      <div class="card-body">
	  <h4 class="card-title" style={{'textAlign':"center",'color':'white'}}><a style={{'textDecoration':'none','color':'white'}} href="/net">COD</a></h4>
      </div>
     
    </div>
  </div>
  <div class="col">
    <div class="card h-100"  style={{'backgroundColor':"black",'marginTop':'40%'}}>
	<a href="/paypal"><img src="./pay.jpg" class="card-img-top" alt="..."/></a>
      <div class="card-body">
	  <h4 class="card-title" style={{'textAlign':"center",'color':'white'}}><a style={{'textDecoration':'none','color':'white'}} href="/paypal">Paypal</a></h4>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100" style={{'backgroundColor':"black",'marginTop':'50px'}}>
	<a href="/debit"><img src="./debitt.jpg" class="card-img-top" alt="..."/></a>
      <div class="card-body">
	  <h4 class="card-title" style={{'textAlign':"center",'color':'white'}}><a style={{'textDecoration':'none','color':'white'}} href="/debit">Debit Card</a></h4>
      </div>
    </div>
  </div>
</div>

	   </div> 
    
   
    )
}

export default Payments;