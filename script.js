document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".product-row").forEach((row) => {
    const itemNum = row.querySelector(".item-number")?.textContent.trim() || "";
    const sizeSelect = row.querySelector(".size-select");
    const colorSelect = row.querySelector(".color-select");
    if (sizeSelect) sizeSelect.setAttribute("aria-label", `Item ${itemNum} Size`);
    if (colorSelect) colorSelect.setAttribute("aria-label", `Item ${itemNum} Colour`);
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

  const validationStatus = document.getElementById("validation-status");

  const clearValidation = () => {
    if (validationStatus) validationStatus.textContent = "";
    document.querySelectorAll("select").forEach((s) => (s.classList.remove("select-error"), s.removeAttribute("aria-invalid")));
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
    clearValidation();
  };

  document.querySelectorAll("select").forEach((s) => {
    s.addEventListener("change", () => {
      s.classList.toggle("has-value", s.value !== "");
      clearValidation();
    });
  });

  const radios = Array.from(document.querySelectorAll("input[name='offer']"));
  options.forEach((option) => {
    const radio = option.querySelector("input[type='radio']");

    radio.addEventListener("change", () => {
      if (radio.checked) activateOption(option);
    });

    radio.addEventListener("keydown", (e) => {
      if (["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft"].includes(e.key)) {
        e.preventDefault();
        const currIdx = radios.indexOf(radio);
        const nextIdx = ["ArrowDown", "ArrowRight"].includes(e.key)
          ? (currIdx + 1) % radios.length
          : (currIdx - 1 + radios.length) % radios.length;
        radios[nextIdx].focus();
        radios[nextIdx].checked = true;
        radios[nextIdx].dispatchEvent(new Event("change"));
      }
    });

    option.addEventListener("click", (e) => {
      if (e.target.tagName === "SELECT") return;
      if (!radio.checked) {
        radio.checked = true;
        radio.dispatchEvent(new Event("change"));
      }
    });
  });

  const addToCartBtn = document.querySelector(".add-to-cart");
  if (addToCartBtn) {
    const originalHTML = addToCartBtn.innerHTML;
    addToCartBtn.addEventListener("click", () => {
      if (addToCartBtn.getAttribute("aria-disabled") === "true") return;

      const activeOption = document.querySelector(".offer-option.active");
      const emptySelects = Array.from(activeOption?.querySelectorAll("select") || []).filter((s) => !s.value);
      if (emptySelects.length) {
        emptySelects.forEach((s) => (s.classList.add("select-error"), s.setAttribute("aria-invalid", "true")));
        if (validationStatus) validationStatus.textContent = "Please select required options above.";
        emptySelects[0].focus();
        return;
      }

      addToCartBtn.setAttribute("aria-disabled", "true");
      addToCartBtn.classList.add("success");
      addToCartBtn.innerHTML = "✓ Added to Cart";
      setTimeout(() => {
        addToCartBtn.innerHTML = originalHTML;
        addToCartBtn.classList.remove("success");
        addToCartBtn.removeAttribute("aria-disabled");
      }, 1500);
    });
  }
});
