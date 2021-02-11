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

interface IPerson {
    name: string;
    age: number;
}

class Person {
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

let obj2: Person = {name:"Esther", age: 20}; //Either interface or class
let obj3: Person = new Person("Esther", 20); //Must use class

let obj: IPerson = {name:"Esther", age: 20}; //can reuse IPerson type
let obj1: { name: string; age: number} = {name:"Esther", age: 20};

//Function
function addFn(x: number, y: number): number {
    return x+y;
}

//Alternative way to declare a function
const addFn1: (x: number,y: number) => number = (x,y) => {
    return x+y;
};

//Or...
const addFn3: typeof addFn = (x,y) => x+y;

//alias type
type MyAddFn = (x: number, y: number) => number;
const addFn4: MyAddFn = (x,y) => x+y;

//type unit operator
let numOrStr: string | number;

//class | OOP: inheritance, abstruction, encapsulation, polymprphism
class Animal {
    protected name: string;
    constructor(name: string){
        this.name=name;
    }

    run(): string{
        return `${this.name} is running`;
    }
}

class Cat extends Animal {
    type: string;
    constructor(name: string, type: string){
        super(name); //polymprphism
        this.type = type;
    }

    //override
    run():string {
        return `${this.type} ${super.run()}`
    }
}

let myCuteCat = new Cat('Ana', 'cuteCate');
console.log(myCuteCat.run());

let myAn = new Animal('pat');
console.log(myAn.run());
// console.log(myAn.name);

//ENUM
const enum CatType {
    SmallCat = "SmallCat",
    CuteCat = "CuteCat",
}

class Cat1 extends Animal {
    type: CatType;
    constructor(name: string, type: CatType){
        super(name); //polymprphism
        this.type = type;
    }
}

let myCuteCat2 = new Cat1('Ana1', CatType.SmallCat);