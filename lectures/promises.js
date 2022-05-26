
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      let rand = Math.floor(Math.random()*10)%2 
      if(rand){
        resolve(`${rand}: fake success occurred`);
      } else{
        reject(`${rand}: fake err occurred`)
      }
     
    }, 5000);
  });

  // .then.catch
  // promise is either going to resolve or reject
  console.log('before .then')
  myPromise.then((response)=>{
      console.log('what is response:', response)
      console.log('DO Stuff with response data')
  }).catch((err)=>{
    console.log('what is err:', err)
    console.log('handle the error')
  })

  console.log('after .then')
  console.log('do more stuff while promise is going')

// async/await syntax

// console.log('computer programs start at the top ')
// console.log('go line ')

// // async waits one sec to call the callback
// setTimeout(()=>{
//     console.log('run me after one sec')
// },1000)

// sayHi()
// console.log('by line ')
// console.log('then it is done ')

// // before js run this program it 'hoists this sayHi
// function sayHi(){
//     console.log('hi')
// }

const x = 1;
const y = ()=>{
  console.log('yo')
};
module.exports = { x, y }

