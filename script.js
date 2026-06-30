document.addEventListener("DOMContentLoaded", () => {
  const options = document.querySelectorAll(".offer-option");
  const totalAmount = document.querySelector(".total-amount");

  const updateUI = (option) => {
    options.forEach((o) => {
      o.classList.toggle("active", o === option);
      const po = o.querySelector(".product-options");
      if (po) po.classList.toggle("active", o === option);
    });
    totalAmount.textContent = option.getAttribute("data-price");
  };

  options.forEach((option) => {
    const radio = option.querySelector("input[type='radio']");
    radio.addEventListener("change", () => radio.checked && updateUI(option));
    option.addEventListener("click", (e) => {
      if (!["SELECT", "OPTION", "INPUT"].includes(e.target.tagName) && !radio.checked) {
        radio.checked = true;
        radio.dispatchEvent(new Event("change"));
      }
    });
  });

  const checked = document.querySelector('input[name="offer"]:checked');
  if (checked) updateUI(checked.closest(".offer-option"));
});
