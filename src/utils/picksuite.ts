export class pickSuite{
    filePath : string;
    suites : JSON;
    suitePath : string;

    constructor(){
        this.filePath = "testSuite.json";
        this.suites = JSON.parse(this.filePath);
        this.suitePath = "src/default.ts";
    }

    pick(name: string) {
        for (let suite in this.suites){
            let obj = JSON.parse(suite);
            if (obj.name == name){this.suitePath == obj.path}
        }
        return this.suitePath;
    }
}