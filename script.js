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
    activateOption(defaultOption);
  }

  options.forEach((option) => {
    const radio = option.querySelector("input[type='radio']");

    // Listen for radio change to update UI (handles keyboard nav)
    radio.addEventListener("change", () => {
      if (radio.checked) {
        activateOption(option);
      }
    });

    option.addEventListener("click", (e) => {
      // Prevent double triggers or interference if clicking on select elements
      if (e.target.tagName === "SELECT") return;

      if (!radio.checked) {
        radio.checked = true;
        // Manual change event dispatch needed for programmatic checked change
        radio.dispatchEvent(new Event("change"));
      }
    });
  });
});
