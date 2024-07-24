/**
 * https://leetcode.com/problems/two-sum/description/
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

 */

function twoSum1(nums: number[], target: number): void {
    let result;
    
    for (let i = 0; i < nums.length-1; i++){
        // if (nums[i] > target){
        //     continue;
        // }

        let expect = target-nums[i];
        for (let j = i + 1; j < nums.length; j++){
        //    if (nums[j] > expect){
        //     continue;
        //    }
           if (nums[j] == expect){
                result = [i, j];
                console.log(`out put is [${result}]`)
            }
        }
    }
};

function twoSum(nums: number[], target: number): number[] {
    let numberMap = new Map();

    for (let i = 0; i < nums.length; i++){
        let difference = target - nums[i];

        if (numberMap.has(difference)){
            return [numberMap.get(difference), i];
        }
        else{
            numberMap.set(nums[i], i);
        }
    }

    return [];
}

let nums = [3,3];
let target = 6;
let result = twoSum(nums, target);
console.log(`result is: [${result}]`)