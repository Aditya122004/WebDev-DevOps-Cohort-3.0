//Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)
//Also tell the user if they are legal to vote or not[Assignment 3 of Objects]

function greet(user){
    let pronoun='Others'
    if(user.gender==='Male'){
        pronoun='Mr'
    }else if(user.gender==='Female'){
        pronoun='Mrs'
    }
    console.log('Hi '+pronoun+' '+user.name+', your age is '+user.age)
    if(user.age>=18){
        console.log('You are eligible to vote')
    }else{
        console.log('You are not eligible to vote')
    }
}
greet({
    name:'Aditya',
    gender:'Male',
    age:21
})