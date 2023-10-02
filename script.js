function twoNums(nums, target) {
  const numIndices = {};

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const nextNum = target - currentNum;

    if (numIndices.hasOwnProperty(nextNum)) {
      return [numIndices[nextNum], i];
    }

    numIndices[currentNum] = i;
  }
  return [];
}
const nums = [2, 7, 11, 15, 17];
const target = 9;
const result = twoNums(nums, target);
console.log(result);
