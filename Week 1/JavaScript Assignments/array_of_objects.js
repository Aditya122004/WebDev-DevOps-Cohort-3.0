//Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old

function canVote(arr){
    let eligible=arr.filter((user)=>user.age>=18)
    console.log(eligible)
}

let users=[{name:'Aditya',age:21},{name:'Adi',age:13},{name:'A',age:24}]
canVote(users)