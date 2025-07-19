//Fetch data from API
class Fetch{
  constructor (endPoint) {
    this.baseURL = "https://rpg-creature-api.freecodecamp.rocks/api/creature";
    this.endPoint = endPoint;
  }
  
  async getCreatures() {
    //Check if endpoint is valid
   try {
     const response = await fetch(`${this.baseURL}/${this.endPoint}`);
     
     const data = await response.json();
     
     console.log(data);
     
     const ui = new UI(data);
     ui.displayCreature();
   } catch (e) {
     alert("Creature not found");
   }
  }
}

//Add event listener
document.querySelector("#search-button").addEventListener("click", (e) => {
  e.preventDefault();
  
  const endPoint = userValue.getValue();
  
  const creatures = new Fetch(endPoint);
  creatures.getCreatures();
});

//Get user input and use as endpoint
class userValue{
  static getValue() {
    const value = document.querySelector("#search-input").value.trim().toLowerCase();
    
    return value;
  }
}

//Update UI with data from API
class UI{
  constructor(data) {
    this.data = data;
  }
  
  displayCreature() {
    const creatureName = document.querySelector("#creature-name");
    
    const creatureID = document.querySelector("#creature-id");
    
    const creatureWeight = document.querySelector("#weight");
    
    const creatureHeight = document.querySelector("#height");
    
    const type = document.querySelector("#types");
    
    const superPower = document.querySelector("#power-name");
    
    const description = document.querySelector("#desc");
    
    const hp = document.querySelector("#hp");
    
    const attack = document.querySelector("#attack");
    
    const defense = document.querySelector("#defense");
    
    const spAttack = document.querySelector("#special-attack");
    
    const spDefense = document.querySelector("#special-defense");
    
    const speed = document.querySelector("#speed");
    
    const {name, id, weight, height, special, stats, types} = this.data;
    
    creatureName.textContent = `${name}`;
    creatureID.textContent = `#${id}`;
    creatureWeight.textContent = `Weight: ${weight}`;
    creatureHeight.textContent = `Height: ${height}`;
    superPower.textContent = `${special.name}`;
    
    type.innerHTML = types.map(item => `<span>${item.name}</span>`).join(" ");
    
    description.textContent = `${special.description}`;
    hp.textContent = `${stats[0].base_stat}`;
    attack.textContent = `${stats[1].base_stat}`;
    defense.textContent = `${stats[2].base_stat}`;
    spAttack.textContent = `${stats[3].base_stat}`;
    spDefense.textContent = `${stats[4].base_stat}`;
    speed.textContent = `${stats[5].base_stat}`
  }
}