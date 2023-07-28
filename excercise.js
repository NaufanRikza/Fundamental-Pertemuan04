const generateTriangle = (height) => {
  let allowedPerLine = 1;
  let buffer = [];

  for (let i = 1; i <= height; i++) {
    let numStr = i < 10 ? "0" + i.toString() : i.toString();
    buffer.push(numStr);
    if (buffer.length === allowedPerLine) {
      console.log(buffer.toString());
      buffer = [];
      allowedPerLine++;
    }
  }
};

fizzBuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0 && i % 5 !== 0) {
      console.log("Fizz");
    } else if (i % 3 !== 0 && i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

const calculateBMI = (weight, height) => {
  let bmi = weight / Math.pow(height, 2);

  if (bmi < 18.5) {
    return "less weight";
  } else if (bmi < 24.9) {
    return "ideal";
  } else if (bmi < 29.9) {
    return "overweight";
  } else if (bmi < 39.9) {
    return "very overweight";
  } else {
    return "obesity";
  }
};

removeOdd = (arr) => {
  let newArr = [];
  for (i of arr) {
    if (i % 2 == 0) {
      newArr.push(i);
    }
  }
  return newArr;
};

splitString = (word = "") => {
  if (word.indexOf(" ") === -1) {
    return [word];
  }

  let arr = [];
  let str = "";
  for (let i = 0; i < word.length; i++) {
    if (word[i] === " ") {
      arr.push(str);
      str = "";
    } else if (i === word.length - 1) {
      str += word[i];
      arr.push(str);
      str = "";
    } else {
      str += word[i];
    }
  }
  return arr;
};

console.log("Generate Triangle");
generateTriangle(15);
console.log();

console.log("FizzBuzz");
fizzBuzz(20);
console.log();

console.log("BMI Calculator");
console.log(calculateBMI(100, 1.6));
console.log();

console.log("Remove Odd");
console.log(removeOdd([123, 45, 78, 93, 56]));
console.log();

console.log("Split String");
console.log(splitString("Hello World"));
