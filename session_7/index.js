// Assignment No 1
var array = [
    "array stared","Ali","Hyder","Akber",(21+8),67,true,78,"mixed array","end of array"
]
console.log("Assignment No 1")
for(var i=0; i<array.length; i++){
    console.log(i,array[i]);
}
console.log("Length of this array is ",array.length);


// assignment No 2
function myArray(array){
    return array;
}
console.log("Assignment No 2")
console.log(array);


// Assignment No 3
var integersArray = [1,2,3,4,5,6,7,8,9,10];
var arraySum = 0;

console.log("Assigment No 3")

    for(var i=0; i<integersArray.length; i++){
        arraySum += integersArray[i];
    }
    console.log("Sum of this array is : ", arraySum);

