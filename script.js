document.addEventListener("DOMContentLoaded", () => {
  const options = document.querySelectorAll(".offer-option");
  const totalAmount = document.querySelector(".total-amount");

  const updateTotal = (option) => {
    const price = option.getAttribute("data-price");
    if (price) {
      totalAmount.textContent = price;
    }
  };

  // Set option 2 as default
  const defaultOption = document.querySelector('[data-option="2"]');
  if (defaultOption) {
    defaultOption.classList.add("active");
    const defaultProductOptions = defaultOption.querySelector(".product-options");
    if (defaultProductOptions) defaultProductOptions.classList.add("active");
    updateTotal(defaultOption);
  }

  options.forEach((option) => {
    const radio = option.querySelector("input[type='radio']");
    const productOptions = option.querySelector(".product-options");

    const activateOption = () => {
      // Deactivate all
      options.forEach((o) => {
        o.classList.remove("active");
        const po = o.querySelector(".product-options");
        if (po) po.classList.remove("active");
      });

      // Activate selected
      option.classList.add("active");
      if (productOptions) productOptions.classList.add("active");

      // Update total from data attribute
      updateTotal(option);
    };

    radio.addEventListener("change", () => {
      if (radio.checked) {
        activateOption();
      }
    });

    option.addEventListener("click", (e) => {
      // Prevent double triggers if clicking on already checked radio or certain elements
      if (e.target.tagName === "SELECT") return;

      // Set radio - this will trigger the 'change' event
      radio.checked = true;
      activateOption();
    });
  });

  // "Add to Cart" button micro-interaction
  const addToCartButton = document.querySelector(".add-to-cart");
  if (addToCartButton) {
    addToCartButton.addEventListener("click", () => {
      addToCartButton.disabled = true;
      const originalHTML = addToCartButton.innerHTML;
      addToCartButton.innerHTML = "Adding...";
      setTimeout(() => {
        addToCartButton.innerHTML = "✓ Added! 🎉";
        setTimeout(() => {
          addToCartButton.innerHTML = originalHTML;
          addToCartButton.disabled = false;
        }, 1500);
      }, 1000);
    });
  }
});
