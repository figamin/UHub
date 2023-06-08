var texts = [
    '\"Wherever I go, I\'ll never be bashful about being from UMass, baby.\" - Victor Cruz',
    '\"Frank > Woo\"',
    '\"I miss Coolidge girl\"',
    '\"When\'s blarney?\"',
    '\"Like yikyak if it was actually good\"',
    '\"Home of the Isenbro\"',
    '\"You can get pretty far with one swipe and a backpack\"',
    '\"Certified hockey school\"',
    '\"Here for the tailgates, not the football\"'
  ];
              var element = document.getElementById("randomQuote");
              element.innerHTML = texts[Math.floor(Math.random()*texts.length)];
  
  