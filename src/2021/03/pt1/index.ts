import fs from "fs";
import path from "path";

const inputLocation = path.resolve("./src/2021/03/input.txt");
const inputFile = fs.readFileSync(inputLocation, { encoding: "utf8" });
// const inputFile = `
// 00100
// 11110
// 10110
// 10111
// 10101
// 01111
// 00111
// 11100
// 10000
// 11001
// 00010
// 01010`
const inputArray = inputFile.toString().trim().split("\n");
let outSums:number[] = [];
for(let i = 0; i < inputArray.length; i++) {
    for(let j = 0; j < inputArray[i].length; j++) {
        if(!outSums[j]) {
            outSums[j] = 0;
        }
        outSums[j] = outSums[j] + Number(inputArray[i][j]) ;
    }
}

// For each element in outputSums if < length / 2 is 1 then it is a 0;
let gamma = ``;
let epsilon = ``;
for(let i = 0; i < outSums.length; i++) {
    if(outSums[i] < inputArray.length / 2) {
        gamma += `0`;
        epsilon += `1`
    } else {
        gamma += `1`;
        epsilon += `0`
    }
}

// let epsilon = ~parseInt(gamma, 2);
// bitwise NOT to get the epsilon
// console.log(parseInt(gamma, 2), parseInt(epsilon, 2));

console.log(parseInt(gamma, 2) * parseInt(epsilon, 2));
