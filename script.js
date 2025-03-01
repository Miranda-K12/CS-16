1. /*ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი: არგუმენტად გადაეცით ეს მასივი:
10, 50, 6, 7, 8, 11, 6, 3, 9
*/
function sum(array) {
    let sum = 0;
    for (let num of array) {
        sum += num;
    }
    return sum;
}
console.log(sum([10, 50, 6, 7, 8, 11, 6, 3, 9]));
2./*ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ: 
'giorgi saakadze') თუ isloggedin არის true და false თუ isloggedin ფროფერთი არის false; */

let user = {
  firstname: 'giorgi',
  lastname: 'saakadze',
  age: 32,
  isloggedin: true
}
/*3 შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:
(აქ მეორე ვარიანტიც შეგვიძლია დავამატოთ ამ მასალით: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max ) */
function maxNum(...array) {
    return Math.max(...array);
}
console.log(maxNum(10, 2, 16, -5, 17, 60, 42)); 
4. /*დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიიღებს ერთ რიცხვს და გამოთვლის გადაცემული მნიშვნელობა კენტია თუ ლუწი;
 თუ ლუწია დააბრუნოს - this number is even‘; თუ კენტია დააბრუნოს - this number is odd‘ */

function oddOrEven(num) {
    num % 2 == 0 ? console.log("this number is even") : console.log("this number is odd");
 }
oddOrEven(10);
oddOrEven(7);
5. /*მოცემულია მასივი:
let array = [1,2,3,4,5]; 
for ციკლის საშუალებით მიიღეთ reverse ვერისია, ანუ 5,4,3,2,1 */
let array1 = [1,2,3,4,5];
function reverse(array1){
for(num of array1) {
   let array2 = array1.reverse();
    return array2;
}
}
console.log(reverse([1, 2, 3, 4, 5]));

function reverseArray(arr) {
  let reverseArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverseArr.push(arr[i]);
  }
  return reverseArr; 
}
console.log(reverseArray([1, 2, 3, 4, 5]));
/*6 ფუნქციის საშუალებით გამოთვალეთ იუსერის ასაკი ( არგუმენტად გადაეცით ნებისმიერი რიცხვი) და დაამატეთ შემდეგი პირობა, თუ გადაცემული ასაკი მეტია 18- ზე დააბრუნეთ - სრულლოვანი, თუ ნაკელებია  დააბრუნეთ არასწულწლოვანი. 
ეს ამოცანა დაწერეთ arrow function-ით და if ის პირობა ჩაწერეთ ახალი სინტაქსით;
*/
function isAdult(age) {
    return age > 18 ? 'Adult' : 'Minor';
}

console.log(isAdult(23)); 
console.log(isAdult(12));
/*7 მოცემულია მასივი
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
ციკლის საშუალებით შეამოწმეთ, თუ ამ მასივში არის რიცხვი 5 - მაშინ დალოგეთ - ‘არის’ და გააჩერეთ ციკლი
*/
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function numBelong(array) {
    for (num of array2) {
    if (num === 5) {
        break;
    }
    return console.log('5 is in this array');
}
}
numBelong([1, 2, 3, 4, 5, 6, 7, 8, 9]);
/*მოცემულია მასივი:
let array3= [1, 2, 3, 4, 5];
ციკლის საშუალებით გამოთვალეთ რიცხვების ჯამი
*/
let array3 = [1, 2, 3, 4, 5];
let totalNum = 0;
for (n of array3) {
    totalNum += n;
}
console.log(totalNum);
/*9 მოცემულია მასივი
let array4= [1, 2, 3, 4, 5];
ციკლის საშუალებით გამოთვალეთ საშუალო არითმტიკული (ჯამიგავყოთ ელემნტების რაოდენობაზე)
*/
let array4 = [1, 2, 3, 4, 5];
let total = 0;

for (let num of array4) {
    total += num;
}
let average = total/ array4.length;
console.log(average); // Output: 3

/* 10 მოცემულია მასივი
გამოიტანეთ ყველა რიცხვი 7 ის გარდა ( continue) */
let array5 = [1, 2, 3, 7, 6, 9];
for (num of array5) {
  if (num === 7) { continue; }
    console.log(num);
}
/*11 
Მოცემული მასივიდან ამოიღეთ მხოლოდ ციფრები, რომლებიც 5-ის ჯერადია:
Let array7 = [32, 14, null, ‘40’, 50]; */
let array7 = [32, 14, null, '40', 50];
function multiple5(arr) {
    let result = [];
    for (let num of arr) {
        if (typeof num === 'string') {
            num = Number(num);
        }
        if (num !== null && typeof num === 'number' && num % 5 === 0) {
            result.push(num);
        }
    }
    return result;
}
console.log(multiple5(array7)); 
/*12 Მოცემული მასივიდან კონსოლში გამოიტანეთ მხოლოდ დადებითი რიცხვები:
let array8 = [ [2, -3, 5, 11], [1, -35, –11], [12, -36, -24] ]; */
function positiveNums(arr) {
    let result = [];
    for (let subArray of arr) {
        for (let num of subArray) {
            if (num > 0) {
                result.push(num);
            }
        }
    }
    return result;
}
console.log(positiveNums([[2, -3, 5, 11], [1, -35, -11], [12, -36, -24]]));