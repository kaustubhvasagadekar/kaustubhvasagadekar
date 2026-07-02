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

  const handleSelection = (option) => {
    const productOptions = option.querySelector(".product-options");

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

  options.forEach((option) => {
    const radio = option.querySelector("input[type='radio']");

    option.addEventListener("click", (e) => {
      if (e.target.tagName === "SELECT") return;
      if (radio.checked) {
        handleSelection(option);
      } else {
        radio.checked = true;
        // Trigger change event manually because setting checked = true doesn't fire it
        radio.dispatchEvent(new Event("change", { bubbles: true }));
      }
    });

    radio.addEventListener("change", () => {
      if (radio.checked) {
        handleSelection(option);
      }
    });
  });
});
