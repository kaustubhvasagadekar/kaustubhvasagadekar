document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".product-row").forEach((row) => {
    const num = row.querySelector(".item-number")?.textContent.trim() || "";
    const size = row.querySelector(".size-select");
    const color = row.querySelector(".color-select");
    if (size) size.setAttribute("aria-label", `Item ${num} Size`);
    if (color) color.setAttribute("aria-label", `Item ${num} Colour`);
  });

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

    const activateOption = () => {
      options.forEach((o) => {
        o.classList.remove("active");
        const po = o.querySelector(".product-options");
        if (po) po.classList.remove("active");
      });

      option.classList.add("active");
      if (productOptions) productOptions.classList.add("active");
      updateTotal(option);
    };

    if (radio) {
      radio.addEventListener("change", () => {
        if (radio.checked) activateOption();
      });
    }

    option.addEventListener("click", (e) => {
      if (e.target.tagName === "SELECT") return;
      radio.checked = true;
      activateOption();
    });
  });
});
