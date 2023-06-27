# js-campominato
## Griglia
1. L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
2. Ogni cella ha un numero progressivo, da 1 a n.
3. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

4. Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
    - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
    - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
    - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
## Interazione DOM
1. Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
2. Nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.

## Flusso utente
In seguito al click di un utente su una cella:
- Se il numero è presente nella lista dei numeri generati abbiamo calpestato una bomba e la la cella si colora di rosso e la partita termina.
- Altrimenti la cella cliccata si colora di azzurro l'utente può continuare a cliccare sulle altre celle.

## END GAME
1. La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti 
(ovvero quando ha rivelato tutte le celle che non sono bombe).
2. Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.