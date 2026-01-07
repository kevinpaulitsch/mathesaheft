// grammar.js
// keine Mehrdeutigkeiten, immer genau eine richtige Lösung

const GRAMMAR_POOL = [
  {q:"Fish live in water. They ___ swim.", a:"can", o:["can","can't"]},
  {q:"Cats have no wings. They ___ fly.", a:"can't", o:["can","can't"]},
  {q:"Birds have wings. They ___ fly.", a:"can", o:["can","can't"]},
  {q:"She is two years old. She ___ drive a car.", a:"can't", o:["can","can't"]},

  {q:"Tom ___ happy today.", a:"is", o:["is","are"]},
  {q:"My friends ___ at school.", a:"are", o:["is","are"]},

  {q:"There ___ three apples on the table.", a:"are", o:["is","are"]},
  {q:"There ___ a cat in the garden.", a:"is", o:["is","are"]},

  {q:"This is ___ apple.", a:"an", o:["a","an"]},
  {q:"This is ___ dog.", a:"a", o:["a","an"]},

  {q:"She ___ a new bike.", a:"has", o:["has","have"]},
  {q:"They ___ two dogs.", a:"have", o:["has","have"]}
];

window.getGrammarTasks = function(amount=20){
  const out=[];
  for(let i=0;i<amount;i++){
    const t=GRAMMAR_POOL[Math.floor(Math.random()*GRAMMAR_POOL.length)];
    out.push({q:t.q, a:t.a, options:[...t.o]});
  }
  return out;
};
