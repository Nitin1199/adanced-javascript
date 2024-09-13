// method borowwing
// call & apply is same just the diff in paramter passing
// both runs method immediately

// while bind retuns the function to be called later
const wizard = {
    name: 'Merlin',
    health: 100,
    heal(num1, num2) {
        this.health += num1 + num2;
    }
}

const archer = {
    name: 'Robin hood',
    health: 30
}

// console.log(archer);

// wizard.heal.call(archer, 20, 25);
// wizard.heal.apply(archer, [20, 25]);
const healArcher = wizard.heal.bind(archer, 42, 16);
// healArcher();
// console.log(archer);

const character = {
    name: 'Simon',
    getCharacter() {
      return this.name;
    }
  };
  const giveMeTheCharacterNOW = character.getCharacter.bind(character);
  
  
  console.log('?', giveMeTheCharacterNOW());
  