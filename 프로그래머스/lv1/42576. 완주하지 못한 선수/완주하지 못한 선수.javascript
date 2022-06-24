function solution(participant, completion) {
  participant.sort()
  completion.sort()
  //문자는 오름차순으로 정리
  
  for(let i=0;i<completion.length; i++) {
  
  if(participant[i] != completion[i])
      return participant[i]
  }

  return participant[participant.length - 1]
}