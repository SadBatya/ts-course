"use strict";
function isBoolean(val) {
    return typeof val === "boolean";
}
function isString(val) {
    return typeof val === "string";
}
function logFlag(flag) {
    if (isBoolean(flag)) {
        console.log("Hey this is boolean");
    }
    else if (isString(flag)) {
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
const number = BigInt(100);
