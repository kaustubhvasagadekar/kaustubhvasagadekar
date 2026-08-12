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

    radio.addEventListener("change", () => radio.checked && option.click());
  });

  // Dynamic Micro-UX and Accessibility Enhancements
  document.querySelectorAll(".unit-text").forEach(el => el.textContent.endsWith("Unit") && !el.textContent.startsWith("1") && (el.textContent += "s"));
  document.querySelectorAll(".original-price").forEach(el => {
    const d = document.createElement("del"); d.className = "original-price"; d.textContent = el.textContent; el.replaceWith(d);
  });
  document.querySelectorAll(".product-row").forEach((row, idx) => {
    const s = row.querySelector(".size-select"), c = row.querySelector(".color-select");
    const num = row.querySelector(".item-number")?.textContent || `#${idx + 1}`;
    s && s.setAttribute("aria-label", `Size for item ${num}`);
    if (c) {
      c.setAttribute("aria-label", `Colour for item ${num}`);
      if (c.options[0]?.text === "Colour") { c.options[0].disabled = true; c.options[0].selected = true; }
    }
  });
});
