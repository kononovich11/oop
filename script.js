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

b.defer(1000); 
