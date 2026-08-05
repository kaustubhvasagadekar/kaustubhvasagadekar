document.addEventListener("DOMContentLoaded", () => {
  const options = document.querySelectorAll(".offer-option");
  const totalAmount = document.querySelector(".total-amount");

  const updateTotal = (option) => {
    const price = option.getAttribute("data-price");
    if (price) {
      totalAmount.textContent = price;
    }
  };

  const activateOption = (option) => {
    // Deactivate all
    options.forEach((o) => {
      o.classList.remove("active");
      const po = o.querySelector(".product-options");
      if (po) po.classList.remove("active");
    });

    // Activate selected
    option.classList.add("active");
    const productOptions = option.querySelector(".product-options");
    if (productOptions) productOptions.classList.add("active");

    // Update total from data attribute
    updateTotal(option);
  };

  // Set option 2 as default
  const defaultOption = document.querySelector('[data-option="2"]');
  if (defaultOption) {
    const radio = defaultOption.querySelector("input[type='radio']");
    if (radio) radio.checked = true;
    activateOption(defaultOption);
  }

  options.forEach((option) => {
    const radio = option.querySelector("input[type='radio']");

    // Handle clicks on the option card
    option.addEventListener("click", (e) => {
      if (e.target.tagName === "SELECT") return;
      if (radio && !radio.checked) {
        radio.checked = true;
        // Dispatch change event to trigger the radio listener
        radio.dispatchEvent(new Event("change", { bubbles: true }));
      }
    });

    // Handle radio change (works for both clicks and keyboard navigation)
    if (radio) {
      radio.addEventListener("change", () => {
        if (radio.checked) {
          activateOption(option);
        }
      });
    }
  });

  const addToCartBtn = document.querySelector(".add-to-cart");
  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", () => {
      addToCartBtn.disabled = true;
      const originalText = addToCartBtn.innerHTML;
      addToCartBtn.innerHTML = `⏳ Adding to Cart...`;
      setTimeout(() => {
        addToCartBtn.innerHTML = `✓ Added! 🎉`;
        setTimeout(() => {
          addToCartBtn.innerHTML = originalText;
          addToCartBtn.disabled = false;
        }, 2000);
      }, 1000);
    });
  }
});
