//Create a function that takes an array of objects as input,and returns the users whose age > 18 and are male

function filterArray(arr){
    let result=arr.filter((user)=>user.age>=18 && user.gender==='Male')
    console.log(result)
}

let users=[{name:'Aditya',age:21,gender:'Male'},{name:'Adi',age:13,gender:'Male'},{name:'A',age:24,gender:'Female'}]
filterArray(users)