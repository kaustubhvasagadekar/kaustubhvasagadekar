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

  const btn = document.querySelector(".add-to-cart");
  if (btn) {
    btn.addEventListener("click", () => {
      btn.disabled = true;
      const original = btn.innerHTML;
      btn.innerHTML = "Adding to Cart...";
      setTimeout(() => {
        btn.innerHTML = "✓ Added to Cart! 🎉";
        btn.classList.add("success");
        setTimeout(() => {
          btn.innerHTML = original;
          btn.classList.remove("success");
          btn.disabled = false;
        }, 1500);
      }, 1000);
    });
  }
});
