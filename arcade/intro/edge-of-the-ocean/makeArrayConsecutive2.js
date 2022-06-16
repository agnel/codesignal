function solution(statues) {
    let noReq = 0; // number of statues required
    
    statues = statues.sort()
    
    let startIdx = 0;
    let noOfStatues = statues.length;
    let endIdx = noOfStatues - 1;
    
    while(startIdx < endIdx) {
        let diff = statues[startIdx + 1] - statues[startIdx];
        if(diff > 1) noReq += (diff - 1);
        startIdx++;
    }
    
    return noReq;
}
