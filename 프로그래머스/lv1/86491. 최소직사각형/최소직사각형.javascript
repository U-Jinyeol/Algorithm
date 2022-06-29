function solution(sizes) {
    let w = 0
    let h = 0
    for(i =0; i<sizes.length; i++){
        let [a,b] = sizes[i].sort((a,b)=> a-b)
        console.log([a,b])
        if (a > w){
            w = a
        }
        if (b > h){
            h = b
        }
    }
    return w * h
}