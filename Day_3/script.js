// 1. **Print Right-Angled Star Triangle**

//    * Input: `Rows = 5`
//    * Output:

//      ```
//      *
//      **
//      ***
//      ****
//      *****
//      ```
//    * ✨ *Teaches nested loops and increasing sequence printing.*


// for(let i=1;i<=20;i++){
//     let star="";
//     for(let j=1;j<i;j++){
//         star+="*"
//     }
//     console.log(star)
// }



// 2. **Print Inverted Right-Angled Triangle**

//    * Input: `Rows = 5`
//    * Output:

//      ```
//      *****
//      ****
//      ***
//      **
//      *
//      ```
//    * ✨ *Reinforces decreasing nested loop structure.*

// for(let i=20;i>=1;i--){
//     let star=" ";
//     for(let j=i;j>=1;j--){
//         star+="*"
//     }
//     console.log(star)
// }




// 3. **Print Pyramid Pattern**

//    * Input: `Rows = 5`
//    * Output:

//      ```
//          *
//         ***
//        *****
//       *******
//      *********
//      ```
//    * ✨ *Teaches alignment using spaces and nested loops.*



// let row=7;
// for(let i=1;i<=row*2-1;i+=2){
//     let star=""
// let space=((i+1)/2)
//     for(let j=1;j<=i;j++){

//         if(j <= row - space){
//           star +=" ";
//         }
//         else {
//            star+="*"
//         }
//     }
//     console.log(star)
// }


//  let row=8;
//  for(let i=1;i<=row;i++){
//     let str=" "
//     for(let space=i;space<row;space++){
//         str+="|"
//     }
//     for(let j=1;j<=i*2-1;j++){
//         str+="&";
//     }
//       for(let space=i;space<row;space++){
//         str+="|"
//     }
//     console.log(str)
//  }








// 4. **Print Inverted Pyramid Pattern**

//    * Input: `Rows = 5`
//    * Output:

//      ```
//      *********
//       *******
//        *****
//         ***
//          *
//      ```
//    * ✨ *Teaches reverse space-star pattern alignment.*



// let row=8;
//  for(let i=row;i>1;i--){
//     let str=" "
//     for(let space=i;space<row;space++){
//         str+=" "
//     }
//     for(let j=1;j<=i*2-1;j++){
//         str+="&";
//     }
//     console.log(str)
//  }





// 5. **Print Hollow Square Pattern**

//    * Input: `Rows = 5`
//    * Output:

//      ```
//      *****
//      *   *
//      *   *
//      *   *
//      *****
//      ```
//    * ✨ *Practices conditional printing within nested loops.*


// let row=5;

// for(let i=1;i<=row;i++){
//     let str=" "
//     for(let j=1;j<=row;j++){
//         if(i===1||i===row||j===1||j===row){
//              str+="*"
//         }
//         else{
//             str+=" "
//         }
//     }
//     console.log(str)
    
// }





// 6. **Print Hollow Pyramid Pattern**

//    * Input: `Rows = 5`
//    * Output:

//      ```
//          *
//         * *
//        *   *
//       *     *
//      *********
//      ```
//    * ✨ *Combines conditionals and symmetrical logic in loops.*


//solution 1--

//  let row=8;
//  for(let i=1;i<=row;i++){
//     let str=" "
//     for(let space=i;space<row;space++){
//         str+=" "
//     }
//     for(let j=1;j<=i*2-1;j++){
//         if(j===1||j==i*2-1||i===row)
//         {
//               str+="*";
//         }
//         else{
//             str+=" "
//         }
//     }
//     console.log(str)
//  }

/////solution 2--


// const row = 5

// for(let i = 1; i <= 2*row - 1; i+=2) {
//     let str = ''
//     const currentRow = (i + 1) / 2

//     for(let j = 1; j <= row + currentRow - 1; j++) {
//         if(j <= row - currentRow) {
//             str += ' '
//         } else {
//             if(currentRow===row||j===row - currentRow + 1||j===row + currentRow - 1){
//                  str += '*'
//             }
//            else{
//              str += ' '
//            }
//         }
//     }

//     console.log(str);
// }






// 7. **Print Alternating Binary Triangle**

//    * Input: `Rows = 5`
//    * Output:

//      ```
//      1
//      0 1
//      1 0 1
//      0 1 0 1
//      1 0 1 0 1
//      ```
//    * ✨ *Combines parity logic with nested loops.*


// let row=7;
// for(let i=1;i<=row;i++){
//     let star=" "
//     for(let j=1;j<=i;j++){
//        star=star+j%2
//     }
//     console.log(star)
// }


















/////////////////////////////////////////////### 🏠 **Homework / Practice Challenge**


//         &|||||||
//        &&&||||||
//       &&&&&|||||
//      &&&&&&&||||
//     &&&&&&&&&|||
//    &&&&&&&&&&&||
//   &&&&&&&&&&&&&|
//  &&&&&&&&&&&&&&&

//  let row=8;
//  for(let i=1;i<=row;i++){
//     let str=" "
//     for(let space=i;space<row;space++){
//         str+=" "
//     }
//     for(let j=1;j<=i*2-1;j++){
//         str+="&";
//     }
//       for(let space=i;space<row;space++){
//         str+="|"
//     }
//     console.log(str)
//  }



// 1. **Print Hollow Inverted Pyramid**

//    * Input: `Rows = 5`
//    * Output:

//      ```
//      *********
//       *     *
//        *   *
//         * *
//          *
//      ```
//    * ✨ *Focuses on conditionally printing edges and spaces.*
// ---
//  let row=8;
//  for(let i=row;i>=1;i--){
//     let str=" "
//     for(let space=i;space<row;space++){
//         str+=" "
//     }
//     for(let j=1;j<=i*2-1;j++){
//         if(j===1||j==i*2-1||i===row)
//         {
//               str+="*";
//         }
//         else{
//             str+=" "
//         }
//     }
//     console.log(str)
//  }







// 4. **Print Hourglass Pattern**

//    * Input: `Rows = 5`
//    * Output:

//      ```
//      *********
//       *******
//        *****
//         ***
//          *
//         ***
//        *****
//       *******
//      *********
//      ```
//    * ✨ *Practices combining inverse loops and symmetrical shapes.*

 

//  let row=8;
//  for(let i=row;i>=1;i--){
//     let str=" "
//     for(let space=i;space<row;space++){
//         str+=" "
//     }
//     for(let j=1;j<=i*2-1;j++){
//         str+="*";
//     }
//       for(let space=i;space<row;space++){
//         str+=" "
//     }
//     console.log(str)
//  }
//  for(let i=1;i<=row;i++){
//     let str=" "
//     for(let space=i;space<row;space++){
//         str+=" "
//     }
//     for(let j=1;j<=i*2-1;j++){
//         str+="*";
//     }
//       for(let space=i;space<row;space++){
//         str+=" "
//     }
//     console.log(str)
//  }
 




// 2. **Print Butterfly Pattern**

//    * Input: `Rows = 5`
//    * Output:

//      ```
//      *       *
//      **     **
//      ***   ***
//      **** ****
//      *********
//      **** ****
//      ***   ***
//      **     **
//      *       *
//      ```
//    * ✨ *Combines multiple sections with symmetry logic.*


 
// let row = 5;
// for (let i = 1; i <= row; i++) {
//     let str = "";

//     for (let j = 1; j <= i; j++) {
//         str += "*";
//     }

//     for (let j = 1; j <= 2 * (row - i); j++) {
//         str += " ";
//     }

//     for (let j = 1; j <= i; j++) {
//         str += "*";
//     }

//     console.log(str);
// }

// for (let i =row-1; i >1; i--) {
//     let str = "";

//     for (let j = 1; j <= i; j++) {
//         str += "*";
//     }

//     for (let j = 1; j <= 2 * (row - i); j++) {
//         str += " ";
//     }

//     for (let j = 1; j <= i; j++) {
//         str += "*";
//     }

//     console.log(str);
// }



// 3. **Print Diamond Pattern**

//    * Input: `Rows = 3`
//    * Output:

//      ```
//          *
//         ***
//        *****
// //      ***
// //       *
// //      ```
// //    * ✨ *Combines upper and lower pyramid logic for symmetry.*

//  let row=5;
//  for(let i=1;i<=row;i++){
//     let str=" "
//     for(let space=i;space<row;space++){
//         str+=" "
//     }
//     for(let j=1;j<=i*2-1;j++){
//         str+="&";
//     }
//     console.log(str)
//  }
//  for(let i=row-1;i>=1;i--){
//     let str=" "
//     for(let space=i;space<row;space++){
//         str+=" "
//     }
//     for(let j=1;j<=i*2-1;j++){
//         str+="&";
//     }
//     console.log(str)
//  }




// 5. **Print Hollow Diamond Pattern**

//    * Input: `Rows = 3`
//    * Output:

//      ```
//          *
//         * *
//        *   *
//         * *
//          *
//      ```
//    * ✨ *Teaches combining upward and downward hollow pyramids.*

// ---
//  let row=8;
//   for(let i=1;i<=row-1;i++){
//     let str=" "
//     for(let space=i;space<row;space++){
//         str+=" "
//     }
//     for(let j=1;j<=i*2-1;j++){
//         if(j===1||j==i*2-1||i===row)
//         {
//               str+="*";
//         }
//         else{
//             str+=" "
//         }
//     }
//     console.log(str)
//  }

//  for(let i=row-1;i>=1;i--){
//     let str=" "
//     for(let space=i;space<row;space++){
//         str+=" "
//     }
//     for(let j=1;j<=i*2-1;j++){
//         if(j===1||j==i*2-1||i===row)
//         {
//               str+="*";
//         }
//         else{
//             str+=" "
//         }
//     }
//     console.log(str)
//  }



// 6. **Print Rhombus Pattern**

//    * Input: `Rows = 5`
//    * Output:

//      ```
//          *****
//         *****
//        *****
//       *****
//      *****
//      ```
//    * ✨ *Practices offset alignment for uniform patterns.*

//    ---


// let row=8;

//   for(let i=1;i<=row-1;i++){
//     let str=" "
//     for(let space=i;space<row;space++){
//         str+=" "
//     }
//     for(let j=1;j<=row;j++){
//         str+="*"
//     }
//     console.log(str)
// }






// 7. **Print Multiplication Table (Single and Upto N)**

//    * Input 1: `Number = 5`
//    * Output:

//      ```
//      5 x 1 = 5
//      5 x 2 = 10
//      ...
//      5 x 10 = 50
//      ```
//    * Input 2: `Upto = 3`
//    * Output:

//      ```
//      Table of 1
//      1 x 1 = 1
//      ...
//      Table of 3
//      3 x 10 = 30
//      ```
//    * ✨ *Practices simple and nested loops for repetitive operations.*

// let num=18;
// for(let i=1;i<=10;i++){
//     console.log(num*i)
// }