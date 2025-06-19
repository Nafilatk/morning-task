
const orders=[200,450,130,50,1000,20]
orders.forEach((item )=>{
    console.log(item);
})




const order=[200,450,130,50,1000,20]
const orders2 = order.filter((num) => num > 100)
console.log(orders2);



const ord=[200,450,130,50,1000,20]
const order1=ord.map(x => x-10)
console.log(order1);




const ordr1=[200,450,130,50,1000,20]
const ordr2 = ordr1.reduce(arry)

function arry(totel,num){
    return totel+ num
}
console.log(ordr2);
