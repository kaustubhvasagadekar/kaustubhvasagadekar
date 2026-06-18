document.addEventListener("DOMContentLoaded", () => {
  const options = document.querySelectorAll(".offer-option");
  const totalAmount = document.querySelector(".total-amount");

  const activateOption = (option) => {
    const radio = option.querySelector("input[type='radio']");
    const productOptions = option.querySelector(".product-options");
    const price = option.getAttribute("data-price");

    // Deactivate all
    options.forEach((o) => {
      o.classList.remove("active");
      const po = o.querySelector(".product-options");
      if (po) po.classList.remove("active");
    });

    // Activate selected
    option.classList.add("active");
    if (productOptions) productOptions.classList.add("active");
    if (radio) radio.checked = true;

    // Update total
    if (price) {
      totalAmount.textContent = price;
    }
  };

  // Set initial state
  const checkedRadio = document.querySelector("input[name='offer']:checked");
  if (checkedRadio) {
    const initialOption = checkedRadio.closest(".offer-option");
    if (initialOption) activateOption(initialOption);
  }

  options.forEach((option) => {
    const radio = option.querySelector("input[type='radio']");

    option.addEventListener("click", (e) => {
      if (e.target.tagName === "SELECT" || e.target.tagName === "OPTION" || e.target === radio) return;
      activateOption(option);
    });

    if (radio) {
      radio.addEventListener("change", (e) => {
        // Prevent double trigger if event came from a click that also triggered option.click
        e.stopPropagation();
        if (radio.checked) activateOption(option);
      });
    }
  });
});
