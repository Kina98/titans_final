const buttons = document.querySelectorAll('.faq-toggle');
const questions = document.querySelectorAll('.faq-title');
const faqs = document.querySelectorAll('.faq h3');
console.log(faqs);
buttons.forEach(button => {
  button.addEventListener('click', () => {
    button.parentNode.classList.toggle('active');
  });
});






