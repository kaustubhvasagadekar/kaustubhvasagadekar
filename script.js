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

  options.forEach((option) => {
    const radio = option.querySelector("input[type='radio']");
    const productOptions = option.querySelector(".product-options");

    // UI state updates are triggered by the radio button 'change' event
    // to ensure keyboard arrow-key navigation updates the UI correctly.
    radio.addEventListener("change", (e) => {
      e.stopPropagation();

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

    option.addEventListener("click", (e) => {
      // Prevent double triggers if clicking on dropdowns or the radio input directly
      if (e.target.tagName === "SELECT" || e.target.tagName === "INPUT") return;

      // Set radio checked and dispatch change manually
      radio.checked = true;
      radio.dispatchEvent(new Event("change"));
    });
  });
});
