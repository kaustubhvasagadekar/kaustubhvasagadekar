document.addEventListener("DOMContentLoaded", () => {
  const options = document.querySelectorAll(".offer-option");
  const totalAmount = document.querySelector(".total-amount");

  // Inject aria-labels dynamically for screen-reader compliance
  document.querySelectorAll(".product-row").forEach((row) => {
    const itemNum = row.querySelector(".item-number")?.textContent || "";
    const sizeSelect = row.querySelector(".size-select");
    const colorSelect = row.querySelector(".color-select");
    if (sizeSelect && itemNum) {
      sizeSelect.setAttribute("aria-label", `Size for ${itemNum}`);
    }
    if (colorSelect && itemNum) {
      colorSelect.setAttribute("aria-label", `Colour for ${itemNum}`);
      const firstOpt = colorSelect.querySelector("option:first-child");
      if (firstOpt) {
        firstOpt.disabled = true;
      }
    }
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

    radio.addEventListener("change", () => {
      if (radio.checked) {
        option.click();
      }
    });

    radio.addEventListener("click", (e) => {
      e.stopPropagation();
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
