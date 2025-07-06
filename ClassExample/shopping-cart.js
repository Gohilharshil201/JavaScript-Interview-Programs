// Product Class
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

// CartItem Class
class CartItem {
  constructor(product, quantity = 1) {
    this.product = product;
    this.quantity = quantity;
  }

  getTotal() {
    return this.product.price * this.quantity;
  }
}

// ShoppingCart Class
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(product) {
    const existingItem = this.items.find(
      (item) => item.product.id === product.id
    );
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.items.push(new CartItem(product));
    }
  }

  removeItem(productId) {
    this.items = this.items.filter((item) => item.product.id !== productId);
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.getTotal(), 0);
  }
}

// UI Functions
function displayProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.className = "product";
    productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
    productList.appendChild(productElement);
  });
}

function displayCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  cart.items.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
            <span>${item.product.name} x${item.quantity}</span>
            <span>$${item.getTotal().toFixed(2)}</span>
            <button onclick="removeFromCart(${item.product.id})">Remove</button>
        `;
    cartItems.appendChild(cartItem);
  });

  document.getElementById("cart-total").textContent = `Total: $${cart
    .getTotal()
    .toFixed(2)}`;
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  cart.addItem(product);
  displayCart();
}

function removeFromCart(productId) {
  cart.removeItem(productId);
  displayCart();
}

function checkout() {
  alert(`Order placed! Total: $${cart.getTotal().toFixed(2)}`);
  cart.items = [];
  displayCart();
}

// Sample Data
const products = [
  new Product(1, "Headphones", 49.99),
  new Product(2, "Phone Case", 19.99),
  new Product(3, "USB Cable", 9.99)
];

const cart = new ShoppingCart();

// Initialize
displayProducts();
displayCart();

// Event Listeners
document.getElementById("checkout-btn").addEventListener("click", checkout);
