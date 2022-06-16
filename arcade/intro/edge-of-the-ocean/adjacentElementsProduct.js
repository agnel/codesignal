function solution(inputArray) {
    let maxProduct = -Infinity;
    
    let startIdx = 0;
    let endIdx = inputArray.length - 1;
    
    while(startIdx < endIdx) {
        maxProduct = Math.max(maxProduct, inputArray[startIdx] * inputArray[startIdx + 1])
        startIdx++;
    }
    
    return maxProduct;
}
