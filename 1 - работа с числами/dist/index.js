"use strict";
class Figure {
    constructor() {
        this.size = 10;
        this.color = "red";
        this.id = Math.random();
    }
    getId() {
        return this.id;
    }
}
class Box extends Figure {
    getInfo() {
        return {
            size: this.size,
            color: this.color,
            id: this.getId(),
        };
    }
}
const box = new Box();
console.log(box.getInfo());
class Human {
    constructor(date) {
        this.date = date ?? new Date();
    }
    isProgrammer() {
        return false;
    }
}
class User extends Human {
    constructor(name, date) {
        super(date);
        this._hobbies = [];
        this._name = name;
    }
    get hobbies() {
        return this.hobbies;
    }
    addHobbies(hobby) {
        this.hobbies.push(hobby);
    }
    set name(name) {
        this._name = name;
    }
    isProgrammer() {
        super.isProgrammer();
        return true;
    }
}
const user = new User("Vladimir", new Date());
user.name;
user.addHobbies("a");
user.name = "Vladimir";
user.date;
console.log(user.hobbies);
console.log(user.name);
