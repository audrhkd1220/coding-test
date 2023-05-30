function solution(k, m, score) {
    let result = 0;
    score = score.sort((a, b) => b - a);
    for(let i = 0; i < Math.floor(score.length / m); i++) {
        result += score[(i * m) + (m - 1)] * m;
    }
    
    return result;
}