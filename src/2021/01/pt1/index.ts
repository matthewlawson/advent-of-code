import fs from "fs";
import path from "path";

const inputLocation = path.resolve("./src/2021/01/input.txt");
const inputFile = fs.readFileSync(inputLocation, { encoding: "utf8" });

const inputArray = inputFile.toString().trim().split("\n");
let incrementCount = 0;
// Extra whitespace at end of array.
for(let i = 1; i < inputArray.length; i++) {

    if(Number(inputArray[i]) > Number(inputArray[i-1])) {
        // increase ??
        incrementCount++;
    }
}

console.log(incrementCount);
