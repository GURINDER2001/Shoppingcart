
$(function() {
 let productList= $('#product-list')

 fetchproduct(function (products){
     productList.empty()
     for(product of products){
         productList.append(createcard(product))
     }
 })
})