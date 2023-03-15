/*
 * CONSEGNA:
 * Data una lista della spesa,
 * Stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
 *
 * CONSIGLI:
 * Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
 * Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while
 */

const shopList = ["Biscotti", "Latte", "Pasta", "Prosciutto", "Peperoni"];
const elShopList = document.querySelector(".shop_list");
let i = 0;

while (i < shopList.length) {
  const elementLi = document.createElement("li");
  elementLi.innerText = shopList[i];
  console.log(elementLi);
  console.log(elShopList);
  elShopList.insertAdjacentElement("beforeend", elementLi);
  i++;
}
