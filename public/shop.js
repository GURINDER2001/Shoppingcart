function fetchproduct(done){
    $.get('/api/products',function(data){
        done(data)
    })
}
 
function fetchCart(done){
    $.get('/api/cartitems',function(data){
        done(data)
    })
}

function add_Product (name, manuf, price, done) {
    $.post('/api/products', {
        name: name,
        manufacturer: manuf,
        price: price
    }, function(data) {
        done(data)
    })
}
function add_to_cart (name, price, done) {
    $.post('/api/cartitems', {
        name: name,
        price: price
    }, function(data) {
        done(data)
    })
}
// function delete_prod(name,done){
//     $.delete('/api/products',
//      {
//          name:name
//         },
//      function(data) {
//         done(data)
//      }
//     )
// }
function cartCard(items){
return $(`<div class="col-12 card">
<div class="row">      
<h3 class="col-sm-11">${items.name}</h3>
<button class="col-sm-1 btn btn-link">🗑️ </button>

</div>
<div class="row">
<div id="pric" class="col-sm-10">${items.price}</div>
<input class="col-sm-2" id="Qty" type="number" max="10" min="1" value="1">
</div>



</div>`)
}


function createcard(product){
    return $(`<div class="col-3 card m-4 p-2">
                <h4 id="product_Name" class="product-name">${product.name}</h4>
                <div class="product-manufacturer">${product.manufacturer}</div>
                <div class="row">
                    <div id="prc" class=" col-12 m-3 p-1">
                       Rs. ${product.price}
                    </div>
                    
                   
                <button class="acb col-10 btn btn-primary m-3 p-2 btn-block" id="addtocart" onClick="resp()" ">ADD TO CART</button>
                  </div>
                 </div>`)
}

function resp(){

    
    add_to_cart(
        'test1',
        '98555',
        function (addeToCart) {
            window.alert("Added " + addeToCart.name + " to Database");
            window.location.href="/";
        }
    )

}