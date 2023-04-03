// Assignmet No 1
var age = parseInt(prompt("Enter Your Age"))
if(age>=18){
    document.write("You are eligible")
}
else if(age<18 || age>0){
    document.write("you are not eligible")
}
else{
    document.write("please enter your correct age")
}


// Assignment No 2

var fruit_Name = prompt("Enter Fruit Name (orange,apple,banana)")
var color;
switch (fruit_Name) {
    case "apple":
      color = "red";
      break;
    case "banana":
      color = "yellow";
      break;
    case "orange":
      color = "orange";
      break;
    default:
      color = "please only enter apple,  banana or orange";
      break;
  }
  document.write(fruit_Name, " color is ", color);



// Assignment No 3

var table_No = 5;
for(var i=1; i<=10; i++){
    document.write(table_No,' * ', i ,' = ',table_No*i, '<br>')
}