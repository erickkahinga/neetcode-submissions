class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let rightMax = -1;
        let len = arr.length;
        let ansArr = new Array(len);

        for (let i = len - 1; i >= 0; i--) {
            ansArr[i] = rightMax;
            if (arr[i] > rightMax) {
                rightMax = arr[i];
            }
        }

        return ansArr;
    }
}
