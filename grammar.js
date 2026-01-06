/* ===============================
   GRAMMAR POOL – SCHOOL BASED
   unendlich, eindeutig, klickbar
================================ */

const GRAMMAR_RULES = [

  /* ===== TO BE – AFFIRMATIVE ===== */
  () => ({
    q: "She ___ happy.",
    options: ["is", "are"],
    a: "is"
  }),
  () => ({
    q: "They ___ at school.",
    options: ["is", "are"],
    a: "are"
  }),

  /* ===== TO BE – NEGATIVE ===== */
  () => ({
    q: "He ___ tired.",
    options: ["isn't", "aren't"],
    a: "isn't"
  }),
  () => ({
    q: "We ___ late.",
    options: ["aren't", "isn't"],
    a: "aren't"
  }),

  /* ===== THERE IS / THERE ARE ===== */
  () => ({
    q: "There ___ a dog in the park.",
    options: ["is", "are"],
    a: "is"
  }),
  () => ({
    q: "There ___ two books on the desk.",
    options: ["is", "are"],
    a: "are"
  }),

  /* ===== PLURAL NOUNS ===== */
  () => ({
    q: "Two ___ (child).",
    options: ["children", "childs"],
    a: "children"
  }),
  () => ({
    q: "Three ___ (box).",
    options: ["boxes", "boxs"],
    a: "boxes"
  }),

  /* ===== IRREGULAR PLURALS ===== */
  () => ({
    q: "Two ___ (man).",
    options: ["men", "mans"],
    a: "men"
  }),
  () => ({
    q: "Three ___ (mouse).",
    options: ["mice", "mouses"],
    a: "mice"
  }),

  /* ===== HAVE GOT / HAVEN'T GOT ===== */
  () => ({
    q: "She ___ got a bike.",
    options: ["has", "have"],
    a: "has"
  }),
  () => ({
    q: "They ___ got a dog.",
    options: ["have", "has"],
    a: "have"
  }),
  () => ({
    q: "He ___ got a sister.",
    options: ["hasn't", "haven't"],
    a: "hasn't"
  }),

  /* ===== HAVE / HAS ===== */
  () => ({
    q: "She ___ lunch at school.",
    options: ["has", "have"],
    a: "has"
  }),
  () => ({
    q: "We ___ English today.",
    options: ["have", "has"],
    a: "have"
  }),

  /* ===== POSSESSIVES ===== */
  () => ({
    q: "This is ___ bag. (Tom)",
    options: ["his", "her"],
    a: "his"
  }),
  () => ({
    q: "She likes ___ dog.",
    options: ["her", "his"],
    a: "her"
  }),

  /* ===== CAN / CAN’T – MIT KONTEXT ===== */
  () => ({
    q: "The bag is very heavy. He ___ carry it.",
    options: ["can", "can't"],
    a: "can't"
  }),
  () => ({
    q: "She practices every day. She ___ swim very well.",
    options: ["can", "can't"],
    a: "can"
  }),

  /* ===== A / AN ===== */
  () => ({
    q: "This is ___ apple.",
    options: ["a", "an"],
    a: "an"
  }),
  () => ({
    q: "He has ___ bike.",
    options: ["a", "an"],
    a: "a"
  })
];

/* ===============================
   MAIN ACCESS FUNCTION
   returns e.g. 20 random tasks
================================ */

function getGrammarForUnit(unitIgnored, amount = 20) {
  let tasks = [];

  while (tasks.length < amount) {
    const rule =
      GRAMMAR_RULES[Math.floor(Math.random() * GRAMMAR_RULES.length)];
    tasks.push(rule());
  }

  return shuffle(tasks);
}

/* ===============================
   HELPER
================================ */

function shuffle(arr) {
  return arr
    .map(v => ({ v, r: Math.random() }))
    .sort((a, b) => a.r - b.r)
    .map(o => o.v);
}
