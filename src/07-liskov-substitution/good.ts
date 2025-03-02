interface Flyable {
  fly(): void;
}

interface Animal {
  eat(): void;
  walk(): void;
}

interface Bird extends Flyable, Animal {}

class Crow implements Bird {
  eat(): void {
    console.log("crow eats");
  }
  fly(): void {
    console.log("crow flies");
  }
  walk(): void {
    console.log("crow walks");
  }
}

class Penguin implements Animal {
  eat(): void {
    console.log("penguin eats");
  }
  walk(): void {
    console.log("penguin walks");
  }
}

function dayInLifeOfABird(bird: Bird) {
  bird.eat();
  bird.fly();
}

const crow = new Crow();
const penguin = new Penguin();

dayInLifeOfABird(crow);
dayInLifeOfABird(penguin);
