document.addEventListener("DOMContentLoaded", () => {
  const options = document.querySelectorAll(".offer-option");
  const totalAmount = document.querySelector(".total-amount");

  // Inject aria-labels for product select dropdowns
  document.querySelectorAll(".product-row").forEach((row) => {
    const itemNum = row.querySelector(".item-number")?.textContent.trim() || "";
    const sizeSel = row.querySelector(".size-select");
    const colorSel = row.querySelector(".color-select");
    if (sizeSel) sizeSel.setAttribute("aria-label", `Size for item ${itemNum}`);
    if (colorSel) colorSel.setAttribute("aria-label", `Colour for item ${itemNum}`);
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

    radio.addEventListener("change", () => option.click());

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
