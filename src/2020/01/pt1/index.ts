import fs from "fs";
import path from "path";

const inputLocation = path.resolve("./src/2020/01/input.txt");
const inputFile = fs.readFileSync(inputLocation, { encoding: "utf8" });

const inputArray = inputFile.toString().split("\n");

const inputMap:Map<number, number> = new Map();

for(let i = 0; i < inputArray.length; i++) {
    const value = Number(inputArray[i]);
    if(inputMap.has(value)) {
        const currentValue = inputMap.get(value)!;
        inputMap.set(value, currentValue + 1);
    }
    else {
        inputMap.set(value, 1);
    }
}

const target = 2020;

for(let i = 0; i < inputArray.length; i++) {
    const value = Number(inputArray[i]);
    const remainder = target - value;
    if(inputMap.has(remainder)) {
        // Special case where remainder and target is the same there must be >= 2 occurances in the input.
        if(remainder === value) {
            if(inputMap.get(remainder)! >= 2) {
                console.log(value * remainder);
                break;
            }
        }
        else {
            console.log(value * remainder);
            break;
        }
    }
}
