const shopListItem = [
  "Biscotti",
  "Latte",
  "Pasta",
  "Prosciutto",
  "Peperoni"
];
const shopListQuantity = ["2", "2", "2", "3", "5"];
const elShopList = document.querySelector(".shop_list");

let i = 0;

while (i < shopListItem.length) {
  const elementLi = document.createElement("li");
  elementLi.innerText = `${shopListQuantity[i]} x ${shopListItem[i]}`;
  console.log(elementLi);
  console.log(elShopList);
  elShopList.insertAdjacentElement("beforeend", elementLi);
  i++;
}
