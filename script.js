document.addEventListener("DOMContentLoaded", () => {
  const options = document.querySelectorAll(".offer-option");
  const totalAmount = document.querySelector(".total-amount");

  const updateTotal = (option) => {
    const price = option.getAttribute("data-price");
    if (price) {
      totalAmount.textContent = price;
    }
  };

  // Add aria-labels to size and colour select dropdowns for accessibility
  document.querySelectorAll(".product-row").forEach((row) => {
    const itemNum = row.querySelector(".item-number")?.textContent.trim() || "";
    const sizeSelect = row.querySelector(".size-select");
    const colorSelect = row.querySelector(".color-select");
    if (sizeSelect) sizeSelect.setAttribute("aria-label", `Size for item ${itemNum}`);
    if (colorSelect) colorSelect.setAttribute("aria-label", `Colour for item ${itemNum}`);
  });

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

    const selectOption = () => {
      options.forEach((o) => {
        o.classList.remove("active");
        const po = o.querySelector(".product-options");
        if (po) po.classList.remove("active");
      });

      option.classList.add("active");
      if (productOptions) productOptions.classList.add("active");
      updateTotal(option);
    };

    option.addEventListener("click", (e) => {
      if (e.target.tagName === "SELECT") return;
      radio.checked = true;
      selectOption();
    });

    radio.addEventListener("change", () => {
      if (radio.checked) {
        selectOption();
      }
    });
  });

  const addToCartBtn = document.querySelector(".add-to-cart");
  if (addToCartBtn) {
    let timeoutId = null;
    addToCartBtn.addEventListener("click", () => {
      if (timeoutId) clearTimeout(timeoutId);
      addToCartBtn.classList.add("success");
      addToCartBtn.innerHTML = "✓ Added to Cart!";

      timeoutId = setTimeout(() => {
        addToCartBtn.classList.remove("success");
        addToCartBtn.innerHTML = '<span class="plus-icon">+</span> Add to Cart';
      }, 2000);
    });
  }
});
