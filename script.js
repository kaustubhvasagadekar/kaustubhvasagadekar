document.addEventListener("DOMContentLoaded", () => {
  const options = document.querySelectorAll(".offer-option");
  const totalAmount = document.querySelector(".total-amount");

  const updateTotal = (option) => {
    const price = option.getAttribute("data-price");
    if (price) {
      totalAmount.textContent = price;
    }
  };

  const updateUI = (selectedOption) => {
    options.forEach((o) => {
      const po = o.querySelector(".product-options");
      if (o === selectedOption) {
        o.classList.add("active");
        if (po) po.classList.add("active");
      } else {
        o.classList.remove("active");
        if (po) po.classList.remove("active");
      }
    });
    updateTotal(selectedOption);
  };

  // Initial UI state
  const checkedRadio = document.querySelector('input[name="offer"]:checked');
  if (checkedRadio) {
    const initialOption = checkedRadio.closest(".offer-option");
    if (initialOption) {
      updateUI(initialOption);
    }
  }

  options.forEach((option) => {
    const radio = option.querySelector('input[type="radio"]');

    // Handle change event for both mouse and keyboard navigation
    radio.addEventListener("change", (e) => {
      if (radio.checked) {
        updateUI(option);
      }
    });

    // Clicking the container should also trigger selection if not clicking on selects
    option.addEventListener("click", (e) => {
      if (e.target.tagName === "SELECT" || e.target.closest("select")) {
        return;
      }

      if (!radio.checked) {
        radio.checked = true;
        // Dispatch change event manually because setting .checked doesn't trigger it
        radio.dispatchEvent(new Event("change"));
      }
    });
  });
});
