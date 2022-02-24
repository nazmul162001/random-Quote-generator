const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("btn");

const getQuote = () => {
  fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(data => newQuote(data))
};

const newQuote = (quotes) => {
  quote.innerText = quotes.content;
  author.innerText = quotes.author;
}