const express = require('express');
const Item = require('../models/item');
const router = express.Router();

router.get('/', (req, res) => {
    try {
    const item = Item.getItems();
    res.send(item);
    } catch(err) {
    res.status(401).send({message: err.message});
    }
   })

   .post('/addItem', async (req, res) => {
    try {
      const newItem =     
      {
        itemId: 3,
        itemImage:"https://m.media-amazon.com/images/I/51o4yM89iIL._AC_SX679_.jpg",
        itemName: "MOUNTAIN RED STONE SEAL",
        itemPrice:22.99
      }
      Item.addItems(newItem);
      const items = Item.getItems();
      res.send(items);
    } catch (error) {
      res.status(401).send({message: error.message});
    }
  })

   module.exports = router;