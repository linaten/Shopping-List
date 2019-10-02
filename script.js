window.onload = function () {
	initShoppingList();
};
function initShoppingList() {
	let form = document.getElmentById("item-form")
	form.addEventListener("submit", (event) => {
		handleItemForm(event, form);
	});
}

function handleItemForm(event, formRef) {
if(event.preventDefaukt()) {
	event.preventDefault();
	}
let itemHtml = addItemToShoppingList();
let itemListRef = document.getElementById("shopping-list");
itemListRef.insertAdjacentHTML("afterend", itemHTML)
return false;
}
function addItemToShoppingList() {
	let itemName= document.getElementById("item-name");
	let itemAmount= document.getElementById("item-amount");
}
function createListItemHtml() {
	return '<li>
		Item Name - Amount
	</li>
	';
}