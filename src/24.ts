let a = 5;

function add(a: number): number {
    let b = 10;
    return a + b;
}

add(3); // Output: 13

class Dog {
    bark(): void {
        console.log("Woof!");
    }
}

let myDog: Dog;

myDog = new Dog();
myDog.bark(); // Output: Woof!
