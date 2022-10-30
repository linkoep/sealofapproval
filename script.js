const phrases = [
  "I Approve!",
  "Good Stuff!",
  "Yes!",
  "Looks Good To Me",
  "Correct!"
];

document.getElementById("seal_speech").textContent = phrases[Math.floor(Math.random() * phrases.length)];
