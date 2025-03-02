interface Bird {
  eat(): void;
  fly(): void;
}

class Crow implements Bird {
  eat(): void {
    console.log("crow eats");
  }
  fly(): void {
    console.log("crow flies");
  }
}

class Penguin implements Bird {
  eat(): void {
    console.log("penguin eats");
  }
  fly(): void {
    throw new Error("penguin can't fly");
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
