const  items =[2,3,5,7,8,9,0,3]
let large=0
for(let i=1;i<items.length;i++){
   if(items[i] > large){
    large=items[i];
   }
}
   console.log(large);
