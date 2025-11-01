//1.Find the Maximum of Three Numbers

// function MaximumOfThree(a,b,c){
//     if(a>=b && a>=c)  return a; 
//     else if(b>=c && b>=a) return b;
//     else return c;
// }
// console.log(MaximumOfThree(7,7,4))

//2.Check if a Number is Positive, Negative, or Zero

// function NumCheckPositiveNegativeZero(a){
//     if(a>=0) return ` a " positive"`
//     else if(a<0) return `b " Neagtive"`
//     else return ''

// }
// console.log(NumCheckPositiveNegativeZero(-6))

//3Calculate Electricity Bill
// Input: Units = 230

// Output: Total Bill = ₹1500

// ✨ Applies multiple ranges using chained else if and cumulative logic.

// Example Logic:

// 0–100 units → ₹5 per unit
// 101–200 units → ₹7 per unit
// 201–300 units → ₹10 per unit
// Above 300 units → ₹12 per unit


// function UnitCount(unit){
//     if(unit <= 100) return unit*5;
//     else if(unit <=200) return 100*5+(unit-100)*7
//     else if(unit <= 300) return 100*5+100*7+(unit-200)*10;
//     else return 100*5+100*7+100*10+(unit-300)*12
// }
// console.log(UnitCount(40))

// 4.Check if a Character is a Vowel or Consonant

// Input: e
// Output: Vowel
// ✨ Combines logical OR (||) operator and string comparisons.7


// function CheckVowelConsonant(vowel){
//     if(vowel==='a'||vowel==='e'||vowel==='i'||vowel==='o'||vowel==='u') return "vowel"
//     else if(/[a-z]/.test(vowel)) return 'Consonant'
//     else return 'Charachter is not a vowel and a consonant'
// }

//  console.log(CheckVowelConsonant(('U').toLowerCase()))


// 5. **Check if a Year is a Leap Year**

//    * Input: `2024`
//    * Output: `Leap Year`


// function CheckYearInLeapYear(year){
//     if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) return `${year} "Leap Year"`;
//     else return 'Year is not Leap Year'
// }
// console.log(CheckYearInLeapYear(2020))
// console.log(CheckYearInLeapYear(2021))
// console.log(CheckYearInLeapYear(2015))
// console.log(CheckYearInLeapYear(2090))
// console.log(CheckYearInLeapYear(2000))

/////Home work
//1. **Check if a Character is Uppercase, Lowercase, Digit, or Special Character**
// function CharachterCheck(char){
//     if(char>='A' && char<='Z' ) return "Uppercase Letter";
//     else if(char>='a' && char <='z') return "Lowercase Letter"
//     else if(char>=0 && char <=9) return "Digit Letter"
//     else return "Special Character"
// }

// console.log(CharachterCheck('*'))


// 2. **Check Triangle Type Using Sides and Angles**

// * **Input:** `Sides = 3, 4, 5`
// * **Output:** `Right-Angled Triangle`
// * ✨ *Combines geometric reasoning + Pythagoras theorem check.*
// * Example Logic:

//   * If `a² + b² = c²` → Right-angled
//   * Else if all sides equal → Equilateral
//   * Else if any two equal → Isosceles
//   * Else → Scalene

// function CheckTriangleType(a,b,c){
//     if(a+b<=c || b+c<=a || a+c<=b) return "not a tringle angle"
//     else if(a===b && b===c) return "Equilateral"
//     else if(a*a + b*b === c*c|| a*a + c*c === b*b || b*b + c*c === a*a) return "Right-angled"
//     else if(a===b|| b===c|| a===c) return "Isosceles";
//     else return "Scalene"
// }

// console.log(CheckTriangleType(3,5,9))


// 3. **Calculate Income Tax Based on Slabs**

// * **Input:** `Income = ₹7,50,000`
// * **Output:** `Tax = ₹62,500`
// * ✨ *Applies progressive slab logic similar to electricity bill but with financial context.*
// * Example Logic (example slabs):

//   * Up to ₹2,50,000 → No tax
//   * ₹2,50,001 – ₹5,00,000 → 5%
//   * ₹5,00,001 – ₹10,00,000 → 20%
//   * Above ₹10,00,000 → 30%
// * 🔍 *Requires cumulative calculation using nested `if–else` or multiple slab loops.*


// function CalculateIncomeTax(income){
//     if(income <= 250000) return "No tax"
//    else if(income <= 500000) return (income-250000)*0.05
//    else if(income <= 1000000) return (250000*0.05)+(income-500000)*0.20;
//    else return (250000 * 0.05) + (500000 * 0.20) + (income - 1000000) * 0.30

// }

// console.log(CalculateIncomeTax(5000000000))