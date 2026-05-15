let demoBtn = document.getElementById("demoBtn");

demoBtn.addEventListener("click", () => {
  alert("Demo uchun Telegram: @ERMAMBATOV");
});
let products =
JSON.parse(localStorage.getItem("products")) || [];

let sales =
JSON.parse(localStorage.getItem("sales")) || [];

let productForm =
document.getElementById("productForm");

let productTable =
document.getElementById("productTable");

productForm.addEventListener("submit",(e)=>{

  e.preventDefault();

  let product = {

    id:Date.now(),

    name:
    document.getElementById("name").value,

    price:
    document.getElementById("price").value,

    quantity:
    document.getElementById("quantity").value

  };

  products.push(product);

  localStorage.setItem(
    "products",
    JSON.stringify(products)
  );

  productForm.reset();

  renderProducts();

});

function renderProducts(){

  productTable.innerHTML = "";

  products.forEach(product => {

    productTable.innerHTML += `
      <tr>

        <td>${product.name}</td>

        <td>${product.price}</td>

        <td>${product.quantity}</td>

        <td>
          <button
          class="delete-btn"
          onclick="deleteProduct(${product.id})">

          Delete

          </button>
        </td>

      </tr>
    `;

  });

}

function deleteProduct(id){

  products = products.filter(
    product => product.id !== id
  );

  localStorage.setItem(
    "products",
    JSON.stringify(products)
  );

  renderProducts();

}

let saleForm =
document.getElementById("saleForm");

let salesList =
document.getElementById("salesList");

saleForm.addEventListener("submit",(e)=>{

  e.preventDefault();

  let saleName =
  document.getElementById("saleName").value;

  let saleQty =
  document.getElementById("saleQty").value;

  sales.push(
    `${saleName} - ${saleQty} dona sotildi`
  );

  localStorage.setItem(
    "sales",
    JSON.stringify(sales)
  );

  saleForm.reset();

  renderSales();

});

function renderSales(){

  salesList.innerHTML = "";

  sales.forEach(sale => {

    salesList.innerHTML += `
      <li>${sale}</li>
    `;

  });

}

renderProducts();
renderSales();
