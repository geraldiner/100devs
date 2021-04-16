//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

class streetFighter {
  constructor(name, intro, costume, special) {
    this.name = name;
    this.intro = intro;
    this.costume = costume;
    this.special = special;
  }

  introduce() {
    alert(`${this.name}: ${this.intro}`);
  }

  changeCostume(newCostume) {
    this.costume = newCostume;
  }

  doSpecialMove() {
    alert(this.special);
  }

  displayStats() {
    console.log(`Name: ${this.name}\n\tCostume: ${this.costume}\n\tIntro: ${this.intro}\n\tSpecial: ${this.special}\n`)
  }
}

let chunli = new streetFighter('Chun-Li', 'I didn\'t become the strongest woman in the world just by saying it out loud!', 12, 'Hoyokusen')

chunli.displayStats()