// Basic Types
let id: number = 5;
let company: string = "Geha Sounds";
let isPublished: boolean = true;
let x: any = "Hello";

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, "true", null];

// Tuple
let person: [number, string, boolean] = [1, "Chibu", true];

// Tuple Array
let employee: [number, string][];

employee = [
  [1, "Mikey"],
  [2, "Ichigo"],
  [3, "Ken"],
];

// Union
let pid: string | number = 22;

pid = "22";

// Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  RIght,
}

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  RIght = "RIght",
}

// Objects
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "John",
};

// Type Assertion
let cid: any = 1;
// let customerId = <number>cid
let customerId = cid as number;

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}

// Void
function log(message: string | number): void {
  console.log(message);
}

// Interfaces
interface UserInterface {
  id: number;
  name: string;
  age?: number;
}

const user1: UserInterface = {
  id: 2,
  name: "mikey",
};

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const subtract: MathFunc = (x: number, y: number): number => x - y;

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

// Classes
class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}

const mikey = new Person(3, "mikey");
mikey.id = 2;

// Subclasses
class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, "Ken", "Fighter");

// console.log(emp.register());

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4, 5]);
let strArray = getArray<string>(["1", "2", "3", "4", "5"]);
