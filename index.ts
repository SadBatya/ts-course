// type MainInfo = {
//   firstName: string;
// };

// type UserInfo = {
//   age: number;
// };

// type NewType = MainInfo | UserInfo;

// const user: NewType = {
//   firstName: "Vladimir",
// };

// const value: number = 5;

// function logData(data: unknown) {
//   let value: string;
//   if (typeof data === "string") {
//     value = data;
//   }
// }
// enum Values {
//   FIRST,
//   SECOND,
//   THIRD,
// }

// function fn(value: Values) {
//   switch (value) {
//     case Values.FIRST:
//       return 1;
//     case Values.SECOND:
//       return 2;
//     default:
//       const exhaustiveCheck: never = value;
//       return value;
//   }
// }

// fn(Values.FIRST);
// fn(Values.SECOND);

// interface Address {
//   city: string;
//   street: string;
//   coords: number[];
// }

// type User2 = {
//   firstName: string;
//   age: number;
//   address: Address;
// };

// const user: User2 = {
//   firstName: "Vladimir",
//   address: {
//     city: "asdasd",
//     street: "adsada",
//     coords: [1233, 123123],
//   },
//   age: 25,
// };

// type ApiResponse<T> = {
//   data?: T;
// };

// type Color = "red" | "green" | "blue";
// const color: Color = "red";

// function paint(color: Color) {}

// const values = {
//   color: "green",
// } as const;

// paint(values.color);

// interface User {
//   readonly id: string;
// }

// type EventName = "click" | "change";

// type EventHandler = `on${EventName}`;

// type UserId = `user_id_${bigint}`;

// interface MetaData {}

// interface User {
//   username: string;
// }

// interface Article {
//   title: string;
// }

// interface APiResponse<T> {
//   status?: "error" | "status";
//   meta?: MetaData;
//   requestId?: string;
//   data: T;
// }

// const responseFromUserApi: APiResponse<User> = {
//   data: {
//     username: "Vladimir",
//   },
// };

// const responseFromArticleApi: APiResponse<Article> = {
//   data: {
//     title: "123",
//   },
// };

// interface Tree<T> {
//   id: string;
//   value: T;
//   children: Tree<T>[] | null;
// }

// const treeNode: Tree<User> = {
//   id: "10",
//   value: {
//     username: "123",
//   },
//   children: [
//     {
//       id: "11",
//       value: {
//         username: "123",
//       },
//       children: null,
//     },
//   ],
// };

// const arrowGeneric = <T extends { id: string, createdAt: Date }>(arg: T): T => {
//   return arg;
// };

// const data = arrowGeneric<User>({ username: "123" });

// type isArray<T> = T extends any[] ? true : false;

// const first: isArray<string> = false;
// const second: isArray<string[]> = true;

// type RandomName<T> = T extends string ? { value: string } : { value: T };

// const third: RadomName<string>;

// function fn(arg: number | string | null) {
//   if (typeof arg === "number") {
//     return arg.toString();
//   } else if (typeof arg === "string") {
//     return arg.charAt(1);
//   }
  
//   return arg;
// }




