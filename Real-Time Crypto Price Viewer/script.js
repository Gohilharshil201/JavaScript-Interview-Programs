const container = document.getElementById("cryptoContainer");
const refreshBtn = document.getElementById("refreshBtn");

const coins = ["bitcoin", "ethereum", "dogecoin"];

async function fetchPrices() {
  try {
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coins.join(
      ","
    )}&vs_currencies=inr,usd`;
    const res = await fetch(url);
    const data = await res.json();

    container.innerHTML = ""; // Clear existing

    coins.forEach((coin) => {
      const priceInUSD = data[coin].usd;
      const priceInINR = data[coin].inr;

      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h2>${coin.toUpperCase()}</h2>
        <div class="price">USD: $${priceInUSD}</div>
        <div class="price">INR: ₹${priceInINR}</div>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error fetching crypto data:", error);
    container.innerHTML = `<p>⚠️ Failed to load prices. Try again.</p>`;
  }
}

// Initial load
fetchPrices();

// Refresh button
refreshBtn.addEventListener("click", fetchPrices);
