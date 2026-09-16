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

  const activateOption = (option) => {
    options.forEach((o) => {
      o.classList.remove("active");
      const po = o.querySelector(".product-options");
      if (po) po.classList.remove("active");
    });
    option.classList.add("active");
    const po = option.querySelector(".product-options");
    if (po) po.classList.add("active");
    updateTotal(option);
  };

  options.forEach((option) => {
    const radio = option.querySelector("input[type='radio']");

    radio.addEventListener("change", () => {
      if (radio.checked) activateOption(option);
    });

    option.addEventListener("click", (e) => {
      if (e.target.tagName === "SELECT") return;
      if (!radio.checked) {
        radio.checked = true;
        radio.dispatchEvent(new Event("change"));
      }
    });
  });

  const addToCartBtn = document.querySelector(".add-to-cart");
  if (addToCartBtn) {
    const originalHTML = addToCartBtn.innerHTML;
    addToCartBtn.addEventListener("click", () => {
      if (addToCartBtn.disabled) return;
      addToCartBtn.disabled = true;
      addToCartBtn.innerHTML = "✓ Added to Cart";
      setTimeout(() => {
        addToCartBtn.innerHTML = originalHTML;
        addToCartBtn.disabled = false;
      }, 1500);
    });
  }
});
