document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".product-row").forEach((row) => {
    const itemNum = row.querySelector(".item-number")?.textContent.trim() || "";
    const sizeSelect = row.querySelector(".size-select");
    const colorSelect = row.querySelector(".color-select");
    if (sizeSelect) sizeSelect.setAttribute("aria-label", `Item ${itemNum} Size`);
    if (colorSelect) colorSelect.setAttribute("aria-label", `Item ${itemNum} Colour`);
  });

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
      if (addToCartBtn.getAttribute("aria-disabled") === "true") return;
      addToCartBtn.setAttribute("aria-disabled", "true");
      addToCartBtn.classList.add("success");
      addToCartBtn.innerHTML = "✓ Added to Cart";
      setTimeout(() => {
        addToCartBtn.innerHTML = originalHTML;
        addToCartBtn.classList.remove("success");
        addToCartBtn.removeAttribute("aria-disabled");
      }, 1500);
    });
  }
});
