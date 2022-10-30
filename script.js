const phrases = [
  ["I Approve!"],
  ["Good Stuff!"],
  ["Yes!"],
  ["Looks Good To Me!", ".12px"],
  ["Correct!"],
  ["Nice Work!"],
  ["You Got It!"],
];

function genText() {
  let t = phrases[Math.floor(Math.random() * phrases.length)];
  document.getElementById("seal_speech").textContent = t[0];
  if (t.length > 1) {
    document.getElementById("seal_speech").style.fontSize=t[1];
  }
}

document.getElementById("another").onclick = genText

genText()
