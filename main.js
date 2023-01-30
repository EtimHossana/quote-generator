const quoteContainer = document.getElementById("container");
const authorText = document.getElementById("author");
const quoteText = document.getElementById("quote");
const newQuoteBtn = document.getElementById("new-quote");

// const twitterBtn = document.getElementById("twitter");

// Initially API Quotes is empty array
let apiQuotes = [];

//  Get Quotes From Api
async function getQuotes() {

  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);

    // Update apiQuotes 
    apiQuotes = await response.json();

    console.log({apiQuotes})

    // Update HTML to show new quote
    newQuote();
  } catch (error) {
    //  This is where you will handle your error
  }
}

// Show new Quotes
function newQuote() {

  // Pick random quotes
  const randomQuoteIndex = Math.floor(Math.random() * apiQuotes.length)
  const quote = apiQuotes[randomQuoteIndex];

  console.log({quote});

  authorText.textContent = quote.author;

  // Set the Qutote, Hide the Loader
  quoteText.textContent = quote.text;
}

// // Generate new quote from JS
// newQuoteBtn.addEventListener('click', newQuote)

//  On page Onload
getQuotes();