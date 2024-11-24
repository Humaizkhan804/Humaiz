// Select the "Shop" button by its ID
const shopButton = document.getElementById("shop-btn");

// Add event listener to the "Shop" button
shopButton.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default anchor behavior

    // Select all product items with the "hidden" class
    const hiddenProducts = document.querySelectorAll(".product-item.hidden");

    // Toggle the visibility of each hidden product
    hiddenProducts.forEach(product => {
        product.classList.toggle("hidden");
    });

    // Change the button text based on the visibility of hidden products
    if (shopButton.textContent === "Shop") {
        shopButton.textContent = "Show Less"; // Change to "Show Less" when products are visible
    } else {
        shopButton.textContent = "Shop"; // Change back to "Shop" when products are hidden
    }
});
