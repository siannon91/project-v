import axios from 'axios';

const cookieDisplay = document.querySelector('#cookie-display');
const actionBtn = document.querySelector('#action-btn');
const quotePaper = document.querySelector('#quote-paper');
const quoteText = document.querySelector('#quote-text');
const biscottoAperto = document.createElement("img");
biscottoAperto.src = "/aperto.png";
biscottoAperto.alt = "open cookie";
const biscottoChiuso = document.createElement("img");
biscottoChiuso.src = "/chiuso.png";
biscottoChiuso.alt = "cookie";

async function getQuote() {
  try {
    actionBtn.disabled = true;
    quotePaper.classList.remove('hidden');

    const response = await axios.get('https://dummyjson.com/quotes/random');
    const advice = response.data.quote;
    const author = response.data.author;

    console.log('Successfully fetched:', response.data);
    cookieDisplay.textContent = "";
    cookieDisplay.appendChild(biscottoAperto);
    quoteText.textContent = `${advice} - ${author}`;

    actionBtn.textContent = 'Open Another Cookie';
    actionBtn.disabled = false;

  } catch (error) {
    console.error('Axios call failed:', error);
    quoteText.textContent = 'Oops! Something went wrong... Try again!';
    cookieDisplay.textContent = "";
    cookieDisplay.appendChild(biscottoChiuso);
    actionBtn.disabled = false;
  }
}

actionBtn.addEventListener('click', () => {
  if (actionBtn.textContent === 'Open Another Cookie') {
    cookieDisplay.textContent = "";
    cookieDisplay.appendChild(biscottoChiuso);
    quotePaper.classList.add('hidden');
    actionBtn.textContent = 'Open Cookie';
  } else {
    getQuote();
  }
});