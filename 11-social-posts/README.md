# js-social-post

Ricreare un feed social aggiungendo al layout di base fornito, uno script JS:



## Milestone
- [x] Creare un array di oggetti per rappresentare ciascun post.
- [x] Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
  - id del post, numero progressivo da 1 a n
  - Nome autore,
  - Foto autore,
  - Data in formato americano (mm-gg-yyyy),
  - Testo del post,
  - Immagine (non tutti i post devono avere una immagine),
  - Numero di likes.
- [x] Cliccando sul tasto "Mi Piace" cambiare il colore al testo del bottone e incrementare il counter dei likes relativo.
- [x] Salvare in un secondo array gli `id` dei post ai quali abbiamo messo like.
- [x] Formattare le date in formato italiano (gg/mm/aaaa)
- [x] Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente.
- [x] Al click su un pulsante *Mi Piace* di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.
