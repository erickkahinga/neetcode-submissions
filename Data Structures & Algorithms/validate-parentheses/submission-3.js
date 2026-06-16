class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let openStack = [];

        for (let char of s) {
            if (char == "(" || char == "{" || char == "[") {
                openStack.push(char)
            } else {
                let top = openStack.pop();
                if (!top) {
                    return false
                }
                if (top == "(" && char != ")" || top == "{" && char != "}" || top == "[" && char != "]") {
                    return false
                }
            }
        }

        if (openStack.length != 0) {
            return false
        }

        return true
    }
}
