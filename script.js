document.addEventListener("DOMContentLoaded", () => {
  const options = document.querySelectorAll(".offer-option");
  const totalAmount = document.querySelector(".total-amount");

  const updateTotal = (option) => {
    const price = option.getAttribute("data-price");
    if (price) {
      totalAmount.textContent = price;
    }
  };

  // Configure dropdown placeholders and options for accessibility
  document.querySelectorAll(".color-select").forEach((select) => {
    select.innerHTML = `
      <option value="" disabled selected>Colour</option>
      <option value="Black">Black</option>
      <option value="White">White</option>
      <option value="Blue">Blue</option>
    `;
  });

  document.querySelectorAll(".size-select").forEach((select) => {
    select.innerHTML = `
      <option value="" disabled selected>Size</option>
      <option value="S">S</option>
      <option value="M">M</option>
      <option value="L">L</option>
    `;
  });

  document.querySelectorAll("select").forEach((select) => {
    select.addEventListener("change", () => {
      select.classList.toggle("has-value", select.value !== "");
      if (select.value !== "") {
        select.classList.remove("select-error");
        select.removeAttribute("aria-invalid");
      }
      const activeOption = document.querySelector(".offer-option.active");
      const unselected = activeOption ? Array.from(activeOption.querySelectorAll("select")).filter((s) => s.value === "") : [];
      if (unselected.length === 0) {
        const status = document.getElementById("validation-status");
        if (status) status.textContent = "";
      }
    });
  });

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

    radio.addEventListener("click", (e) => e.stopPropagation());
    radio.addEventListener("change", () => radio.checked && option.click());
  });

  const addToCartBtn = document.querySelector(".add-to-cart");
  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", () => {
      if (addToCartBtn.getAttribute("aria-disabled") === "true") return;
      const activeOption = document.querySelector(".offer-option.active");
      const unselected = activeOption ? Array.from(activeOption.querySelectorAll("select")).filter((s) => s.value === "") : [];
      if (unselected.length > 0) {
        unselected[0].focus();
        unselected.forEach((s) => {
          s.classList.add("select-error");
          s.setAttribute("aria-invalid", "true");
        });
        const status = document.getElementById("validation-status");
        if (status) {
          status.textContent = "Please select size and colour for all items.";
        }
        return;
      }
      addToCartBtn.setAttribute("aria-disabled", "true");
      const originalText = addToCartBtn.innerHTML;
      addToCartBtn.innerHTML = '<span class="spinner" aria-hidden="true"></span> Adding...';

      setTimeout(() => {
        addToCartBtn.innerHTML = '<span aria-hidden="true">✓</span> Added to Cart!';
        setTimeout(() => {
          addToCartBtn.innerHTML = originalText;
          addToCartBtn.removeAttribute("aria-disabled");
        }, 1500);
      }, 800);
    });
  }
});
