// ========================================
// DYNAMISCHE GRAMMATIK-AUFGABEN GENERATOR
// ========================================
// Jede Aufgabe wird zufällig generiert aus Wortlisten
// → Quasi unendliche Übungsmöglichkeiten!

// Wortlisten für dynamische Satz-Generierung
const WORD_POOLS = {
  subjects_singular: ["Tom", "Sarah", "Lisa", "Max", "Emma", "Paul", "Anna", "Ben", "Maria", "Tim"],
  subjects_plural: ["Tom and Sarah", "my friends", "the students", "my parents", "the children", "they", "we"],
  subjects_he: ["Tom", "Max", "Paul", "Ben", "Tim", "my father", "my brother", "the boy", "he"],
  subjects_she: ["Sarah", "Lisa", "Emma", "Anna", "Maria", "my mother", "my sister", "the girl", "she"],
  subjects_it: ["the dog", "the cat", "the book", "the pen", "the car", "the bird", "it"],
  
  adjectives: ["happy", "sad", "tired", "hungry", "angry", "cold", "hot", "bored", "excited", "scared", "sleepy", "thirsty"],
  places: ["at school", "at home", "in the park", "in the garden", "at the shop", "in the classroom"],
  
  animals: ["dog", "cat", "bird", "fish", "mouse", "elephant", "lion", "tiger"],
  things: ["book", "pen", "desk", "chair", "bag", "box", "car", "bike"],
  foods: ["apple", "banana", "egg", "orange", "ice cream"],
  
  actions: ["run", "jump", "swim", "fly", "read", "write", "dance", "sing"],
  
  body_parts: ["hand", "foot", "eye", "ear", "nose", "mouth", "head", "arm"],
  
  family: ["brother", "sister", "mother", "father", "uncle", "aunt"],
  
  nouns_a: ["book", "cat", "dog", "car", "pen", "desk", "chair", "bag", "bike", "house"],
  nouns_an: ["apple", "orange", "elephant", "egg", "umbrella", "hour", "ice cream", "uncle", "island"]
};

// Grammatik-Regel-Generatoren
const GRAMMAR_GENERATORS = {
  
  // 1. TO BE - AFFIRMATIVE
  to_be_affirmative: () => {
    const type = Math.random() < 0.5 ? 'singular' : 'plural';
    
    if (type === 'singular') {
      const subj = WORD_POOLS.subjects_singular[Math.floor(Math.random() * WORD_POOLS.subjects_singular.length)];
      const adj = WORD_POOLS.adjectives[Math.floor(Math.random() * WORD_POOLS.adjectives.length)];
      return { q: `${subj} ___ ${adj}.`, options: ["is", "are"], a: "is" };
    } else {
      const subj = WORD_POOLS.subjects_plural[Math.floor(Math.random() * WORD_POOLS.subjects_plural.length)];
      const adj = WORD_POOLS.adjectives[Math.floor(Math.random() * WORD_POOLS.adjectives.length)];
      return { q: `${subj} ___ ${adj}.`, options: ["is", "are"], a: "are" };
    }
  },
  
  // 2. TO BE - NEGATIVE
  to_be_negative: () => {
    const type = Math.random() < 0.5 ? 'singular' : 'plural';
    
    if (type === 'singular') {
      const subj = WORD_POOLS.subjects_singular[Math.floor(Math.random() * WORD_POOLS.subjects_singular.length)];
      const place = WORD_POOLS.places[Math.floor(Math.random() * WORD_POOLS.places.length)];
      return { q: `${subj} ___ ${place}.`, options: ["isn't", "aren't"], a: "isn't" };
    } else {
      const subj = WORD_POOLS.subjects_plural[Math.floor(Math.random() * WORD_POOLS.subjects_plural.length)];
      const adj = WORD_POOLS.adjectives[Math.floor(Math.random() * WORD_POOLS.adjectives.length)];
      return { q: `${subj} ___ ${adj}.`, options: ["isn't", "aren't"], a: "aren't" };
    }
  },
  
  // 3. THERE IS / THERE ARE
  there_is_are: () => {
    const type = Math.random() < 0.5 ? 'singular' : 'plural';
    
    if (type === 'singular') {
      const thing = WORD_POOLS.things[Math.floor(Math.random() * WORD_POOLS.things.length)];
      const place = WORD_POOLS.places[Math.floor(Math.random() * WORD_POOLS.places.length)];
      return { q: `There ___ a ${thing} ${place}.`, options: ["is", "are"], a: "is" };
    } else {
      const num = Math.floor(Math.random() * 5) + 2; // 2-6
      const thing = WORD_POOLS.things[Math.floor(Math.random() * WORD_POOLS.things.length)];
      return { q: `There ___ ${num} ${thing}s here.`, options: ["is", "are"], a: "are" };
    }
  },
  
  // 4. PLURAL NOUNS
  plurals: () => {
    const irregular = [
      { singular: "child", plural: "children", wrong: "childs" },
      { singular: "man", plural: "men", wrong: "mans" },
      { singular: "woman", plural: "women", wrong: "womans" },
      { singular: "tooth", plural: "teeth", wrong: "tooths" },
      { singular: "foot", plural: "feet", wrong: "foots" },
      { singular: "mouse", plural: "mice", wrong: "mouses" },
      { singular: "fish", plural: "fish", wrong: "fishes" },
      { singular: "sheep", plural: "sheep", wrong: "sheeps" }
    ];
    
    const item = irregular[Math.floor(Math.random() * irregular.length)];
    const num = Math.floor(Math.random() * 5) + 2; // 2-6
    
    return { 
      q: `${num} ___ (${item.singular})`, 
      options: [item.plural, item.wrong], 
      a: item.plural 
    };
  },
  
  // 5. HAVE GOT / HAVEN'T GOT
  have_got: () => {
    const type = Math.random() < 0.5 ? 'has' : 'have';
    
    if (type === 'has') {
      const subj = WORD_POOLS.subjects_he[Math.floor(Math.random() * WORD_POOLS.subjects_he.length)];
      const thing = WORD_POOLS.things[Math.floor(Math.random() * WORD_POOLS.things.length)];
      return { q: `${subj} ___ got a ${thing}.`, options: ["has", "have"], a: "has" };
    } else {
      const subj = WORD_POOLS.subjects_plural[Math.floor(Math.random() * WORD_POOLS.subjects_plural.length)];
      const thing = WORD_POOLS.things[Math.floor(Math.random() * WORD_POOLS.things.length)];
      return { q: `${subj} ___ got a ${thing}.`, options: ["has", "have"], a: "have" };
    }
  },
  
  // 6. HAVE / HAS
  have_has: () => {
    const type = Math.random() < 0.5 ? 'has' : 'have';
    
    if (type === 'has') {
      const subj = WORD_POOLS.subjects_she[Math.floor(Math.random() * WORD_POOLS.subjects_she.length)];
      const thing = WORD_POOLS.things[Math.floor(Math.random() * WORD_POOLS.things.length)];
      return { q: `${subj} ___ a new ${thing}.`, options: ["has", "have"], a: "has" };
    } else {
      const subj = WORD_POOLS.subjects_plural[Math.floor(Math.random() * WORD_POOLS.subjects_plural.length)];
      const thing = WORD_POOLS.things[Math.floor(Math.random() * WORD_POOLS.things.length)];
      return { q: `${subj} ___ a ${thing}.`, options: ["has", "have"], a: "have" };
    }
  },
  
  // 7. POSSESSIVES
  possessives: () => {
    const types = [
      { name: "Tom", gender: "his" },
      { name: "Sarah", gender: "her" },
      { name: "Max", gender: "his" },
      { name: "Anna", gender: "her" },
      { name: "Paul", gender: "his" },
      { name: "Lisa", gender: "her" }
    ];
    
    const person = types[Math.floor(Math.random() * types.length)];
    const thing = WORD_POOLS.things[Math.floor(Math.random() * WORD_POOLS.things.length)];
    const wrongGender = person.gender === "his" ? "her" : "his";
    
    return { 
      q: `This is ___ ${thing}. (${person.name})`, 
      options: [person.gender, wrongGender], 
      a: person.gender 
    };
  },
  
  // 8. CAN / CAN'T (mit eindeutigem Kontext!)
  can_cant: () => {
    const contexts = [
      { context: "The bag is very heavy.", subject: "He", answer: "can't", action: "carry it" },
      { context: "She is only 2 years old.", subject: "She", answer: "can't", action: "read" },
      { context: "I broke my leg.", subject: "I", answer: "can't", action: "run" },
      { context: "Birds have wings.", subject: "They", answer: "can", action: "fly" },
      { context: "Fish live in water.", subject: "They", answer: "can", action: "swim" },
      { context: "He has no bike.", subject: "He", answer: "can't", action: "ride to school" },
      { context: "She is very strong.", subject: "She", answer: "can", action: "lift it" },
      { context: "Dogs are good swimmers.", subject: "They", answer: "can", action: "swim" },
      { context: "I have no money.", subject: "I", answer: "can't", action: "buy it" },
      { context: "We know the answer.", subject: "We", answer: "can", action: "help you" },
      { context: "Cats have no wings.", subject: "They", answer: "can't", action: "fly" },
      { context: "He is deaf.", subject: "He", answer: "can't", action: "hear you" },
      { context: "The door is locked.", subject: "We", answer: "can't", action: "open it" },
      { context: "She has a key.", subject: "She", answer: "can", action: "unlock the door" },
      { context: "It's very dark.", subject: "I", answer: "can't", action: "see" },
      { context: "He is a doctor.", subject: "He", answer: "can", action: "help sick people" }
    ];
    
    const ctx = contexts[Math.floor(Math.random() * contexts.length)];
    return { 
      q: `${ctx.context} ${ctx.subject} ___ ${ctx.action}.`, 
      options: ["can", "can't"], 
      a: ctx.answer 
    };
  },
  
  // 9. A / AN
  a_an: () => {
    const type = Math.random() < 0.5 ? 'a' : 'an';
    
    if (type === 'a') {
      const noun = WORD_POOLS.nouns_a[Math.floor(Math.random() * WORD_POOLS.nouns_a.length)];
      return { q: `This is ___ ${noun}.`, options: ["a", "an"], a: "a" };
    } else {
      const noun = WORD_POOLS.nouns_an[Math.floor(Math.random() * WORD_POOLS.nouns_an.length)];
      return { q: `This is ___ ${noun}.`, options: ["a", "an"], a: "an" };
    }
  }
};

// Hauptfunktion: Generiere zufällige Grammatik-Aufgaben
function getGrammarTasks(amount = 20) {
  const generators = Object.keys(GRAMMAR_GENERATORS);
  let tasks = [];
  
  for (let i = 0; i < amount; i++) {
    // Wähle zufälligen Generator
    const randomGenerator = generators[Math.floor(Math.random() * generators.length)];
    // Generiere Aufgabe
    const task = GRAMMAR_GENERATORS[randomGenerator]();
    tasks.push(task);
  }
  
  return tasks;
}

// Für Kompatibilität
function getGrammarForUnit(unit) {
  return getGrammarTasks(20);
}

// ========================================
// ERWEITERUNGS-ANLEITUNG
// ========================================
// Um neue Grammatik-Regeln hinzuzufügen:
//
// 1. Füge neue Wortlisten zu WORD_POOLS hinzu (falls nötig)
// 2. Erstelle neuen Generator in GRAMMAR_GENERATORS:
//
//    new_rule: () => {
//      // Deine Logik hier
//      return { q: "Frage", options: ["opt1", "opt2"], a: "opt1" };
//    }
//
// 3. Fertig! Der Generator wird automatisch verwendet
//
// Beispiel für Simple Present:
//    simple_present: () => {
//      const subj = ["he", "she", "it"][Math.floor(Math.random() * 3)];
//      const verb = ["play", "work", "study"][Math.floor(Math.random() * 3)];
//      return { q: `${subj} ___ football.`, options: [verb+"s", verb], a: verb+"s" };
//    }
