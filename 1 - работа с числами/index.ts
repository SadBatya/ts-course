function isBoolean(val: string | boolean): val is boolean {
  return typeof val === "boolean";
}

function isString(val: string | boolean): val is string {
  return typeof val === "string";
}
function logFlag(flag: string | boolean) {
  if (isBoolean(flag)) {
    console.log("Hey this is boolean");
  } else if (isString(flag)) {
    console.log("Hey this is string");
  }
}

console.log(logFlag(true));
console.log(logFlag("asdsad"));
console.log("asdasdasdasdasdasdasdsadasd");
console.log("asdasdasdasdasdasdasdsadasd");
console.log("asdasdasdasdasdasdasdsadasd");
console.log("asdasdasdasdasdasdasdsadasd");
console.log("asdasdasdaadasd");

const number: bigint = BigInt(100);
