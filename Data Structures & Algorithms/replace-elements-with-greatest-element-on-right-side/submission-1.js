class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let maxVal = -1;
        let tempArr = [];

        for (let i = 0; i < arr.length; i++) {
            tempArr[i] = arr[i]
        }

        if (arr.length == 1) {
            return [-1];
        }

        for (let i = (arr.length - 2); i >= 0; i--) {
            if (tempArr[i+1] > maxVal) {
                maxVal = tempArr[i+1]
            }
            arr[i] = maxVal;
        }

        arr[arr.length - 1] = -1;
        return arr;
    }
}
