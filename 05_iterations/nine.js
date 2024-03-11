// reduce  (we can use reduce while making cart for any e-commerce website to add the price)


const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currentvalue: ${currval}`);
//     return acc + currval;
// }, 0)


const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);





const shoppingCart = [
    {
        itemName: "js course",
        price: 3999
    },
    {
        itemName: "python",
        price: 999
    },
    {
        itemName: "mobile course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 9999
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price , 0);   //item denotes each particular object inside shoppingCart.. 

console.log(priceToPay);


