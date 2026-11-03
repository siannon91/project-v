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