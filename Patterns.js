// 1. Triangle pattern
// Thinking : Pattern should look like 1\n 1 2\n 1 2 3\n.. 1 2 3 4 5\n
// let n = 5;
// let num ="";
// for(let i=1; i<=n; i++){
//     for(let j=1; j<=i; j++){
//     num = num +j+" ";
//     }
//     num += '\n';
// }
// console.log(num);


// 2. Reverse Triangle
// Thinking : Pattern should look like 1 2 3 4 5\n... 1 2 3\n 1 2\n 1\n
// let n = 5;
// let num ="";
// for(let i=1; i<=n; i++){
//     for(let j=1; j<=n+1-i; j++){
//         num = num +j;
//     }
//     num += '\n';
// }
// console.log(num);

// 3. Number pyramid pattern
// let n=5;
// let num = "";
// for(let i=1; i<=n; i++){
//  for (let j = 1; j<=n-i; j++) {
//       num += " ";
//    }
//     for(let k=1; k<=2*i-1; k++){  
//         num = num+k;
//     }
//     num += '\n';
// }
// console.log(num);


// 4. Number Pyramid Pattern (2)

// let n=3;
// let count = 1;
// let num = "";
// for(let i=1; i<=n; i++){
//  for (let j = 1; j <=n-i; j++) {
//       num += " ";
//    }
//      for(let j=1; j<=2*i-1; j++){
//         num = num+count;
//          count++;
//     }
//     num += '\n';
// }
// console.log(num);




// Star Patterns 

// 1. Hollow square pattern

// let n = 5;
// let str = "";

// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//         if (i === 1 || i === n || j === 1 || j === n) {
//             str += "*";
//         } else {
//             str += " ";
//         }
//     }
//     str += "\n";
// }

// console.log(str);


// 2. Right triangle pattern in javascript
// let n=5;
// let num = "";
// for(let i=1; i<=n; i++){
//  for (let j = 1; j<=n-i; j++) {
//       num += " ";
//    }
//     for(let k=1; k<=i; k++){  
//         num = num+"*";
//     }
//     num += '\n';
// }
// console.log(num);

// 3. Javascript pyramid pattern
// let n=5;
// let num = "";
// for(let i=1; i<=n; i++){
//  for (let j = 1; j<=n-i; j++) {
//       num += " ";
//    }
//     for(let k=1; k<=2*i-1; k++){  
//         num = num+"*";
//     }
//     num += '\n';
// }
// console.log(num);


// 4. Hollow diamond pattern

let n=5;
let num = "";
for(let i=1; i<=n; i++){
 for (let j = 1; j<=n-i; j++) {
      num += " ";
   }
    for(let k=1; k<=2*n-1; k++){  
        if (k === 1 || k === 2*i-1 ) {
            num += "*";
        } else {
            num += " ";
        }
    }
    num += '\n';
}

for(let i=n-1; i>=1; i--){
 for (let j = 1; j<=n-i; j++) {
      num += " ";
   }
    for(let k=1; k<=2*i-1; k++){  
        if (k === 1 || k === 2*i-1  ) {
            num += "*";
        } else {
            num += " ";
        }
    }
    num += '\n';
}
console.log(num);
