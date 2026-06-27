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

    // Update total
    updateTotal(option);
  };

  // Set option 2 as default
  const defaultOption = document.querySelector('[data-option="2"]');
  if (defaultOption) {
    activateOption(defaultOption);
    const radio = defaultOption.querySelector("input[type='radio']");
    if (radio) radio.checked = true;
  }

  options.forEach((option) => {
    const radio = option.querySelector("input[type='radio']");

    // Handle container click
    option.addEventListener("click", (e) => {
      if (e.target.tagName === "SELECT" || e.target.tagName === "INPUT") return;

      radio.checked = true;
      activateOption(option);
    });

    // Handle radio change (useful for keyboard navigation)
    radio.addEventListener("change", () => {
      if (radio.checked) {
        activateOption(option);
      }
    });
  });
});
