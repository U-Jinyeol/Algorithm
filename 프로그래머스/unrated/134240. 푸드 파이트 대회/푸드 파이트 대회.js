//처음 풀이
function solution(food) {
    let answer = '';
    let firstPlayerFood = '';
    let SecondPlayerFood = '';
    
    for (let i = 0; i < food.length; i++) {
        const repeatNum = parseInt(food[i]/2).toString()
        
        firstPlayerFood += i.toString().repeat(repeatNum)
        SecondPlayerFood = firstPlayerFood.split('').reverse().join('');
    }
    answer = firstPlayerFood.concat('0',SecondPlayerFood);
    return answer;
}


//개선 코드
function solution(food) {
    let answer = '';
    let firstPlayerFood = '';
    let SecondPlayerFood = '';
    
    for (let i = 0; i < food.length; i++) {
        const repeatNum = parseInt(food[i]/2)
        firstPlayerFood += i.toString().repeat(repeatNum)
    }
    SecondPlayerFood = [...firstPlayerFood].reverse().join('');
                                                           
    return firstPlayerFood + '0' + SecondPlayerFood;
}
