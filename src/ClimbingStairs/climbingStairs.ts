/**
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 * 
 * Example:
 * Input: n = 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 * 
 * Example:
 * Input: n = 3 -> 1 .. 1 2 ** 1 + 2 * 1 - 1
 * Output: 3
 * Explanation: There are three ways to climb to the top.
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 */


//resursion
//the time limit exceed
function climbingStairs(num: number): number{
    let result = (num <= 3) ? (num) : (climbingStairs(num-1) + climbingStairs(num-2))
    return result
}

//using Fabonacci 
//     1 2 3 4 5 6
// 0 1 1 2 3 5 8 13
function climStairs(num: number): number{
    let first = 1;
    let second = 2;
    let thrid = 3;
    if (num <= 3){
        return num
    }
    else{
        for(let i = 4; i<=num; i++){
            first = second;
            second = thrid;
            thrid = first + second;
        }
        return thrid
    }
}

// function fabonacci(num: number): number{
//     if (num >)
// }

let number = 45;
// let output = climbingStairs(number);
let output = climStairs(number)
console.log(output)