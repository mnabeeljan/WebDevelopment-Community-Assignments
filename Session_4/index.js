let inp = parseInt(prompt("Enter your amount for conversion"));
// notes
if(!isNaN(inp)){

    // Five thousands note
   let five_Thousands = Math.floor(inp / 5000);
   console.log("You have ", five_Thousands, " notes of 5000.");
   
   
    // Thousand note    
   let remaining_Amount = inp % 5000;
   let one_Thousand =  Math.floor(remaining_Amount / 1000);
   console.log(one_Thousand, " notes of 1000.");
//     // Five hundred note    
   remaining_Amount = inp % 1000;
   let five_Hundnote =  Math.floor(remaining_Amount / 500);
   console.log(five_Hundnote, " note of 500.");
   
    // Hundred note  
   remaining_Amount = inp % 500;
   let one_Hundred =  Math.floor(remaining_Amount / 100);
   console.log(one_Hundred, " notes of 100.");

    // Fifty note
    remaining_Amount = inp % 100;
    let fifty_note = Math.floor (remaining_Amount / 50);
    console.log(fifty_note, " note of 50.");
    
    // Twenty note 
    remaining_Amount = inp % 50;
    let twenty_Note = Math.floor (remaining_Amount / 20);
    console.log(twenty_Note, "notes of 20.");

    // Ten note
    remaining_Amount = inp % 20;
    let ten_note = Math.floor (remaining_Amount / 10);
    console.log(ten_note, "notes of 10.");

    // Five note
    remaining_Amount = inp % 10;
    let five_Note = Math.floor(remaining_Amount / 5);
    console.log(five_Note, "note of 5");

 } 

 else {
   console.log("Invalid input.");
 }
 
console.log(inp);



