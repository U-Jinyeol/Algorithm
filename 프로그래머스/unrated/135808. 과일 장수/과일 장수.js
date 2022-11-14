function solution(k, m, score) {
        let result = [];
    let sortList = score.sort((a,b) => b-a)
  
    for (let i = 0; i < sortList.length; i += m) {
    let sliceList = sortList.slice(i, i + m);
    if(sliceList.length >= m) {
        let min = Math.min(...sliceList)
        result.push(min);
    }
  }
    
    const arrSum = result.reduce((sum, currValue) => {
        return sum + currValue;
    }, 0);
    
    return arrSum * m
}
