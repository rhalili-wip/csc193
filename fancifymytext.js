/*  Test alert you asked for (leave commented once you’ve tested)
alert("Hello, world!");
*/

/* 1 — “Bigger!” button: make the text 24 pt */
function makeBigger() {
    document.getElementById("textInput").style.fontSize = "24pt";
  }
  
  /* 2 — Radio buttons: apply/remove fancy styles */
  function changeStyle() {
    const txt  = document.getElementById("textInput");
    const fancy = document.getElementById("fancy").checked;
  
    if (fancy) {
      txt.style.fontWeight      = "bold";
      txt.style.color           = "blue";
      txt.style.textDecoration  = "underline";
    } else {
      txt.style.fontWeight      = "normal";
      txt.style.color           = "black";
      txt.style.textDecoration  = "none";
    }
  }
  
  /* 3 — “Moo” button: uppercase text and add “‑Moo” */
  function moo() {
    const txtArea = document.getElementById("textInput");
    let text = txtArea.value.toUpperCase();
  
    /* add “-Moo” to the last word of each sentence */
    const sentences = text.split(".");
    for (let i = 0; i < sentences.length - 1; i++) {  // ignore the empty piece after last period
      const words = sentences[i].trim().split(" ");
      if (words.length > 0 && words[0] !== "") {
        words[words.length - 1] += "-Moo";
        sentences[i] = words.join(" ");
      }
    }
    txtArea.value = sentences.join(". ");
  }
  