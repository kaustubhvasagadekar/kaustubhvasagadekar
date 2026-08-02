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

  // Set aria-labels and placeholder disabled state for select dropdowns
  document.querySelectorAll(".product-row").forEach((row) => {
    const itemNum = row.querySelector(".item-number")?.textContent || "#1";
    const sizeSelect = row.querySelector(".size-select");
    const colorSelect = row.querySelector(".color-select");

    if (sizeSelect) {
      sizeSelect.setAttribute("aria-label", `Size for item ${itemNum}`);
    }
    if (colorSelect) {
      colorSelect.setAttribute("aria-label", `Colour for item ${itemNum}`);
      const firstOpt = colorSelect.options[0];
      if (firstOpt && firstOpt.text === "Colour") {
        firstOpt.disabled = true;
      }
    }
  });

  // Delightful micro-interaction sequence for "Add to Cart" button
  const addToCartBtn = document.querySelector(".add-to-cart");
  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", () => {
      const originalHTML = addToCartBtn.innerHTML;
      addToCartBtn.disabled = true;
      addToCartBtn.innerHTML = "⏳ Adding...";

      setTimeout(() => {
        addToCartBtn.innerHTML = "✅ Added! 🎉";
        setTimeout(() => {
          addToCartBtn.innerHTML = originalHTML;
          addToCartBtn.disabled = false;
        }, 1500);
      }, 1000);
    });
  }

  options.forEach((option) => {
    const radio = option.querySelector("input[type='radio']");
    const productOptions = option.querySelector(".product-options");

    // Listen to radio changes (supporting both keyboard navigation and clicks)
    radio.addEventListener("change", () => {
      if (radio.checked) {
        options.forEach((o) => {
          o.classList.remove("active");
          const po = o.querySelector(".product-options");
          if (po) po.classList.remove("active");
        });

        option.classList.add("active");
        if (productOptions) productOptions.classList.add("active");
        updateTotal(option);
      }
    });

    option.addEventListener("click", (e) => {
      // Prevent double triggers if clicking on select or input elements directly
      if (e.target.tagName === "SELECT" || e.target.tagName === "INPUT") return;

      if (!radio.checked) {
        radio.checked = true;
        radio.dispatchEvent(new Event("change"));
      }
    });
  });
});
