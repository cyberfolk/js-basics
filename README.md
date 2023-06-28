# js-social-post

## Brief

Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:

## MILESTONE

- Creiamo il nostro array di oggetti che rappresentano ciascun post.
- Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:

  - id del post, numero progressivo da 1 a n
  - Nome autore,
  - Foto autore,
  - Data in formato americano (mm-gg-yyyy),
  - Testo del post,
  - Immagine (non tutti i post devono avere una immagine),
  - Numero di likes.

Prendendo come riferimento il layout-html di esempio e stampare i post del feed.

## Bonus

1.  Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
2.  Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
3.  Formattare le date in formato italiano (gg/mm/aaaa)
4.  Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
5.  Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.
