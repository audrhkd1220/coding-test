/*
문제
N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.

입력
첫째 줄에 정수의 개수 N (1 ≤ N ≤ 1,000,000)이 주어진다. 둘째 줄에는 N개의 정수를 공백으로 구분해서 주어진다. 모든 정수는 -1,000,000보다 크거나 같고, 1,000,000보다 작거나 같은 정수이다.

출력
첫째 줄에 주어진 정수 N개의 최솟값과 최댓값을 공백으로 구분해 출력한다.

예제 입력 1 
5
20 10 35 30 7

예제 출력 1 
7 35
*/


// 방법 1
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);

/*
문제의 모든 정수는 -1,000,000 보다 크거나 같고,
1,000,000보다 작거나 같은 정수이기 때문에 임의로 가장 큰수와 가장작은수로 초기화한다.
*/
let minValue = 1000001;
let maxValue = -1000001;

for(let i = 0; i < n; i++) {
    if(minValue > arr[i]) {
        minValue = arr[i];
    }
    if(maxValue < arr[i]) {
        maxValue = arr[i];
    }
}

console.log(minValue, maxValue);

// 방법 2 (reduce사용)
let fs2 = require('fs');
let input2 = fs.readFileSync('/dev/stdin').toString().split('\n');

let n2 = Number(input[0]);
let data = input[1].split(' ').map(x => Number(x));

let minValue2 = data.reduce((a, b) => Math.min(a, b));
let maxValue2 = data.reduce((a, b) => Math.max(a, b));

console.log(minValue + " " + maxValue);


