1
let num = +prompt("Enter number", "123");

if (num % 2 == 0) {
  alert("The number is even");
} else {
  alert("The number is odd");
}
let num = +prompt("Enter number", "35");

if (num % 2 == 0) {
  alert("The number is even");
} else {
  alert("The number is odd");
}
let num = +prompt("Enter number", "70");

if (num % 2 == 0) {
  alert("The number is even");
} else {
  alert("The number is odd");
}

2
let num = +prompt("Enter number");

let lastNum, result;

lastNum = num % 10;
console.log(lastNum);

if (num < 10) {
  alert(`You type ${num}
	Result = ${num}`);
} else if (lastNum != 0) {
  result = "" + lastNum + (num - lastNum) / 10;
  alert(`You type ${num}
	last nuber = ${lastNum} 
	Result =  ${result}`);
} else {
  result = num - lastNum;
  alert(`You type ${num} 
	Last number = ${lastNum}
	Result = ${result}`);
}

3
let a = +prompt("Enter number a");
let b = +prompt("Enter number b");
let c = +prompt("Enter number c");
let d = +prompt("Enter number d");
let e = +prompt("Enter number e");
let result;

result = (a + b + c + d + e) / 5;

alert(`average of the numbers
 ( ${a} + ${b} + ${c} + ${d} + ${e} ) / 5 = ${result}`);

 4

 let a = +prompt("Enter number a");
let b = +prompt("Enter number b");
let c = +prompt("Enter number c");

//

if (a > b && a > c) {
  if (b > c) {
    console.log(a, b, c);
  } else {
    console.log(a, c, b);
  }
} else if (b > a && b > c) {
  if (a > c) {
    console.log(b, a, c);
  } else {
    console.log(b, c, a);
  }
} else if (c > a && c > b) {
  if (a > b) {
    console.log(c, a, b);
  } else {
    console.log(c, b, a);
  }
}