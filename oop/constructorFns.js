// constructor functions
// Note: All contructor fns name starts with Captial letter
function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}

Elf.prototype.attack = function() {
    return 'attack with ' + this.name;
}

const peter = new Elf('peter', 'stone');
console.log(peter.name);

const sam = new Elf('sam', 'fire');
console.log(sam.name);