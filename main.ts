      // <<<<<<<<<<<<<<<<<<<   FUNCTION    >>>>>>>>>>>>>>>>>>>>

//------ - A function is a block of code that performs a specific task when called upon .It
//                 allows you to group code togther and reuse it throughought your program
//                                   by definig it once

//Void type
//Void is a return type used in functiondeclarations to indicate that the function does not return a value

function greet(name : string) :void{
console.log("Hello" + name + "!");
}

greet("Anumta");

function myName() :void{
console.log("Anumta Siddique")
}
myName()

//Return type

function addnumber(num1 : number , num2 : number) :number{
    return num1 + num2
}
 addnumber(20 , 20)
 console.log( addnumber(20 , 20))


 function fruitname(fruit1) :string{
    return fruit1
 }

 fruitname("mango" )
 console.log( fruitname("mango"))

 //Reuse value
 function friendinformation(name :string , Age : number ,rollnumber : number){
    console.log( name , Age , rollnumber)
 }
 friendinformation("bisma" , 20 , 67843 );
 friendinformation("rija" , 20 , 27590);

 function vegetables(name1 :string  , price1 : number, ){
console.log(name1 , price1 , )
 }
 vegetables("onion" , 400 , );
 vegetables("cocomber" , 250)

 
