function solution(cards1, cards2, goal) {
    
    for(const it of goal) {
        if(cards1[0] === it) {
            cards1.shift();
        } else if(cards2[0] === it) {
            cards2.shift();
        } else {
            return 'No';
        }
    }
    
    return 'Yes';
}