import {isValidEmail} from '../helpers/regex';

export const modal = () => {
  const modal = document.getElementById('modal');
  const form = document.getElementById('modal-form');
  const stepOne = modal.querySelector('.step-1');
  const stepTwo = modal.querySelector('.step-2');
  const errMsg = modal.querySelector('.error-message');
  const input = modal.querySelector('input');

  document.addEventListener('click', (e) => {
    if (e.target.closest('.js-modal-close') || e.target.classList.contains('modal-wrapper')) {
      modal.classList.contains('active') && modal.classList.remove('active');
      stepTwo.classList.contains('active') && stepTwo.classList.remove('active');
      input.value = '';
      if (errMsg.classList.contains('active')) {
        errMsg.classList.remove('active');
        input.classList.remove('error');
      }
    }

    if (!e.target.closest('.js-modal-open')) return;
    stepTwo.classList.contains('active') && stepTwo.classList.remove('active');
    modal.classList.add('active');
    stepOne.classList.add('active');
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isValid = isValidEmail(input.value.trim());
    if (isValid) {
      stepOne.classList.remove('active');
      stepTwo.classList.add('active');
    } else {
      errMsg.classList.add('active');
      input.classList.add('error');
    }
  });
};