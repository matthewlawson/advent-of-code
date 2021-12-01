import fs from "fs";
import path from "path";

const inputLocation = path.resolve("./src/2020/02/input.txt");
const inputFile = fs.readFileSync(inputLocation, { encoding: "utf8" });

const inputArray = inputFile.toString().split("\n");
let validPasswordCount = 0;
 // -1 as input has trailing whitespce.
for(let i = 0; i < inputArray.length - 1; i++) {
    const [policy, password] = inputArray[i].split(": ");
    const [count, letter] = policy.split(" ");
    const [indexOne, indexTwo] = count.split("-");
    // password.charAt(indexOne)
    // Exactly one - not either...

    if((password[Number(indexOne) - 1] == letter ? 1 : 0)  ^ (password[Number(indexTwo) - 1] == letter ? 1 : 0)) {
        validPasswordCount ++;
        // console.log(inputArray[i], password, indexOne, indexTwo, letter)
        // break;
    }


}
console.log(validPasswordCount);
