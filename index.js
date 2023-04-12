import { testCardNumbers } from './tests/testCards.js';
import { checkCardNumber } from './modules/cardValidator.js';

const cardForm = document.getElementById('cardForm');
const cardNumberInput = document.getElementById('cardNumber');
const resultParagraph = document.getElementById('result');
const testButton = document.getElementById('testButton');
const testResultsTable = document.getElementById('testResults');
const clearButton = document.getElementById('clearButton');


cardForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const cardNumber = cardNumberInput.value;
  const cardProvider = checkCardNumber(cardNumber);
  resultParagraph.textContent = cardProvider;
});

testButton.addEventListener('click', () => {
  const results = testCardNumbers(checkCardNumber);
  testResultsTable.style.display = 'table';
  testResultsTable.querySelector('tbody').innerHTML = results.map(result => `
    <tr>
      <td>${result.number}</td>
      <td>${result.expected}</td>
      <td>${result.actual}</td>
      <td>${result.success ? 'Sukces' : 'Błąd'}</td>
    </tr>
  `).join('');
});

clearButton.addEventListener('click', () => {
  testResultsTable.style.display = 'none';
  testResultsTable.querySelector('tbody').innerHTML = '';
  resultParagraph.textContent = '';
});