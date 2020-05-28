'use strict';

// Complete this algo

/*
s                  e
[2,4,1,1,2,3,7,1,1,3] => 4 total jumps
 -
jump from 2 -> 4 (1 space)
jump from 4 -> 2 (3 spaces)
jump from 2 -> 7 (2 spaces)
jump from 7 -> end (4 spaces


  start = 0
  jumps = 0
  counter = 0
  len = ar.length-1;
   0 1 2 3
  [2,4,1,1,2,3,7,1,1,3]
   -
  while(start < len) {
    let max = 0;
    for(let i = s + 1; i < ar[s]; i++) {
      max = Math.max(max, ar[s]); // 4
    }
    start = ar.indexOf(max)
    jumps++
  }


  0 + 4 + 1 = 4
  [2,4,1,1,2,3,7,1,1,3]

*/
const minJumps = ar => {
    let start = 0,
        jumps = 0,
        len = ar.length - 1,
        maxIdx;
    let max = 0;

    while (start < len) {

        for (let i = start; i <= ar[start]; i++) {
            if (max < ar[i]) {
                max = ar[i];
                maxIdx = i
            }
        }
        jumps++;
        start = start + ar[maxIdx];
        if (start > len) {
            return jumps;
        }


    }

    console.log("jumps", jumps)
    return jumps;
};

module.exports = minJumps