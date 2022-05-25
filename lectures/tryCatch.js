// handling errors gracefully

console.log("app is running...."); //1
try {
  console.log("before bad taco"); //2
  taco; // app quits here // an error will trigger the catch block to execute
  console.log("after bad taco"); // we don't get here
} catch (x) {
  console.log(x); //3
  console.log("Handle error, tell user they screwed up or something!!"); //4
  console.log("Hey the was a bad url"); //5
} finally{
    console.log('this will no matter what')
}
console.log("yo I want to keep running"); //6

console.log("-------------"); //1
console.log("app is running...."); //1
try {
  console.log("before good taco"); //2
  let taco = "awesome"; // 3
  console.log("after good taco"); // 4
} catch (x) {
  // no error we don't hit catch block
  console.log(x); //
  console.log("Handle error, tell user they screwed up or something!!"); //
  console.log("Hey the was a bad url"); //
} finally{
    console.log('this will no matter what')
}
console.log("yo I want to keep running"); //5

// we can throw an error
try {
    let input = 2;
    if(input ===0){
        throw 'Can not divide by 0'
    }
    console.log(2/input)
} catch(err){
   console.log(err)
}