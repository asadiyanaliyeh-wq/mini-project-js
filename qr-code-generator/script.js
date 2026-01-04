// Select elements
const generateBtn = document.querySelector("form button");
const qrInput = document.querySelector("form input");
const qrBox = document.querySelector(".qr-code");
const qrImage = document.querySelector(".qr-code img");

// Generate QR Code
generateBtn.addEventListener("click", () => {
  const value = qrInput.value.trim();

  // Validation
  if (!value) {
    alert("لطفاً یه متن یا آدرس وارد کن");
    return;
  }

  // Loading state
  generateBtn.innerText = "در حال تولید...";

  // QR Code API
  qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`;

  // When QR loaded
  qrImage.onload = () => {
    qrBox.classList.remove("hidden");
    generateBtn.innerText = "تولید QR Code";
  };
});

// Hide QR when input is empty
qrInput.addEventListener("keyup", () => {
  if (!qrInput.value.trim()) {
    qrBox.classList.add("hidden");
  }
});
