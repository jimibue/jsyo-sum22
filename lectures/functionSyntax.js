// function expression
// we alway have to use return statement (if we want to return something)
// i can use the function before it is defined
let sum = add(1, 1);
console.log(sum);

function add(num1, num2) {
  // console.log('this: ',this) //Object [global]
  return num1 + num2;
}

// let sum1 = add1(1,1) //ErrorCannot access 'add1' before initialization

// arrow function
// if I use the {} i need to use the return  (if we want to return something)
// the arrow function binds 'this' differently
const add1 = (num1, num2) => {
  // console.log('this: ',this) //  {}
  return num1 + num2;
};

let sum1 = add1(1, 1);
console.log(sum1);

// short hand
// we dont {} and then we hav a implict return
const add2 = (num1, num2) => num1 + num2;
const sum2 = add2(1, 1);

// !!!!THIS WONT WORK WITH OUT REACT/JSX SETUP
// this a implict return (multiple lines so we use ())
// const someComponent = (props) => (
//   <div>
//     <h1>yo</h1>
//     <h1>multiple lines</h1>
//   </div>
// );

// // explict return
// const someComponent1 = (props) => {
//   return (
//     <div>
//       <h1>yo</h1>
//       <h1>multiple lines</h1>
//     </div>
//   );
// };

// personOBj ={name:String, age:number}

// I am expecting props ={name:String, age:number}
const getUserInfo =(props)=>{
    console.log(props.name)
    console.log(props.age)
    console.log(props.school)
}

// I am expecting u ={name:String, age:number}
const getUserInfo = ({name, age, school}) =>{
    console.log(name)
    console.log(age)
    console.log(school)
}

getUserInfo({name:'tony', age:12})
getUserInfo({name:'jill', age:22})
