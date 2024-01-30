class Product{

    constructor(name,price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Name of Product : ${this.name}`);
        console.log(`Price of Product : $${this.price}`);
    }

    addition(a,b){
        return a+b;
    }
}

const product1 = new Product("Shirt" , 19.99);

// const product2 = new Product
product1.displayProduct();

const total = product1.addition(2,3);
console.log(total);

