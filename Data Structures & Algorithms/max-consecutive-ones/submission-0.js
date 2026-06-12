class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let maxOnes = 0;
        let currentStreak = 0;

        for(let i = 0; i < nums.length; i++) {
            if (nums[i] == 0) {
                currentStreak = 0;
            } else {
                currentStreak = currentStreak + 1;
            }

            if (currentStreak > maxOnes) {
                maxOnes = currentStreak;
            }
        }

        return maxOnes
    }
}
