/**
 * There are two ways to do this
 * 1. recursion
 * 2. iteration
 */

/**
 * Solution 1: Recursion technique
 * This solution uses recursion
 * the execution time will increase 
 * with large values of n
 */
function solution(n) {
    if(n == 1) return 1;
    
    return solution(n - 1) + 4*(n - 1)
}

/**
 * Solution 2: Iteration technique
 * This solution uses while loop
 * and a dictionary i.e. object in javascript
 */
function solution(n) {
    /**
     * return 1 if n is 1
     * and avoid the loop
     */
    if(n == 1) return 1;
    
    /**
     * we store the area of each value polygon
     * beginning from 1 upto `n`
     * 
     * The general pattern developed for area when `n`
     * increments by 1 is `A_{n} = A_{n-1} + 4 * (n - 1)`
     * 
     * The base condition is `A_{1} = 1` and we begin
     * computing from `A_{2}`
     */
    let areas = {
        1: 1
    }
    
    let i = 2;
    while(i <= n) {
        areas[i] = areas[i - 1] + 4 * [i - 1];
        i++;
    }
    
    return areas[n]
}
