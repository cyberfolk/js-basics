// Select dom element
const formEl = document.querySelector("form");
const statusEl = document.querySelector("#status");
let statuFlag = false;
const DB_MAIL = ["pippo", "pluto", "paperino", "pippo baudo", "pippo_franco", "pippo_calò"];

formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  const tryMail = e.target.tryMail.value;

  for (let i = 0; i < DB_MAIL.length; i++) {
    if (tryMail == DB_MAIL[i]) {
      statuFlag = true;
    }
  }

  if (statuFlag == true) {
    statusEl.innerText = "Sei loggato";
  }
});

formEl.addEventListener("reset", function (e) {
  console.log("ho cliccato su reset");
  // svuto il ticket
  statusEl.innerHTML = "Non sei loggato";
});
