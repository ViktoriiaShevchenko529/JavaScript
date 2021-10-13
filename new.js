
// let sayName = () => 49;
// console.log(sayName());

// let sum = (a, b) => a + b
// console.log(sum(10, 20));

// let getAge = (age, adult) => {
//     if (age > 18) {
//         adult = true;
//         return addult;
//     } else {
//         adult = false;
//         return adult;
//     }
// };

// let getAge = (age) => age > 18 ? true : false;
// console.log(getAge(15));

// getInfo = () => {
//     return [1, 2, 3, 4];

// }
// console.log(getInfo());

// let getInfo = () => ({
//         name: 'Vova',
//         age: 30
//     });
// console.log(getInfo());

// Фунции высшего порядка выаолняте одно из этиъ цсловий 

// она принимает как параметр друную фенуию 
 
// let sum = (a, b) => a + b; 
function sub(a, b) { return  a - b };    
// let div = (a, b) => a / b; 
// let mult = (a, b) => a * b; 

// console.log(sub(10, 2));
// console.log(div(10, 2));

// Calculator 

// let calculator = (a, b, callback) => {
//     return callback(a, b)
//     // sub(a, b)
// };

// let result = calculator(10, 2, sub)
// console.log(result);

// function logDate(){
//     console.log(Date.now());

// }
// setInterval(logDate, 3000);




// function ChangeBackground(){
//      document.body.style.sbackgroundColor = 'yellow';
// };

// function calcFunction(n){
//     return function () {
//         console.log(10*n)
//     }
// }
// let result = calcFunction(5)();
// // console.log(result());

// function incrementor(n) {
//     return function (num) {
//        return n + num;
    
//     };
// }
// let addOne = incrementor(1)(3);
// console.log(addOne);

// function dimainGenerator(domain) {
//      return function (url) {
//          return `https://${url}.${domain}`;
//      };
//  }
//  let netUrl = dimainGenerator('net');
//  console.log(netUrl('unian'));

// let comUrl = dimainGenerator('com');
// // console.log(comUrl('facebook'));

// function frameWorkGenerator() {
//      let frameworks = ['Vue', 'Angular'];

//      return {
//          showInfo() {
//              console.log(frameworks)
//          },
//          addFrameWork(newFramework){
//              frameworks.push(newFrameworks);
//          }
//      };
// }
// let generator = frameWorkGenerator();
// // console.log(generator);
// generator.showInfo();
// generator.addFrameWork('React');

// generator.showInfo();


