//Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS

function filterArray(arr){
    arr=arr.filter((num)=>num%2==0)
    console.log(arr)
}
filterArray([1,2,3,4,5])