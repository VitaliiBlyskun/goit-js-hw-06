const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

const newArr = (array) => {
return array.map((element) => {

const itemList = document.createElement("li");

itemList.textContent = element
console.log(itemList);

itemList.classList.add("item");

return itemList
}
)};

const addIngredients = newArr(ingredients);
list.append(...addIngredients);






