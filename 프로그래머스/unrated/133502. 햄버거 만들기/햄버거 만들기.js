function solution(ingredient) {
  let answer = 0;
  const arr = [];

  for (let i = 0; i < ingredient.length; i++) {

    arr.push(ingredient[i]);
    const len = arr.length

    if (len >= 4) {
      if (
        arr[len - 4] === 1 &&
        arr[len - 3] === 2 &&
        arr[len - 2] === 3 &&
        arr[len - 1] === 1
      ) {

        arr.pop();
        arr.pop();
        arr.pop();
        arr.pop();

        answer++;
      }
    }
  }

  return answer;
}