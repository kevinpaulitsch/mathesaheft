const GRAMMAR = {

  1: [
    { q: "___ the door, please.", options: ["Open", "Opens"], a: "Open" },
    { q: "___ down, please.", options: ["Sit", "Sits"], a: "Sit" },
    { q: "This is ___ desk.", options: ["a", "an"], a: "a" },
    { q: "I have ___ pencil case.", options: ["a", "an"], a: "a" },
    { q: "Look ___ the board.", options: ["at", "in"], a: "at" },
    { q: "___ quiet, please.", options: ["Be", "Is"], a: "Be" },
    { q: "Open ___ window.", options: ["the", "a"], a: "the" },
    { q: "Take ___ your books.", options: ["out", "off"], a: "out" },
    { q: "Don't ___ up.", options: ["stand", "stands"], a: "stand" },
    { q: "Clean ___ board.", options: ["the", "a"], a: "the" },
    { q: "Write ___ name.", options: ["your", "you"], a: "your" },
    { q: "___ your bag under the desk.", options: ["Put", "Puts"], a: "Put" }
  ],

  2: [
    { q: "The monkey is ___ the tree.", options: ["in", "on"], a: "in" },
    { q: "The lion is ___ the rock.", options: ["on", "under"], a: "on" },
    { q: "The penguin is ___ the water.", options: ["in", "on"], a: "in" },
    { q: "The train is ___ the zoo.", options: ["at", "in"], a: "at" },
    { q: "The parrot is ___ the monkeys.", options: ["next to", "under"], a: "next to" },
    { q: "The tree is ___ the house.", options: ["in front of", "under"], a: "in front of" },
    { q: "There ___ a lion.", options: ["is", "are"], a: "is" },
    { q: "There ___ two monkeys.", options: ["is", "are"], a: "are" },
    { q: "___ is the giraffe?", options: ["Where", "What"], a: "Where" },
    { q: "The chair is ___ the desk.", options: ["behind", "under"], a: "behind" },
    { q: "The cat is ___ the box.", options: ["in", "on"], a: "in" },
    { q: "The ball is ___ the table.", options: ["on", "in"], a: "on" }
  ],

  3: [
    { q: "He ___ a pirate.", options: ["is", "are"], a: "is" },
    { q: "They ___ pirates.", options: ["is", "are"], a: "are" },
    { q: "He ___ got a ship.", options: ["has", "have"], a: "has" },
    { q: "They ___ got treasure.", options: ["has", "have"], a: "have" },
    { q: "The pirate is very ___.", options: ["strong", "strongly"], a: "strong" },
    { q: "She ___ scared.", options: ["is", "are"], a: "is" },
    { q: "The pirates ___ famous.", options: ["is", "are"], a: "are" },
    { q: "His leg ___ wooden.", options: ["is", "are"], a: "is" },
    { q: "This ___ Blackbeard.", options: ["is", "are"], a: "is" },
    { q: "They ___ on the ship.", options: ["is", "are"], a: "are" },
    { q: "He ___ tall.", options: ["is", "are"], a: "is" },
    { q: "The ship ___ big.", options: ["is", "are"], a: "is" }
  ],

  4: [
    { q: "It is ___ morning.", options: ["in", "at"], a: "in" },
    { q: "We go to bed ___ night.", options: ["at", "in"], a: "at" },
    { q: "I get up ___ seven.", options: ["at", "in"], a: "at" },
    { q: "She is ___ home.", options: ["at", "in"], a: "at" },
    { q: "We have lunch ___ twelve.", options: ["at", "in"], a: "at" },
    { q: "It is ___ afternoon.", options: ["in", "at"], a: "in" },
    { q: "He is ___ school.", options: ["at", "in"], a: "at" },
    { q: "___ you OK?", options: ["Are", "Is"], a: "Are" },
    { q: "She ___ asleep.", options: ["is", "are"], a: "is" },
    { q: "It is ___ early.", options: ["very", "much"], a: "very" },
    { q: "The sun ___ out.", options: ["is", "are"], a: "is" },
    { q: "I am ___ tired.", options: ["very", "much"], a: "very" }
  ],

  5: [
    { q: "She ___ play the guitar.", options: ["can", "can't"], a: "can" },
    { q: "He ___ sing.", options: ["can", "can't"], a: "can't" },
    { q: "They ___ dance.", options: ["can", "can't"], a: "can" },
    { q: "I ___ swim.", options: ["can", "can't"], a: "can" },
    { q: "She ___ play the drums.", options: ["can", "can't"], a: "can" },
    { q: "He ___ carry the guitar.", options: ["can", "can't"], a: "can" },
    { q: "We ___ go to the concert.", options: ["can", "can't"], a: "can" },
    { q: "She ___ touch her nose.", options: ["can", "can't"], a: "can" },
    { q: "He ___ stand on his head.", options: ["can", "can't"], a: "can" },
    { q: "They ___ sing well.", options: ["can", "can't"], a: "can" },
    { q: "I ___ play the piano.", options: ["can", "can't"], a: "can't" },
    { q: "She ___ dance.", options: ["can", "can't"], a: "can" }
  ],

  6: [
    { q: "He runs ___ the street.", options: ["down", "in"], a: "down" },
    { q: "The dog looks ___ the mirror.", options: ["in", "at"], a: "in" },
    { q: "They go ___ the park.", options: ["to", "at"], a: "to" },
    { q: "He climbs ___ a tree.", options: ["up", "on"], a: "up" },
    { q: "She jumps ___ the river.", options: ["into", "on"], a: "into" },
    { q: "He runs ___ of the office.", options: ["out", "in"], a: "out" },
    { q: "The dog picks ___ the hat.", options: ["up", "on"], a: "up" },
    { q: "They leave ___ office.", options: ["the", "a"], a: "the" },
    { q: "He looks ___ something.", options: ["for", "at"], a: "for" },
    { q: "She pulls the dog ___.", options: ["back", "down"], a: "back" },
    { q: "They wait ___ the park.", options: ["in", "at"], a: "at" },
    { q: "He comes ___ home.", options: ["to", "at"], a: "to" }
  ],

  7: [
    { q: "I ___ eat meat.", options: ["never", "always"], a: "never" },
    { q: "We ___ have breakfast at 7.", options: ["usually", "never"], a: "usually" },
    { q: "She ___ eats vegetables.", options: ["often", "never"], a: "often" },
    { q: "They ___ drink milk.", options: ["sometimes", "never"], a: "sometimes" },
    { q: "He ___ eats fruit.", options: ["often", "never"], a: "often" },
    { q: "We ___ have lunch at school.", options: ["usually", "never"], a: "usually" },
    { q: "I ___ eat sweets.", options: ["sometimes", "always"], a: "sometimes" },
    { q: "She ___ drinks water.", options: ["always", "never"], a: "always" },
    { q: "They ___ eat fast food.", options: ["often", "never"], a: "never" },
    { q: "He ___ has dinner at 6.", options: ["usually", "never"], a: "usually" },
    { q: "I ___ eat vegetables.", options: ["often", "never"], a: "often" },
    { q: "We ___ cook at home.", options: ["often", "never"], a: "often" }
  ]
};

function getGrammarForUnit(unit) {
  if (unit === "all") {
    return Object.values(GRAMMAR).flat();
  }
  return GRAMMAR[unit] || [];
}
