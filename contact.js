function showAlert() { alert('Your feedback has been submitted');}

// Function to toggle the display of FAQ answers
function toggleFaq(element) {
  const answer = element.nextElementSibling;
  answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  const plus = element.querySelector('.plus');
  plus.textContent = plus.textContent === '+' ? '-' : '+';
}
