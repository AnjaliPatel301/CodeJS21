//1.Print Numbers from 1 to N

// let n=10;
// for(let i=1;i<=n;i++){
//     console.log(i)
// }


//2.Print Numbers from N to 1 without changing the loop condition of above question

// let n=20;
// for(let i=n;i>=1;i--){
//     console.log(i)
// }

//3.Print All Even Numbers from 1 to N

// let n=40;
  
// for(let i=0;i<=n;i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }

//4.Sum of First N Natural Numbers

//solustion 1
//   let n=6;

//   let sum=0;
//    for(let i=1;i<=n;i++){
//     sum+=i;
//    }
//    console.log(sum)

//solution 2
//  let n=6;
//   let sum=n*(n+1)/2
//   console.log(sum)

//5.Product (Factorial) of N

// let n=8;
// let fact=1;
// for(let i=1;i<=n;i++){
//     fact*=i;
// }
// console.log(fact)


//6.Sum of All Even Numbers up to N

// let n=4;
//   let sum=0;
// for(let i=0;i<=n;i++){
//     if(i%2==0){
//         sum+=i;
//     }
    
// }
// console.log(sum)


//7.Print Squares of Numbers from 1 to N
//solution 1
// let n=6;
// for(let i=1;i<=n;i++){
//     console.log(Math.pow(i,2))
// }


//solution 2
// let n=3;
// for(let i=1;i<=n;i++){
//     console.log(i*i)
// }





//🏠 Homework / Practice Challenge

//1.Print all numbers divisible by 3 and 5 up to N

// let n=60;
// for(let i=1;i<=n;i++){
//     if(i%3==0 && i%5==0){
//         console.log(i)
//     }
// }


//2.Find the sum of all odd numbers up to N


// let n=15;
//  for(let i=1;i<=n;i++){
//     if(i%2!=0){
//         console.log(i)
//     }
//  }

//3.Print the cubes of numbers from 1 to N
//solution 1

// let n=6;
// for(let i=1;i<=n;i++){
//     console.log(Math.pow(i,3))
// }

//solution 2

//  let n=6;
//  for(let i=1;i<=n;i++){
//     console.log(i**3)
//  }

//solustion 3
// let n=6;
// for(let i=1;i<=n;i++){
//     console.log( (i * (i + 1) / 2) ** 2)
// }

//  ((n * (n + 1)) / 2) ** 2



//4.Print only the numbers that are both even and perfect squares

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    const sqrt = Math.sqrt(i);
    if (Number.isInteger(sqrt)) {
      console.log(i);
    }
  }
}
