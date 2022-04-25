let items = [
    {
    itemId: 1,
    itemImage:"https://cdn.shopify.com/s/files/1/0070/7582/3668/products/natural_chinese_shanshan_seal_stone_for_oriental_brush_painting_artwork_3_400x.jpg?v=1598872349",
    itemName: "KUNLUN TRANSLUCENT STONE SEAL",
    itemPrice:19.99
    },
    {
    itemId: 2,
    itemImage:"https://cdn.shopify.com/s/files/1/0070/7582/3668/products/mountain-red-daily-use-stone-cuboid-1_5000x.jpg?v=1598870270://cdn.shopify.com/s/files/1/0070/7582/3668/products/natural_chinese_shanshan_seal_stone_for_oriental_brush_painting_artwork_3_400x.jpg?v=1598872349",
    itemName: "MOUNTAIN RED STONE SEAL",
    itemPrice:22.99
    }
   ];
   let getItems = () => items;
   let addItems = (item) =>{
     items = [...items, item];
   }
   module.exports = { getItems, addItems };