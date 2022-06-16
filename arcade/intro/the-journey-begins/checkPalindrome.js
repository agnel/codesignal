function solution(inputString) {
    /**
     * Using while loop with single pointer
     */
    let startIdx = 0
    let strLen = inputString.length;
    let endIdx = strLen / 2

    while(startIdx < endIdx) {
        if(inputString[startIdx] != inputString[strLen - 1 - startIdx]) return false;
        startIdx++;
    }
    
    return true;
}
