type Age = number | string;

function admitAge (age: Age): string {
  return `I am ${age}, alright?!`;
}



let myAge: Age = 50;
let yourAge: Age = 'One Hundred';
//if you uncomment this line it will show a compile time error because the type Age is not of boolean type.
//let isAge: Age = false;
console.log("1. Type as Union ")
console.log(admitAge(yourAge)); // 'I am One Hundred, alright?!'
console.log(admitAge(myAge));
console.log("--------------------")


console.log("2. String Literal Types ")
type PartyZone = "pizza hut" | "waterpark" | "bowling alley" | "abandoned warehouse";
type PartyZone1 = "pizza hut" & "waterpark";
function goToParty (place: PartyZone): string {
  return `lets go to the ${place}`;
}

//If you uncomment the below line it will show a compile time error because "chuck e. cheese" does not belong to PartyZone
//console.log(goToParty("chuck e. cheese"));

console.log(goToParty("pizza hut")); // 'I am One Hundred, alright?!'
console.log("--------------------")



console.log("3. Intersection types")
//Example one of intersection Types
interface IStudent {
  id: string;
  age: number;
}

interface IWorker {
  companyId: string;
}

type A = IStudent & IWorker;

let x: A;

x.age = 5;  // it works
x.companyId = 'CID5241';// it works
x.id = 'ID3241';// it works



//Example Two of intersection Types
interface X {
  c: string;
  d: string;
}

interface Y {
  c: number;
  e: string
}

type XY = X & Y;
type YX = Y & X;

let p: XY;
let q: XY;

//Below will not work because the type of property c in both the interface X and Y are differen and it is not able the combine as one.
//p.c = 4; // Error: Type '4' is not assignable to type 'string & number'
//q.c = 3; // Error: Type '3' is not assignable to type 'string & number'

//p.c = 'text'; // Error: Type 'text' is not assignable to type 'string & number'
//q.c = 'text'; // Error: Type 'text' is not assignable to type 'string & number'


