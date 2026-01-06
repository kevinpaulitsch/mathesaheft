const GRAMMAR_RULES=[
()=>({q:"She ___ happy.",options:["is","are"],a:"is"}),
()=>({q:"They ___ at school.",options:["is","are"],a:"are"}),

()=>({q:"He ___ tired.",options:["isn't","aren't"],a:"isn't"}),

()=>({q:"There ___ two books.",options:["is","are"],a:"are"}),

()=>({q:"Two ___ (child).",options:["children","childs"],a:"children"}),

()=>({q:"She ___ got a bike.",options:["has","have"],a:"has"}),

()=>({q:"This is ___ bag. (Tom)",options:["his","her"],a:"his"}),

()=>({q:"The bag is heavy. He ___ carry it.",
options:["can","can't"],a:"can't"}),

()=>({q:"This is ___ apple.",options:["a","an"],a:"an"})
];

function getGrammarTasks(amount=20){
  let t=[];
  while(t.length<amount){
    t.push(GRAMMAR_RULES[Math.floor(Math.random()*GRAMMAR_RULES.length)]());
  }
  return t;
}
