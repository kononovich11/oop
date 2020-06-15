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
