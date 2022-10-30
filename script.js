const phrases = [
  ["I Approve!"],
  ["Good Stuff!"],
  ["Yes!"],
  ["Looks Good To Me", ".12px"],
  ["Correct!"]
];

let t = phrases[Math.floor(Math.random() * phrases.length)];
document.getElementById("seal_speech").textContent = t[0];
if (t.length > 1) {
  document.getElementById("seal_speech").style.fontsize=text[1]
}
