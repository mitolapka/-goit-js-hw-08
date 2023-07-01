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

window.addEventListener('DOMContentLoaded', () => {
  const savedFormState = localStorage.getItem(localStorageKey);
  if (savedFormState) {
    const formState = JSON.parse(savedFormState);
    emailInput.value = formState.email;
    messageTextarea.value = formState.message;
  }
});

feedbackForm.addEventListener('input', saveFormState);

feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formState = {
    email: emailInput.value,
    message: messageTextarea.value,
  };

  emailInput.value = '';
  messageTextarea.value = '';

  localStorage.removeItem(localStorageKey);

  console.log(formState);
});

