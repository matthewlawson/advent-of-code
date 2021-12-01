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
    const [min, max] = count.split("-");
    let occurrences = 0;
    for(let j = 0; j < password.length; j++) {
        if(password[j] === letter) {
            occurrences++;
        }
    }

    if(occurrences >= Number(min) && occurrences <= Number(max)) {
        validPasswordCount++;
    }


}
console.log(validPasswordCount);
