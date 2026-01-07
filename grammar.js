// grammar.js
// Grammatik bewusst NICHT nach Units getrennt
// Alle Aufgaben sind logisch eindeutig (keine Doppellösungen)

const GRAMMAR_TASKS = [

  // CAN / CAN'T – eindeutige Fakten
  () => ({
    q: "Fish live in water. They ___ swim.",
    options: ["can", "can't"],
    a: "can"
  }),

  () => ({
    q: "Cats have no wings. They ___ fly.",
    options: ["can", "can't"],
    a: "can't"
  }),

  () => ({
    q: "She is two years old. She ___ drive a car.",
    options: ["can", "can't"],
    a: "can't"
  }),

  () => ({
    q: "Birds have wings. They ___ fly.",
    options: ["can", "can't"],
    a: "can"
  }),

  // TO BE
  () => ({
    q: "Tom ___ happy today.",
    options: ["is", "are"],
    a: "is"
  }),

  () => ({
    q: "My friends ___ at school.",
    options: ["is", "are"],
    a: "are"
  }),

  // THERE IS / ARE
  () => ({
    q: "There ___ three apples on the table.",
    options: ["is", "are"],
    a: "are"
  }),

  () => ({
    q: "There ___ a cat in the garden.",
    options: ["is", "are"],
    a: "is"
  }),

  // A / AN – phonetisch eindeutig
  () => ({
    q: "This is ___ apple.",
    options: ["a", "an"],
    a: "an"
  }),

  () => ({
    q: "This is ___ dog.",
    options: ["a", "an"],
    a: "a"
  }),

  // HAVE / HAS
  () => ({
    q: "She ___ a new bike.",
    options: ["has", "have"],
    a: "has"
  }),

  () => ({
    q: "They ___ two dogs.",
    options: ["has", "have"],
    a: "have"
  })
];

// Randomisierte Abfrage
function getGrammarTasks(amount = 20) {
  const tasks = [];
  for (let i = 0; i < amount; i++) {
    const gen = GRAMMAR_TASKS[Math.floor(Math.random() * GRAMMAR_TASKS.length)];
    tasks.push(gen());
  }
  return tasks;
}
