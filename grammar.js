// Grammatik-Aufgaben nach Themen strukturiert
const GRAMMAR_RULES = {
  
  // 1. to be – affirmative
  to_be_affirmative: [
    { q: "She ___ happy.", options: ["is", "are"], a: "is" },
    { q: "They ___ at school.", options: ["is", "are"], a: "are" },
    { q: "I ___ tired.", options: ["am", "is"], a: "am" },
    { q: "He ___ my friend.", options: ["is", "are"], a: "is" },
    { q: "We ___ in the park.", options: ["is", "are"], a: "are" },
    { q: "You ___ very tall.", options: ["is", "are"], a: "are" },
    { q: "It ___ cold today.", options: ["is", "are"], a: "is" },
    { q: "The dog ___ brown.", options: ["is", "are"], a: "is" },
    { q: "My parents ___ teachers.", options: ["is", "are"], a: "are" },
    { q: "The book ___ on the table.", options: ["is", "are"], a: "is" }
  ],

  // 2. to be – negative
  to_be_negative: [
    { q: "He ___ tired today.", options: ["isn't", "aren't"], a: "isn't" },
    { q: "They ___ hungry now.", options: ["isn't", "aren't"], a: "aren't" },
    { q: "I ___ happy about this.", options: ["am not", "isn't"], a: "am not" },
    { q: "She ___ at home right now.", options: ["isn't", "aren't"], a: "isn't" },
    { q: "We ___ late for school.", options: ["isn't", "aren't"], a: "aren't" },
    { q: "You ___ wrong about that.", options: ["isn't", "aren't"], a: "aren't" },
    { q: "It ___ sunny today.", options: ["isn't", "aren't"], a: "isn't" },
    { q: "The cat ___ black. It's white.", options: ["isn't", "aren't"], a: "isn't" },
    { q: "My friends ___ here yet.", options: ["isn't", "aren't"], a: "aren't" },
    { q: "The door ___ open. It's closed.", options: ["isn't", "aren't"], a: "isn't" }
  ],

  // 3. there is / there are
  there_is_are: [
    { q: "There ___ two books on the desk.", options: ["is", "are"], a: "are" },
    { q: "There ___ a cat under the table.", options: ["is", "are"], a: "is" },
    { q: "There ___ many students in class.", options: ["is", "are"], a: "are" },
    { q: "There ___ one apple left.", options: ["is", "are"], a: "is" },
    { q: "There ___ three chairs here.", options: ["is", "are"], a: "are" },
    { q: "There ___ a dog in the garden.", options: ["is", "are"], a: "is" },
    { q: "There ___ five people waiting.", options: ["is", "are"], a: "are" },
    { q: "There ___ a problem with this.", options: ["is", "are"], a: "is" },
    { q: "There ___ two windows in the room.", options: ["is", "are"], a: "are" },
    { q: "There ___ a teacher at the door.", options: ["is", "are"], a: "is" }
  ],

  // 4. plural nouns + irregular plurals
  plurals: [
    { q: "Two ___ (child)", options: ["children", "childs"], a: "children" },
    { q: "Three ___ (man)", options: ["men", "mans"], a: "men" },
    { q: "Many ___ (woman)", options: ["women", "womans"], a: "women" },
    { q: "Five ___ (tooth)", options: ["teeth", "tooths"], a: "teeth" },
    { q: "Two ___ (foot)", options: ["feet", "foots"], a: "feet" },
    { q: "Four ___ (mouse)", options: ["mice", "mouses"], a: "mice" },
    { q: "Three ___ (box)", options: ["boxes", "boxs"], a: "boxes" },
    { q: "Two ___ (baby)", options: ["babies", "babys"], a: "babies" },
    { q: "Many ___ (fish)", options: ["fish", "fishes"], a: "fish" },
    { q: "Five ___ (sheep)", options: ["sheep", "sheeps"], a: "sheep" }
  ],

  // 5. have got / haven't got
  have_got: [
    { q: "She ___ got a new bike.", options: ["has", "have"], a: "has" },
    { q: "They ___ got a big car.", options: ["has", "have"], a: "have" },
    { q: "I ___ got a brown dog.", options: ["has", "have"], a: "have" },
    { q: "He ___ got two cats at home.", options: ["has", "have"], a: "has" },
    { q: "We ___ got a nice garden.", options: ["has", "have"], a: "have" },
    { q: "She ___ got a brother. She's an only child.", options: ["hasn't", "haven't"], a: "hasn't" },
    { q: "They ___ got time now. They're busy.", options: ["hasn't", "haven't"], a: "haven't" },
    { q: "I ___ got money with me.", options: ["hasn't", "haven't"], a: "haven't" },
    { q: "You ___ got a red pen here.", options: ["has", "have"], a: "have" },
    { q: "The cat ___ got a long tail.", options: ["has", "have"], a: "has" }
  ],

  // 6. have / has
  have_has: [
    { q: "She ___ a new book.", options: ["has", "have"], a: "has" },
    { q: "They ___ homework today.", options: ["has", "have"], a: "have" },
    { q: "He ___ a little sister.", options: ["has", "have"], a: "has" },
    { q: "I ___ two big dogs.", options: ["has", "have"], a: "have" },
    { q: "We ___ a test tomorrow.", options: ["has", "have"], a: "have" },
    { q: "The cat ___ blue eyes.", options: ["has", "have"], a: "has" },
    { q: "My parents ___ a red car.", options: ["has", "have"], a: "have" },
    { q: "Tom ___ a new guitar.", options: ["has", "have"], a: "has" },
    { q: "You ___ nice shoes today.", options: ["has", "have"], a: "have" },
    { q: "The teacher ___ a question for us.", options: ["has", "have"], a: "has" }
  ],

  // 7. possessives (my, your, his, her)
  possessives: [
    { q: "This is ___ bag. (Tom = boy)", options: ["his", "her"], a: "his" },
    { q: "This is ___ book. (Anna = girl)", options: ["his", "her"], a: "her" },
    { q: "___ name is Max. (I am speaking)", options: ["My", "Your"], a: "My" },
    { q: "What is ___ name? (I am asking you)", options: ["your", "my"], a: "your" },
    { q: "This is ___ dog. (Peter = boy)", options: ["his", "her"], a: "his" },
    { q: "___ cat is black. (Sarah = girl)", options: ["His", "Her"], a: "Her" },
    { q: "I love ___ family. (my family)", options: ["my", "your"], a: "my" },
    { q: "___ teacher is nice. (we students)", options: ["Our", "Their"], a: "Our" },
    { q: "___ house is big. (those people)", options: ["Our", "Their"], a: "Their" },
    { q: "Where is ___ pen? (I'm asking you)", options: ["your", "his"], a: "your" }
  ],

  // 8. can / can't (mit EINDEUTIGEM Kontext!)
  can_cant: [
    { q: "The bag is very heavy. He ___ carry it.", options: ["can", "can't"], a: "can't" },
    { q: "She is only 2 years old. She ___ read.", options: ["can", "can't"], a: "can't" },
    { q: "I broke my leg. I ___ run.", options: ["can", "can't"], a: "can't" },
    { q: "Birds have wings. They ___ fly.", options: ["can", "can't"], a: "can" },
    { q: "Fish live in water. They ___ swim.", options: ["can", "can't"], a: "can" },
    { q: "He has no bike. He ___ ride to school.", options: ["can", "can't"], a: "can't" },
    { q: "She is very strong. She ___ lift it.", options: ["can", "can't"], a: "can" },
    { q: "Dogs are good swimmers. They ___ swim.", options: ["can", "can't"], a: "can" },
    { q: "I have no money. I ___ buy it.", options: ["can", "can't"], a: "can't" },
    { q: "We know the answer. We ___ help you.", options: ["can", "can't"], a: "can" },
    { q: "Cats have no wings. They ___ fly.", options: ["can", "can't"], a: "can't" },
    { q: "He is deaf. He ___ hear you.", options: ["can", "can't"], a: "can't" },
    { q: "The door is locked. We ___ open it.", options: ["can", "can't"], a: "can't" },
    { q: "She has a key. She ___ unlock the door.", options: ["can", "can't"], a: "can" }
  ],

  // 9. a / an
  a_an: [
    { q: "This is ___ apple.", options: ["a", "an"], a: "an" },
    { q: "This is ___ book.", options: ["a", "an"], a: "a" },
    { q: "I have ___ umbrella.", options: ["a", "an"], a: "an" },
    { q: "She has ___ cat.", options: ["a", "an"], a: "a" },
    { q: "It is ___ orange.", options: ["a", "an"], a: "an" },
    { q: "This is ___ egg.", options: ["a", "an"], a: "an" },
    { q: "I see ___ elephant.", options: ["a", "an"], a: "an" },
    { q: "He has ___ dog.", options: ["a", "an"], a: "a" },
    { q: "This is ___ hour.", options: ["a", "an"], a: "an" },
    { q: "I want ___ ice cream.", options: ["a", "an"], a: "an" },
    { q: "She is ___ teacher.", options: ["a", "an"], a: "a" },
    { q: "He is ___ uncle of mine.", options: ["a", "an"], a: "an" }
  ]
};

// Alle Grammatik-Regeln in einem flachen Array sammeln
function getAllGrammarRules() {
  let allRules = [];
  for (let category in GRAMMAR_RULES) {
    allRules = allRules.concat(GRAMMAR_RULES[category]);
  }
  return allRules;
}

// Generiere randomisierte Grammatik-Aufgaben OHNE Wiederholungen
function getGrammarTasks(amount = 20) {
  const allRules = getAllGrammarRules();
  let availableRules = [...allRules]; // Kopie erstellen
  let tasks = [];
  
  // Mische die verfügbaren Regeln
  availableRules.sort(() => Math.random() - 0.5);
  
  // Nimm die ersten 'amount' Aufgaben (keine Duplikate möglich)
  for (let i = 0; i < Math.min(amount, availableRules.length); i++) {
    tasks.push(availableRules[i]);
  }
  
  return tasks;
}

// Für Kompatibilität mit alter Funktion
function getGrammarForUnit(unit) {
  // Grammatik ist nicht mehr an Units gebunden
  return getGrammarTasks(20);
}
