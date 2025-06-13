//Write a function called sum that finds the sum from 1 to a number

function sum(num){
    let s=0
    for(let i=1;i<=num;i++){
        s+=i
    }
    console.log(s)
    //console.log((num*(num+1))/2) math formula
}

sum(5)
