import {isValidEmail} from '../helpers/regex';

export const memberForm = () => {
  const form = document.getElementById('member-form');
  const input = form.querySelector('input');
  const modal = document.getElementById('modal');
  const stepTwo = modal.querySelector('.step-2');
  const errMsg = form.querySelector('.error-message');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isValid = isValidEmail(input.value.trim());
    if (isValid) {
      modal.classList.add('active');
      stepTwo.classList.add('active');
    } else {
      errMsg.classList.add('active');
      input.classList.add('error');
      setTimeout(() => {
        errMsg.classList.remove('active');
        input.classList.remove('error');
      }, 3000);
    }
  });
};