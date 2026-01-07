// grammar.js
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

  body_parts: ["hand", "foot", "eye", "ear", "nose", "mouth", "head", "arm"],

  family: ["brother", "sister", "mother", "father", "uncle", "aunt"],

  nouns_a: ["book", "cat", "dog", "car", "pen", "desk", "chair", "bag", "bike", "house"],
  nouns_an: ["apple", "orange", "elephant", "egg", "umbrella", "hour", "ice cream", "uncle", "island"]
};

const GRAMMAR_GENERATORS = {

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

function getGrammarTasks(amount = 20) {
  const generators = Object.keys(GRAMMAR_GENERATORS);
  let tasks = [];

  for (let i = 0; i < amount; i++) {
    const randomGenerator = generators[Math.floor(Math.random() * generators.length)];
    const task = GRAMMAR_GENERATORS[randomGenerator]();
    tasks.push(task);
  }

  return tasks;
}

function getGrammarForUnit(unit) {
  // For now just returns a set of tasks (keeps compatibility)
  return getGrammarTasks(20);
}
