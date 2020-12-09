console.log("20 12 09 JS Object Literals Practice"); // check that files are linked 

// Declare Objects Using Object literal Notation
// Declare four band member objects with name and instrument properties.
let dumDumGirl1 = {
    name : "Dee Dee",
    instrument : "Vocals"
}
console.log(dumDumGirl1);
let dumDumGirl2 = {
    name : "Jules Medeiros",
    instrument : "Guitar"
}
console.log(dumDumGirl2);
let dumDumGirl3 = {
    name : "Malia James",
    instrument : "Bass"
}
console.log(dumDumGirl3);
let dumDumGirl4 = {
    name : "Sandra Vu",
    instrument : "Drums"
}
console.log(dumDumGirl4);

// Output Object Properties
// Declare a function that accepts a band member object and outputs the message "Name : [NAME] Instrument : [INSTRUMENT]". Output the name and instrument on different lines using the line feed character.
function printMemberProps(member){
    console.log(`Name : ${member.name}\nInstrument : ${member.instrument}`);
}
printMemberProps(dumDumGirl1);
printMemberProps(dumDumGirl2);
printMemberProps(dumDumGirl3);
printMemberProps(dumDumGirl4);

// Exercise 3 : Declare an Array of Objects
// Declare an array with all four band members. Generate the following output in the console using iteration and the function declared above.
let dumDumGirls = [dumDumGirl1, dumDumGirl2, dumDumGirl3, dumDumGirl4];
console.log(`---\nBand Member Breakdown`);
for(let i = 0; i < dumDumGirls.length; i++){
    printMemberProps(dumDumGirls[i]);
}
console.log(`---\nNumber of Members : ${dumDumGirls.length}`);
