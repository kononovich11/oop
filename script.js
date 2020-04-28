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