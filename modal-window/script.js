// انتخاب المان‌ها
const modal = document.querySelector(".modal-container"); // کلاس اصلاح شد
const openModal = document.getElementById("openBtn");
const closeModal = document.querySelector(".closeBtn");

// باز کردن مدال با کلیک دکمه
openModal.addEventListener("click", () => {
  modal.style.display = "flex"; // flex برای مرکزیت مدال
});

// بستن مدال با کلیک روی کلوز
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// بستن مدال با کلیک خارج از محتوا
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// بستن مدال با کلید Escape
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.style.display = "none";
  }
});
