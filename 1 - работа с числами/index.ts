class Figure {
  size: number = 10;
  color: string = "red";
  private id: number;

  constructor() {
    this.id = Math.random();
  }

  protected getId(): number {
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
  date: Date;

  constructor(date: Date) {
    this.date = date ?? new Date();
  }

  isProgrammer(): boolean {
    return false;
  }
}

class User extends Human {
  _name: string;
  _hobbies: string[] = [];

  constructor(name: string, date: Date) {
    super(date);
    this._name = name;
  }

  get hobbies(): string[] {
    return this.hobbies;
  }

  addHobbies(hobby: string): void {
    this.hobbies.push(hobby);
  }

  set name(name: string) {
    this._name = name;
  }

  override isProgrammer(): boolean {
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
