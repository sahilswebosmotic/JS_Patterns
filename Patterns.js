
// 1. Triangle pattern
// Thinking : Pattern should look like 1\n 1 2\n 1 2 3\n.. 1 2 3 4 5\n
// let n1 = 6;
// let num1 ="";
// for(let i=1; i<=n1; i++){
//     for(let j=1; j<i; j++){
//     num1 = num1 +j;
//     }
//     num1 += '\n';
// }
// console.log(num1);
// try this with one loop
let n1 = 5; 
let count1 = 0;
let num1="";
for (let i=1; i<=n1; i++){
    count1 = count1*10 +i;
    num1+= count1+'\n';
}
// console.log(num1);


// 2. Reverse Triangle
// Thinking : Pattern should look like 1 2 3 4 5\n... 1 2 3\n 1 2\n 1\n
let n2 = 5;
let num2 ="";
for(let i=1; i<=n2; i++){
    for(let j=1; j<=n2+1-i; j++){
        num2= num2+j;
    }
    num2+= '\n';
}
// console.log(num2);
// difference between for loop and other loops for implementation of the logical things

// 3. Number pyramid pattern
let n3=20;
let num3 = "";
for(let i=1; i<=n3; i++){
    for (let j=1; j<=n3-i; j++) {
      num3 += " ";
   }
    for(let k=1; k<=2*i-1; k++){  
        num3 = num3+k;
    }
    num3 += '\n';
}
console.log(num3);

// incorrect



// 4. Number Pyramid Pattern (2)

let n4=6;
let count = 1;
let num4 = "";
for(let i=1; i<=n4; i++){
 for (let j = 1; j<=n4-i; j++) {
      num4 += " ";
   }
     for(let j=1; j<=2*i-1; j++){
        num4 = num4+j;
         count++;
    }
    num4 += '\n';
}
console.log(num4);
// incorrect




// Star Patterns 

// 1. Hollow square pattern

let n5 = 5;
let num5 = "";

for (let i = 1; i <= n5; i++) {
    for (let j = 1; j <= n5; j++) {
        if (i === 1 || i === n5 || j === 1 || j === n5) {
            num5 += "*";
        } else {
            num5 += "A";
        }
    }
    num5 += "\n";
}

// console.log(num5);
// incomplete and add space 

// 2. Right triangle pattern in javascript
let n6=5;
let num6 = "";
for(let i=1; i<=n6; i++){
 for (let j = 1; j<=n6-i; j++) {
      num6 += " ";
   }
    for(let k=1; k<=i; k++){  
        num6 = num6 +"*";
    }
    num6 += '\n';
}
// console.log(num6);

// 3. Javascript pyramid pattern
let n7=30;
let num7 = "";
for(let i=1; i<=n7; i++){
 for (let j = 1; j<=n7-i; j++) {
      num7 += " ";
   }
    for(let k=1; k<=2*i-1; k++){  
        num7 = num7+"*";
    }
    num7 += '\n';
}
console.log(num7);


// 4. Hollow diamond pattern

let n8=7;
let num8 = "";
for(let i=1; i<=n8; i++){
 for (let j = 1; j<=n8-i; j++) {
      num8 += " ";
   }
    for(let k=1; k<=2*n8-1; k++){  
        if (k === 1 || k === 2*i-1 ) {
            num8 += "*";
        } else {
            num8 += " ";
        }
    }
    num8 += '\n';
}

for(let i=n8-1; i>=1; i--){
 for (let j = 1; j<=n8-i; j++) {
      num8 += " ";
   }
    for(let k=1; k<=2*i-1; k++){  
        if (k === 1 || k === 2*i-1  ) {
            num8 += "*";
        } else {
            num8 += " ";
        }
    }
    num8 += '\n';
}
// console.log(num8);


// document.getElementById("NP1").innerText = num1;
// document.getElementById("NP2").innerText = num2;
// document.getElementById("NP3").innerText = num3;
// document.getElementById("NP4").innerText = num4;

// document.getElementById("SP1").innerText = num5;
// document.getElementById("SP2").innerText = num6;
// document.getElementById("SP3").innerText = num7;
// document.getElementById("SP4").innerText = num8;
