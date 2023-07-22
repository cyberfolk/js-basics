/* Snack 4 (sia con for che con while):
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. */

let guest = ["Nick Carraway", "Daisy Buchanan", "Tom Buchanan", "Myrtle Wilson", "Jordan Baker", "Meyer Wolfsheim", "George Wilson", "Trimalcione", "Henry C. Gatz", "42"];

const user = prompt("inseirici il tuo nome");
let present = false;

/* For loop ............................. */
for (let i = 0; i < guest.length; i++) {
  if (user === guest[i]) {
    present = true;
  }
}

/* While loop ............................ */
/* let i = 0;
while (i < guest.length) {
  if (user === guest[i]) {
    present = true;
  }
  i++;
} */

if (present === true) {
  console.log("Sei sulla lista entra pure");
} else {
  console.log("Via di qui, NON sei sulla lista");
}
