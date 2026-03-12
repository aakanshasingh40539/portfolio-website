let cartCount = 0;
let total = 0;

const buttons = document.querySelectorAll(".add-to-cart");
const cartDisplay = document.getElementById("cart-count");
const totalDisplay = document.getElementById("cart-total");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        cartCount++;
        cartDisplay.textContent = cartCount;

        // price extract karna
        const priceText = button.parentElement.querySelector("p").textContent;
        const price = parseInt(priceText.replace("₹", ""));

        total += price;
        totalDisplay.textContent = total;

    });
});
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        toggleBtn.textContent = "☀️";
    } else {
        toggleBtn.textContent = "🌙";
    }
});
