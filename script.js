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

  const totalStatus = document.getElementById("total-status");

  const updateTotal = (option) => {
    const price = option.getAttribute("data-price");
    if (price) {
      totalAmount.textContent = price;
      if (totalStatus) {
        totalStatus.textContent = `Total price is ${price}`;
      }
    }
  };

  const activateOption = (option) => {
    options.forEach((o) => {
      o.classList.remove("active");
      const po = o.querySelector(".product-options");
      if (po) po.classList.remove("active");
    });
    option.classList.add("active");
    const po = option.querySelector(".product-options");
    if (po) po.classList.add("active");
    updateTotal(option);
  };

  // Set option 2 as default
  const defaultOption = document.querySelector('[data-option="2"]');
  if (defaultOption) activateOption(defaultOption);

  options.forEach((option) => {
    const radio = option.querySelector("input[type='radio']");
    radio.addEventListener("change", () => radio.checked && activateOption(option));
    option.addEventListener("click", (e) => {
      if (e.target.tagName === "SELECT" || e.target.tagName === "INPUT") return;
      radio.checked = true;
      activateOption(option);
    });
  });
});
