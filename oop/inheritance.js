class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }

    attack() {
        return 'attack with ' + this.weapon;
    }
}

class Elf extends Character {
    constructor(name, weapon, type) {
        super(name, weapon);
        this.type =type;
    }
}

const ppa = new Elf('ppf', 'rgrgr', 'ss');
console.log(ppa)