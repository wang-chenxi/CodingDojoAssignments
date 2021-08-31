//https://login.codingdojo.com/m/130/6406/45731

class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(this.name);
    }

    showStats() {
        console.log("Name: ", this.name);
        console.log("health: ", this.health);
        console.log("speed: ", this.speed);
        console.log("strength: ", this.strength);
    }

    drinkSake() {
        this.health += 10;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
