const GRAMMAR = {

  1: [
    { q: "___ the door, please. (Open / Opens)", a: "Open" },
    { q: "___ down, please. (Sit / Sits)", a: "Sit" },
    { q: "This is ___ desk. (a / an)", a: "a" },
    { q: "I have ___ pencil case. (a / an)", a: "a" },
    { q: "Look ___ the board. (at / in)", a: "at" },
    { q: "___ quiet, please. (Be / Is)", a: "Be" },
    { q: "Open ___ window. (the / a)", a: "the" },
    { q: "Take ___ your books. (out / off)", a: "out" },
    { q: "Don’t ___ up. (stand / stands)", a: "stand" },
    { q: "Clean ___ board. (the / a)", a: "the" },
    { q: "Write ___ name. (your / you)", a: "your" },
    { q: "___ your bag under the desk. (Put / Puts)", a: "Put" }
  ],

  2: [
    { q: "The monkey is ___ the tree. (in / on)", a: "in" },
    { q: "The lion is ___ the rock. (on / under)", a: "on" },
    { q: "The penguin is ___ the water. (in / on)", a: "in" },
    { q: "The train is ___ the zoo. (at / in)", a: "at" },
    { q: "The parrot is ___ the monkeys. (next to / under)", a: "next to" },
    { q: "The tree is ___ the house. (in front of / under)", a: "in front of" },
    { q: "There ___ a lion. (is / are)", a: "is" },
    { q: "There ___ two monkeys. (is / are)", a: "are" },
    { q: "___ is the giraffe? (Where / What)", a: "Where" },
    { q: "The chair is ___ the desk. (behind / under)", a: "behind" },
    { q: "The cat is ___ the box. (in / on)", a: "in" },
    { q: "The ball is ___ the table. (on / in)", a: "on" }
  ],

  3: [
    { q: "He ___ a pirate. (is / are)", a: "is" },
    { q: "They ___ pirates. (is / are)", a: "are" },
    { q: "He ___ got a ship. (has / have)", a: "has" },
    { q: "They ___ got treasure. (has / have)", a: "have" },
    { q: "The pirate is very ___. (strong / strongly)", a: "strong" },
    { q: "She ___ scared. (is / are)", a: "is" },
    { q: "The pirates ___ famous. (is / are)", a: "are" },
    { q: "His leg ___ wooden. (is / are)", a: "is" },
    { q: "This ___ Blackbeard. (is / are)", a: "is" },
    { q: "They ___ on the ship. (is / are)", a: "are" },
    { q: "He ___ tall. (is / are)", a: "is" },
    { q: "The ship ___ big. (is / are)", a: "is" }
  ],

  4: [
    { q: "It is ___ morning. (in / at)", a: "in" },
    { q: "We go to bed ___ night. (at / in)", a: "at" },
    { q: "I get up ___ seven. (at / in)", a: "at" },
    { q: "She is ___ home. (at / in)", a: "at" },
    { q: "We have lunch ___ twelve. (at / in)", a: "at" },
    { q: "It is ___ afternoon. (in / at)", a: "in" },
    { q: "He is ___ school. (at / in)", a: "at" },
    { q: "___ you OK? (Are / Is)", a: "Are" },
    { q: "She ___ asleep. (is / are)", a: "is" },
    { q: "It is ___ early. (very / much)", a: "very" },
    { q: "The sun ___ out. (is / are)", a: "is" },
    { q: "I am ___ tired. (very / much)", a: "very" }
  ],

  5: [
    { q: "She ___ play the guitar. (can / can’t)", a: "can" },
    { q: "He ___ sing. (can / can’t)", a: "can’t" },
    { q: "They ___ dance. (can / can’t)", a: "can" },
    { q: "I ___ swim. (can / can’t)", a: "can" },
    { q: "She ___ play the drums. (can / can’t)", a: "can" },
    { q: "He ___ carry the guitar. (can / can’t)", a: "can" },
    { q: "We ___ go to the concert. (can / can’t)", a: "can" },
    { q: "She ___ touch her nose. (can / can’t)", a: "can" },
    { q: "He ___ stand on his head. (can / can’t)", a: "can" },
    { q: "They ___ sing well. (can / can’t)", a: "can" },
    { q: "I ___ play the piano. (can / can’t)", a: "can’t" },
    { q: "She ___ dance. (can / can’t)", a: "can" }
  ],

  6: [
    { q: "He runs ___ the street. (down / in)", a: "down" },
    { q: "The dog looks ___ the mirror. (in / at)", a: "in" },
    { q: "They go ___ the park. (to / at)", a: "to" },
    { q: "He climbs ___ a tree. (up / on)", a: "up" },
    { q: "She jumps ___ the river. (into / on)", a: "into" },
    { q: "He runs ___ of the office. (out / in)", a: "out" },
    { q: "The dog picks ___ the hat. (up / on)", a: "up" },
    { q: "They leave ___ office. (the / a)", a: "the" },
    { q: "He looks ___ something. (for / at)", a: "for" },
    { q: "She pulls the dog ___. (back / down)", a: "back" },
    { q: "They wait ___ the park. (in / at)", a: "at" },
    { q: "He comes ___ home. (to / at)", a: "to" }
  ],

  7: [
    { q: "I ___ eat meat. (never / always)", a: "never" },
    { q: "We ___ have breakfast at 7. (usually / never)", a: "usually" },
    { q: "She ___ eats vegetables. (often / never)", a: "often" },
    { q: "They ___ drink milk. (sometimes / never)", a: "sometimes" },
    { q: "He ___ eats fruit. (often / never)", a: "often" },
    { q: "We ___ have lunch at school. (usually / never)", a: "usually" },
    { q: "I ___ eat sweets. (sometimes / always)", a: "sometimes" },
    { q: "She ___ drinks water. (always / never)", a: "always" },
    { q: "They ___ eat fast food. (often / never)", a: "never" },
    { q: "He ___ has dinner at 6. (usually / never)", a: "usually" },
    { q: "I ___ eat vegetables. (often / never)", a: "often" },
    { q: "We ___ cook at home. (often / never)", a: "often" }
  ]
};

function getGrammarForUnit(unit) {
  if (unit === "all") {
    return Object.values(GRAMMAR).flat();
  }
  return GRAMMAR[unit] || [];
}
