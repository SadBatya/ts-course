// class Figure {
//   size: number = 10;
//   color: string = "red";
//   private id: number;

//   constructor() {
//     this.id = Math.random();
//   }

//   protected getId(): number {
//     return this.id;
//   }
// }

// class Box extends Figure {
//   getInfo() {
//     return {
//       size: this.size,
//       color: this.color,
//       id: this.getId(),
//     };
//   }
// }

// const box = new Box();

// console.log(box.getInfo());

// class Human {
//   date: Date;

//   constructor(date: Date) {
//     this.date = date ?? new Date();
//   }

//   isProgrammer(): boolean {
//     return false;
//   }
// }

// class User extends Human {
//   _name: string;
//   _hobbies: string[] = [];

//   constructor(name: string, date: Date) {
//     super(date);
//     this._name = name;
//   }

//   get hobbies(): string[] {
//     return this.hobbies;
//   }

//   addHobbies(hobby: string): void {
//     this.hobbies.push(hobby);
//   }

//   set name(name: string) {
//     this._name = name;
//   }

//   override isProgrammer(): boolean {
//     super.isProgrammer();
//     return true;
//   }
// }

// const user = new User("Vladimir", new Date());

// user.name;
// user.addHobbies("a");
// user.name = "Vladimir";
// user.date;
// console.log(user.hobbies);
// console.log(user.name);

// interface LifeCycle {
//   onInit(): void;

//   onDestroy(abort: boolean): void;
// }

// class Component implements LifeCycle, ComponentOnChange {
//   hasChanged: boolean = false;

//   onChange(data: number): boolean {
//     if (data > 1) {
//       return true;
//     }
//     return false;
//   }

//   onInit(): void {
//     console.log("Component on init");
//   }

//   onDestroy(abort: boolean): void {
//     if (abort) {
//       console.log("Component on destroy");
//     }
//   }
// }

// interface ComponentOnChange {
//   hasChanged: boolean;
//   onChange(data: number): boolean;
// }

// abstract class Logger {
//   abstract log(message: string): void;
// }

// class MessageLogger extends Logger {
//   log(message: string): void {
//     console.log(message);
//   }

//   table(data: object){
//     console.table(data)
//   }
// }

// const logger = new MessageLogger();

// logger.log("Hello");

// const array: Array<string> = ["1", "2", "3"];

// const array2: Array<number> = [1, 2, 3, 4, 5];

// const promise = new Promise<string>((resolve) => {
//   setTimeout(() => {
//     resolve("asdadasdasd");
//   });
// });

// function fill<T>(arr: any, value: T): T[] {
//   return arr.fill(value);
// }

// const res3 = fill(["a", "a", "a", "a", "a", "a"], 1);

// function double<T>(array: T[]): T[] {
//   return array.concat(array);
// }

// const res1 = double(["a", "b", "c", "d"]);
// res1.map((item) => item.concat);
// const res2 = double([1, 2, 3]);

// function merge<T, R>(a: T, b: R): T & R {
//   return Object.assign({}, a, b);
// }

// const res5 = merge({ a: 1 }, { b: 2, c: { d: 3 } });

// function log<T extends string | number>(data: T): T {
//   console.log(data);
//   return data;
// }

// let res1 = <string>log("i am string");
// let res2 = log(42) as number;

// const obj = { a: 1, b: 2, c: "3" };
// const obj2 = { a: 12, b: 212, c: "3", test: 100 };

// function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
//   return obj[key];
// }

// const res1 = getObjectValue(obj, "a");
// const res2 = getObjectValue(obj2, "test");

// class Collection<T extends number | string> {
//   constructor(private _items: T[]) {}

//   add(value: T) {
//     this._items.push(value);
//   }

//   get items(): T[] {
//     return this._items;
//   }
// }

// const col1 = new Collection([1, 2, 3]);
// const col2 = new Collection(["a", "b"]);

// col1.items.map((item) => item.toFixed());
// col2.items.map((item) => item.indexOf("2"));

// class List<R> extends Collection<string> {
//   constructor(public type: R) {
//     super(["a"]);
//   }
// }

// const list1 = new List("qwerty");
// const list2 = new List(100);

// interface User {
//   name: string;
//   age: number;
// }

// type UserKey = keyof User;

// const str1: string = "hello";

// type MyString = typeof str1;

// const user: User = { age: 29, name: "Vladimir" };

// type UserKey2 = keyof typeof user

// const key2: UserKey2 = 'name'

// interface User {
//   id?: number;
//   name: string;
//   age: number;
// }

// function createAndValidate(name: string, age: number): User {
//   const newUser: Partial<User> = {};

//   if (name.length !== 0) {
//     newUser.name = name;
//   }

//   if (age > 18) {
//     newUser.age = age;
//   }

//   return newUser as User;
// }

// const user: Readonly<User> = { age: 18, name: "Elena" };

// type RequiredUser = Required<User>;

// const user2: RequiredUser = {
//   id: 1,
//   age: 20,
//   name: "Igor",
// };

// interface User {
//   name: string;
//   age: number;
//   hobbies: string[];
// }

// type UserData = Omit<User, "hobbies">;
// type UserData2 = Pick<User, "hobbies" | "age">;

// type UserStringFields = Extract<"age" | "some" | User, keyof User>;
// type User2 = Exclude<"a" | "b" | User, User>;

// function log(data: string, num: number): boolean {
//   console.log(data, num);
//   return false;
// }

// type LogReturn = ReturnType<typeof log>;
// type LogParams = Parameters<typeof log>;

// class User {
//   constructor(public name: string, public age?: number) {}
// }

// type UserParams = ConstructorParameters<typeof User>;

// class User {
//   isProgrammer?: boolean;

//   constructor(public name: string) {}

//   sayMyName() {
//     console.log(this.name);
//   }
// }

// function makeProgrammer(user: User) {
//   user.isProgrammer = true;
//   return user;
// }

// const user = makeProgrammer(new User("Vladimir"));

// console.log(user.isProgrammer);

// user.sayMyName();

// function ClassDecorator(target: Function) {
//   console.log("Classs Decorator", target);
// }

// @ClassDecorator
// class User {
//   constructor(public name: string) {
//     console.log("Constructor");
//   }
// }

// const user = new User('Vladimir');


