class Solution:

    def encode(self, strs: List[str]) -> str:
        if len(strs) < 1:
            return ""

        for i in range(len(strs)):
            encodeArr = [0] * (len(strs[i]) + 2)
            encodeArr[0] = str(len(strs[i]))
            encodeArr[1] = "#"

            for j in range(2, len(encodeArr)):
                encodeArr[j] = strs[i][j - 2]
            
            strs[i] = "".join(encodeArr)
        
        return "".join(strs)


    def decode(self, s: str) -> List[str]:
        i = 0
        decode = []

        while i < len(s):
            j = i
            while s[j] != "#":
                j += 1
            length = int(s[i:j])
            decode.append(s[(j + 1) : (j + 1) + length])
            i = (j + 1) + length
            
        return decode
