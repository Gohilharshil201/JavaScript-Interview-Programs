function orderCoffee() {
  return new Promise((resolve, reject) => {
    const preparingTime = Math.floor(Math.random() * 3000) + 2000; // 2–5 sec
    const isAvailable = Math.random() > 0.2; // 80% success rate

    setTimeout(() => {
      if (isAvailable) {
        resolve("✅ Your coffee is ready! ☕");
      } else {
        reject("❌ Sorry, we're out of coffee beans!");
      }
    }, preparingTime);
  });
}

const orderBtn = document.getElementById("orderBtn");
const statusEl = document.getElementById("status");

orderBtn.addEventListener("click", () => {
  statusEl.style.color = "black";
  statusEl.textContent = "⏳ Preparing your coffee...";

  orderCoffee()
    .then((message) => {
      statusEl.style.color = "green";
      statusEl.textContent = message;
    })
    .catch((error) => {
      statusEl.style.color = "red";
      statusEl.textContent = error;
    });
});
