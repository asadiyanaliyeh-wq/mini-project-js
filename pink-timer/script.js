
// تاریخ هدف (سال، ماه-1، روز، ساعت، دقیقه، ثانیه)
const targetDate = new Date(2026, 0, 1, 0, 0, 0).getTime();

// اجرای تایمر هر ۱ ثانیه
const timer = setInterval(() => {

  // زمان الان
  const now = new Date().getTime();

  // اختلاف زمان (میلی‌ثانیه)
  const distance = targetDate - now;

  // اگر زمان تمام شده بود
  if (distance <= 0) {
    clearInterval(timer);
    document.getElementById("main-box").innerHTML =
      "<span class='finished'>⏰ مهلت به پایان رسید</span>";
    return;
  }

  // تبدیل میلی‌ثانیه به روز، ساعت، دقیقه، ثانیه
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  // نمایش با صفر اول (مثلاً 09)
  document.getElementById("days").innerText = String(days).padStart(2, "0");
  document.getElementById("hours").innerText = String(hours).padStart(2, "0");
  document.getElementById("minutes").innerText = String(minutes).padStart(2, "0");
  document.getElementById("seconds").innerText = String(seconds).padStart(2, "0");

}, 1000);
