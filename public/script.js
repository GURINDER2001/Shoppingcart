function fetchproduct(done){
    $.get('/api/product',function(data){
        done(data)
    })
}

function createcard(product){
    return $(`<div class="col-4 card m-2 p-3">
                <h4 class="product-name">$('product.name')</h4>
                <div class="product-manufacturer">$(product.manufacturer)</div>
                <div class="row">
                    <div class="col m-3 p-1">
                       Rs. $(product.price)
                    </div>
                <button class="col-6 btn btn-primary m-3 p-1">BUY</button>
                  </div>
                 </div>`)
}

$(function() {
 let productList= $('#product-list')

 fetchproduct(function (products){
     productList.empty()
     for(product of products){
         productList.append(createcard(product))
     }
 })
})