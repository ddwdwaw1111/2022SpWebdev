const shippers = [
    {
    shipperId: 1,
    orderNumber:[1,2,3,4,5]
    },
    {
    shipperId: 2,
    orderNumber:[1,2,3]
    }
   ];
   let getShipper = () => shippers;
   
   module.exports = { getShipper };