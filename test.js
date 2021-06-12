// // const three = () => {
// //   setTimeout(() => {
// //     console.log("this is three");
// //   }, 3000);
// // };

// const three = (ffun) => {
//   return new Promise((res) => {
//     setTimeout(() => {
//       console.log("this is three");
//       res();
//     }, 3000);
//   });
// };

// // const five = () => {
// //   setTimeout(() => {
// //     console.log("this is five");
// //   }, 5000);
// // };

// const five = () => {
//   return new Promise((res) => {
//     setTimeout(() => {
//       console.log("this is five");
//       res();
//     }, 5000);
//   });
// };

// async function func() {
//   await three();
//   await five();
// }

// func();

// const fun1 = (a, b, c) => {

//   console.log("getting " + a + b + c);
// };

// fun1(1, 2, 3);
const obj = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
};

const { one, two, three, ...rest } = obj;

console.log(rest);
