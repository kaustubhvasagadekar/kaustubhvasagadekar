document.addEventListener("DOMContentLoaded", () => {
  const options = document.querySelectorAll(".offer-option");
  const totalAmount = document.querySelector(".total-amount");

  // Dynamically inject aria-labels for selects to keep HTML diff under 50 lines
  options.forEach((option) => {
    option.querySelectorAll(".product-row").forEach((row, rowIndex) => {
      const itemNum = rowIndex + 1;
      const sizeSelect = row.querySelector(".size-select");
      const colorSelect = row.querySelector(".color-select");
      if (sizeSelect) sizeSelect.setAttribute("aria-label", `Size for Item ${itemNum}`);
      if (colorSelect) colorSelect.setAttribute("aria-label", `Colour for Item ${itemNum}`);
    });
  });

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

    // Support keyboard arrow key navigation
    radio.addEventListener("change", () => {
      if (radio.checked) {
        option.click();
      }
    });

    option.addEventListener("click", (e) => {
      // Prevent double triggers if clicking on already checked radio or certain elements
      if (e.target.tagName === "SELECT") return;

      // Set radio
      radio.checked = true;

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
    });
  });
});
