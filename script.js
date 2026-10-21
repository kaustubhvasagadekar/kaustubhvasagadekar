document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".product-row").forEach((r) => {
    const n = r.querySelector(".item-number")?.textContent.trim() || "";
    r.querySelector(".size-select")?.setAttribute("aria-label", `Item ${n} Size`);
    r.querySelector(".color-select")?.setAttribute("aria-label", `Item ${n} Colour`);
  });

  const options = document.querySelectorAll(".offer-option");
  const totalAmount = document.querySelector(".total-amount");
  const totalStatus = document.getElementById("total-status");

  const updateTotal = (option) => {
    const price = option.getAttribute("data-price");
    if (price) {
      totalAmount.textContent = price;
      if (totalStatus) totalStatus.textContent = `Total price is ${price}`;
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

    if (radio) radio.addEventListener("change", () => radio.checked && !option.classList.contains("active") && option.click());

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
    btn.setAttribute("aria-live", "polite");
    let t;
    btn.addEventListener("click", () => {
      if (btn.getAttribute("aria-disabled") === "true") return;
      btn.setAttribute("aria-disabled", "true");
      btn.classList.add("success");
      btn.innerHTML = "✓ Added to Cart!";
      clearTimeout(t);
      t = setTimeout(() => {
        btn.innerHTML = '<span class="plus-icon">+</span> Add to Cart';
        btn.classList.remove("success");
        btn.removeAttribute("aria-disabled");
      }, 1800);
    });
  }
});
