"use strict"
function Product(brand, price, discount) {
    this.brand = brand;
    this.price = price;
    this.discount = discount;
} 

const apple = new Product('Apple', 100, 15);
const samsung = new Product('Samsung',70, 10);
//console.log(apple, samsung);

Product.prototype.getPrice = function() {
    return (this.price *(100 - this.discount)) / 100;
}

//Object.create
const protoForObj = {
    sayHello() {
        return 'Hi';
    }
}

const obj = Object.create(protoForObj, {
    firstName: {
        value: 'Galya'
    },
});

function User(fName, lName) {
    this.fName = fName;
    this.lName = lName;
}

User.prototype.getFullName = function() {
    return `${this.fName} ${this.lName}`;
}

User.prototype.sayHello = function() {
    return `Hello ${this.fName} ${this.lName}`;
}

const user = new User('Anna', 'Rose')

//Customer
function Customer(fName, lName, membership) {
    User.call(this, fName, lName); //functional inheritance
    this.membership = membership;
}

Customer.prototype = Object.create(User.prototype); //prototype inheritance
Customer.prototype.constructor = Customer;

Customer.prototype.getMembership = function() {
    return this.membership.toUpperCase();
};


const customer = new Customer('Den', 'Popov', 'basic');

//ES6
const methodName = 'setNewPrice';
class ProductES {
    constructor(brand, price, discount) {
        this.brand = brand;
        this.price = price;
        this.discount = discount;
    }
    getPriceWithDiscount() {
        return (this.price * (100 - this.discount)) / 100;
    }
    [methodName](newPrice) {
        this.price = newPrice;
    }

    static plus(x, y) {
        return x + y;
    } 
}

const newProduct = new ProductES('nokia', 22, 8);

class UserES {
    constructor(fName, lName) {
        this.fName = fName;
        this.lName = lName;
    }
    getFullName() {
        return `${this.fName} ${this.lName}`;
    }
}

class CustomerES extends UserES {
    constructor(fName, lName, membership) {
        super(fName, lName);
        this.membership = membership;
    }
}

const customerES = new CustomerES('Nina', 'Ivanova', 'static');


//Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.

function f() {
   console.log('Hello!');
  }

function b() {
    console.log('Bye');
}  

Function.prototype.defer = function(n) {
    setTimeout(this,n);
};

// b.defer(1000); 

// Есть класс Planet
// function Planet(name) {
//     this.name = name;
//     this.getName = function () {
//         return 'Planet name is ' + this.name;
//     }
// }
// Создать наследника от Planet, который будет называться PlanetWithSatellite и будет
// принимать, кроме name, название спутника (satelliteName). Переопределите метод
// getName для PlanetWithSatellite так, чтобы он возвращал ту же самую строчку +
// дополнительный текст 'The satellite is' + satelliteName.
// Например:
// var earth = new PlanetWithSatellite('earth', 'moon');
// earth.getName(); // 'Planet name is earth. The satellite is moon’

function Planet(name) {
    this.name = name;
    this.getName = function () {
    return 'Planet name is ' + this.name;
    }
}

function PlanetWithSatellite(name, statelliteName) {
    Planet.call(this, name);
    this.statelliteName = statelliteName;
    this.getPlanetName = this.getName();
    this.getName = function() {
        return `${this.getPlanetName}. The satellite is ${this.statelliteName}`;
    } 
}

const earth = new PlanetWithSatellite('earth', 'moon');
console.log(earth.getName());

/*Создайте класс “Здание” (пусть у него будет имя, количество этажей, метод “получить количество этажей” и метод “установить количество этажей”).
Создайте наследников этого класса:
классы “Жилой дом” и “Торговый центр”. Используйте функциональное наследование 

У жилого дома появится свойство “количество квартир на этаже”, а метод “получить количество этажей” должен вернуть объект вида {этажи: 5, всегоКвартир: 5 * количествоКвартир}

У торгового центра появится свойство “количество магазинов на этаже”, а метод “получить количество этажей” должен вернуть объект вида {этажи: 3, всегоМагазинов: 3 * количествоМагазинов}
От каждого класса создать экземпляр (дом, торговый центр)*/

function Building(name, floors) {   
    this.name = name;
    this.floors = floors;
    this.getFloors = function() {
        return this.floors;
    }
    this.setFloors = function() {
        this.floors = setFloors;
    }
}

function House(name, floors, countFlat) {
    Building.call(this, name, floors);
    this.countFlat = countFlat;
    this.getAllFloors = this.getFloors();
    this.getFloors = {
        floors: this.floors,
        allFlats: this.countFlat * this.floors,
    }
}

const house1 = new House('house1', 5, 4);

function SC(name, floors, shopsOnFloor) {
    this.shopsOnFloor = shopsOnFloor;
    Building.call(this, name, floors);
    this.getAllFloors = this.getFloors();
    this.getFloors = {
        floors: this.floors,
        allShops: this.shopsOnFloor * this.floors,
    }
}

const shop1 = new SC('shop1', 3, 20);

/*
Создать класс “Мебель” с базовыми свойствами “имя”, “цена” и методом “получить информацию” (метод должен вывести имя и цену). Метод должен быть объявлен с помощью прототипов (Func.prototype...). Создать два экземпляра класса “Мебель”: экземпляр “ОфиснаяМебель” и
“Мебель для дома”. Придумайте им по одному свойству, которые будут характерны только для этих экземпляров (например, для офисной мебели - наличие компьютерного стола или шредера). Метод “получить информацию” должен учитывать и добавленное вами новое свойство.
Задача на переопределение метода у экземпляров класса.
*/

function Furniture(name, price) {
    this.name = name;
    this.price = price;
}

Furniture.prototype.getInfo = function() {
    return `${this.name} ${this.price}`;
}

const houseFurniture = new Furniture('chair', 200);
houseFurniture.color = 'white';
houseFurniture.getInfo = `${houseFurniture.getInfo()}  ${houseFurniture.color}`;

const officeFurniture = new Furniture('printer', 500);
officeFurniture.color = 'black';
officeFurniture.getInfo = `${officeFurniture.getInfo()} ${officeFurniture.color} `

/*
Создать класс “Пользователь” с базовыми свойствами “имя”, “дата регистрации” и методом “получить информацию” (метод должен вывести имя и дату регистрации). Метод должен быть объявлен с помощью прототипов (Func.prototype...) Создать два наследника класса “Пользователь”: класс “Админ” и класс “Гость”.
У класса “Админ” должно быть дополнительное свойство “суперАдмин” (может быть
true/false, должно быть скрытым). Свойства определяются в момент вызова
конструктора.
У класса “Гость” должно быть свойство “срокДействия” (validDate, например), содержащее дату (например, одну неделю от момента регистрации).
У классов-наследников метод “получить информацию” должен так же содержать информацию о дополнительных свойствах (“суперАдмин” и “срокДействия”)
*/

function User(name, dateReg) {
    this.name = name;
    this.dateReg = dateReg;
}
User.prototype.getInfo = function() {
    return `${this.name} ${this.dateReg}`;
}

function Admin(name, dateReg, superAdmin) {
    User.call(this, name, dateReg);
    this.superAdmin = superAdmin;
    this.getInfo = `${this.getInfo()} ${this.superAdmin}`; 
} 

Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;
const admin = new Admin('halina','08.05.2019', 'true');

function Guest(name, dateReg, validDate) {
    User.call(this,name, dateReg);
    this.validDate = validDate;
    this.getInfo = `${this.getInfo()} ${this.validDate}`; 
} 

Guest.prototype = Object.create(User.prototype);
Guest.prototype.constructor = Guest;

const guest = new Guest('ivan', '05.09.2019','05.09.2020');

/*
Реализовать конструктор в ES6 синтаксисе (также используйте аргументы по умолчанию):

function Component(tagName) {
  this.tagName = tagName || 'div';
  this.node = document.createElement(tagName);
}

Пример вызова:

const comp = new Component('span');
*/

class Component {
    constructor(tagName = 'div') {
        this.tagName = tagName;
        this.node = document.createElement(tagName);
    }
}

const comp = new Component('span');