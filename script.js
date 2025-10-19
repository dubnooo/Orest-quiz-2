const yesBtn = document.getElementById('yes');
const noBtn = document.getElementById('no');

// Повідомлення при натисканні "Так"
yesBtn.addEventListener('click', () => {
  alert('У вас зняли з картки (1234 **** **** 5678) 146 999 грн');
});

// Початкова позиція "Ні"
noBtn.style.left = "50%";
noBtn.style.top = "50%";

// Функція для переміщення кнопки в нове місце
function moveNoButton() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const newLeft = Math.random() * (windowWidth - noBtn.offsetWidth);
  const newTop = Math.random() * (windowHeight - noBtn.offsetHeight);

  noBtn.style.left = `${newLeft}px`;
  noBtn.style.top = `${newTop}px`;
}

// Кнопка тікає кожного разу, коли курсор наближається
noBtn.addEventListener('mouseenter', moveNoButton);

// І ще можна зробити, щоб вона тікала навіть якщо ти дуже близько підводиш мишку
document.addEventListener('mousemove', (e) => {
  const rect = noBtn.getBoundingClientRect();
  const distance = Math.hypot(
    e.clientX - (rect.left + rect.width / 2),
    e.clientY - (rect.top + rect.height / 2)
  );

  if (distance < 100) {
    moveNoButton();
  }
});


