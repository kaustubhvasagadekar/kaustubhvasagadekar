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
    const productOptions = option.querySelector(".product-options");
    const radio = option.querySelector("input[type='radio']");

    // Deactivate all
    options.forEach((o) => {
      o.classList.remove("active");
      const po = o.querySelector(".product-options");
      if (po) po.classList.remove("active");
    });

    // Activate selected
    option.classList.add("active");
    if (productOptions) productOptions.classList.add("active");

    // Ensure radio is checked
    if (radio && !radio.checked) {
      radio.checked = true;
    }

    // Update total from data attribute
    updateTotal(option);
  };

  // Set initial state based on checked radio
  const checkedRadio = document.querySelector('input[name="offer"]:checked');
  if (checkedRadio) {
    const initialOption = checkedRadio.closest(".offer-option");
    if (initialOption) {
      activateOption(initialOption);
    }
  }

  options.forEach((option) => {
    const radio = option.querySelector("input[type='radio']");

    // Handle clicks on the option container
    option.addEventListener("click", (e) => {
      // Don't trigger if clicking on select or other interactive elements
      if (e.target.tagName === "SELECT" || e.target.tagName === "INPUT") return;

      if (radio) {
        radio.checked = true;
        // Dispatch change event manually since we programmatically checked it
        radio.dispatchEvent(new Event("change", { bubbles: true }));
      }
    });

    // Handle radio change (works for both click and keyboard)
    if (radio) {
      radio.addEventListener("change", () => {
        if (radio.checked) {
          activateOption(option);
        }
      });
    }
  });
});
