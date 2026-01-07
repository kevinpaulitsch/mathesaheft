// Grammatik-Aufgaben nach Themen strukturiert
const GRAMMAR_RULES = {
  
  // 1. to be – affirmative
  to_be_affirmative: [
    () => ({q: "She ___ happy.", options: ["is", "are"], a: "is"}),
    () => ({q: "They ___ at school.", options: ["is", "are"], a: "are"}),
    () => ({q: "I ___ tired.", options: ["am", "is"], a: "am"}),
    () => ({q: "He ___ my friend.", options: ["is", "are"], a: "is"}),
    () => ({q: "We ___ in the park.", options: ["is", "are"], a: "are"}),
    () => ({q: "You ___ very tall.", options: ["is", "are"], a: "are"}),
    () => ({q: "It ___ cold today.", options: ["is", "are"], a: "is"}),
    () => ({q: "The dog ___ brown.", options: ["is", "are"], a: "is"}),
    () => ({q: "My parents ___ teachers.", options: ["is", "are"], a: "are"}),
    () => ({q: "The book ___ on the table.", options: ["is", "are"], a: "is"})
  ],

  // 2. to be – negative
  to_be_negative: [
    () => ({q: "He ___ tired.", options: ["isn't", "aren't"], a: "isn't"}),
    () => ({q: "They ___ hungry.", options: ["isn't", "aren't"], a: "aren't"}),
    () => ({q: "I ___ happy.", options: ["am not", "isn't"], a: "am not"}),
    () => ({q: "She ___ at home.", options: ["isn't", "aren't"], a: "isn't"}),
    () => ({q: "We ___ late.", options: ["isn't", "aren't"], a: "aren't"}),
    () => ({q: "You ___ wrong.", options: ["isn't", "aren't"], a: "aren't"}),
    () => ({q: "It ___ sunny.", options: ["isn't", "aren't"], a: "isn't"}),
    () => ({q: "The cat ___ black.", options: ["isn't", "aren't"], a: "isn't"}),
    () => ({q: "My friends ___ here.", options: ["isn't", "aren't"], a: "aren't"}),
    () => ({q: "The door ___ open.", options: ["isn't", "aren't"], a: "isn't"})
  ],

  // 3. there is / there are
  there_is_are: [
    () => ({q: "There ___ two books.", options: ["is", "are"], a: "are"}),
    () => ({q: "There ___ a cat.", options: ["is", "are"], a: "is"}),
    () => ({q: "There ___ many students.", options: ["is", "are"], a: "are"}),
    () => ({q: "There ___ one apple.", options: ["is", "are"], a: "is"}),
    () => ({q: "There ___ three chairs.", options: ["is", "are"], a: "are"}),
    () => ({q: "There ___ a dog in the garden.", options: ["is", "are"], a: "is"}),
    () => ({q: "There ___ five people.", options: ["is", "are"], a: "are"}),
    () => ({q: "There ___ a problem.", options: ["is", "are"], a: "is"}),
    () => ({q: "There ___ two windows.", options: ["is", "are"], a: "are"}),
    () => ({q: "There ___ a teacher.", options: ["is", "are"], a: "is"})
  ],

  // 4. plural nouns + irregular plurals
  plurals: [
    () => ({q: "Two ___ (child)", options: ["children", "childs"], a: "children"}),
    () => ({q: "Three ___ (man)", options: ["men", "mans"], a: "men"}),
    () => ({q: "Many ___ (woman)", options: ["women", "womans"], a: "women"}),
    () => ({q: "Five ___ (tooth)", options: ["teeth", "tooths"], a: "teeth"}),
    () => ({q: "Two ___ (foot)", options: ["feet", "foots"], a: "feet"}),
    () => ({q: "Four ___ (mouse)", options: ["mice", "mouses"], a: "mice"}),
    () => ({q: "Three ___ (box)", options: ["boxes", "boxs"], a: "boxes"}),
    () => ({q: "Two ___ (baby)", options: ["babies", "babys"], a: "babies"}),
    () => ({q: "Many ___ (fish)", options: ["fish", "fishes"], a: "fish"}),
    () => ({q: "Five ___ (sheep)", options: ["sheep", "sheeps"], a: "sheep"})
  ],

  // 5. have got / haven't got
  have_got: [
    () => ({q: "She ___ got a bike.", options: ["has", "have"], a: "has"}),
    () => ({q: "They ___ got a car.", options: ["has", "have"], a: "have"}),
    () => ({q: "I ___ got a dog.", options: ["has", "have"], a: "have"}),
    () => ({q: "He ___ got two cats.", options: ["has", "have"], a: "has"}),
    () => ({q: "We ___ got a garden.", options: ["has", "have"], a: "have"}),
    () => ({q: "She ___ got a brother.", options: ["hasn't", "haven't"], a: "hasn't"}),
    () => ({q: "They ___ got time.", options: ["hasn't", "haven't"], a: "haven't"}),
    () => ({q: "I ___ got money.", options: ["hasn't", "haven't"], a: "haven't"}),
    () => ({q: "You ___ got a pen.", options: ["has", "have"], a: "have"}),
    () => ({q: "It ___ got a tail.", options: ["has", "have"], a: "has"})
  ],

  // 6. have / has
  have_has: [
    () => ({q: "She ___ a book.", options: ["has", "have"], a: "has"}),
    () => ({q: "They ___ homework.", options: ["has", "have"], a: "have"}),
    () => ({q: "He ___ a sister.", options: ["has", "have"], a: "has"}),
    () => ({q: "I ___ two dogs.", options: ["has", "have"], a: "have"}),
    () => ({q: "We ___ a test.", options: ["has", "have"], a: "have"}),
    () => ({q: "The cat ___ blue eyes.", options: ["has", "have"], a: "has"}),
    () => ({q: "My parents ___ a car.", options: ["has", "have"], a: "have"}),
    () => ({q: "Tom ___ a guitar.", options: ["has", "have"], a: "has"}),
    () => ({q: "You ___ nice shoes.", options: ["has", "have"], a: "have"}),
    () => ({q: "The teacher ___ a question.", options: ["has", "have"], a: "has"})
  ],

  // 7. possessives (my, your, his, her)
  possessives: [
    () => ({q: "This is ___ bag. (Tom)", options: ["his", "her"], a: "his"}),
    () => ({q: "This is ___ book. (Anna)", options: ["his", "her"], a: "her"}),
    () => ({q: "___ name is Max.", options: ["My", "Your"], a: "My"}),
    () => ({q: "What is ___ name?", options: ["your", "my"], a: "your"}),
    () => ({q: "This is ___ dog. (the boy)", options: ["his", "her"], a: "his"}),
    () => ({q: "___ cat is black. (Sarah)", options: ["His", "Her"], a: "Her"}),
    () => ({q: "I love ___ family.", options: ["my", "your"], a: "my"}),
    () => ({q: "___ teacher is nice. (we)", options: ["Our", "Their"], a: "Our"}),
    () => ({q: "___ house is big. (they)", options: ["Our", "Their"], a: "Their"}),
    () => ({q: "Where is ___ pen?", options: ["your", "his"], a: "your"})
  ],

  // 8. can / can't (mit Kontext!)
  can_cant: [
    () => ({q: "The bag is heavy. He ___ carry it.", options: ["can", "can't"], a: "can't"}),
    () => ({q: "She is 5 years old. She ___ read.", options: ["can", "can't"], a: "can"}),
    () => ({q: "I'm tired. I ___ run fast.", options: ["can", "can't"], a: "can't"}),
    () => ({q: "Birds ___ fly.", options: ["can", "can't"], a: "can"}),
    () => ({q: "Fish ___ walk.", options: ["can", "can't"], a: "can't"}),
    () => ({q: "He has no bike. He ___ ride.", options: ["can", "can't"], a: "can't"}),
    () => ({q: "She is very strong. She ___ lift it.", options: ["can", "can't"], a: "can"}),
    () => ({q: "Dogs ___ swim.", options: ["can", "can't"], a: "can"}),
    () => ({q: "I have no money. I ___ buy it.", options: ["can", "can't"], a: "can't"}),
    () => ({q: "We are good. We ___ help you.", options: ["can", "can't"], a: "can"})
  ],

  // 9. a / an
  a_an: [
    () => ({q: "This is ___ apple.", options: ["a", "an"], a: "an"}),
    () => ({q: "This is ___ book.", options: ["a", "an"], a: "a"}),
    () => ({q: "I have ___ umbrella.", options: ["a", "an"], a: "an"}),
    () => ({q: "She has ___ cat.", options: ["a", "an"], a: "a"}),
    () => ({q: "It is ___ orange.", options: ["a", "an"], a: "an"}),
    () => ({q: "This is ___ egg.", options: ["a", "an"], a: "an"}),
    () => ({q: "I see ___ elephant.", options: ["a", "an"], a: "an"}),
    () => ({q: "He has ___ dog.", options: ["a", "an"], a: "a"}),
    () => ({q: "This is ___ hour.", options: ["a", "an"], a: "an"}),
    () => ({q: "I want ___ ice cream.", options: ["a", "an"], a: "an"})
  ]
};

// Alle Grammatik-Regeln in einem Array sammeln
function getAllGrammarRules() {
  let allRules = [];
  for (let category in GRAMMAR_RULES) {
    allRules = allRules.concat(GRAMMAR_RULES[category]);
  }
  return allRules;
}

// Generiere randomisierte Grammatik-Aufgaben
function getGrammarTasks(amount = 20) {
  const allRules = getAllGrammarRules();
  let tasks = [];
  
  while (tasks.length < amount) {
    const randomRule = allRules[Math.floor(Math.random() * allRules.length)];
    tasks.push(randomRule());
  }
  
  return tasks;
}

// Für Kompatibilität mit alter Funktion
function getGrammarForUnit(unit) {
  // Grammatik ist nicht mehr an Units gebunden
  return getGrammarTasks(20);
}
