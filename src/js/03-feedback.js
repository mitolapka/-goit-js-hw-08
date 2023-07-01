import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageTextarea = feedbackForm.querySelector('textarea[name="message"]');
const localStorageKey = 'feedback-form-state';

// Функція для збереження стану форми у локальне сховище
const saveFormState = throttle(() => {
  const formState = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem(localStorageKey, JSON.stringify(formState));
}, 500);

// Заповнення полів форми збереженими значеннями при завантаженні сторінки
window.addEventListener('DOMContentLoaded', () => {
  const savedFormState = localStorage.getItem(localStorageKey);
  if (savedFormState) {
    const formState = JSON.parse(savedFormState);
    emailInput.value = formState.email;
    messageTextarea.value = formState.message;
  }
});

// Відстежування події input та збереження стану форми
feedbackForm.addEventListener('input', saveFormState);

// Обробка сабміту форми
feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formState = {
    email: emailInput.value,
    message: messageTextarea.value,
  };

  // Очищення полів форми
  emailInput.value = '';
  messageTextarea.value = '';

  // Очищення сховища
  localStorage.removeItem(localStorageKey);

  // Виведення об'єкту з полями email та message у консоль
  console.log(formState);
});

