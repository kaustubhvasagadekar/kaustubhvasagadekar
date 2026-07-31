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
    const optNum = option.getAttribute("data-option");

    option.querySelectorAll(".product-row").forEach((row, idx) => {
      row.querySelector(".size-select")?.setAttribute("aria-label", `Size for Option ${optNum} Item #${idx + 1}`);
      row.querySelector(".color-select")?.setAttribute("aria-label", `Colour for Option ${optNum} Item #${idx + 1}`);
    });

    radio.addEventListener("change", () => radio.checked && option.click());

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

  const addToCartBtn = document.querySelector(".add-to-cart");
  addToCartBtn?.addEventListener("click", () => {
    const orig = addToCartBtn.innerHTML;
    addToCartBtn.disabled = true;
    addToCartBtn.innerHTML = "Adding...";
    setTimeout(() => {
      addToCartBtn.innerHTML = "Added! 🎉";
      setTimeout(() => {
        addToCartBtn.innerHTML = orig;
        addToCartBtn.disabled = false;
      }, 1500);
    }, 1000);
  });
});
