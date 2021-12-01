import fs from "fs";
import path from "path";

const inputLocation = path.resolve("./src/2020/01/input.txt");
const inputFile = fs.readFileSync(inputLocation, { encoding: "utf8" });

const inputArray = inputFile.toString().split("\n");

const inputMap: Map<number, number> = new Map();

for (let i = 0; i < inputArray.length; i++) {
    const value = Number(inputArray[i]);
    if (inputMap.has(value)) {
        const currentValue = inputMap.get(value)!;
        inputMap.set(value, currentValue + 1);
    }
    else {
        inputMap.set(value, 1);
    }
}

const target = 2020;

for (let i = 0; i < inputArray.length; i++) {
    for (let j = 0; j < inputArray.length; j++) {
        if (i == j) {
            continue;
        }
        const value1 = Number(inputArray[i]);
        const value2 = Number(inputArray[j]);
        const valueSum = value1 + value2;
        const remainder = target - valueSum;
        if(answerExists(remainder, valueSum)) {
            console.log(value1 * value2 * remainder);
            break;
        }

    }
}

function answerExists(target: number, value: number):boolean {
    if(inputMap.has(target)) {
        // Special case where remainder and target is the same there must be >= 2 occurances in the input.
        if(target === value) {
            if(inputMap.get(target)! >= 2) {
                // console.log(value * target);
                return true;
            }
        }
        else {
            // console.log(value * target);
            return true;
        }
    }
    return false
}
