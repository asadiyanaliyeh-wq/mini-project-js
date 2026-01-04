// گرفتن عنصر textarea از صفحه
const textarea = document.getElementById("txt1");

// اضافه کردن رویداد وقتی کاربر متنی را انتخاب می‌کند
textarea.addEventListener("mouseup", () => {
  // گرفتن موقعیت شروع و پایان متن انتخاب‌شده
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;

  // جدا کردن متن انتخاب‌شده
  const selectedText = textarea.value.substring(start, end);

  // اگر متنی انتخاب شده باشد، آن را با SpeechSynthesis بخوان
  if (selectedText) {
    const utterance = new SpeechSynthesisUtterance(selectedText);
    utterance.rate = 1; // سرعت خواندن
    utterance.pitch = 1; // زیر و بمی صدا
    window.speechSynthesis.speak(utterance);
  }
});
