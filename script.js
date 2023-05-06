var items = [
	{
		id: 1,
		itemName: "Tea",
		price: 10,
		img: "tea.png",
	},
	{
		id: 2,
		itemName: "Coffee",
		price: 25,
		img: "coffee.png",
	},
	{
		id: 3,
		itemName: "Pizza",
		price: 150,
		img: "pizza.webp",
	},
	{
		id: 4,
		itemName: "Burger",
		price: 80,
		img: "burger.jpg",
	},
	{
		id: 5,
		itemName: "Pavbhaji",
		price: 70,
		img: "pavbhaji.webp",
	},
	{
		id: 6,
		itemName: "Dosa",
		price: 80,
		img: "dosa.png",
	},
];

function increment(n) {
	// console.log(priceElement)
	var quantElement = document.getElementById(n);
	quantElement.innerHTML = parseInt(quantElement.innerHTML) + 1;
	updatePrice(parseInt(document.getElementById(n[0]).childNodes[5].innerHTML));
}

function decrement(n) {
	var quantElement = document.getElementById(n);
	if (parseInt(quantElement.innerHTML) > 0) {
		quantElement.innerHTML = quantElement.innerHTML - 1;
		updatePrice(
			-1 * parseInt(document.getElementById(n[0]).childNodes[5].innerHTML)
		);
	} else {
		alert("Not enough items to remove !!");
	}
}

function updatePrice(val) {
	var totalPrice = document.getElementById("totalPrice");
	totalPrice.innerHTML = parseInt(totalPrice.innerHTML) + val;
}

function listItems() {
	// alert('Page Loaded');
	var ele = document.getElementById("list-container");
	for (i of items) {
		// console.log(i['id'])
		ele.innerHTML += `<div class="item-card row p-3 mb-3 shadow-sm center" id=${i["id"]}>
        <div class="item-img col">
            <img src="img/${i["img"]}" alt="Name" width = 50 height = 50>
        </div>
        <div class="item-name col">${i["itemName"]}</div>
        <div class="item-price col">${i["price"]}</div>
        <div class="item-quant col btn-group">
            <i class="fa fa-solid fa-minus btn btn-light btn-sm align-middle" onclick="decrement('${i["id"]}-count')"></i>
            <span id="${i["id"]}-count" class = "btn btn-primary">0</span>
            <i class="fa fa-solid fa-plus btn btn-light btn-sm align-middle" onclick="increment('${i["id"]}-count')"></i>
        </div>
    </div>`;
	}
}

function submit() {
	var totalPrice = document.getElementById("totalPrice").innerHTML;
	if (totalPrice > 0) {
		alert("Your order has been placed....\nThank you for ordering !!");
		window.location.reload();
	} else {
		alert("Please Select Items to order.");
	}
}
