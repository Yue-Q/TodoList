let a1: string;
a1 = "5";

let a: any;
a = 8;
a = "hello";

//Basic types
let num: number;
let string: string;
let bl: boolean;
let u: undefined;
let n: null;

let b;

let Arr:number[] = [1,2,3];
let Arr1:Array<number> = [1,2,3];

let strArr: string[] = ["a","b","c"];

function foo(name: string, age?: number){
    return{
        name: name,
        age: age??-1
    }
}

console.log(foo("Esther"));