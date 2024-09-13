// factory Functions
function createElf(name, weapon) {
    return {
        name,
        weapon,
        attack() {
            return 'attack with '+ this.weapon
        }
    }
}

const peter = createElf('peter', 'stones');
console.log(peter.name);
console.log(peter.attack());

const sam = createElf('sam', 'fire');
console.log(sam.name);
console.log(sam.attack());

// Object.create()