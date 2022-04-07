class Product{
    constructor(url,name,price)
    {
        this.productId = "123",
        this.url = url;
        this.name = name,
        this.price = price
    }
}

const container = document.getElementById('pContainer')
const array = [
    new Product(
        "https://cdn.shopify.com/s/files/1/0070/7582/3668/products/natural_chinese_shanshan_seal_stone_for_oriental_brush_painting_artwork_3_400x.jpg?v=1598872349",
        "KUNLUN TRANSLUCENT STONE SEAL",
        19.99
        ),
    new Product(
        "https://cdn.shopify.com/s/files/1/0070/7582/3668/products/mountain-red-daily-use-stone-cuboid-1_5000x.jpg?v=1598870270://cdn.shopify.com/s/files/1/0070/7582/3668/products/natural_chinese_shanshan_seal_stone_for_oriental_brush_painting_artwork_3_400x.jpg?v=1598872349",
        "MOUNTAIN RED STONE SEAL",
        22.99
        ),
    ]

array.forEach((p,i)=>{
    let html = `<div class="col">
    <div class="card" id="product+${i}" style="width: 18rem;">
        <img src= ${p.url} class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${p.name}</h5>
        <p class="card-text">${p.price}</p>
        <a href="#" class="btn btn-primary add">Add to Cart</a>
        </div>
    </div>
</div>`
})