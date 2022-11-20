function solution(food) {
    let answer = '';
     let firstPlayerFood = '';
    let SecondPlayerFood = '';
    
    for (let i = 0; i < food.length; i++) {
        const repeatNum = parseInt(food[i]/2).toString()
        
        firstPlayerFood = firstPlayerFood.concat(i.toString().repeat(repeatNum))
        SecondPlayerFood = firstPlayerFood.split('').reverse().join('');
    }
    answer = firstPlayerFood.concat('0',SecondPlayerFood);
    return answer;
}