let form = document.getElementById("my-form");

form.addEventListener("submit", postNewInfo);

window.onload = loadData;

async function loadData() {
  const result = await axios.get("http://localhost:4000/seller/candy-info");
  result.data.forEach((element) => {
    displayRecord(element);
  });
}

function displayRecord(object) {
  let toBePrinted = object.candyName + " - " + object.description + " - " +"Rs." + object.price + " - " + object.quantity;

  let textInside = document.createTextNode(toBePrinted);
  let buy1Btn = document.createElement("button");
  let buy2Btn = document.createElement("button");
  let buy3Btn = document.createElement("button");
  buy1Btn.textContent = "Buy 1";
  buy2Btn.textContent = "Buy 2";
  buy3Btn.textContent = "Buy 3";
  buy1Btn.className = "btnDelete";
  buy2Btn.className = "btnDelete";
  buy3Btn.className = "btnDelete";

  let li = document.createElement("li");
  li.appendChild(textInside);
  li.appendChild(buy1Btn);
  li.appendChild(buy2Btn);
  li.appendChild(buy3Btn);

  let ul = document.getElementById("items");

  ul.appendChild(li);

//   deleteBtn.addEventListener("click", deleteExpense);
  
  async function deleteExpense(event){
    await axios.delete(`http://localhost:3000/user/expenses/${object.id}`);
    window.location.reload();
  }
}

async function postNewInfo(event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let description = document.getElementById("description").value;
  let price = document.getElementById("price").value;
  let quantity = document.getElementById("quantity").value;

  const obj = {
    "name": name,
    "description": description,
    "price": price,
    "quantity": quantity
  };

  const result = await axios.post("http://localhost:4000/seller/new-info", obj);
  displayRecord(result.data);

  document.getElementById("name").value = "";
  document.getElementById("description").value = "";
  document.getElementById("price").value = "";
  document.getElementById("quantity").value = "";
}
