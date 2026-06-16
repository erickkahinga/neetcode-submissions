class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stack = new Array();
        let sum = 0;

        for (let i = 0; i < operations.length; i++) {
            if (Number.isInteger(Number(operations[i]))) {
                stack.push(Number(operations[i]));
                sum += Number(operations[i]);
            } else if (operations[i] == "+") {
                sum += stack[stack.length - 2] + stack[stack.length - 1];
                stack.push(stack[stack.length - 2] + stack[stack.length - 1]);
            } else if (operations[i] == "C") {
                let top = stack.pop();
                sum -= top
            } else if (operations[i] == "D") {
                sum += (2 * stack[stack.length - 1]);
                stack.push(2 * stack[stack.length - 1]);
            }
        }
        return sum
    }
}
