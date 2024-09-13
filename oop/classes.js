class Elf {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }

    attack() {
        return 'attack with ' + this.weapon;
    }
}

const peter = new Elf('peter', 'fire');
// console.log(peter.attack());
// console.log(Elf.__proto__.__proto__);

// Classes vs Object.create()

