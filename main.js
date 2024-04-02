// <<<<<<<<<<<<<<<<<<<   FUNCTION    >>>>>>>>>>>>>>>>>>>>
//------ - A function is a block of code that performs a specific task when called upon .It
//                 allows you to group code togther and reuse it throughought your program
//                                   by definig it once
//Void type
//Void is a return type used in functiondeclarations to indicate that the function does not return a value
function greet(name) {
    console.log("Hello" + name + "!");
}
greet("Anumta");
function myName() {
    console.log("Anumta Siddique");
}
myName();
//Return type
function addnumber(num1, num2) {
    return num1 + num2;
}
addnumber(20, 20);
console.log(addnumber(20, 20));
function fruitname(fruit1) {
    return fruit1;
}
fruitname("mango");
console.log(fruitname("mango"));
//Reuse value
function friendinformation(name, Age, rollnumber) {
    console.log(name, Age, rollnumber);
}
friendinformation("bisma", 20, 67843);
friendinformation("rija", 20, 27590);
function vegetables(name1, price1) {
    console.log(name1, price1);
}
vegetables("onion", 400);
vegetables("cocomber", 250);
