import fs from "fs";
import path from "path";

const inputLocation = path.resolve("./src/2021/01/input.txt");
const inputFile = fs.readFileSync(inputLocation, { encoding: "utf8" });


const inputArray = inputFile.toString().trim().split("\n");
let windowSums: Number[] = [];
let incrementCount = 0;

for (let i = 0; i < inputArray.length; i++) {
    if (windowSums[i] == undefined) {
        windowSums[i] = 0;
    }
    const currentNumber = Number(inputArray[i]);
    windowSums[i] = Number(windowSums[i]) + currentNumber
    if (i >= 1) {
        windowSums[i - 1] = Number(windowSums[i - 1]) + currentNumber
    }
    if (i >= 2) {
        windowSums[i - 2] = Number(windowSums[i - 2]) + currentNumber
    }
}

// From pt1 - count increments.
for (let i = 1; i < windowSums.length; i++) {

    if (Number(windowSums[i]) > Number(windowSums[i - 1])) {
        // increase ??
        incrementCount++;
    }
}

console.log(incrementCount);
