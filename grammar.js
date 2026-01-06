/* ============================
   GRAMMAR ENGINE – MORE! 1
   sauber, erweiterbar, eindeutig
============================ */

const GRAMMAR_TEMPLATES = {

  1: { // Unit 1 – Classroom
    fixed: [
      { q: "___ the door, please.", options: ["Open", "Opens"], a: "Open" },
      { q: "___ quiet, please.", options: ["Be", "Is"], a: "Be" },
      { q: "This is ___ desk.", options: ["a", "an"], a: "a" },
      { q: "Write ___ name.", options: ["your", "you"], a: "your" }
    ]
  },

  2: { // Unit 2 – Prepositions
    fixed: [
      { q: "The monkey is ___ the tree.", options: ["in", "on"], a: "in" },
      { q: "There ___ two lions.", options: ["is", "are"], a: "are" },
      { q: "___ is the giraffe?", options: ["Where", "What"], a: "Where" }
    ]
  },

  3: { // Unit 3 – Pirates
    fixed: [
      { q: "He ___ a pirate.", options: ["is", "are"], a: "is" },
      { q: "They ___ got treasure.", options: ["has", "have"], a: "have" }
    ]
  },

  4: { // Unit 4 – Time
    fixed: [
      { q: "We go to bed ___ night.", options: ["at", "in"], a: "at" },
      { q: "I get up ___ seven.", options: ["at", "in"], a: "at" }
    ]
  },

  5: { // Unit 5 – CAN / CAN'T (JETZT KORREKT!)
    canCant: [
      {
        subject: "He",
        verb: "carry",
        object: "the guitar",
        context: "heavy",
        answer: "can't"
      },
      {
        subject: "She",
        verb: "play",
        object: "the drums",
        context: "can",
        answer: "can"
      },
      {
        subject: "He",
        verb: "sing",
        object: "",
        context: "can't",
        answer: "can't"
      }
    ]
  },

  6: { // Unit 6 – Phrasal verbs
    fixed: [
      { q: "He runs ___ the street.", options: ["down", "in"], a: "down" },
      { q: "The dog looks ___ the mirror.", options: ["in", "at"], a: "in" }
    ]
  },

  7: { // Unit 7 – Adverbs
    fixed: [
      { q: "I ___ eat meat.", options: ["never", "always"], a: "never" },
      { q: "She ___ eats vegetables.", options: ["often", "never"], a: "often" }
    ]
  }
};

/* ============================
   GENERATOR
============================ */

function generateCanCantQuestion(template) {
  let contextSentence = "";

  if (template.context === "heavy") {
    contextSentence = `The ${template.object} is very heavy.`;
  } else if (template.context === "can") {
    contextSentence = `${template.subject} learns every day.`;
  } else if (template.context === "can't") {
    contextSentence = `${template.subject} cannot do it.`;
  }

  return {
    q: `${contextSentence} ${template.subject} ___ ${template.verb} ${template.object}.`,
    options: ["can", "can't"],
    a: template.answer
  };
}

/* ============================
   MAIN FUNCTION
============================ */

function getGrammarForUnit(unit, amount = 20) {
  let pool = [];

  const units = unit === "all"
    ? Object.values(GRAMMAR_TEMPLATES)
    : [GRAMMAR_TEMPLATES[unit]];

  units.forEach(u => {
    if (!u) return;

    if (u.fixed) pool.push(...u.fixed);

    if (u.canCant) {
      u.canCant.forEach(t => {
        pool.push(generateCanCantQuestion(t));
      });
    }
  });

  // 🔀 Randomisieren
  pool = shuffleArray(pool);

  // 🎯 Max. z. B. 20 Aufgaben
  return pool.slice(0, amount);
}

/* ============================
   HELPER
============================ */

function shuffleArray(arr) {
  return arr
    .map(v => ({ v, r: Math.random() }))
    .sort((a, b) => a.r - b.r)
    .map(o => o.v);
}
