// Product Class
class Product {
  constructor(id, name, price, image = "🛒") {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
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
    this.updateUI();
  }

  removeItem(productId) {
    this.items = this.items.filter((item) => item.product.id !== productId);
    this.updateUI();
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.getTotal(), 0);
  }

  getItemCount() {
    return this.items.reduce((count, item) => count + item.quantity, 0);
  }

  clear() {
    this.items = [];
    this.updateUI();
  }

  updateUI() {
    displayCart();
    document.getElementById("cart-count").textContent = this.getItemCount();
    document.getElementById("checkout-btn").disabled = this.items.length === 0;
  }
}

// UI Functions
function displayProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.innerHTML = `
            <div style="font-size: 2em; text-align: center;">${
              product.image
            }</div>
            <div class="product-name">${product.name}</div>
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <button class="add-to-cart" onclick="addToCart(${product.id})">
                ➕ Add to Cart
            </button>
        `;
    productList.appendChild(productCard);
  });
}

function displayCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  if (cart.items.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty</p>";
  } else {
    cart.items.forEach((item) => {
      const cartItem = document.createElement("div");
      cartItem.className = "cart-item";
      cartItem.innerHTML = `
                <div class="cart-item-name">
                    ${item.product.name} x${item.quantity}
                </div>
                <div class="cart-item-price">
                    $${item.getTotal().toFixed(2)}
                </div>
                <span class="remove-item" onclick="removeFromCart(${
                  item.product.id
                })">✖</span>
            `;
      cartItems.appendChild(cartItem);
    });
  }

  document.getElementById("cart-total").textContent = `Total: $${cart
    .getTotal()
    .toFixed(2)}`;
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  cart.addItem(product);
}

function removeFromCart(productId) {
  cart.removeItem(productId);
}

function checkout() {
  const orderMessage = document.getElementById("order-message");
  orderMessage.textContent = `Order placed successfully! Total: $${cart
    .getTotal()
    .toFixed(2)}`;
  orderMessage.className = "order-message order-success";
  orderMessage.style.display = "block";

  setTimeout(() => {
    orderMessage.style.display = "none";
  }, 3000);

  cart.clear();
}

// Sample Data
const products = [
  new Product(1, "Wireless Headphones", 99.99, "🎧"),
  new Product(2, "Smartphone", 699.99, "📱"),
  new Product(3, "Laptop", 1299.99, "💻"),
  new Product(4, "Smart Watch", 249.99, "⌚"),
  new Product(5, "Bluetooth Speaker", 79.99, "🔊"),
  new Product(6, "4K TV", 899.99, "📺")
];

const cart = new ShoppingCart();

// Initialize
displayProducts();
displayCart();
document.getElementById("checkout-btn").disabled = true;

// Event Listeners
document.getElementById("checkout-btn").addEventListener("click", checkout);
