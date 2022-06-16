function solution(inputString) {
    
    /**
     * Using while loop with two pointers
     */
    let startIdx = 0
    let endIdx = inputString.length - 1

    while(startIdx <= endIdx) {
        if(inputString[startIdx] != inputString[endIdx]) return false;
        startIdx++;
        endIdx--;
    }
    
    return true;
}
