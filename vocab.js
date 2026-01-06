const VOCAB = {

  unit1: {
    title: "Unit 1 – Classroom & Clothes",
    words: [
      // classroom
      { en: "door", de: "Tür" },
      { en: "window", de: "Fenster" },
      { en: "board", de: "Tafel" },
      { en: "desk", de: "Schreibtisch" },
      { en: "chair", de: "Stuhl" },
      { en: "floor", de: "Boden" },
      { en: "scissors", de: "Schere" },
      { en: "tablet", de: "Tablet" },
      { en: "pen", de: "Stift" },
      { en: "exercise book", de: "Heft" },
      { en: "school bag", de: "Schultasche" },
      { en: "pencil case", de: "Federpennal" },
      { en: "glue stick", de: "Klebestift" },
      { en: "pencil sharpener", de: "Spitzer" },

      // clothes
      { en: "shirt", de: "Hemd" },
      { en: "skirt", de: "Rock" },
      { en: "sweater", de: "Pullover" },
      { en: "shoe", de: "Schuh" },
      { en: "socks", de: "Socken" },
      { en: "hat", de: "Hut" },
      { en: "sunglasses", de: "Sonnenbrille" }
    ]
  },

  unit2: {
    title: "Unit 2 – Wildlife Park",
    words: [
      { en: "zoo", de: "Zoo" },
      { en: "lion", de: "Löwe" },
      { en: "monkey", de: "Affe" },
      { en: "giraffe", de: "Giraffe" },
      { en: "penguin", de: "Pinguin" },
      { en: "parrot", de: "Papagei" },
      { en: "tree", de: "Baum" },
      { en: "train", de: "Zug" },
      { en: "guide", de: "Führer" },

      // prepositions
      { en: "in", de: "in" },
      { en: "on", de: "auf" },
      { en: "under", de: "unter" },
      { en: "behind", de: "hinter" },
      { en: "next to", de: "neben" },
      { en: "in front of", de: "vor" }
    ]
  },

  unit3: {
    title: "Unit 3 – Pirates",
    words: [
      { en: "pirate", de: "Pirat" },
      { en: "ship", de: "Schiff" },
      { en: "sea", de: "Meer" },
      { en: "treasure", de: "Schatz" },
      { en: "hook", de: "Haken" },
      { en: "wooden leg", de: "Holzbein" },
      { en: "captain", de: "Kapitän" },
      { en: "strong", de: "stark" },
      { en: "tired", de: "müde" },
      { en: "dream", de: "Traum" },
      { en: "bed", de: "Bett" },
      { en: "real", de: "echt" },
      { en: "wrong", de: "falsch" },
      { en: "true", de: "wahr" }
    ]
  },

  unit4: {
    title: "Unit 4 – Feelings & Time",
    words: [
      // feelings
      { en: "happy", de: "glücklich" },
      { en: "sad", de: "traurig" },
      { en: "angry", de: "wütend" },
      { en: "scared", de: "ängstlich" },
      { en: "bored", de: "gelangweilt" },
      { en: "excited", de: "aufgeregt" },
      { en: "hungry", de: "hungrig" },
      { en: "tired", de: "müde" },

      // time
      { en: "morning", de: "Morgen" },
      { en: "lunchtime", de: "Mittag" },
      { en: "afternoon", de: "Nachmittag" },
      { en: "evening", de: "Abend" },
      { en: "night", de: "Nacht" },

      // days
      { en: "Monday", de: "Montag" },
      { en: "Tuesday", de: "Dienstag" },
      { en: "Wednesday", de: "Mittwoch" },
      { en: "Thursday", de: "Donnerstag" },
      { en: "Friday", de: "Freitag" },
      { en: "Saturday", de: "Samstag" }
    ]
  },

  unit5: {
    title: "Unit 5 – Music & People",
    words: [
      { en: "band", de: "Band" },
      { en: "singer", de: "Sänger" },
      { en: "keyboard", de: "Keyboard" },
      { en: "guitar", de: "Gitarre" },
      { en: "concert", de: "Konzert" },
      { en: "job", de: "Job" },
      { en: "perfect", de: "perfekt" },
      { en: "carry", de: "tragen" },
      { en: "drink", de: "trinken" },
      { en: "hundred", de: "hundert" },
      { en: "teacher", de: "Lehrer" },
      { en: "uncle", de: "Onkel" }
    ]
  },

  unit6: {
    title: "Unit 6 – Around Town",
    words: [
      { en: "city", de: "Stadt" },
      { en: "park", de: "Park" },
      { en: "street", de: "Straße" },
      { en: "river", de: "Fluss" },
      { en: "market", de: "Markt" },
      { en: "woods", de: "Wald" },

      // verbs
      { en: "to climb", de: "klettern" },
      { en: "to jump", de: "springen" },
      { en: "to leave", de: "verlassen" },
      { en: "to run", de: "rennen" },
      { en: "to pull", de: "ziehen" },
      { en: "to find", de: "finden" }
    ]
  },

  unit7: {
    title: "Unit 7 – Food & Eating",
    words: [
      { en: "breakfast", de: "Frühstück" },
      { en: "lunch", de: "Mittagessen" },
      { en: "dinner", de: "Abendessen" },
      { en: "fruit", de: "Obst" },
      { en: "vegetables", de: "Gemüse" },
      { en: "meat", de: "Fleisch" },
      { en: "fish", de: "Fisch" },
      { en: "rice", de: "Reis" },
      { en: "soup", de: "Suppe" },
      { en: "bread", de: "Brot" },
      { en: "always", de: "immer" },
      { en: "often", de: "oft" },
      { en: "sometimes", de: "manchmal" },
      { en: "never", de: "nie" }
    ]
  }

};

// WICHTIG: Diese Funktion hat gefehlt!
function getVocabForUnit(unit) {
  if (unit === "all") {
    // Alle Vokabeln aus allen Units sammeln
    return Object.values(VOCAB).flatMap(u => u.words);
  }
  
  // Spezifische Unit
  const unitKey = "unit" + unit;
  return VOCAB[unitKey] ? VOCAB[unitKey].words : [];
}
