/**
 * @description arrayEqual 判断两个数组是否相等  
 * @param {Array} arr1 数组1 
 * @param {Array} arr2 数组2
 * @returns{Boolean}
 */
export const arrayEqual = (arr1,arr2) => {
    if(arr1 === arr2) return true;
    if(arr11.length !=arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if(arr1[i] !== arr2[i]) return false;
        
    }

    return true;
}