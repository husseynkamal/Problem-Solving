// [1]
/*
    For year = 1905, the output should be
    centuryFromYear(year) = 20;
    For year = 1700, the output should be
    centuryFromYear(year) = 17
*/

function centuryFromYear(year) {
  return Math.ceil(year / 100);
}

console.log(centuryFromYear(1905));
//=========================================
console.log("#".repeat(30));
// [2]
/*
    For inputString = "aabaa", the output should be
    checkPalindrome(inputString) = true;
    For inputString = "abac", the output should be
    checkPalindrome(inputString) = false;
    For inputString = "a", the output should be
    checkPalindrome(inputString) = true.
*/

function checkPalindrome(inputString) {
  const arr = inputString.split("");
  const arrStr = arr.join("");
  // reverse
  const revArr = arr.reverse();
  const revArrStr = revArr.join("");
  if (arrStr === revArrStr) {
    return true;
  } 
  return false;
}

console.log(checkPalindrome("aabaa"));
//=========================================
console.log("#".repeat(30));
// [3]
/* 
    Given an array of integers, 
    find the pair of adjacent elements that has the largest product and return that product.

    For inputArray = [3, 6, -2, -5, 7, 3], the output should be
    adjacentElementsProduct(inputArray) = 21.
    7 and 3 produce the largest product.
*/

function adjacentElementsProduct(inputArray) {
  let result = 0;
  const maxArr = [];
  for (let i = 1; i < inputArray.length; i++) {
    const maxInt = inputArray[i - 1] * inputArray[i];
    maxArr.push(maxInt);
  }

  const maxNum = Math.max(...maxArr);
  return (result += maxNum);
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
//=========================================
console.log("#".repeat(30));
// [4]
// Reverse a string
function reverseString(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

console.log(reverseString("hello"));
//=========================================
console.log("#".repeat(30));
// [5]
/*
    Factorialize a Number

    For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
*/
function factorialize(num) {
  let numResult = 1;
  for (let i = num; i > 1; i--) {
    numResult *= i;
  }

  return numResult;
}

console.log(factorialize(5));
//=========================================
console.log("#".repeat(30));
// [6]
/*
    Find the Longest Word in a String
*/
function findLongestWordLength(str) {
  const splitedStr = str.split(" ");
  let longestWord = "";
  for (let i = 0; i < splitedStr.length; i++) {
    if (longestWord.length < splitedStr[i].length) {
      longestWord = splitedStr[i];
    }
  }
  return longestWord.length;
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
//=========================================
console.log("#".repeat(30));
// [7]
/*
    Return Largest Numbers in Arrays
*/
function largestOfFour(arr) {
  const resultArray = [];
  for (let i = 0; i < arr.length; i++) {
    resultArray.push(Math.max(...arr[i]));
  }
  return resultArray;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
//=========================================
console.log("#".repeat(30));
// [8]
/*
    Confirm the Ending

    Check if a string (first argument, str) ends with the given target string (second argument, target).
*/
function confirmEnding(str, target) {
  const strLength = str.length;
  const targetLength = target.length;
  const confirmedStr = str.slice(strLength - targetLength);
  const isConfirm = confirmedStr === target;

  return isConfirm ? true : false;
}

console.log(confirmEnding("Congratulation", "on"));
//=========================================
console.log("#".repeat(30));
// [9]
/*
    Repeat a String Repeat a String

    do not use the built-in .repeat() method.
*/
function repeatStringNumTimes(str, num) {
  let finalResult = "";
  for (let i = 0; i < num; i++) {
    finalResult += str;
  }
  return finalResult;
}

console.log(repeatStringNumTimes("abc", 3));
//=========================================
console.log("#".repeat(30));
// [10]
/*
    Truncate a String

    Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
    Return the truncated string with a ... ending.
*/
function truncateString(str, num) {
  let slicedStr = "";
  if (str.length >= num) {
    slicedStr = str.slice(0, num);
    if (str.length == num) {
      return str;
    } else {
      return `${slicedStr}...`;
    }
  } else if (str.length < num) {
    return str;
  }
}

console.log(
  truncateString(
    "A-tisket a-tasket A green and yellow basket",
    "A-tisket a-tasket A green and yellow basket".length + 2
  )
);
//=========================================
console.log("#".repeat(30));
// [11]
/*
    Finders Keepers

    Create a function that looks through an array arr
    and returns the first element in it that passes a 'truth test'. This means that given an element x,
    the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
*/
function findElement(arr, func) {
  for (let element of arr) {
    if (func(element)) {
      return element;
    }
  }
}

console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));
//=========================================
console.log("#".repeat(30));
// [12]
/*
    Boo who

    Check if a value is classified as a boolean primitive. Return true or false.
    Boolean primitives are true and false.
*/
function booWho(bool) {
  return typeof bool === "boolean" ? true : false;
}

console.log(booWho([1, 2, 3]));
//=========================================
console.log("#".repeat(30));
// [13]
/*
    Title Case a Sentence

    Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
    For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/
function titleCase(str) {
  let result = "";
  const splitStr = str.split(" ");
  for (let i = 0; i < splitStr.length; i++) {
    result +=
      splitStr[i].charAt(0).toUpperCase() +
      splitStr[i].slice(1, splitStr[i].length).toLowerCase() +
      " ";
  }
  return result.trim();
  // trim => cuz there is a white space after last word
}

console.log(titleCase("I'm a little tea pot"));
//=========================================
console.log("#".repeat(30));
// [14]
/*
    Slice and Splice

    You are given two arrays and an index.
    Copy each element of the first array into the second array, in order.
    Begin inserting elements at index n of the second array.
    Return the resulting array. The input arrays should remain the same after the function runs.
*/
function frankenSplice(arr1, arr2, n) {
  let arr2Copy = arr2.slice();
  // Why I use slice? to copy arr2 without override it
  arr2Copy.splice(n, 0, ...arr1);
  // Splice not store in variable cuz it customize array directly
  return arr2Copy;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
//=========================================
console.log("#".repeat(30));
// [15]
/*
    Falsy Bouncer

    Remove all falsy values from an array.
    Falsy values in JavaScript are [false, null, 0, "", undefined, and NaN].
    Hint: Try converting each value to a Boolean
*/
function bouncer(arr) {
  return arr.filter((elm) => Boolean(elm));
}

console.log(bouncer([7, "ate", "", false, 9]));
//=========================================
console.log("#".repeat(30));
// [16]
/*
    Where do I Belong

    Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.
    The returned value should be a number.
    For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
    Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted
    it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/
function getIndexToIns(arr, num) {
  const arrNumTwo = [...arr, num].sort((a, b) => a - b);
  return arrNumTwo.indexOf(num);
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
//=========================================
console.log("#".repeat(30));
// [17]
/*
    Mutations

    Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

    For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
    The arguments ["hello", "hey"] should return false because the string hello does not contain a y.
    Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.
*/
function mutation(arr) {
  const arr0 = arr[0].toLowerCase();
  const arr1 = arr[1].toLowerCase();
  for (let i = 0; i < arr1.length; i++) {
    if (arr0.indexOf(arr1[i]) == -1) {
      // MainArray.indexOf(SecondaryArray) => MainArray (if inside it) SecondaryArray
      return false;
    }
  }
  return true;
}

console.log(mutation(["hello", "hey"]));
//=========================================
console.log("#".repeat(30));
// [18]
/*
    Chunky Monkey

    Write a function that splits an array (first argument)
    into groups the length of size (second argument) and returns them as a two-dimensional array.
*/
function chunkArrayInGroups(arr, size) {
  const result = [];
  while (arr.length > 0) {
    result.push(arr.splice(0, size));
  }
  return result;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
//=========================================
console.log("#".repeat(30));
// [19]
/*
    Sum All Numbers in a Range

    We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
    The lowest number will not always come first.
    For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/
function sumAll(arr) {
  let result = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    result += i;
  }
  return result;
}

console.log(sumAll([1, 4]));
//=========================================
console.log("#".repeat(30));
// [20]
/*
    Diff Two Arrays

    Compare two arrays and return a new array with any items only found in one of the two given arrays,
    but not both. In other words, return the symmetric difference of the two arrays.

    Note: You can return the array with its elements in any order.
*/
function diffArray(arr1, arr2) {
  const newArr = arr1.concat(arr2);
  return newArr.filter(
    (element) => !arr1.includes(element) || !arr2.includes(element)
  );
}

console.log(diffArray([1, 2, 3], [5, 9]));
//=========================================
console.log("#".repeat(30));
// [21]
/*
    Seek and Destroy

    You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
    Remove all elements from the initial array that are of the same value as these arguments.

    Note: You have to use the arguments object.
*/
function destroyer(arr, ...destroy) {
  const survivingElements = [];
  const battleField = Object.values(arguments[0]);
  const elementToDestroy = Object.values(arguments).splice(1);

  for (let i = 0; i < battleField.length; i++) {
    let positionToRecon = battleField[i];
    if (elementToDestroy.indexOf(positionToRecon) === -1) {
      survivingElements.push(positionToRecon);
    }
  }
  return survivingElements;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
/*
    *** Another Solution ***
    function destroyer(arr, ...destroy) {
        return arr.filter(elm => !destroy.includes(elm))
    }
    console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
*/
//=========================================
console.log("#".repeat(30));
// [22]
/*
    One hot summer day Pete and his friend Billy decided to buy a watermelon.
    They chose the biggest and the ripest one, in their opinion. After that the watermelon was weighed,
    and the scales showed w kilos. They rushed home, dying of thirst, and decided to divide the berry,
    however they faced a hard problem.

    Pete and Billy are great fans of even numbers,
    that's why they want to divide the watermelon in such a way that each of the two parts weighs
    even number of kilos, at the same time it is not obligatory that the parts are equal.
    The boys are extremely tired and want to start their meal as soon as possible,
    that's why you should help them and find out,
    if they can divide the watermelon in the way they want.
    For sure, each of them should get a part of positive weight.

    Input
    The first (and the only) input line contains integer number w (1 ≤ w ≤ 100)
    the weight of the watermelon bought by the boys.

    Output
    Print YES, if the boys can divide the watermelon into two parts,
    each of them weighing even number of kilos; and NO in the opposite case.
*/
function watermelon(n) {
  return n % 2 === 0 && n !== 2 ? "YES": "NO";
}

console.log(watermelon(4));
//=========================================
console.log("#".repeat(30));
// [23]
/*
    Sometimes some words like "localization" or "internationalization" are so long
    that writing them many times in one text is quite tiresome.

    Let's consider a word too long,
    if its length is strictly more than 10 characters.
    All too long words should be replaced with a special abbreviation.

    This abbreviation is made like this:
    we write down the first and the last letter of a word and between them we write
    the number of letters between the first and the last letters.
    That number is in decimal system and doesn't contain any leading zeroes.

    Thus, "localization" will be spelt as "l10n", and "internationalization» will be spelt as "i18n".

    You are suggested to automatize the process of changing the words with abbreviations.
    At that all too long words should be replaced by
    the abbreviation and the words that are not too long should not undergo any changes.

    Input
    The first line contains an integer n (1 ≤ n ≤ 100). Each of the following n lines contains one word. All the words consist of lowercase Latin letters and possess the lengths of from 1 to 100 characters.

    Output
    Print n lines. The i-th line should contain the result of replacing of the i-th word from the input data.
*/
function biggestNum(n) {
  let result = "";
  if (n.length > 4) {
    result =
      n.charAt(0) + n.slice(1, n.length - 1).length + n.charAt(n.length - 1);
  }
  return result;
}

console.log(biggestNum("internationalization"));
//=========================================
console.log("#".repeat(30));
// [24]
function findElm(sortedArr, element, offset) {
  let startIndex = 0;
  let endIndex = sortedArr.length - 1;

  const centerElement = Math.floor((endIndex - startIndex) / 2);

  if (element === sortedArr[centerElement]) {
    return centerElement + offset;
  }

  if (element > sortedArr[centerElement]) {
    startIndex = centerElement + 1;
    offset = offset + centerElement + 1;
  } else {
    endIndex = centerElement - 1;
  }

  return findElement(
    sortedArr.slice(startIndex, endIndex + 1),
    element,
    offset
  );
}

console.log(findElm([-3, 5, 6, 8, 99, 150], 99, 0));
//=========================================
console.log("#".repeat(30));
// [25]
function plusMinus(arr) {
  const length = arr.length;
  let positive = 0;
  let zero = 0;
  let negative = 0;

  for (let i = 0; i < length; i++) {
    if (arr[i] < 0) {
      negative++;
    } else if (arr[i] > 0) {
      positive++;
    } else {
      zero++;
    }
  }

  const positivePer = (positive / length).toFixed(6);
  const negativePer = (negative / length).toFixed(6);
  const zeroPer = (zero / length).toFixed(6);

  return `${positivePer}\n${negativePer}\n${zeroPer}`;
}

console.log(plusMinus([1, -1, 3, -3, -4, 0, 9, 12]));
//=========================================
console.log("#".repeat(30));
// [26]
function staircase(n) {
  for (let i = 0; i < n; i++) {
    let result = "";
    for (let j = 0; j < n - i - 1; j++) {
      result += " ";
    }

    for (let k = 0; k < i + 1; k++) {
      result += "#";
    }

    console.log(result);
  }
}

staircase(6);
//=========================================
console.log("#".repeat(30));
// [27]
function miniMaxSum(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  const lastIndex = sortedArr.length - 1;
  const minNums = sortedArr.slice(0, lastIndex);
  const maxNums = sortedArr.slice(1);

  const minSums = minNums.reduce((curr, acc) => curr + acc, 0);
  const maxSums = maxNums.reduce((curr, acc) => curr + acc, 0);

  console.log(minSums, maxSums);
}

miniMaxSum([5, 5, 5, 5, 5]);
//=========================================
console.log("#".repeat(30));
// [28]
function birthdayCakeCandles(candles) {
  const copiedArr = [...candles];
  let pivotElement = Math.max(...copiedArr);
  let elements = copiedArr.filter((num) => num === pivotElement);

  console.log(elements.length);
}

birthdayCakeCandles([18, 90, 90, 13, 90, 75, 90, 8, 90, 43]);
//=========================================
console.log("#".repeat(30));
// [29]
function timeConversion(s) {
  const format = s.slice(8);
  const time = s.slice(0, 2);
  const remainderTime = s.slice(2, 8);
  let numTime = +time;

  let result = "";
  if (format === "AM") {
    if (numTime === 12) {
      numTime = "00";
    } else if (numTime < 10) {
      numTime = "0" + numTime;
    }
  } else {
    if (numTime !== 12) {
      numTime += 12;
    }
  }

  result = `${numTime}${remainderTime}`;
  console.log(result);
}

timeConversion("04:59:59AM");
//=========================================
console.log("#".repeat(30));
// [30]
function gradingStudents(grades) {
  const copiedGrades = [...grades];
  const result = [];

  for (let i = 0; i < copiedGrades.length; i++) {
    if (
      copiedGrades[i] >= 38 &&
      (copiedGrades[i] % 5 === 3 || copiedGrades[i] % 5 === 4)
    ) {
      copiedGrades[i] += 5 - (copiedGrades[i] % 5);
    }

    result.push(copiedGrades[i]);
  }

  return result;
}

console.log(gradingStudents([73, 67, 38, 33]));
//=========================================
console.log("#".repeat(30));
// [31]
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const result = [];
  let appleCount = 0;
  let orangeCount = 0;
  for (const apple of apples) {
    const distance = apple + a;
    if (distance >= s && distance <= t) {
      appleCount++;
      result.push(appleCount);
    }
  }

  for (const orange of oranges) {
    const distance = b + orange;
    if (distance <= t && distance >= s) {
      orangeCount++;
      result.push(orangeCount);
    }
  }

  return result;
}

console.log(countApplesAndOranges(2, 3, 1, 5, [2], [-2]));
//=========================================
console.log("#".repeat(30));
// [32]
function kangaroo(x1, v1, x2, v2) {
  let k1 = x1;
  let k2 = x2;
  let max = 10000;

  for (let i = 0; i < max; i++) {
    if (k1 === k2) {
      return "YES";
    }
    k1 += v1;
    k2 += v2;
  }

  return "NO";
}

console.log(kangaroo(0, 3, 4, 2));
//=========================================
console.log("#".repeat(30));
// [33]
function getTotalX(a, b) {
  const maxValue = Math.max(...b);
  let validCount = 0;

  for (let i = 1; i <= maxValue; i++) {
    if (a.every((int) => i % int === 0)) {
      if (b.every((int) => int % i === 0)) {
        validCount++;
      }
    }
  }

  return validCount;
}

console.log(getTotalX([2, 4], [16, 32, 96]));
//=========================================
console.log("#".repeat(30));
// [34]
function breakingRecords(scores) {
  let highScore = 0;
  let lowScore = 0;

  for (let i = 0; i < scores.length; i++) {
    const max = Math.max(...scores.slice(0, i + 1));
    const min = Math.min(...scores.slice(0, i + 1));
    if (scores[i + 1] > scores[i] && scores[i + 1] > max) {
      highScore++;
    } else if (scores[i + 1] < scores[i] && scores[i + 1] < min) {
      lowScore++;
    }
  }

  return `${highScore} - ${lowScore}`;
}

console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]));
//=========================================
console.log("#".repeat(30));
// [35]
function birthday(s, d, m) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const slicedArr = s.slice(i, i + m);
    const isTheSameDay = slicedArr.reduce((curr, acc) => curr + acc, 0) === d;
    if (isTheSameDay) result++;
  }

  return result;
}

console.log(
  birthday([2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1], 18, 7)
);
//=========================================
console.log("#".repeat(30));
// [36]
function divisibleSumPairs(n, k, ar) {
  let result = 0;

  for (let i = 0; i < n - 1; i++) {
    const slicedArr = ar.slice(i + 1, n);
    for (let j = 0; j < slicedArr.length; j++) {
      if ((ar[i] + slicedArr[j]) % k === 0) {
        result++;
      }
    }
  }

  return result;
}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));
//=========================================
console.log("#".repeat(30));
// [37]
function migratoryBirds(arr) {
  const birdsMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (!birdsMap.has(arr[i])) {
      birdsMap.set(arr[i], 1);
      continue;
    }

    birdsMap.set(arr[i], birdsMap.get(arr[i]) + 1);
  }

  const result = [];
  let highVal = Math.max(...birdsMap.values());

  birdsMap.forEach((value, key) => {
    if (value >= highVal) {
      highVal = value;
      result.push({ key, highVal });
    }
  });

  return result.sort((a, b) => a.key - b.key)[0].key;
}

console.log(migratoryBirds([1, 1, 2, 2, 3]));
//=========================================
console.log("#".repeat(30));
// [38]
function bonAppetit(bill, k, b) {
  const sum = bill.reduce((r, v) => r + v, 0);
  const result = (sum - bill[k]) / 2;
  if (b - result === 0) return "Bon Appetit";
  return b - result;
}

console.log(bonAppetit([3, 10, 2, 9], 1, 12));
//=========================================
console.log("#".repeat(30));
// [39]
function pageCount(n, p) {
  const result = [];
  let fromStart = 0;
  let fromEnd = 0;
  const divideNumber = Math.round(n / 2);

  for (let i = 0; i <= divideNumber; i++) {
    if (i === divideNumber && n % 2 !== 0) {
      break;
    }

    if (i === divideNumber) {
      result.push({ left: i * 2, right: null });
      break;
    }
    result.push({ left: i * 2, right: 2 * i + 1 });
  }

  for (let i = 0; i < result.length; i++) {
    if (Object.values(result[i]).indexOf(p) > -1) {
      fromStart = i;
    }

    if (Object.values(result[result.length - 1 - i]).indexOf(p) > -1) {
      fromEnd = i;
    }
  }

  return fromStart < fromEnd ? fromStart : fromEnd;
}

console.log(pageCount(5, 4));
//=========================================
console.log("#".repeat(30));
// [40]
function sockMerchant(n, ar) {
  if (!ar || ar.length !== n) return 0;

  let result = 0;
  let sockType = new Map();

  for (let i = 0; i < n; i++) {
    const sock = ar[i];

    if (!sockType.has(sock)) {
      sockType.set(sock, 1);
    } else {
      const newCount = sockType.get(sock) + 1;
      sockType.set(sock, newCount);
    }
  }

  for (const sock of sockType.values()) {
    const dividable = Math.floor(sock / 2);
    result += dividable;
  }

  return result;
}

console.log(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2]));
//=========================================
console.log("#".repeat(30));
// [41]
function countingValleys(steps, path) {
  let result = 0;
  const delta = {
    up: 1,
    down: -1,
    forward() {
      result += this.up;
    },
    backwards() {
      result += this.down;
    },
  };

  const movements = new Map([
    ["U", delta.forward],
    ["D", delta.backwards],
  ]);

  for (let i = 0; i < steps; i++) {
    if (result === 0 && path[i] === "D") {
      delta.backwards();
    }
    movements.get(path[i]).call(delta);
  }

  return Math.abs(result);
}

console.log(countingValleys(10, "DUDDDUUDUU"));
//=========================================
console.log("#".repeat(30));
// [42]
function getMoneySpent(keyboards, drives, b) {
  let max = -1;

  for (let i = 0; i < keyboards.length; i++) {
    let temp = 0;
    for (let j = 0; j < drives.length; j++) {
      if (keyboards[i] + drives[j] <= b) {
        temp = keyboards[i] + drives[j];
        max = temp > max ? temp : max;
      }
    }
  }

  return max;
}

console.log(getMoneySpent([4], [5], 5));
//=========================================
console.log("#".repeat(30));
// [43]
function catAndMouse(x, y, z) {
  let cat1 = z > x ? x - z : z - x;
  let cat2 = y > z ? y - z : z - y;

  if (cat1 < cat2) {
    return "Cat A";
  } else if (cat1 > cat2) {
    return "Cat B";
  } else {
    return "Mouse C";
  }
}

console.log(catAndMouse(18, 19, 82));
//=========================================
console.log("#".repeat(30));
// [44]
function formingMagicSquare(s) {
  const squares = [
    [[6, 1, 8],[7, 5, 3],[2, 9, 4]],
    [[8, 1, 6],[3, 5, 7],[4, 9, 2]],
    [[8, 3, 4],[1, 5, 9],[6, 7, 2]],
    [[4, 3, 8],[9, 5, 1],[2, 7, 6]],
    [[6, 7, 2],[1, 5, 9],[8, 3, 4]],
    [[2, 7, 6],[9, 5, 1],[4, 3, 8]],
    [[2, 9, 4],[7, 5, 3],[6, 1, 8]],
    [[4, 9, 2],[3, 5, 7],[8, 1, 6]],
  ];

  let minCost = 45;

  for (const square of squares) {
    let currCost = 0;
    for (let i = 0; i < square.length; i++) {
      for (let j = 0; j < square[i].length; j++) {
        currCost += Math.abs(s[i][j] - square[i][j]);
      }
    }
    if (currCost < minCost) {
      minCost = currCost;
    }
  }

  return minCost;
}

console.log(
  formingMagicSquare([
    [4, 9, 2],
    [3, 5, 7],
    [8, 1, 5],
  ])
);
//=========================================
console.log("#".repeat(30));
// [45]
function pickingNumbers(a) {
  const copiedArr = a.sort((a, b) => a - b);

  let i = 0;
  let j = 1;

  while (i < copiedArr.length && j < copiedArr.length) {
    if (Math.abs(copiedArr[i] - copiedArr[j]) > 1) {
      i++;
      j++;
    } else {
      j++;
    }
  }

  return Math.abs(i - j);
}

console.log(pickingNumbers([4, 6, 5, 3, 3, 1]));
//=========================================
console.log("#".repeat(30));
// [46]
function climbingLeaderboard(ranked, player) {
  const result = [];
  const setArr = [...new Set(ranked)]; // [100, 50, 40, 20, 10]
  let index = setArr.length - 1; // 4

  for (const score of player) {
    while (index >= 0) {
      if (score >= setArr[index]) {
        index--;
      } else {
        result.push(index + 2);
        break;
      }
    }

    if (index < 0) {
      result.push(1);
    }
  }

  return result;
}

console.log(
  climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120])
);
//=========================================
console.log("#".repeat(30));
// [47]
function hurdleRace(k, height) {
  // Write your code here
  return k >= Math.max(...height) ? 0 : Math.max(...height) - k;
}

console.log(hurdleRace(4, [1, 6, 3, 5, 2]));
//=========================================
console.log("#".repeat(30));
// [48]
function designerPdfViewer(h, word) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const highestIndexArr = [];
  let hight = 0;

  for (let i = 0; i < word.length; i++) {
    let index = alphabet.indexOf(word[i]);
    highestIndexArr.push(index);
  }

  for (let i = 0; i < highestIndexArr.length; i++) {
    if (h[highestIndexArr[i]] > hight) {
      hight = h[highestIndexArr[i]];
    }
  }

  return hight * word.length;
}

console.log(
  designerPdfViewer(
    [
      1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
      5,
    ],
    "abc"
  )
);
//=========================================
console.log("#".repeat(30));
// [49]
function utopianTree(n) {
  let tree = 1;

  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      tree *= 2;
    } else {
      tree++;
    }
  }

  return tree
}

console.log(utopianTree(5));
//=========================================
console.log("#".repeat(30));
// [50]
function angryProfessor(k, a) {
  if (a.filter((num) => num <= 0).length < k) {
    return "YES";
  } else {
    return "NO";
  }
}

console.log(angryProfessor(2, [0, -1, 2, 1]));
//=========================================
console.log("#".repeat(30));
// [51]
function beautifulDays(i, j, k) {
  let result = 0;
  for (let iterable = i; iterable <= j; iterable++) {
    if (
      Math.abs(iterable - +String(iterable).split("").reverse().join("")) %
        k ===
      0
    ) {
      result++;
    }
  }

  return result;
}

console.log(beautifulDays(20, 23, 6));
//=========================================
console.log("#".repeat(30));
// [52]
function viralAdvertising(n) {
  let p = 5;
  let newN = n;
  let result = 0;

  while (newN > 0) {
    p = Math.floor(p / 2);
    result += p;
    p *= 3;
    newN--;
  }

  return result;
}

console.log(viralAdvertising(4));
//=========================================
console.log("#".repeat(30));
// [53]
function saveThePrisoner(n, m, s) {
  return (((m % n) + (s - 1)) % n) || n;
}

console.log(saveThePrisoner(7, 19, 3));
//=========================================
console.log("#".repeat(30));
// [54]
function circularArrayRotation(a, k, queries) {
  let newArr = [...a];
  const result = [];
  for (let i = 0; i < k; i++) {
    let popElm = newArr.pop();
    newArr.unshift(popElm);
  }

  for (let i = 0; i < queries.length; i++) {
    result.push(newArr[queries[i]]);
  }

  return result
}

console.log(circularArrayRotation([3, 4, 5], 2, [1, 2]));
//=========================================
console.log("#".repeat(30));
// [55]
function jumpingOnClouds(c, k) {
  let e = 100;
  for (let i = 0; i < c.length; i = i + k) {
    if (c[i] === 1) {
      e -= 2;
    }
    e -= 1;
    i = i % c.length;
  }

  return e;
}

console.log(jumpingOnClouds([1, 1, 1, 0, 1, 1, 0, 0, 0, 0], 3));
//=========================================
console.log("#".repeat(30));
// [56]
function findDigits(n) {
  const splitedArrNums = String(n)
    .split("")
    .map((num) => +num);

  let result = 0;

  for (let i = 0; i < splitedArrNums.length; i++) {
    if (n % splitedArrNums[i] === 0) {
      result++;
    }
  }

  return result;
}

console.log(findDigits(1012));
//=========================================
console.log("#".repeat(30));
// [57]
function extraLongFactorials(n) {
  let newN = BigInt(n);
  let result = BigInt(1);

  for (let i = newN; i >= 1; i--) {
    result *= i;
  }

  return result.toString();
}

console.log(extraLongFactorials(25));
//=========================================
console.log("#".repeat(30));
// [58]
function appendAndDelete(s, t, k) {
  const sArr = s.split("");
  const tArr = t.split("");
  let count = 0;
  for (let i = 0; i === count && i < s.length; i++) {
    if (sArr[i] === tArr[i]) {
      count++;
    }
  }

  const tMinusCount = t.length - count;
  const sMinusCount = s.length - count;

  let STK = k - (tMinusCount + sMinusCount);

  if (
    tMinusCount + sMinusCount < k &&
    t.length + s.length > k &&
    STK % 2 !== 0
  ) {
    return "No";
  } else if (tMinusCount + sMinusCount <= k) {
    return "Yes";
  } else {
    return "No";
  }
}

console.log(appendAndDelete("hackerhappy", "hackerrank", 9));
//=========================================
console.log("#".repeat(30));
// [59]
function squares(a, b) {
  let count = 0;

  for (let i = 1; i <= Math.sqrt(b); i++) {
    if (Math.pow(i, 2) >= a && Math.pow(i, 2) <= b) {
      count++;
    }
  }

  return count;
}

console.log(squares(1, 1000000000));
//=========================================
console.log("#".repeat(30));
// [60]
function libraryFine(d1, m1, y1, d2, m2, y2) {
  const dateOne = [d1, m1, y1];
  const dateTwo = [d2, m2, y2];

  const daysLate = dateOne[0] - dateTwo[0];
  const monthsLate = dateOne[1] - dateTwo[1];
  const yearsLate = dateOne[2] - dateTwo[2];

  let result = daysLate * 15 + monthsLate * 500 + yearsLate * 10000;

  return result <= 0 ? 0 : result;
}

console.log(libraryFine(2, 6, 2014, 7, 6, 2014));
//=========================================
console.log("#".repeat(30));
// [61]
function cutTheSticks(arr) {
  const result = [];
  let copiedArr = [...arr];

  while (copiedArr.length > 0) {
    result.push(copiedArr.length);

    copiedArr.sort((a, b) => a - b);

    let cut = copiedArr[0];
    copiedArr.reduce((target, value, index) => {
      copiedArr[index] -= cut;

      return target;
    }, []);

    let remove = copiedArr.lastIndexOf(0) + 1;
    copiedArr.splice(0, remove);
  }

  return result;
}

console.log(cutTheSticks([1, 2, 3, 4, 3, 3, 2, 1]));
//=========================================
console.log("#".repeat(30));
// [62]
function repeatedString(s, n) {
  const as = s.split("").filter((c) => c === "a").length;
  const times = parseInt(n / s.length);
  const rest = n % s.length;

  const totalAs =
    times * as +
    s
      .slice(0, rest)
      .split("")
      .filter((c) => c === "a").length;

  return totalAs;
}

console.log(repeatedString("aba", 10));
//=========================================
console.log("#".repeat(30));
// [63]
function jumpingOnCloudsTwo(c) {
  let result = 0;
  for (let i = 0; i < c.length; i++) {
    if (i !== 0 && c[i] === 0) {
      result++;
    }

    if (c[i] === 0 && c[i + 1] === 0 && c[i + 2] === 0) {
      result++;
      i += 2;
    }
  }

  return result;
}

console.log(
  jumpingOnCloudsTwo([
    0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0,
    0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0,
    0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1,
    0, 0, 0, 1, 0, 0, 1, 0, 1, 0,
  ])
);
//=========================================
console.log("#".repeat(30));
// [64]
function equalizeArray(arr) {
  // Write your code here
  const cache = {};

  for (const value of arr) {
    if (!cache[value]) {
      cache[value] = 1;
      continue;
    }

    cache[value] = cache[value] + 1;
  }

  const occur = Object.values(cache);
  const maxValue = Math.max(...occur);

  return arr.length - maxValue;
}

console.log(
  equalizeArray([
    10, 27, 9, 10, 100, 38, 30, 32, 45, 29, 27, 29, 32, 38, 32, 38, 14, 38, 29,
    30, 63, 29, 63, 91, 54, 10, 63,
  ])
);
//=========================================
console.log("#".repeat(30));
// [65]
function whatIsInAName(collection, source) {
  const arr = [];

  const sourceValues = Object.keys(source);
  for (const collect of collection) {
    if (sourceValues.every((value) => collect[value] === source[value])) {
      arr.push(collect);
    }
  }

  return arr;
}

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
  )
);
//=========================================
console.log("#".repeat(30));
// [66]
function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

console.log(spinalCase("thisIsSpinalTap"));
//=========================================
console.log("#".repeat(30));
// [67]
function translatePigLatin(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let index = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[0]) > -1) {
      return `${str}way`;
    }

    if (vowels.indexOf(str[i]) > -1) {
      index = i;
      break;
    }
  }

  return `${str.slice(index)}${str.slice(0, index)}ay`;
}

console.log(translatePigLatin("algorithm"));
//=========================================
console.log("#".repeat(30));
// [68]
function myReplace(str, before, after) {
  const splitedStr = str.split(" ");

  for (let i = 0; i < splitedStr.length; i++) {
    if (splitedStr[i] === before) {
      splitedStr[i] =
        before === before.toLowerCase()
          ? after.toLowerCase()
          : `${after.charAt(0).toUpperCase()}${after.slice(1)}`;
    }
  }

  return splitedStr.join(" ");
}

console.log(myReplace("I think we should look up there", "up", "Down"));
//=========================================
console.log("#".repeat(30));
// [69]
function fearNotLetter(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let index = alphabet.indexOf(str[0]);
  for (let i = 0; i < alphabet.length; i++) {
    if (alphabet[index] !== str[i]) {
      return alphabet[index];
    }
    index++;
  }

  return undefined;
}

console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
//=========================================
console.log("#".repeat(30));
// [70]
function nonDivisibleSubset(k, s) {
  const result = [];
  let newS = [...s];

  for (let i = 0; i < newS.length; i++) {
    for (let j = 1; j < newS.length; j++) {
      if ((newS[i] + newS[j]) % k === (newS[i] % k) + (newS[j] % k)) {
        result.push(newS[i], newS[j]);
      }
    }
    newS = newS.slice(i);
  }

  return [...new Set(result)].length;
}

console.log(nonDivisibleSubset(3, [1, 7, 2, 4]));
//=========================================
console.log("#".repeat(30));
// [71]
function uniteUnique(arr) {
  const result = []

  for (const arg of arguments) {
    result.push(...arg)
  }

  return [...new Set(result)]
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
//=========================================
console.log("#".repeat(30));
// [72]
function pairElement(str) {
  const DNA = [
    ["A", "T"],
    ["T", "A"],
    ["G", "C"],
    ["C", "G"],
  ];
  const result = [];
  let strLength = 0;

  while (strLength < str.length) {
    for (let i = 0; i < DNA.length; i++) {
      if (DNA[i].indexOf(str[strLength]) === 0) {
        result.push(DNA[i])
      }
    }
    strLength++
  }

  return result;
}

console.log(pairElement("GCG"));
//=========================================
console.log("#".repeat(30));
// [73]
function convertHTML(str) {
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };

  return str
    .split("")
    .map((entity) => htmlEntities[entity] || entity)
    .join("");
}

console.log(convertHTML("Dolce & Gabbana"));
//=========================================
console.log("#".repeat(30));
// [74]
function sumFibs(num) {
  const fib = [1, 1];

  for (let i = 2; i <= num; i++) {
    fib.push(fib[i - 2] + fib[i - 1]);
  }

  return fib
    .filter((n) => n % 2 === 1 && n <= num)
    .reduce((acc, curr) => acc + curr, 0);
}

console.log(sumFibs(4000000));
//=========================================
console.log("#".repeat(30));
// [75]
function sumPrimes(num) {
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) sum += i;
  }
  return sum;
}

console.log(sumPrimes(10));
//=========================================
console.log("#".repeat(30));
// [76]
function smallestCommons(arr) {
  const [min, max] = arr.sort((a, b) => a - b);
  const numberDivisors = max - min + 1;

  let upperBound = 1;
  for (let i = min; i <= max; i++) {
    upperBound *= i;
  }

  for (let multiple = max; multiple <= upperBound; multiple += max) {
    let divisorCount = 0;
    for (let i = min; i <= max; i++) {
      if (multiple % i === 0) {
        divisorCount += 1;
      }
    }
    if (divisorCount === numberDivisors) {
      return multiple;
    }
  }
}

console.log(smallestCommons([1, 5]));;
//=========================================
console.log("#".repeat(30));
// [77]
function dropElements(arr, func) {
  const newArr = [...arr];
  while (newArr.length > 0 && !func(newArr[0])) {
    newArr.shift();
  }

  return newArr;
}

console.log(
  dropElements([0, 1, 0, 1], function (n) {
    return n === 1;
  })
);
//=========================================
console.log("#".repeat(30));
// [78]
function steamrollArray(arr) {
  // return arr.flat(5);
  const result = [];
  const newArr = [...arr];

  for (let i = 0; i < newArr.length; i++) {
    if (!Array.isArray(newArr[i])) {
      result.push(newArr[i]);
    } else {
      if (newArr[i].every((int) => Number(int))) {
        result.push(...newArr[i]);
      } else {
        newArr[i].forEach((int) => result.push(int));
      }
    }
  }

  for (let i = 0; i < result.length; i++) {
    if (Array.isArray(result[i])) {
      const [int] = result[i];
      const [anotherInt] = int;
      result[i] = anotherInt;
    }
  }

  return result;
}

console.log(steamrollArray([1, {}, [3, [[4]]]]));
//=========================================
console.log("#".repeat(30));
// [79]
function steamrollArrayTwo(arr, res) {
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      res.push(arr[i]);
    } else {
      steamrollArrayTwo(arr[i], res);
    }
  }

  return res;
}

console.log(steamrollArrayTwo([1, [], [3, [[4]]]], []));
//=========================================
console.log("#".repeat(30));
// [80]
function truthCheck(collection, pre) {
  if (collection.every((obj) => obj[pre])) return true;
  return false;
}

console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true },
    ],
    "name"
  )
);

// parseInt("01000001", 2).toString(10)
// String.fromCharCode("65")
//=========================================
console.log("#".repeat(30));
// [81]
function binaryAgent(str) {
  let result = "";
  const splitedStr = str.split(" ");

  for (const string of splitedStr) {
    result += String.fromCharCode(parseInt(string, 2));
  }

  return result;
}

console.log(
  binaryAgent(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
  )
);
//=========================================
console.log("#".repeat(30));
// [82]
let counter = 1;
function calacTax(tax) {
  function calacAmount(amount) {
    return tax * amount * counter;
  }

  return calacAmount;
}

counter = 2;

console.log(calacTax(0.3)(100));
//=========================================
console.log("#".repeat(30));
// [83]
function addTogether() {
  const outerArg = arguments;

  for (const arg of outerArg) {
    if (typeof arg === "string") {
      return undefined;
    }
  }

  if (arguments.length > 1) {
    return [...arguments].reduce((acc, cur) => acc + cur, 0);
  } else {
    return function () {
      const innerArg = arguments;
      if (Array.isArray(...innerArg)) {
        return undefined;
      }
      return [...outerArg, ...innerArg].reduce((acc, cur) => acc + cur, 0);
    };
  }
}

console.log(addTogether(2)([3]));
//=========================================
console.log("#".repeat(30));
// [83]
function acmTeam(topic) {
  const result = [];

  for (let i = 0; i < topic.length; i++) {
    for (let j = i + 1; j < topic.length; j++) {
      let count = 0;
      for (let k = 0; k < topic[i].length; k++) {
        if (topic[i][k] === "1" || topic[j][k] === "1") {
          count++;
        }
      }
      result.push(count);
    }
  }

  const maxValue = Math.max(...result);
  let count = 0;
  for (const res of result) {
    if (res === maxValue) {
      count++;
    }
  }

  return [maxValue, count];
}

console.log(acmTeam(["10101", "11100", "11010", "00101"]));
//=========================================
console.log("#".repeat(30));
// [84]
function findMissing(nums) {
  for (let i = 0; i < nums.length; i++) {
    const pattern = nums[i] + 2;
    if (pattern !== nums[i + 1]) {
      return pattern;
    }
  }
}

console.log(findMissing([1, 3, 5, 7, 9, 13, 15, 17]));
//=========================================
console.log("#".repeat(30));
// [85]
function encryption(s) {
  const strLength = s.length;
  const sqrt = Math.sqrt(strLength);
  let rows = Math.floor(sqrt);
  const colomuns = Math.ceil(sqrt);
  rows = rows * colomuns < strLength ? colomuns : rows;

  const grid = [];
  for (let i = 0; i < rows; i++) {
    const str = s.trim().slice(i * colomuns, colomuns + i * colomuns);
    grid.push(str);
  }

  let result = "";
  let counter = 0;
  const currIndex = grid.length - 1;
  while (counter !== colomuns) {
    for (let i = 0; i < grid.length; i++) {
      if (i === currIndex) {
        result += (grid[i][counter] || "") + " ";
      } else {
        result += grid[i][counter] || "";
      }
    }
    counter++;
  }
  return result;
}

console.log(encryption("chillout"));
//=========================================
console.log("#".repeat(30));
// [86]
function taumBday(b, w, bc, wc, z) {
  const gifts = BigInt(b) + BigInt(w);

  const whiteGifts = gifts * BigInt(wc) + BigInt(b) * BigInt(z);
  const blackGifts = gifts * BigInt(bc) + BigInt(w) * BigInt(z);

  let min = BigInt(b) * BigInt(bc) + BigInt(w) * BigInt(wc);

  blackGifts < min && (min = blackGifts);
  whiteGifts < min && (min = whiteGifts);

  return min;
}

console.log(taumBday(742407782, 90529439, 847666641, 8651519, 821801924));
//=========================================
console.log("#".repeat(30));
// [87]
function kaprekarNumbers(p, q) {
  const result = [];
  for (let i = p; i <= q; i++) {
    const squaredInt = (i ** 2).toString();

    const center = squaredInt.length / 2;
    const leftInt = +squaredInt.slice(0, center);
    const rightInt = +squaredInt.slice(center);
    const concatedInt = leftInt + rightInt;

    if (concatedInt === i) result.push(i);
  }

  if (result.length === 0) return "INVALID RANGE";
  return result.join(" ");
}

console.log(kaprekarNumbers(1, 100));
//=========================================
console.log("#".repeat(30));
// [88]
function beautifulTriplets(d, arr) {
  const max = arr[arr.length - 1];
  let count = arr[0];
  let result = 0;

  let { values } = new Array(arr.length).fill(0).reduce(
    (target, item, index) => {
      target["values"][arr[index]] = target["values"][arr[index]]
        ? (target["values"][arr[index]] += 1)
        : 1;

      return target;
    },
    { values: {} }
  );

  while (count <= max) {
    values[count] &&
      values[count + d] &&
      values[count + d * 2] &&
      (result += Math.max(
        values[count],
        values[count + d],
        values[count + d * 2]
      ));

    count++;
  }

  return result;
}

console.log(beautifulTriplets(3, [1, 2, 4, 5, 7, 8, 10]));
//=========================================
console.log("#".repeat(30));
// [89]
function minimumDistances(a) {
  const distances = {};
  let min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < a.length; i++) {
    if (distances[a[i]]) {
      distances[a[i]] = {
        value: i - +distances[a[i]].value,
        points: distances[a[i]].points + 1,
      };
      min = distances[a[i]].value < min ? distances[a[i]].value : min;
    } else {
      distances[a[i]] = { value: i, points: 1 };
    }
  }

  const points = Object.values(distances).map((distance) => {
    return distance.points;
  });

  if (points.every((point) => point === 1)) min = -1;

  return min;
}

console.log(minimumDistances([1, 2, 3, 4, 10]));
//=========================================
console.log("#".repeat(30));
// [90]
function howManyGames(p, d, m, s) {
  if (s < p) {
    return 0;
  }
  let remainingP = p;
  const prices = [];
  while (remainingP >= m) {
    prices.push(remainingP);
    remainingP -= d;
  }

  let counter = prices.length;
  const amount = prices.reduce((acc, cur) => acc + cur, 0);
  let remainingS = s - amount;
  if (remainingS < 0) {
    return 1;
  }
  while (remainingS >= m) {
    if (remainingS - m >= m) {
      remainingS = remainingS - m * 2;
      counter += 2;
    } else {
      remainingS -= m;
      counter += 1;
    }
  }

  return counter;
}

console.log(howManyGames(100, 19, 1, 180));
//=========================================
console.log("#".repeat(30));
// [91]
function timeInWords(h, m) {
  const times = [
    { 0: "o' clock" },
    { 1: "one" },
    { 2: "two" },
    { 3: "three" },
    { 4: "four" },
    { 5: "five" },
    { 6: "six" },
    { 7: "seven" },
    { 8: "eight" },
    { 9: "nine" },
    { 10: "ten" },
    { 11: "eleven" },
    { 12: "twelve" },
    { 13: "thirteen" },
    { 14: "fourteen" },
    { 15: "quarter past" },
    { 16: "sixteen" },
    { 17: "seventeen" },
    { 18: "eighteen" },
    { 19: "nineteen" },
    { 20: "twenty" },
    { 30: "half past" },
    { 45: "quarter to" },
  ];

  let hourIndex = times.findIndex((time) => time[h]);
  let hour = times[hourIndex][h];

  const minIndex = times.findIndex((time) => time[m]);
  let mins = minIndex > -1 ? times[minIndex][m] : "";
  if (minIndex === -1) {
    const remainingMins = m > 30 && m !== 45 ? 60 - m : m;

    const index = times.findIndex((time) => time[remainingMins]);
    if (index !== -1) {
      mins = times[index][remainingMins];
    } else {
      const leftNum = +(remainingMins.toString()[0] + 0);
      const leftTime = times.find((time) => time[leftNum])[leftNum];

      const rightNum = +remainingMins.toString()[1];
      const rightTime = times.find((time) => time[rightNum])[rightNum];

      mins = leftTime + " " + rightTime;
    }
  }

  if (m > 30) {
    hourIndex += 1;
    hour = times[hourIndex][h + 1];
  }

  if (m === 0) {
    return hour + " " + mins;
  } else if (m === 1) {
    return mins + " minute past " + hour;
  } else if (m < 30 && m !== 15) {
    return mins + " minutes past " + hour;
  } else if (m === 15 || m === 30 || m === 45) {
    return mins + " " + hour;
  } else if (m > 30 && m !== 59) {
    return mins + " minutes to " + hour;
  } else {
    return mins + " minute to " + hour;
  }
}

console.log(timeInWords(6, 59));
//=========================================
console.log("#".repeat(30));
// [92]
function chocolateFeast(n, c, m) {
  let count = 0;
  let value = Math.floor(n / c);

  while (true) {
    let focus = value + (count % m);

    count += value;

    if (focus < m) break;

    value = Math.floor(focus / m);
  }

  return count;
}

console.log(chocolateFeast(6, 2, 2));
//=========================================
console.log("#".repeat(30));
// [93]
function workbook(n, k, arr) {
  let result = 0;
  let page = 1;

  for (let i of Array.from({ length: n }, (value, index) => index)) {
    const problems = arr[i];

    for (let j of Array.from(
      { length: problems },
      (value, index) => index + 1
    )) {
      j === page && result++;

      j !== problems && !(j % k) && page++;
    }

    page++;
  }

  return result;
}

console.log(workbook(5, 3, [4, 2, 6, 1, 10]));
//=========================================
console.log("#".repeat(30));
// [94]
function camelcase(s) {
  let result = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i].charCodeAt(0) <= 90) {
      result++;
    }
  }

  return result;
}

console.log(camelcase("oneTwoThree"));
//=========================================
console.log("#".repeat(30));
// [95]
function fairRations(B) {
  let result = 0;
  const copiedB = [...B];

  for (let i = 0; i < copiedB.length; i++) {
    const numIsEven = copiedB[i] % 2 === 0;
    const isLastIndex = i === copiedB.length - 1;

    if (!numIsEven && !isLastIndex) {
      copiedB[i] = copiedB[i] + 1;
      copiedB[i + 1] = copiedB[i + 1] + 1;
      result += 2;
    } else if (!numIsEven && isLastIndex) {
      copiedB[i] = copiedB[i] + 1;
      copiedB[i - 1] = copiedB[i - 1] + 1;
      result += 2;
    }
  }

  const loavesIsEven = copiedB.every((loave) => loave % 2 === 0);
  if (!loavesIsEven) {
    return "NO";
  }

  return result;
}

console.log(fairRations([2, 3, 4, 5, 6]));
//=========================================
console.log("#".repeat(30));
// [96]
function cavityMap(grid) {
  const copiedGrid = [...grid];
  for (let i = 1; i < copiedGrid.length - 1; i++) {
    for (let j = 1; j < copiedGrid[i].length - 1; j++) {
      if (+copiedGrid[i][j] > +copiedGrid[i - 1][j] + +copiedGrid[i + 1][j]) {
        const strArr = copiedGrid[i].split("");
        strArr[j] = "X";
        copiedGrid[i] = strArr.join("");
      }
    }
  }

  return copiedGrid;
}

console.log(cavityMap(["1112", "1912", "1892", "1234"]));
//=========================================
console.log("#".repeat(30));
// [97]
function happyLadybugs(b) {
  const arrOfB = b.split("");
  const isEmpty = arrOfB.every((e) => e === "_");
  const isExist = arrOfB.findIndex((e) => e === "_") === -1;
  if (isEmpty) return "YES";
  if (isExist) return "NO";

  const data = {};
  for (let i = 0; i < arrOfB.length; i++) {
    const currentElment = arrOfB[i];
    if (currentElment === "_") continue;
    if (data[currentElment]) {
      data[currentElment] = data[currentElment] + 1;
    } else {
      data[currentElment] = 1;
    }
  }

  const dataValues = Object.values(data);
  const minValue = Math.min(...dataValues);

  return minValue === 2 ? "YES" : "NO";
}

console.log(happyLadybugs("LL_ZZZZ_Z_L_ZZ"));
//=========================================
console.log("#".repeat(30));
// [98]
function strangeCounter(t) {
  let end = 3,
    size = 3,
    cycle = 1;
  while (end < t) {
    size *= 2;
    end += size;
    cycle += 1;
  }
  return end - t + 1;
}

console.log(strangeCounter(15));
//=========================================
console.log("#".repeat(30));
// [99]
function bigSorting(unsorted) {
  if (unsorted.length < 2) {
    return unsorted;
  }
  if (unsorted.length === 2) {
    return unsorted[0] > unsorted[1] ? [unsorted[1], unsorted[0]] : unsorted;
  }
  const middle = Math.floor(unsorted.length / 2);
  const leftArray = unsorted.slice(0, middle).map((elem) => BigInt(elem));
  const rightArray = unsorted.slice(middle).map((elem) => BigInt(elem));

  const leftSortedArray = bigSorting(leftArray);
  const rightSortedArray = bigSorting(rightArray);

  const mergedArr = [];
  let leftArrIndex = 0;
  let rightArrIndex = 0;
  while (
    leftArrIndex < leftSortedArray.length ||
    rightArrIndex < rightSortedArray.length
  ) {
    if (
      leftArrIndex >= leftSortedArray.length ||
      leftSortedArray[leftArrIndex] > rightSortedArray[rightArrIndex]
    ) {
      mergedArr.push(rightSortedArray[rightArrIndex]);
      rightArrIndex++;
    } else {
      mergedArr.push(leftSortedArray[leftArrIndex]);
      leftArrIndex++;
    }
  }

  return mergedArr;
}

console.log(bigSorting(["1", "200", "150", "3"]));
//=========================================
console.log("#".repeat(30));
// [100]
function superReducedString(s) {
  let copiedS = s;
  let i = 0;
  while (i < copiedS.length) {
    if (copiedS[i] === copiedS[i + 1]) {
      const leftStr = copiedS.slice(0, i);
      const rightStr = copiedS.slice(i + 2);
      copiedS = leftStr + rightStr;
      i = 0;
    } else {
      i++;
    }
  }

  return !copiedS ? "Empty String" : copiedS;
}

console.log(superReducedString("baab"));
//=========================================
console.log("#".repeat(30));
// [101]
function insertionSort1(n, arr) {
  const target = arr[n - 1];

  while (arr[--n - 1] > target) {
    arr[n] = arr[n - 1];

    console.log(...arr);
  }

  arr[n] = target;
  console.log(...arr);
}

insertionSort1(5, [2, 4, 6, 8, 3]);
//=========================================
console.log("#".repeat(30));
// [102]
function marsExploration(s) {
  let changedMessages = 0;
  for (let i = 1; i < s.length; i += 3) {
    if (s[i - 1] !== "S") {
      changedMessages++;
    }
    if (s[i] !== "O") {
      changedMessages++;
    }
    if (s[i + 1] !== "S") {
      changedMessages++;
    }
  }

  return changedMessages;
}

console.log(marsExploration("SOSOOSOSOSOSOSSOSOSOSOSOSOS"));
//=========================================
console.log("#".repeat(30));
// [103]
function surfaceArea(A, H, W) {
  let count = 0;
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      let L = A[i][j];
      count += 2;
      if (!i) {
        count += L;
      } else if (L > A[i - 1][j]) {
        count += L - A[i - 1][j];
      }
      if (i === H - 1) {
        count += L;
      } else if (L > A[i + 1][j]) {
        count += L - A[i + 1][j];
      }

      if (!j) {
        count += L;
      } else if (L > A[i][j - 1]) {
        count += L - A[i][j - 1];
      }
      if (j === W - 1) {
        count += L;
      } else if (L > A[i][j + 1]) {
        count += L - A[i][j + 1];
      }
    }
  }
  return count;
}

console.log(
  surfaceArea(
    [
      [1, 3, 4],
      [2, 2, 3],
      [1, 2, 4],
    ],
    3,
    3
  )
);
//=========================================
console.log("#".repeat(30));
// [104]
function larrysArray(A) {
  let inv = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = i; j < A.length; j++) {
      if (A[i] > A[j]) {
        inv++;
      }
    }
  }

  return inv % 2 === 0 ? "YES" : "NO";
}

console.log(larrysArray([1, 6, 5, 2, 4, 3]));
//=========================================
console.log("#".repeat(30));
// [105]
function absolutePermutation(n, k) {
  const values = Array.from({ length: n }, (_, i) => i + 1);

  if (k === 0) return values.toString().replace(/,/g, " ");

  for (let i = 0; i < values.length; i++) {
    const elmIdx = values.findIndex((elm) => Math.abs(elm - (i + 1)) === k);
    if (elmIdx === -1) return elmIdx;
    [values[elmIdx], values[i]] = [values[i], values[elmIdx]];
  }

  return values.toString().replace(/,/g, " ");
}

absolutePermutation(2, 1);
//=========================================
console.log("#".repeat(30));
// [106]
function pangrams(s) {
  const enhancedStr = s.split("");
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const ALPHABET_MAP = {};

  for (let i = 0; i < 26; i++) {
    ALPHABET_MAP[alphabet[i]] = 0;
  }

  for (let i = 0; i < enhancedStr.length; i++) {
    if (enhancedStr[i] === " ") continue;
    const char = enhancedStr[i].toLowerCase();
    ALPHABET_MAP[char] = ALPHABET_MAP[char] + 1;
  }

  const mapValues = Object.values(ALPHABET_MAP);
  if (!mapValues.includes(0)) return "pangram";
  else return "not pangram";
}

console.log(
  pangrams("We promptly judged antique ivory buckles for the next prize")
);
//=========================================
console.log("#".repeat(30));
// [107]
function minimumNumber(n, password) {
let missingCategories = 4;

  if (password.match(/[0-9]/)) {
      missingCategories--;
  }
  if (password.match(/[a-z]/)) {
      missingCategories--;
  }
  if (password.match(/[A-Z]/)) {
      missingCategories--;
  }
  if (password.match(/[!@#$%^&*()\-+]/)) {
      missingCategories--;
  }

  const missingLength = Math.max(0, 6 - n);

  return Math.max(missingCategories, missingLength);
}

console.log(minimumNumber(3, "Ab1"));
//=========================================
console.log("#".repeat(30));
// [108]
function separateNumbers(s) {
  let beautiful = true;
  for (let len = 1; len < s.length; len++) {
    let first = BigInt(s.substr(0, len));
    let num = BigInt(s.substr(0, len));
    if (s.length <= len) {
      continue;
    }
    let sNew = "".concat(first.toString());
    while (sNew.length < s.length) {
      num++;
      sNew = sNew.concat(num.toString());
    }
    if (sNew === s) {
      console.log("YES " + first);
      beautiful = false;
      continue;
    }
  }
  if (beautiful) {
    console.log("NO");
  }
}

console.log(separateNumbers("99100"));
//=========================================
console.log("#".repeat(30));
// [109]
function quickSort(arr) {
  const copiedArray = [...arr];

  if (copiedArray.length <= 1) {
    return copiedArray;
  }

  const smallerElemntsArray = [];
  const biggerElementsArray = [];
  const pivotElement = copiedArray.shift();
  const centerElementsArray = [pivotElement];

  while (copiedArray.length) {
    const currentElement = copiedArray.shift();
    if (currentElement > pivotElement) {
      biggerElementsArray.push(currentElement);
    } else if (currentElement < pivotElement) {
      smallerElemntsArray.push(currentElement);
    } else {
      centerElementsArray.push(currentElement);
    }
  }

  const smallerElementsSortedArray = quickSort(smallerElemntsArray);
  const biggerElementsSortedArray = quickSort(biggerElementsArray);

  return smallerElementsSortedArray.concat(
    centerElementsArray,
    biggerElementsSortedArray
  );
}

console.log(quickSort([4, 5, 3, 7, 2]));
//=========================================
console.log("#".repeat(30));
// [110]
function calcString(str) {
  let result = "";
  const charMap = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!charMap[char]) {
      charMap[char] = 1;
      continue;
    }

    charMap[char] = charMap[char] + 1;
  }

  for (const char in charMap) result += `${charMap[char]}${char}`;

  return result;
}

console.log(calcString("AAABBFFFF"));
//=========================================
console.log("#".repeat(30));
// [111]
function hackerrankInString(s) {
  const target = "hackerrank";
  let index = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === target[index]) {
      index++;

      if (index === target.length) {
        return "YES";
      }
    }
  }

  return "NO";
}

console.log(hackerrankInString("hereiamstackerrank"));
//=========================================
console.log("#".repeat(30));
// [112]
function funnyString(s) {
  const str = s;

  const strAsciiArr = [];
  const absoluteDifferences = [];
  const reversedAbsoluteDifferences = [];

  for (let i = 0; i < str.length; i++) {
    const asciiChar = str[i].charCodeAt(0);
    strAsciiArr.push(asciiChar);
  }

  for (let i = 0; i < strAsciiArr.length; i++) {
    const length = strAsciiArr.length;
    const nextIndex = i + 1;
    if (nextIndex >= length) break;

    absoluteDifferences.push(Math.abs(strAsciiArr[i] - strAsciiArr[nextIndex]));
    reversedAbsoluteDifferences.push(
      Math.abs(strAsciiArr[length - nextIndex] - strAsciiArr[length - (i + 2)])
    );
  }

  for (let i = 0; i < absoluteDifferences.length; i++) {
    if (absoluteDifferences[i] !== reversedAbsoluteDifferences[i])
      return "Not Funny";
  }

  return "Funny";
}

console.log(funnyString("bcxz"));
//=========================================
console.log("#".repeat(30));
// [113]
function isSorted(arr) {
  return arr.every(
    (element, index) => index === 0 || element >= arr[index - 1]
  );
}

function almostSorted(arr) {
  let swap_l = -1;
  let swap_r = -1;
  for (let ind = 1; ind < arr.length; ind++) {
    if (arr[ind - 1] > arr[ind]) {
      swap_l = ind - 1;
      break;
    }
  }

  for (let ind = swap_l + 1; ind < arr.length; ind++) {
    if (ind === arr.length - 1 || arr[ind + 1] > arr[swap_l]) {
      swap_r = ind;
      [arr[swap_l], arr[swap_r]] = [arr[swap_r], arr[swap_l]];
      break;
    }
  }

  if (isSorted(arr)) {
    console.log("yes");
    console.log(`swap ${swap_l + 1} ${swap_r + 1}`);
    return true;
  }

  [arr[swap_l], arr[swap_r]] = [arr[swap_r], arr[swap_l]];

  let rev_l = -1;
  let rev_r = -1;
  for (let ind = 0; ind < arr.length - 1; ind++) {
    if (rev_l === -1 && arr[ind] > arr[ind + 1]) {
      rev_l = ind;
    } else if (rev_l !== -1 && arr[ind] < arr[ind + 1]) {
      rev_r = ind;
      break;
    }
  }

  const toRev = arr.slice(rev_l, rev_r + 1).reverse();
  arr = arr
    .slice(0, rev_l)
    .concat(toRev)
    .concat(arr.slice(rev_r + 1));

  if (isSorted(arr)) {
    console.log("yes");
    console.log(`reverse ${rev_l + 1} ${rev_r + 1}`);
    return true;
  }

  console.log("no");
  return false;
}

almostSorted([1, 5, 4, 3, 2, 6]);
//=========================================
console.log("#".repeat(30));
// [114]
function matrixRotation(matrix, r) {
  const n = matrix.length;
  const m = matrix[0].length;

  for (let k = 0; k < Math.min(n, m) / 2; k++) {
    const layer = [];
    const rotation = r % (2 * (n + m - 2 - 4 * k));

    for (let i = k; i < m - k; i++) {
      layer.push(matrix[k][i]);
    }

    for (let i = k + 1; i < n - k - 1; i++) {
      layer.push(matrix[i][m - k - 1]);
    }

    for (let i = m - k - 1; i > k - 1; i--) {
      layer.push(matrix[n - k - 1][i]);
    }

    for (let i = n - k - 2; i > k; i--) {
      layer.push(matrix[i][k]);
    }

    let l = 0;
    for (let i = k; i < m - k; i++) {
      matrix[k][i] = layer[(l + rotation) % layer.length];
      l++;
    }

    for (let i = k + 1; i < n - k - 1; i++) {
      matrix[i][m - k - 1] = layer[(l + rotation) % layer.length];
      l++;
    }

    for (let i = m - k - 1; i > k - 1; i--) {
      matrix[n - k - 1][i] = layer[(l + rotation) % layer.length];
      l++;
    }

    for (let i = n - k - 2; i > k; i--) {
      matrix[i][k] = layer[(l + rotation) % layer.length];
      l++;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join(" "));
  }
}

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const rotations = 3;
matrixRotation(matrix, rotations);
//=========================================
console.log("#".repeat(30));
// [115]
function alternate(s) {
  const uniqueChars = new Set(s);
  let maxAlternateLength = 0;

  uniqueChars.forEach((char1) => {
    uniqueChars.forEach((char2) => {
      if (char1 !== char2) {
        const pattern = `[${char1}${char2}]`;
        const regExp = new RegExp(`(${pattern})+`, "g");
        const matches = s.match(regExp);
        if (matches) {
          const alternateString = matches.join("");
          if (
            isAlternating(alternateString) &&
            alternateString.length > maxAlternateLength
          ) {
            maxAlternateLength = alternateString.length;
          }
        }
      }
    });
  });

  return maxAlternateLength;
}

function isAlternating(s) {
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(alternate("beabeefeab"));
//=========================================
console.log("#".repeat(30));
// [116]
function insertionSort2(n, arr) {
  for (let i = 1; i < n; i++) {
    let currentElement = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = currentElement;
    console.log(arr.join(" "));
  }
}

insertionSort2(6, [1, 4, 3, 5, 6, 2]);
//=========================================
console.log("#".repeat(30));
// [117]
function caesarCipher(s, k) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (char >= "a" && char <= "z") {
      char = String.fromCharCode(
        ((char.charCodeAt(0) - "a".charCodeAt(0) + k) % 26) + "a".charCodeAt(0)
      );
    } else if (char >= "A" && char <= "Z") {
      char = String.fromCharCode(
        ((char.charCodeAt(0) - "A".charCodeAt(0) + k) % 26) + "A".charCodeAt(0)
      );
    }

    result += char;
  }

  return result;
}

const encryptedString = caesarCipher("Hello, World!", 3);
console.log(encryptedString);
//=========================================
console.log("#".repeat(30));
// [118]
function runningTime(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let pos = i;
    for (let j = i; j >= 0; j--) {
      if (arr[j] > arr[i]) {
        pos = j;
        count++;
      }
    }

    let temp = arr[pos];
    arr[pos] = arr[i];
    arr[i] = temp;
  }
  return count;
}

console.log(runningTime([4, 4, 3, 4]));
//=========================================
console.log("#".repeat(30));
// [119]
function weightedUniformStrings(s, queries) {
  const weightsSet = new Set();
  let currentWeight = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      currentWeight += s.charCodeAt(i) - "a".charCodeAt(0) + 1;
    } else {
      currentWeight = s.charCodeAt(i) - "a".charCodeAt(0) + 1;
    }
    weightsSet.add(currentWeight);
  }

  const results = [];
  for (let query of queries) {
    results.push(weightsSet.has(query) ? "Yes" : "No");
  }

  return results;
}

const result = weightedUniformStrings("abccba", [1, 2, 3, 4, 5, 6]);
console.log(result);
//=========================================
console.log("#".repeat(30));
// [120]
function assembleItems(arr) {
  let data = {};
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const id = arr[i].id;
    if (data[id]) {
      data[id].push(arr[i].type);
    } else {
      data[id] = [arr[i].type];
    }
  }

  for (const elm in data) {
    const file = { id: elm, type: [...data[elm]] };
    result.push(file);
  }

  return result;
}

console.log(
  assembleItems([
    {
      id: 1,
      type: "ADD",
    },
    {
      id: 1,
      type: "CHANGE",
    },
    {
      id: 2,
      type: "ADD",
    },
    {
      id: 3,
      type: "ADD",
    },
    {
      id: 3,
      type: "CHANGE",
    },
    {
      id: 2,
      type: "REMOVE",
    },
    {
      id: 3,
      type: "CHANGE",
    },
    {
      id: 1,
      type: "REMOVE",
    },
  ])
);
//=========================================
console.log("#".repeat(30));
// [121]
function gemstones(arr) {
  const mineralMap = new Map();
  const arrLength = arr.length;
  let result = 0;

  for (const mineral of arr[0]) {
    mineralMap.set(mineral, 1);
  }

  for (let i = 1; i < arrLength; i++) {
    const rock = arr[i];
    const rockMinerals = new Set(rock);

    for (const mineral of mineralMap.keys()) {
      if (!rockMinerals.has(mineral)) {
        mineralMap.delete(mineral);
      }
    }
  }

  result = mineralMap.size;
  return result;
}

console.log(gemstones(["vtrjvgbj", "mkmjyaeav", "sibzdmsk"]));
//=========================================
console.log("#".repeat(30));
// [122]
function countingSortOne(arr) {
    let frequencyArray = new Array(100).fill(0);
    for (let num of arr) frequencyArray[num]++
    return frequencyArray;
}

console.log(countingSortOne([1, 1, 3, 2, 1]));
//=========================================
console.log("#".repeat(30));
// [123]
function countingSortTwo(arr) {
  const max = Math.max(...arr);

  const countArray = new Array(max + 1).fill(0);

  for (let i = 0; i < arr.length; i++) {
    countArray[arr[i]]++;
  }

  let sortedArray = [];
  for (let i = 0; i < countArray.length; i++) {
    for (let j = 0; j < countArray[i]; j++) {
      sortedArray.push(i);
    }
  }

  return sortedArray;
}

console.log(countingSortTwo([1, 1, 3, 2, 1]));
//=========================================
console.log("#".repeat(30));
// [124]
function alternatingCharacters(s) {
  let deletions = 0;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      deletions++;
    }
  }

  return deletions;
}

console.log(alternatingCharacters("AABAAB"));
//=========================================
console.log("#".repeat(30));
// [125]
function validPair(cross1, cross2) {
  for (const pos of cross2) {
    if (cross1.has(pos[0] + "," + pos[1])) {
      return false;
    }
  }
  return true;
}

function goodSpots(r, c, i, grid) {
  const n = grid.length;
  const m = grid[0].length;

  if (
    grid[r + i][c] === "G" &&
    grid[r - i][c] === "G" &&
    grid[r][c + i] === "G" &&
    grid[r][c - i] === "G"
  ) {
    return true;
  }
  return false;
}

function getCrosses(r, c, grid) {
  const crosses = [[1, new Set([r + "," + c])]];
  let area = 1;
  let i = 1;

  while (
    r + i < grid.length &&
    r - i >= 0 &&
    c + i < grid[0].length &&
    c - i >= 0 &&
    goodSpots(r, c, i, grid)
  ) {
    area += 4;

    for (const pos of [
      [r + i, c],
      [r - i, c],
      [r, c + i],
      [r, c - i],
    ]) {
      crosses[0][1].add(pos[0] + "," + pos[1]);
    }

    crosses.push([area, new Set(crosses[0][1])]);
    i += 1;
  }

  return crosses;
}

function twoPluses(grid) {
  const n = grid.length;
  const m = grid[0].length;
  let productArea = 0;
  const crosses = [];

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < m; c++) {
      if (grid[r][c] === "G") {
        crosses.push(...getCrosses(r, c, grid));
      }
    }
  }

  for (let i = 0; i < crosses.length; i++) {
    for (let j = i + 1; j < crosses.length; j++) {
      if (validPair(crosses[i][1], crosses[j][1])) {
        productArea = Math.max(productArea, crosses[i][0] * crosses[j][0]);
      }
    }
  }

  return productArea;
}

console.log(
  twoPluses(["BGBBGB", "GGGGGG", "BGBBGB", "GGGGGG", "BGBBGB", "BGBBGB"])
);
//=========================================
console.log("#".repeat(30));
// [126]
function countSort(arr) {
  const n = arr.length;
  if (n === 1) {
    console.log(arr[0][1]);
  }

  const d = {};
  const key = [];

  for (let i = 0; i < Math.floor(n / 2); i++) {
    arr[i][1] = "-";
  }

  for (let i = 0; i < n; i++) {
    if (arr[i][0] in d) {
      d[arr[i][0]] += " " + arr[i][1];
    } else {
      d[arr[i][0]] = arr[i][1];
      key.push(arr[i][0]);
    }
  }

  key.sort((a, b) => a - b);
  let ans = "";
  for (const item of key) {
    ans += " " + d[item];
  }

  console.log(ans.trim());
}

countSort([
  [1, "a"],
  [2, "b"],
  [3, "c"],
  [4, "d"],
  [5, "e"],
]);
//=========================================
console.log("#".repeat(30));
// [127]
function beautifulBinaryString(b) {
  const beautyStr = "010";
  const beautyStrLength = beautyStr.length;
  let result = 0;

  for (let i = 0; i < b.length; i++) {
    const str = b.slice(i, i + beautyStrLength);
    if (str === beautyStr) {
      i += beautyStrLength - 1;
      result++;
    }
  }

  return result;
}

console.log(beautifulBinaryString("0100101010"));
//=========================================
console.log("#".repeat(30));
// [128]
function closestNumbers(arr) {
  let minDiff = Infinity;
  let differences = {};
  const sortedArr = [...arr].sort((a, b) => a - b);

  for (let i = 0; i < sortedArr.length - 1; i++) {
    let diff = Math.abs(sortedArr[i + 1] - sortedArr[i]);

    if (differences[diff]) {
      differences[diff].push(sortedArr[i], sortedArr[i + 1]);
    } else {
      differences[diff] = [sortedArr[i], sortedArr[i + 1]];
    }

    minDiff = Math.min(minDiff, diff);
  }

  return differences[minDiff];
}

console.log(closestNumbers([4, 2, 1, 3]));
//=========================================
console.log("#".repeat(30));
// [129]
function theLoveLetterMystery(s) {
  let result = 0;
  const copiedS = s.split("");

  for (let i = 0; i < copiedS.length; i++) {
    const increasedIndex = i;
    const decreasedIndex = copiedS.length - 1 - i;

    const startedChar = copiedS[i];
    const endedChar = copiedS[decreasedIndex];

    const startedCharAscii = startedChar.charCodeAt(0);
    const endedCharAscii = endedChar.charCodeAt(0);

    if (startedCharAscii > endedCharAscii) {
      copiedS[increasedIndex] = endedChar;
    } else if (startedCharAscii < endedCharAscii) {
      copiedS[decreasedIndex] = startedChar;
    }

    result += Math.abs(endedCharAscii - startedCharAscii);
  }

  return result;
}

console.log(theLoveLetterMystery("cba"));
//=========================================
console.log("#".repeat(30));
// [130]
function findMedian(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedArr.length / 2);

  return sortedArr[middleIndex];
}

console.log(findMedian([0, 1, 2, 4, 6, 5, 3]));
//=========================================
console.log("#".repeat(30));
// [131]
function insertionSort(arr) {
  function merge(arr, low, mid, high) {
    let i = low;
    let j = mid + 1;
    let temp = [];
    let count = 0;

    while (i <= mid && j <= high) {
      if (arr[i] <= arr[j]) {
        temp.push(arr[i]);
        i += 1;
      } else {
        temp.push(arr[j]);
        count += mid - i + 1;
        j += 1;
      }
    }

    while (i <= mid) {
      temp.push(arr[i]);
      i += 1;
    }

    while (j <= high) {
      temp.push(arr[j]);
      j += 1;
    }

    for (let t = low; t <= high; t++) {
      arr[t] = temp[t - low];
    }

    return count;
  }

  function mergeSort(arr, low, high) {
    if (low >= high) {
      return 0;
    }

    let ans = 0;
    const mid = Math.floor((low + high) / 2);

    ans += mergeSort(arr, low, mid);
    ans += mergeSort(arr, mid + 1, high);
    ans += merge(arr, low, mid, high);

    return ans;
  }

  return mergeSort(arr, 0, arr.length - 1);
}

console.log("Inversion count:", insertionSort([12, 11, 13, 5, 6, 7]));
//=========================================
console.log("#".repeat(30));
// [132]
function convertion(str, i) {
  return str.split("").map((item) => (item = i));
}

function higherLower(n) {
  for (let i = 1; i <= n; i++) {
    console.log(...convertion("i".repeat(i), i));
  }

  for (let i = n - 1; i >= 1; i--) {
    console.log(...convertion("i".repeat(i), i));
  }
}

higherLower(5);
//=========================================
console.log("#".repeat(30));
// [133]
function palindromeIndex(s) {
  function isPalindrome(s) {
    for (let i = 0; i < Math.floor(s.length / 2); i++) {
      if (s[i] !== s[s.length - i - 1]) {
        return false;
      }
    }
    return true;
  }

  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s[i] !== s[s.length - i - 1]) {
      const tmp = s.substring(0, i) + s.substring(i + 1);
      if (isPalindrome(tmp)) {
        return i;
      } else {
        return s.length - i - 1;
      }
    }
  }

  return -1;
}

console.log(palindromeIndex("bbaa"));
//=========================================
console.log("#".repeat(30));
// [134]
function activityNotifications(expenditure, d) {
  const RANGE = 201;
  let notifications = 0;
  const getDoubleMedian = (count, d) => {
    const N = count.length;
    const countPrefix = Array.from(count);
    for (let i = 0; i < N; i++) {
      countPrefix[i] += countPrefix[i - 1] || 0;
    }
    let a = 0;
    let b = 0;

    if (d % 2 === 0) {
      let first = Math.floor(d / 2);
      let second = first + 1;
      let i = 0;
      for (; i < RANGE; i++) {
        if (first <= countPrefix[i]) {
          a = i;
          break;
        }
      }
      for (; i < RANGE; i++) {
        if (second <= countPrefix[i]) {
          b = i;
          break;
        }
      }
    } else {
      let first = Math.floor(d / 2) + 1;
      for (let i = 0; i < RANGE; i++) {
        if (first <= countPrefix[i]) {
          a = i;
          b = i;
          break;
        }
      }
    }

    return a + b;
  };

  const count = Array(RANGE).fill(0);
  for (let i = 0; i < d; i++) {
    count[expenditure[i]]++;
  }

  for (let i = d; i < expenditure.length; i++) {
    const median = getDoubleMedian(count, d);
    if (expenditure[i] >= median) {
      notifications++;
    }

    count[expenditure[i]]++;
    count[expenditure[i - d]]--;
  }

  return notifications;
}

console.log(activityNotifications([10, 20, 30, 40, 50], 3));
//=========================================
console.log("#".repeat(30));
// [135]
function anagram(s) {
  let midpoint = Math.floor(s.length / 2);
  let firstHalf = s.substring(0, midpoint);
  let secondHalf = s.substring(midpoint);
  let count = 0;

  if (s.length % 2 !== 0) {
    return -1;
  }

  for (let i = 0; i < firstHalf.length; i++) {
    secondHalf.includes(firstHalf[i])
      ? (secondHalf = secondHalf.replace(firstHalf[i], ""))
      : count++;
  }

  return count;
}

console.log(anagram("xaxbbbxx"));
//=========================================
console.log("#".repeat(30));
// [136]
function makeAnagram(s1, s2) {
  let map = {},
    aCount = 0,
    bCount = 0;
  for (let i = 0; i < s1.length; i++) {
    if (!map[s1[i]]) {
      map[s1[i]] = 1;
    } else {
      map[s1[i]] += 1;
    }
  }

  for (let j = 0; j < s2.length; j++) {
    if (map[s2[j]]) {
      aCount += 1;
      map[s2[j]] -= 1;
    } else {
      bCount += 1;
    }
  }

  return s1.length - aCount + bCount;
}

console.log(makeAnagram("abc", "amnop"));
//=========================================
console.log("#".repeat(30));
// [137]
function lilysHomework(arr) {
  let copiedArr = arr.slice();
  let copiedArr2 = arr.slice();
  let indexArr = [];
  let count = 0;
  let index;
  let temp;
  let decCount = 0;

  for (let i = 0; i < arr.length; i++) {
    indexArr[arr[i]] = i;
  }
  arr.sort(function (a, b) {
    return a - b;
  });
  let sortedcopiedArr = arr.slice();
  let decSort = sortedcopiedArr.reverse();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != copiedArr[i]) {
      temp = copiedArr[i];
      index = indexArr[arr[i]];
      indexArr[arr[i]] = i;
      indexArr[copiedArr[i]] = index;
      copiedArr[i] = arr[i];
      copiedArr[index] = temp;
      count++;
    }
  }
  indexArr = [];

  for (let i = 0; i < copiedArr2.length; i++) {
    indexArr[copiedArr2[i]] = i;
  }

  for (let i = 0; i < decSort.length; i++) {
    if (decSort[i] != copiedArr2[i]) {
      temp = copiedArr2[i];
      index = indexArr[decSort[i]];
      indexArr[decSort[i]] = i;
      indexArr[copiedArr2[i]] = index;
      copiedArr2[i] = decSort[i];
      copiedArr2[index] = temp;
      decCount++;
    }
  }

  return Math.min(count, decCount);
}

console.log(lilysHomework([7, 15, 12, 3]));
//=========================================
console.log("#".repeat(30));
// [138]
function gameOfThrones(s) {
  let mySet = new Set();
  for (let i = 0; i < s.length; i++) {
    mySet.add(s.charAt(i));
  }
  let even = 0;
  let odd = 0;

  for (let item of mySet) {
    let count = 0;

    for (let i = 0; i < s.length; i++) {
      if (item == s[i]) {
        count++;
      }
    }

    if (count % 2 == 0) {
      even++;
    } else {
      odd++;
    }
    if (s.length % 2 == 0) {
      if (odd > 0) {
        return "NO";
      }
    } else {
      if (odd > 1) {
        return "NO";
      }
    }
  }
  return "YES";
}

console.log(gameOfThrones("aabbccdd"));
//=========================================
console.log("#".repeat(30));
// [139]
function twoStrings(s1, s2) {
  let arr1 = s1.split("");
  let arr2 = s2.split("");

  let string = "abcdefghijklmnopqrstuvwxyz";
  let alphabets = string.split("");

  for (let i = 0; i < alphabets.length; i++) {
    if (arr1.indexOf(alphabets[i]) >= 0 && arr2.indexOf(alphabets[i]) >= 0) {
      return "YES";
    }
  }
  
  return "NO";
}

console.log(twoStrings("wouldyoulikefries", "abcabcabcabcabcabc"));
//=========================================
console.log("#".repeat(30));
// [140]
function stringConstruction(s) {
  let mySet = new Set();
  let cost = 0;
  for (let i = 0; i < s.length; i++) {
    if (!mySet.has(s.charAt(i))) {
      mySet.add(s.charAt(i));
      cost++;
    }
  }
  return cost;
}

console.log(stringConstruction("abcd"));
//=========================================
console.log("#".repeat(30));
// [141]
function isValid(s) {
  let hash = {};
  let max, min;
  let minCount = 0;
  let maxCount = 0;
  for (let i = 0; i < s.length; i++) {
    let key = s[i];
    if (hash[key]) {
      hash[key]++;
    } else {
      hash[key] = 1;
    }
  }

  let frequencies = [];
  for (let key in hash) {
    frequencies.push(hash[key]);
  }
  frequencies.sort();
  min = frequencies[0];
  max = frequencies[frequencies.length - 1];
  for (let i = 0; i < frequencies.length; i++) {
    if (frequencies[i] === max) {
      maxCount++;
    }
    if (frequencies[i] === min) {
      minCount++;
    }
  }

  if (min === max) {
    return "YES";
  }
  if (max - (min - 1) == max && minCount === 1 && maxCount !== 1) {
    return "YES";
  }
  if (max - min !== 1) {
    return "NO";
  }
  if (maxCount === minCount) {
    return "NO";
  }
  if (maxCount === 1 || minCount === 1) {
    return "YES";
  }

  return "NO";
}

console.log(isValid("abcc"));
//=========================================
console.log("#".repeat(30));
// [142]
function highestValuePalindrome(s, n, k) {
  let minNoOfChanges = 0;

  for (let i = 0; i < Math.floor(n / 2); i++) {
    if (s[i] !== s[n - i - 1]) {
      minNoOfChanges++;
    }
  }

  if (minNoOfChanges > k) {
    return "-1";
  }

  let highestValuePalindrome = "";

  for (let i = 0; i < Math.floor(n / 2); i++) {
    if (k - minNoOfChanges > 1) {
      if (s[i] !== s[n - i - 1]) {
        if (s[i] !== "9" && s[n - i - 1] !== "9") {
          highestValuePalindrome += "9";
          k -= 2;
        } else {
          if (s[i] > s[n - i - 1]) {
            highestValuePalindrome += s[i];
          } else {
            highestValuePalindrome += s[n - i - 1];
          }
          k -= 1;
        }
        minNoOfChanges -= 1;
      } else if (s[i] !== "9") {
        highestValuePalindrome += "9";
        k -= 2;
      } else {
        highestValuePalindrome += s[i];
      }
    } else if (k - minNoOfChanges === 1) {
      if (s[i] !== s[n - i - 1]) {
        if (s[i] !== "9" && s[n - i - 1] !== "9") {
          highestValuePalindrome += "9";
          k -= 2;
        } else {
          if (s[i] > s[n - i - 1]) {
            highestValuePalindrome += s[i];
          } else {
            highestValuePalindrome += s[n - i - 1];
          }
          k -= 1;
        }
        minNoOfChanges -= 1;
      } else {
        highestValuePalindrome += s[i];
      }
    } else if (s[i] !== s[n - i - 1]) {
      if (s[i] > s[n - i - 1]) {
        highestValuePalindrome += s[i];
      } else {
        highestValuePalindrome += s[n - i - 1];
      }
      k -= 1;
      minNoOfChanges -= 1;
    } else {
      highestValuePalindrome += s[i];
    }
  }

  if (n % 2 !== 0) {
    if (k > 0) {
      return (
        highestValuePalindrome +
        "9" +
        highestValuePalindrome.split("").reverse().join("")
      );
    }
    return (
      highestValuePalindrome +
      s[Math.floor(n / 2)] +
      highestValuePalindrome.split("").reverse().join("")
    );
  }

  return (
    highestValuePalindrome + highestValuePalindrome.split("").reverse().join("")
  );
}

console.log(highestValuePalindrome("12321", 5, 1));
//=========================================
console.log("#".repeat(30));
// [143]
function getAllSubstrings(str) {
  let i,
    j,
    result = [];

  for (i = 0; i < str.length; i++) {
    for (j = i + 1; j < str.length + 1; j++) {
      result.push(str.slice(i, j));
    }
  }
  return result;
}

function isAnagram(str1, str2) {
  const hist = {};

  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];
    if (hist[char]) {
      hist[char]++;
    } else {
      hist[char] = 1;
    }
  }

  for (let j = 0; j < str2.length; j++) {
    const char = str2[j];
    if (hist[char]) {
      hist[char]--;
    } else {
      return false;
    }
  }

  return true;
}

function countAnagrams(currentIndex, arr) {
  const currentElement = arr[currentIndex];
  const arrRest = arr.slice(currentIndex + 1);
  let counter = 0;

  for (let i = 0; i < arrRest.length; i++) {
    if (
      currentElement.length === arrRest[i].length &&
      isAnagram(currentElement, arrRest[i])
    ) {
      counter++;
    }
  }

  return counter;
}

function sherlockAndAnagrams(s) {
  const duplicatesCount = s
    .split("")
    .filter((v, i) => s.indexOf(v) !== i).length;

  if (!duplicatesCount) return 0;
  let anagramsCount = 0;

  const arr = getAllSubstrings(s);

  for (let i = 0; i < arr.length; i++) {
    anagramsCount += countAnagrams(i, arr);
  }

  return anagramsCount;
}

console.log(sherlockAndAnagrams("mom"));
//=========================================
console.log("#".repeat(30));
// [144]
function commonChild(s1, s2) {
  const lcs = [];
  for (let i = 0; i < s2.length + 1; i++) {
    lcs.push(new Array(s1.length + 1).fill(0));
  }

  for (let i = 1; i < s1.length + 1; i++) {
    for (let j = 1; j < s2.length + 1; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        lcs[i][j] = lcs[i - 1][j - 1] + 1;
      } else {
        lcs[i][j] = Math.max(lcs[i - 1][j], lcs[i][j - 1]);
      }
    }
  }

  return lcs[s1.length][s2.length];
}

console.log(commonChild("ABCD", "ABDC"));
//=========================================
console.log("#".repeat(30));
// [145]
function steadyGene(gene) {
  const n = gene.length;
  const count = { A: 0, C: 0, G: 0, T: 0 };

  for (let i = 0; i < n; i++) {
    count[gene[i]] += 1;
  }

  const excess = {};
  for (const letter of "ACGT") {
    if (count[letter] > n / 4) {
      excess[letter] = count[letter] - n / 4;
    }
  }

  if (Object.keys(excess).length === 0) {
    return 0;
  }

  let minLen = Infinity;
  let left = 0;
  for (let right = 0; right < n; right++) {
    if (excess[gene[right]] !== undefined) {
      excess[gene[right]] -= 1;
    }

    while (Object.values(excess).every((val) => val <= 0)) {
      minLen = Math.min(minLen, right - left + 1);
      if (excess[gene[left]] !== undefined) {
        excess[gene[left]] += 1;
      }
      left += 1;
    }
  }

  return minLen;
}

console.log(steadyGene("GAAATAAA"));
//=========================================
console.log("#".repeat(30));
// [146]
function morganAndString(a, b) {
  const la = a.length;
  const lb = b.length;
  a += "z";
  b += "z";
  let i = 0;
  let j = 0;
  let result = "";

  while (i !== la && j !== lb) {
    if (a.slice(i) < b.slice(j)) {
      result += a[i];
      i += 1;
    } else {
      result += b[j];
      j += 1;
    }
  }

  result += a.slice(i, -1) + b.slice(j, -1);
  return result;
}

console.log(morganAndString("JACK", "DANIEL"));
//=========================================
console.log("#".repeat(30));
// [147]
function createMapNums(arr, map) {
  for (let i = 0; i < arr.length; i++) {
    const arrElem = arr[i];
    if (map[arrElem]) {
      map[arrElem]++;
      continue;
    }
    map[arrElem] = 1;
  }

  return map;
}

function missingNumbers(arr, brr) {
  const numbersMap1 = createMapNums(arr, {});
  const numbersMap2 = createMapNums(brr, numbersMap1);

  const result = Object.keys(numbersMap2).filter(
    (key) => numbersMap2[key] === 1
  );

  return result;
}

console.log(missingNumbers([7, 2, 5, 3, 5, 3], [7, 2, 5, 4, 6, 3, 5, 3]));
//=========================================
console.log("#".repeat(30));
// [148]
function isSquare(n) {
  const sqrt = Math.sqrt(n);
  return Number.isInteger(sqrt);
}

console.log(isSquare(25));
//=========================================
console.log("#".repeat(30));
// [149]
function findOddNames(list) {
  return list.filter((person) => {
    const sumOfAscii = person.firstName
      .split("")
      .reduce((sum, char) => sum + char.charCodeAt(0), 0);

    return sumOfAscii % 2 !== 0;
  });
}

const list1 = [
  { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
  { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
];
console.log(findOddNames(list1));
//=========================================
console.log("#".repeat(30));
// [150]
function findOutlier(integers) {
  const evenIntegers = integers.filter((integer) => integer % 2 == 0);
  const oddIntegers = integers.filter((integer) => integer % 2 !== 0);
  return evenIntegers.length == 1 ? evenIntegers[0] : oddIntegers[0];
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
//=========================================
console.log("#".repeat(30));
// [151]
function pigIt(str) {
  let result = [];
  const inputArray = str.split(" ");
  const punctuationMarks = { "!": "!", "?": "?", ".": "." };
  for (const word of inputArray) {
    const splitedWord = word.split("");
    let editedWord = `${splitedWord.slice(1).join("")}${splitedWord[0]}`;
    if (!punctuationMarks[word]) {
      editedWord += "ay";
    }

    result.push(editedWord);
  }

  return result.join(" ");
}

console.log(pigIt("uisQay ustodietcay psosiay ustodescay ?"));
//=========================================
console.log("#".repeat(30));
// [152]
