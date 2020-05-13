// // // // function checkSpeed(speed) {
// // // //   if (speed <= 75) {
// // // //     return "ok";
// // // //   }
// // // //   let points = Math.floor((speed - 70)/5);
// // // //   return points >= 12 ? "license suspended" : points;
// // // // }
// // // // console.log(checkSpeed(71))
// // // // console.log(checkSpeed(60.4))
// // // // console.log(checkSpeed(100.98))

// // // // function showNumber(limit){
// // // //     for(let i = 0; i < limit; i++){
// // // //        const message = (i%2 === 0)? 'EVEN':'ODD';
// // // //        console.log(i, message);
// // // //     }
// // // // }

// // // // console.log(showNumber(10));

// // // // const falsyArray = [0, ' ', " ", false, undefined, null, NaN, "falsy"];

// // // // let count = 0;
// // // // function countTruthy(array){
// // // //     for(let arr of array){
// // // //       if(arr) count++;
// // // //     }return count;
// // // // }
// // // // array=[1,2,3,4,null, false, NaN, true, 1 ,'lekshmi',0,'o'];
// // // // console.log(countTruthy(array));

// // // // const movie = {
// // // //   title: "a",
// // // //   releaseYear: 1992,
// // // //   actress: "deepika",
// // // //   actor: "shah rukh",
// // // //   totalCollection: 1200
// // // // };

// // // // let count = 0;
// // // // function showProperties(obj) {
// // // //   for (let o in obj) if (typeof obj[o] === "string") console.log(o, obj[o]);
// // // // }

// // // // console.log(showProperties(movie));

// // // // function sum(limit) {
// // // //   let result = 0;

// // // //   for (let i = 1; i <= limit; i++) if (i % 3 == 0 || i % 5 == 0) result += i;

// // // //   return result;
// // // // }
// // // // console.log(sum(10));

// // // // marks = [80, 80, 50];
// // // // function calculateGrade(marks) {
// // // //   const average = calculateAverage(marks);
// // // //   if(average<60) return 'F';
// // // //   if(average<70) return 'D';
// // // //   if(average<80) return 'C';
// // // //   if(average<90) return 'B';
// // // //   else return 'A'
// // // // }

// // // // function calculateAverage(marks){
// // // //     let totalMarks = 0;

// // // //     for(let m of marks)
// // // //    totalMarks += m;
   
// // // //    return Math.floor(totalMarks / marks.length);
   
// // // // }
// // // // console.log(calculateGrade(marks));

// // // // function showStars(row){
// // // //     for(let i =1; i <= row; i++){
// // // //       let pattern = ''; 
// // // //       for(let j = 0; j < i; j++){
// // // //         pattern += '*';
        
// // // //       }console.log(pattern);
// // // //     }
// // // // }

// // // // showStars(500);
// // // // function showPrimes(limit){
  
// // // //   for(let i = 2; i <= limit; i++){
// // // //     let isPrime = true;
// // // //     for(let j=2; j<i; j++){
// // // //       if(i%j === 0){
// // // //       isPrime = false;
// // // //       break;
// // // //       }
// // // //     } if(isPrime == true){
// // // //       console.log(i);
// // // //     }
// // // //   }
// // // // }

// // // // showPrimes(50);

// // // // function showPrimes(limit){
// // // //   for(let number = 2; number <= limit; number++)
// // // //     if(isPrime(number)) console.log(number);
// // // // }
// // // // function isPrime(number){
// // // //   for(let factor = 2; factor < number; factor++)
// // // //     if(number % factor === 0)
// // // //       return false;
// // // //     return true;
// // // // }



// // // // let address = {
// // // //   street : "street",
// // // //   city: "city",
// // // //   zipCode: "zipcode"
// // // // };

// // // // function showAddress(address){
// // // //   for (const key in address) {
// // // //     console.log(key, address[key])
// // // //   }
// // // // }

// // // // showAddress(address)

// // // //factory function

// // // function createAddress(street, city, zipcode){
// // // return{
// // //   street,
// // //   city,
// // //   zipcode
// // // }
// // // }

// // // //console.log(createAddress("rockelm road", "scarborough", "m1l 4s8"));

// // // //constructor function

// // function Address(street, city, zipcode){
// //   this.street = street;
// //   this.city = city;
// //   this.zipcode = zipcode;
// // }

// // let address = new Address('rockelm road', 'scarborough', 'm1l 4s8');
// // console.log(address);

// // function arrayFromRange(min, max){
// //   let array = [];
// //   for(let i = min; i <= max; i++)
// //     array.push(i);
// //    return array;
// // }

// // console.log(arrayFromRange(20,30));

// // function includes(array, searchElement){
// //   for(let arr of array){
// //     if(arr === searchElement){
// //       return true
// //     }else return false
// //   }
// // }

// // console.log(includes([1,2,3,4,5], 2))

// // function except(array, excluded){
// // const output = [];
// //   for(let a of array){
// //   if(!excluded.includes(e)){
// // output.push(a);
// //   }
// //   }
// // }

// function move(array, index, offset){

// }

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// function solution(N) {
//   let maxGap = 0; 
//   let currentGap;
//   let binNumber = N.toString(2);
 
//    let lastOccurence = binNumber.lastIndexOf("1");
  
//    for(let i = lastOccurence; i > 0; i--){
//      if(binNumber.charAt(i)==='1'){
//        currentGap =0;
//      }else{
//        currentGap += 1;
//        if(currentGap>maxGap){
//          maxGap=currentGap;
//        }
//      }
//    } return maxGap;
 
// }


// let result = solution(32);
//solution(1041)

// function solution(array) {

//   const len = array.length;
//   let result = array[0];
//   for(let i = 1; i<len; i++){

//     result = result^array[i];
//   } return result;
// }


// let array = [9, 3, 9, 3, 9, 7, 9]; 
// const result = solution(array);
// console.log(solution(array));

// let array = [1, 2, 3, 4];
// let expected = [8,2,4,6,3,1,6]
// function solution(array, count) {
//   let temp;
//   let val;
//   temp = array[array.length - 1]; 
//   for(let i = array.length-1; i > 0; i--){
//     array[i+1] = array[i];
//     console.log(array[i], array[i+1], array[i-1])
//   }
//   array[0] = temp;
//   return array;
//   }


//   function solution(array, count){
//     let i; 
//     for (i = 0; i < count-1; i++) 
//         leftRotatebyOne(array, count); 
//         return array;
//   }

//   function leftRotatebyOne(array, count) 
// { 
//     let temp = array[0], i; 
//     let n = array.length - 1;
//     for (i = 0; i < n; i++) 
//     array[i] = array[i + 1]; 
//     array[i] = temp; 
// } 

// const result = solution(array,4);
// console.log(result);

// function solution(X,Y,D){
//   let count = 0;
//   while(X < Y){
//     count++;
//     X += D;
//   }return count;
// }

// let result = solution(10,85,30);
// console.log(result);

// const array = [12,15,14,16];
// function solution(array){
//   let sortedArray = array.sort();
//   let len = sortedArray.length;
//   for(let i = 0; i < len; i++){
//     if(sortedArray[i+1] !== sortedArray[i] + 1){
//       return sortedArray[i]+1;
//     }
//   }
// }

// console.log(solution(array));

// let A = [3,1,2,4,3];
// let p = [7,5,1,7];

// function solution(A){
// let leftSum = A[0];
// let rightSum;
// let p=[];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// for(let i = 1; i < A.length; i++){
//    rightSum = A.slice(i).reduce(reducer);
//    p.push(Math.abs(leftSum - rightSum));
//    leftSum += A[i];
// }
// p = p.sort();
// return p[0];

// }
// let A= [0,1,-1,-2];
// const result = solution(A);
// console.log(result);

// function solution(A) {
//   // write your code in JavaScript (Node.js 8.9.4)
//   let n = A.length;
//   A = A.sort();
//   console.log(A);
//   for(let i = 0; i <= n; i++){
//       if(A[i] !== A[i+1] && A[i]+1 === A[i+1] )
//               return 1;
//       return 0;
//   }
// }

// function solution(A) {
//   // write your code in JavaScript (Node.js 8.9.4)
//   let leftSum = A[0];
// let rightSum;
// let p=[];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// if(A.length === 1){ return A[0];}
// if(A.length === 2){return Math.abs(A[0]-A[1])}

// for(let i = 1; i < A.length; i++){
//  rightSum = A.slice(i).reduce(reducer);
//  p.push(Math.abs(leftSum - rightSum));
//  leftSum += A[i];
// }
// p = p.sort();
// return p[0];
// }

// let A= [0,1,-1,-2];
//  const result = solution(A);
//  console.log(result);


// const array1 = [-1,3,8,2,9,4];
// const array2 = [4,1,2,10,5,20];
// const target = 24;

// function findMatchers(array1,array2,target){
//   var matchers = new Set(array2);
//   var result = new Set();
//  // var target = new Set([target, target-1, target-2]);
//   for(var elem of array1){
//   if(matchers.has(target-elem)){
//   result.add(elem);
//   result.add(target-elem);
//   }
//   } result.forEach(findme);
// }

// function findme(val)

// function findMatchers(array1,array2,target){
//   let len = array1.length;
//   let targetRange = [target-1,target,target+1];
//   let result = [];
//   console.log(targetRange);
//   for(let i=0; i<=len;i++){
//     for(let j = 0; j <len; j++){
//       if(targetRange.includes(array1[i] + array2[j])) {
//         result.push(array1[i], array2[j])
        
//       }
//     }
//   }return result;
// }

// console.log(findMatchers(array1,array2,target));



// function solution(array) {
//   let triplets = [];
//   array.sort((a,b)=>(a-b));
//   for (let i = 0; i < array.length-2; i++) {
//     triplets.push(array[i]*array[i+1]*array[i+2]);
//     console.log(triplets);
//   } return Math.max(...triplets);
// }
// let array = [0,3,3,3,4,5,67,6,6,6,3,3,3];

// console.log(solution(array));

// function solution(array) {
//   array.sort((a,b)=>(a-b));
//   let count = array.length;
//   while(array.length >= 1){
// let set = new Set(array);
// for(var elem of set)
// array.splice(elem,1);
// console.log(array);
// count--;
// } return array;
// }

// function solution(A) {
//   var start = 0;

//   var currentSum = A[0] + A[1];
//   var minAvgSlice = currentSum / 2;
//   for (var i=2; i<A.length; i++) {
//      currentSum += A[i];
//      var newAvg = currentSum / 3;
//      if (newAvg < minAvgSlice) {
//         minAvgSlice = newAvg;
//         start = i-2;
//      }

//      currentSum -= A[i-2];
//      newAvg = currentSum / 2;
//      if (newAvg < minAvgSlice) {
//         minAvgSlice = newAvg;
//         start = i-1;
//      }
//   }

//   return start;
// }
// console.log(solution(A));

// A = "A586QK";
// B = "JJ653K";

// function solution(A, B) {
//   let acount = 0,
//     bCount = 0;
//   let aValue = 0;
//   let bValue = 0;
//   for (let i = 0; i <= A.length; i++) {
//     let aCardVal = A.charAt(i);
//     let bCardVal = B.charAt(i);
//     aValue = getACardCount(aCardVal);
//     bValue = getBCardCount(bCardVal);
    
//     if (aValue > bValue) {
//       acount++;
//     } else {
//       bCount++;
//     }
//   }

//   if (acount > bCount) {
//     return acount;
//   } else {
//     return bCount;
//   }
// }


// const text = ["code", "code", "ecod", "framer"];

// function funWithAnagrams(text) {
//   const anagrams = [];
//   for (var i = 0; i < text.length; i++) {
//     const sortedWord = alphabetize(text[i]);
//     console.log(sortedWord);
//     anagrams.push(sortedWord);
//   }
//   console.log(anagrams);
//   var mySet = new Set(anagrams);
//   console.log([...mySet]);
//   return mySet;
// }

// function alphabetize(word) {
//   if (!word) {
//     return;
//   }

//   word = word.split("");
//   word = word.sort();
//   word = word.join("");
//   return word;
// }

// console.log(funWithAnagrams(text));




// function getACardCount(aCardVal) {
//   const cardRank = {
//     2: "2",
//     3: "3",
//     4: "4",
//     5: "5",
//     6: "6",
//     7: "7",
//     8: "8",
//     9: "9",
//     10: "T",
//     11: "J",
//     12: "Q",
//     13: "K",
//     14: "A"
//   };

//   let Alec;

//   for (const rank in cardRank) {
//     if (cardRank[rank] == aCardVal) 
//       Alec = parseInt(rank);
//   }
//   return Alec;
// }
// function getBCardCount(bCardVal) {
//   const cardRank = {
//     2: "2",
//     3: "3",
//     4: "4",
//     5: "5",
//     6: "6",
//     7: "7",
//     8: "8",
//     9: "9",
//     10: "T",
//     11: "J",
//     12: "Q",
//     13: "K",
//     14: "A"
//   };
//   let Bob;

//   for (const rank in cardRank) {
//     if (cardRank[rank] == bCardVal)
//       Bob = parseInt(rank);
//   }
//   return Bob;
// }


// className={"btn-group pull-right " + (this.props.showBulkActions ? 'show' : 'hidden')}


// console.log(solution(A,B));

//ar=[1,2,1,2,1,3,2];
//ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
// ar = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];
// n=9;

// function sockMerchant(n, ar) {
//   let pairs = 0;
//   ar.sort((a, b) => a - b);
//   for (let i = 0; i < ar.length; i++) {
//     if (ar[i] === ar[i + 1]) {
//       pairs++;
//       i+=1;
//     }
//   }
//   return pairs;
// }

// console.log(sockMerchant(n,ar))

// function sockMerchant(n, arr) {
// var sorted_arr = arr.slice().sort(); 
// var results = [];
// for (var i = 0; i < sorted_arr.length - 1; i++) {
//     if (sorted_arr[i + 1] == sorted_arr[i]) {
//         results.push(sorted_arr[i]);
//     }
// }return results;
// }

// s = "UDDDUDUU";

// function countingValleys(n, s) {
// let lvl=0;
// let valley = 0;

// for(let i = 0; i <=s.length; i++){
 
//   if(s.charAt(i)=='U'){
   
//     lvl+=1;
//   }else{
    
//     lvl-=1;
//   } 
//   if(lvl === 0 && s.charAt(i)==='U'){
//   valley++;
//   }
// } return valley;
// }

// console.log(countingValleys(8,s));

//c=[0 ,0, 1, 0, 0, 1, 0];
// c=[0 ,0, 0, 0, 1, 0];
// //result = 0,1,3,4,6
// result = [0, 1, 2, 3, 5];
// even = [0,2];
// odd=[1,3,5]

// function jumpingOnClouds(c) {

// let currentPosition = 0;
// let lastCloud = c.length-1;
// let jumps = 0;

// while(currentPosition < lastCloud ){
//   if(currentPosition + 1 == lastCloud){
//     currentPosition++;
//   } else if(c[currentPosition + 2] == 0){
//     currentPosition = currentPosition+2;
//   } else {
//     currentPosition++;
//   }
//   jumps++;
// }
// return jumps;
// }
// console.log(jumpingOnClouds(c));

// s='aba';
// n = 10;
// function repeatedString(s, n) {
//   let as = s.split('').filter(i => i === "a").length;
//   as = (parseInt(n / s.length, 0) * as) + (s.slice(0, (n % s.length)).split('').filter(i => i === "a").length);
//   return as; 
// }
// console.log(repeatedString(s,n));

// function main() {
//   var arr = [], count = -63;
//    for(arr_i = 0; arr_i < 6; arr_i++){
//       arr[arr_i] = readLine().split(' ');
//       arr[arr_i] = arr[arr_i].map(Number);
//    }
//   for( i = 0 ; i < 4 ; i ++)
//        {
//        for( j = 0 ; j < 4 ; j ++)
//            {
//            var t;
//            t = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
//            if( t > count )           
//                {
//                count = t ;
//            }
//        }
//    }
//    console.log(count);
// }

// a=[1,2,3,4,5];
// d=4;
// res = [5, 1, 2, 3, 4];
 

// function rotLeft(a, d) {
//   // write your code in JavaScript (Node.js 8.9.4)
// let array = a;
// let count = d;
//    let i; 
//    if(array.length === count){
//        return array;
//    }else {
//   for (i = 0; i < count; i++) 
//       leftRotatebyOne(array, count); 
//       return array;
//    }
// }


// function leftRotatebyOne(array, count) 
// { 
//   let temp = array[0], i; 
//   let n = array.length - 1;
//   for (i = 0; i < n; i++) 
//   array[i] = array[i + 1]; 
//   array[i] = temp; 
// } 

// console.log(rotLeft(a,d));

// function findMinimumInList(array) {  
// var currmin;  
// var length = array.count;  
// for(var i = 1; i < length; i++) {  
// if (array[i] < currmin) {  
// currmin = array[i];  
// }  
// }  
// return currmin;  
// }  

// function minimumSwaps(arr) {
//   var count = 0;
//   var numArray = arr.slice();
//   numArray.sort(function (a, b) {
//     return a - b;
//   });
//   do {
//     for (var i = 0; i <= arr.length; i++) {
//       if (arr[i] > arr[i + 1]) {
//         var sum = arr[i] + arr[i + 1];
//         arr[i] = sum - arr[i];
//         arr[i + 1] = sum - arr[i + 1];
//         count++;
//       }
//     }
//   } while (JSON.stringify(arr) != JSON.stringify(numArray));
//   console.log(count);
//   return count;
// }

 
// minimumSwaps([4,3,1,2]);

// function arrayManipulation(n, queries) {
// var newArray = new Array(n+2).fill(0);
// for(var i =0; i<queries.length; i++){
//     var a = queries[i][0];
//     var b = queries[i][1];
//     var k = queries[i][2];
//     newArray[a] += k;
//     newArray[b+1] -= k;
// }
// var result = getMax(newArray.slice(1,n));
// return result;
// }

// function getMax(arr){
// for(var i = 1; i < arr.length-1; i++){
//     arr[i+1] += arr[i];
// }
// return Math.max(...arr);
// }
// arrayManipulation(5,[[1,2,100],[2,5,100],[3,4,100]] );

// function checkMagazine(magazine, note) {
//     const magazineArray = magazine.split(" ");
//     const noteArray = note.split(" ");
   
//     const magazineObj = {};
   
//     magazineArray.forEach((item) => {
//       if(!magazineObj[item]) magazineObj[item] = 0;
//       magazineObj[item]++;
//     });
   
//    var isPossible = true;

//    noteArray.forEach((item) => {
//      if (magazineObj[item]) {
//        magazineObj[item]--;
//        if (magazineObj[item] <= 0) 
//          isPossible = false;
//      }
//      else {
//        isPossible = false;
//      }
//    })
//    console.log(isPossible);
//  }
//  checkMagazine("two times three is not four four Four","two times two is four");
 
// Complete the twoStrings function below.
// function stringConstruction(s) {
//     var sArray = s.split('');
//   var mySet = new Set(sArray);
//     console.log(mySet.size());
    
//   }
  
//   stringConstruction("abab");
  
// function plusMinus(arr) {
//     var length = arr.length;
//      var minus = [];
//      var plus = [];
//       var zero = [];
//      console.log(length);
//     arr.map((item) => {
//       if(item<0){
//         minus.push(item);
//       }
//       else if(item > 0){
//         plus.push(item);
//       }else{
//         zero.push(item);
//       }
//     })
//     }
    
//     plusMinus([-4, 3, -9, 0, 4, 1]);

 


function stringAnagram(dictionary, query) {
  // Write your code here
itemArr = [];
var count = 0;
query.forEach((item,index)=>{
  itemArr.push(item.split(''));
  //console.log(index)
  console.log(itemArr[index])
  //console.log(item)
  var count  = splitString(itemArr[index]);
  shuffleArray.forEach(item => {
    if(dictionary.includes(item)) {
    }
  })
  
});
}

function splitString(a){
  var len = a.length;
  //console.log(len);
var shuffleArray = [];
   for(var i = len - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;  
     shuffleArray.push(a.join(""));
  }
  console.log( shuffleArray);
}



stringAnagram(["heater", "cold", "clod", "reheat", "docl"], ["codl", "heater", "abcd"]);