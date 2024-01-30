
function Car(name,year,model){
    this.name = name,
    this.year = year,
    this.model = model,
    this.drive = function(){console.log(`You drive a ${this.model}`)}
}

const car1 = new Car("Ford", 2024 , "Mustang");

console.log(car1.name);
console.log(car1.year);
console.log(car1.model);
car1.drive();