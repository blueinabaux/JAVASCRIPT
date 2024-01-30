
// const person1 = {
//     name:"ADMIN",
//     age:"30",
//     isEmployed:true,
//     sayHello : () => console.log("Hello")
// }

// console.log(person1.name);
// console.log(person1.age);
// console.log(person1.isEmployed);
// console.log(person1.sayHello());


// "this" keyword

const user = {
    name:"sidd",
    age:"21",
    sayHello: () => console.log(`Hi, ${this.name}`),
    sayAge:function(){console.log(`Your age is : ${this.age}`)},

}

user.sayHello();
user.sayAge();

