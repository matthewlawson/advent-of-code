import fs from "fs";
import path from "path";

const inputLocation = path.resolve("./src/2021/02/input.txt");
const inputFile = fs.readFileSync(inputLocation, { encoding: "utf8" });

const inputArray = inputFile.toString().trim().split("\n");

let horizontal = 0;
let depth = 0;

for(let i = 0; i < inputArray.length; i++) {
    const [cmd, value] = inputArray[i].split(" ");

    if(cmd == "forward") {
        horizontal += Number(value);
    }
    else if(cmd == "down") {
        depth += Number(value);
    }
    else if(cmd == "up") {
        depth -= Number(value);
    }
}

console.log(depth * horizontal);
