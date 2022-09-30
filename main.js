  console.log('Hello World!');


//arrow functions

function sum(a, b) {
   return a + b;
  }

let sum2 = (a, b) => a + b

  console.log (sum2(22,7));


let isCovid19 = Num2 => Num2 >= 20000 
  
  console.log(isCovid19(20000));



//let random = () => Math.random

 //  console.log (random()) ;


document.addEventListener('click', function() {
   console.log('click')
   });

//document.addEventListener('click', () => console.log('click'))


// Promises

let p1 = new Promise((resolve, reject) => {
  let D = 22 + 8

  if (D === 30) {
    resolve('successfully login !')
  }
  else {
    reject('failure ! try again...')
  }
})

p1.then((message) => {
  console.log("This is in then: ", message)
}).catch((message) => {
  console.log("This is in catch :", message)
})




let p2 = new Promise((resolve, reject) => {
  let D = 25 + 88

  if (D === 3) {
    resolve('successfully login !')
  }
  else {
    reject('failure ! try again...')
  }
})

p1.then((message) => {
  console.log("This is in then: "+ message)
}).catch((message) => {
  console.log("This is in catch:"+ message)
})


const usedefer = true;
const watchCatmeme = false;

function example() {
  new Promise((resolve, reject) => {

  if (usedefer) {
    reject({
      name:'User Left',
      message:':)'
    })
 }else if (watchCatmeme) {
    reject({
      name:'kitty pitty',
      message:'dog < cat'
      })
  }
  else {
    resolve('Thumbs Up! just drink it')
  }

p1.then((message) => {
  console.log("This is in then:"+messag)
  
  }).catch((message) => {
  console.log("This is in catch :"+ message)
  })
  
 })
 
}

