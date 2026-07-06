document.addEventListener("DOMContentLoaded", () => {
  const options = document.querySelectorAll(".offer-option");
  const totalAmount = document.querySelector(".total-amount");

  const updateUI = (option) => {
    // Update price
    const price = option.getAttribute("data-price");
    if (price) {
      totalAmount.textContent = price;
    }

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
  };

  // Set default state based on checked radio
  const checkedRadio = document.querySelector('input[type="radio"]:checked');
  if (checkedRadio) {
    const activeOption = checkedRadio.closest(".offer-option");
    if (activeOption) updateUI(activeOption);
  }

  options.forEach((option) => {
    const radio = option.querySelector("input[type='radio']");

    // Listen for change on radio to handle keyboard navigation
    radio.addEventListener("change", () => {
      if (radio.checked) {
        updateUI(option);
      }
    });

    // Still handle click on the container for mouse users
    option.addEventListener("click", (e) => {
      if (e.target.tagName === "SELECT" || e.target.tagName === "INPUT") return;

      radio.checked = true;
      // Manually dispatch change event because setting .checked programmatically doesn't trigger it
      radio.dispatchEvent(new Event("change"));
    });
  });
});
