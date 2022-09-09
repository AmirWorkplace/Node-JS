console.log("");
/*
const mathCircleBn = function (value, individual) {
  console.log("");
  const ques = `একটি বর্গের বাহু ${value} সে.মি. । বর্গ ও বর্গের অন্তর্লিখিত বৃত্তের মদ্ধ্যের ফাকা অংশের ক্ষেত্রফল নিরর্ণয় কর?`;
  console.log(ques);

  const theSquereArea = value ** 2;
  const squereBash = value / 2;
  const pie = Math.PI;

  const sqCirArea = (pie * squereBash ** 2).toFixed(3);
  const sqCirAreaResults = `বর্গের অন্তর্লিখিত বৃত্তের ক্ষেত্রফল: ${sqCirArea} squere ${individual} !`;
  console.log(sqCirAreaResults);

  const emptyAreas = (theSquereArea - sqCirArea).toFixed(3);
  const emptyAreasResult = `নির্ণেয় ফাঁকা অংশের ক্ষেত্রফল: ${emptyAreas} squere ${individual} !`;
  console.log(emptyAreasResult);
  console.log("");

};

const mathCircle = function (value, unit) {
  console.log("");
  const ques = `Once a Box's squere ${value} cm. Do you want to try to calculate the value between the quere of empty parts?`;
  console.log(ques);

  const theSquereArea = value ** 2;
  const squereBash = value / 2;
  const pie = Math.PI;

  const sqCirArea = (pie * squereBash ** 2).toFixed(3);
  const sqCirAreaResults = `Now The total Area of the squire's in circle: ${sqCirArea} squere ${unit} !`;
  console.log(sqCirAreaResults);

  const emptyAreas = (theSquereArea - sqCirArea).toFixed(3);
  const emptyAreasResult = `The total empty part Area's are: ${emptyAreas} squere ${unit} !`;
  console.log(emptyAreasResult);
  console.log("");
};

// mathCircle(82, "cm");
// mathCircle(100, "cm");
// mathCircle(49, "cm");
// let x = mathCircle(82, "cm");
const ceP = document.createElement("p");
document.body.appendChild(ceP);
// ceP.bare = "done " + mathCircle(100, "cm");
// ceP.insertAdjacentHTML("beforeend", mathCircleBn(100, "m"));
// ceP.innerHTML = mathCircleBn(100, "m");
// console.log(x);

*/
/*
function clacAvg(arr) {
  let sum = 0;
  for (var i = 0; i <= arr.length - 1; i++) {
    sum += arr[i] / arr.length;
  }
  return sum;
}

let arrays = [13, 25, 44, 48, 49, 51, 41];
console.log(`Result : ${clacAvg(arrays).toFixed(3)}`);
console.log(clacAvg([10, 10, 10, 10, 10]));
*/

/* 
* বাংলা ভার্সন (Bangla Verssion)
function trinagleCir(area, unit) {
  const Ques =
    "সমবাহু ত্রিভূজের অন্তর্লিখিত একটি বৃত্তের ক্ষেত্রফল ৬১৬ বর্গমিটার হলে, ত্রিভূজটির ক্ষেত্রফল কত?";
  console.log(Ques);

  let pie = Math.PI;
  let a, r;
  let theroy1 = `ধরি, সমবাহু ত্রিভুজের ক্ষেত্রফল = ${a} ${unit} !`;
  let theroy2 = `বৃত্তের ব্যাসার্ধ = ${r} ${unit} !`;
  let theroy3 = "প্রশ্নমতে, ";

  let circleArea = pie * r ** 2;
  let equilateralTriangleArea = (Math.sqrt(3) / 4) * a ** 2;
  r = Math.sqrt((area * 7) / 22);
  let mainCircleAreas = (r / 2) * (3 * a);
  a = (4 * (r / 2) * 3) / Math.sqrt(3);
  let Result = (Math.sqrt(3) / 4) * a ** 2;
  let ans = parseFloat(Result).toFixed(3);

  const Answer = `নির্নেয় সমবাহু ত্রিভুজটির ক্ষেত্রফল: ${ans} ${unit}!`;

  return Answer;
}

console.log(trinagleCir(616, "squireMeter"));
 */

/* -----------------------------------------> Math ----------------------------------------> */
/*
 * English Verssion (ইংরেজি ভার্ষন)
 */
/*
// Math : 02
function trinagleCir(area, unit) {
  // সমবাহু ত্রিভূজের অন্তর্লিখিত একটি বৃত্তের ক্ষেত্রফল ৬১৬ বর্গমিটার হলে, ত্রিভূজটির  ক্ষেত্রফল কত?
  const Ques =
    "#_The Question : If the area of a circle inscribed in an equilateral triangle is 616 square-Meters, \n What is the area of the equilateral triangle?";
  console.log(Ques);

  let pie = Math.PI;
  let a, r;
  let theroy1 = `Suppose, \n Of an Equilateral Triangle Area's are = ${a} ${unit} !`;
  let theroy2 = `Radiuos of The Circle are = ${r} ${unit} !`;
  let theroy3 = "Acording to thr Question, ";

  let circleArea = pie * r ** 2;
  let equilateralTriangleArea = (Math.sqrt(3) / 4) * a ** 2;
  r = Math.sqrt((area * 7) / 22);
  let mainCircleAreas = (r / 2) * (3 * a);
  a = (4 * (r / 2) * 3) / Math.sqrt(3);
  let Result = (Math.sqrt(3) / 4) * a ** 2;
  let ans = parseFloat(Result).toFixed(3);

  const Answer = `Determine the area of equilateral Trinagle's are : ${ans} ${unit}!`;

  return Answer;
}

console.log(trinagleCir(616, "squireMeter"));
console.log("");

// Math : 03!
// const element = document.querySelectorAll(".root element-1");
function mathRing(outside, inside, unit) {
  // The Ques. : একটি রিং এর ভিতরের এবং বাইরের ব্যাসার্ধ যথাক্রমে ${outside} সে.মি. & ${inside} সে.মি.। রিং এর ক্ষেত্রফল কত?
  const ques = `#_The Question : The inner and outer radil of a ring are ${outside} ${unit} & ${inside} ${unit} . \n What's The Ring Area?`;
  console.log(ques);

  const theory1 = `Suppose, \n The outer radious of a Ring is, R = ${outside} ${unit} !`;
  const theory2 = `The inner radious of a Ring is, r = ${inside} ${unit} !`;

  let r = inside;
  let R = outside;
  let pie = Math.PI;
  const theRingArea = (pie * R ** 2 - pie * r ** 2).toFixed(3);
  let Result = `Determine the area of Ring's are : ${theRingArea} squere ${unit}! `;
  console.log(Result);
  return Result;
}
mathRing(35, 25, "cm");
console.log("");
mathRing(28, 21, "cm");
console.log("");
*/
/*
function areaOfTheQuadrilateral(theSumOfTwoOffsets, lengthOfHypotenuse, unit) {
  // একটি চতুর্ভুজের অফসেটদ্বয়ের যোগফল ২০ সে.মি. এবং এর একটি করর্ণের দোৈর্ঘ ৮ সে.মি, হলে এর ক্ষেত্রফল কত?

  // Ofsett's Sum
  let P1, P2, P1P2;
  P1P2 = P1 + P2;
  P1P2 = theSumOfTwoOffsets;
  // Hypotenuse Length
  let d = lengthOfHypotenuse;

  // The Area of Perallerogram
  const Result = (1 / 2) * d * P1P2;
  const Answer = `Determine The Area of Perallerogram : ${Result} squere${unit} !`;
  return Answer;
}

console.log(areaOfTheQuadrilateral(20, 8, "Meter"));
console.log(areaOfTheQuadrilateral(110, 30, "Meter"));
*/
/*
function nextPerallelHypotenuse(
  firstArmLength,
  secondArmLength,
  oneHypotenuse,
  unit
) {
  // একটি সামান্তরিকের সন্নিহিতদ্বয় যথাক্রমে ১০ মি. এবং ১২ মি. এর একটি কর্ণ ৮ মি. হলে, অপর করর্ণের দোৈর্ঘ কত?
  var AB, BC, AC, AO, OC, BO, BD;
  AB = firstArmLength;
  BC = secondArmLength;
  AC = oneHypotenuse;
  AO = AC / 2;
  OC = AC / 2;

  // এখন অ্যাপোলিনিয়াসের সূত্রানুসারে পাই,
  let part1 = AB ** 2 + BC ** 2;
  let part2 = AO ** 2 * 2;
  // let part3 = BO ** 2 * 2;
  let part4 = (part1 - part2) / 2;
  BO = Math.sqrt(part4);
  // console.log(BO);
  // অপর কর্ন
  BD = (BO * 2).toFixed(2);

  const Result = `Determinte the Others Hypotonuse are : ${BD} ${unit} !`;
  return Result;
}

console.log(nextPerallelHypotenuse(10, 12, 8, "Meter"));
*/
/*
function squireArea(arm1, arm2, arm3, arm4, angle, unit) {
  // একটি চতুরর্ভূজের বশুগুলোর দোৈর্ঘ যথাক্রমে ১২,১২,৮,১০ মিটার । প্রথম দুই বাহুর মধ্যবর্তী কোণ ৬০ডিগ্রি হলে, চতুরর্ভুজের ক্ষেত্রফল কত?
  let angelABC = 60;
  // lengths
  let a = 12,
    b = 10,
    c = 8;

  // ABC প্রথম ত্রিভুজের ক্ষেত্রফল
  const triangleABCarea = (Math.sqrt(3) / 4) * a ** 2;
  // সমদ্বিবাহু ত্রিভূহের পরিসিমা = s
  const s = (a + b + c) / 2;
  // ACD বা বিপরীত ত্রিভুজের ক্ষেত্রফল
  const triangleACDarea = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  // মেইন চতুর্ভূজের ক্ষেত্রফল
  const squereABCD = (triangleABCarea + triangleACDarea).toFixed(2);
  // The angle হুদাই
  let ang =  ;
  const perpendicular = (ang * c).toFixed(3);
  console.log(perpendicular);
  const Result = `Determine the total Area's of the Squere are : ${parseInt} squere${unit} !`;
  return Result;
}
console.log(squireArea(12, 12, 8, 10, 60, "Meter"));
*/

// MAth : => Chapter 05 MainQues 01
/*
let cm = "সে.মি.";
function boxPurutto(lengths, width, height, Areas, unit) {
  // * const ques = `ঢাকনা সহ একটি বক্সের বর্হিভাগের দোৈর্ঘ, প্রস্থ, এবং উচ্চতার অনুপাত যথাক্রমে  ${lengths} ${unit} ,  ${width} ${unit} এবং  ${height} ${unit} । বাক্সটির ভিতরের সমগ্র পৃষ্ঠতলের ক্ষেত্রফল   ${Areas} বর্গ ${unit} হলে, বাক্সটির কাঠের পুরুতব কত?`;

  var a,
    b,
    c,
    x = 1;
  a = lengths - 2 * x;
  b = width - 2 * x;
  c = height - 2 * x;

  // The Claue of Box's Areas;
  const z = 2 * (a * b + b * c + a * c);
  const purtto = (Areas / z).toFixed(2);
  const Answer = `Determine the Main Purutto of the Woodden Box's are : ${purtto} ${unit} !`;
  return Answer;
}

console.log(boxPurutto(10, 9, 7, 262, "cm"));
console.log(boxPurutto(12, 10, 8, 376 * 6 - 1000, "cm"));

*/

var num = "1525392388999953152539238899995",
  i,
  j,
  arr = [],
  c;
// numLength = num.toPrecision().length,

for (i = 0; i < num.length; i++) {
  arr.push(+num[i]);
}
// console.log(arr);

var sum = 0;
for (j = 0; j < arr.length; j++) {
  sum += arr[j];
}
console.log(
  `The Elemnt of 'num' which every single number addition is : ${sum} !`
);

var sumStr = sum.toString();
// console.log(sumStr);
// var sumLength = sum.toPrecision().length;
// for (var m = 0; m < sumStr.length; m++) {
if (sumStr.length > 0) {
  var arr2 = [],
    sum2 = 0;
  for (var q = 0; q < sumStr.length; q++) {
    arr2.push(+sumStr[q]);
  }
  for (var l = 0; l < arr2.length; l++) {
    sum2 += arr2[l];
  }
  console.log(
    `The Elemnt of 'num' which every single number addition is : ${sum2} !`
  );

  var sum2Str = sum2.toString();
  if (sum2Str.length > 0) {
    var arr3 = [],
      sum3 = 0;
    for (var k = 0; k < sum2Str.length; k++) {
      arr3.push(+sum2Str[k]);
    }
    for (var n = 0; n < arr3.length; n++) {
      sum3 += arr3[n];
    }
    console.log(
      `The Elemnt of 'num' which every single number addition is : ${sum3} !`
    );
  }
} else {
  console.log(
    `The Elemnt of 'num' which every single number addition is : ${sum} !`
  );
}
// }
/*
/ * 
let arr2 = [];
arr2.push(num);
console.log(arr2);
console.log(num.length); */

var inpValue =
  "126152545423698721324615253923889999531525392388999955135321241465";
var inpValueLength = inpValue.length;
var li,
  lj,
  lm,
  arra = [],
  arra1 = [],
  sums = 0,
  sums1 = 0;

for (li = 0; li < inpValueLength; li++) {
  arra.push(+inpValue[li]);
  sums += arra[li];

  var str1 = sums.toString();
  /* for (lj = 0; lj < inpValueLength[li].length; lj++) {
    arra1.push(+str1[lj]);
    sums1 += str1[lj];
  }*/
  while (str1.length > 1) {
    // for (lj = 0; lj < str1.length; lj++) {
    arra1.push(+str1);
    sums1 += str1;
    // }
  }
}
/*
for (lj = 0; lj < arra.length; lj++) {
  arra1.push(+arra[lj]);
}
for (lm = 0; lm < arra1.length; lm++) {
  sums1 += arra1[lm];
}
console.log(sums, sums1);
console.log(arra, arra1);*/
console.log(sums, sums1);
console.log("");
