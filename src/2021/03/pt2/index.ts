
import fs from "fs";
import path from "path";

const inputLocation = path.resolve("./src/2021/03/input.txt");
const inputFile = fs.readFileSync(inputLocation, { encoding: "utf8" });

const inputArray = inputFile.toString().trim().split("\n");
// let outSums:number[] = [];
let oxygenGenerator = 0;
let oxygenGeneratorResults = inputArray;
let searchSpace = oxygenGeneratorResults[0].length;
while(oxygenGeneratorResults.length >= 1){
    // outSums = [];
    for(let i = 0; i < searchSpace; i++){
        let sum = 0;

        for(let j = 0; j < oxygenGeneratorResults.length; j++){
            sum +=  Number(oxygenGeneratorResults[j][i]) ;
        }

        const dominantBit = sum >= oxygenGeneratorResults.length / 2 ? `1` : `0`;

        oxygenGeneratorResults = oxygenGeneratorResults.filter(row => {
            return row[i] === dominantBit
        })
        if(oxygenGeneratorResults.length === 1){
            break;
        }
    }
    break;
}
oxygenGenerator = parseInt(oxygenGeneratorResults[0], 2);


// Copy and paste because laziness.
let co2Scrubber = 0;
let co2ScrubberResults = inputArray;
while(co2ScrubberResults.length >= 1){
    // outSums = [];
    for(let i = 0; i < searchSpace; i++){
        let sum = 0;
        // outSums[i] = 0;

        for(let j = 0; j < co2ScrubberResults.length; j++){
            sum +=  Number(co2ScrubberResults[j][i]) ;
        }
        // Only difference from finding the oxygenerator value.
        const dominantBit = sum >= co2ScrubberResults.length / 2 ? `0` : `1`;

        co2ScrubberResults = co2ScrubberResults.filter(row => {
            return row[i] === dominantBit
        })
        if(co2ScrubberResults.length === 1){
            break;
        }
    }
    break;
}

co2Scrubber = parseInt(co2ScrubberResults[0], 2);

console.log(co2Scrubber * oxygenGenerator);
