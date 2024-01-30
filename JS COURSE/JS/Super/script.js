
// super(name,age) is equivalent to  => this.name = name; this.age = age;


class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    move(speed){
        console.log(`The speed of ${this.name} is ${speed}mph`);
    }

}

class Cheetah extends Animal{
    constructor(name,age,runSpeed){
        super(name,age);
        this.runSpeed = runSpeed;
        super.move(runSpeed);
    }


}

class Fish extends Animal{
    constructor(name,age,swimSpeed){
        super(name,age);
        this.swimSpeed = swimSpeed;
        super.move(swimSpeed);

    }
}

const cheetah = new Cheetah("Cheetah" , 4 , 50);
const fish = new Fish("Fish" , 3 , 12);

console.log("CHEETAH INFORMATION : ");
console.log(cheetah.name);
console.log(cheetah.age);
console.log(cheetah.runSpeed);

console.log("FISH INFORMATION : ");
console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);


