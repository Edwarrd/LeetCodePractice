import {pickSuite} from "./utils/picksuite";

function run(){
    const picker = new pickSuite();
    for (let i = 0; i < process.argv.length; i++){
        if (process.argv[i] == "-suite"){
            picker.pick(process.argv[i+1])
        }
    }
    console.log(`running picked suite ${picker.pick(process.argv[0])}`)
}


run();