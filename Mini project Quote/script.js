const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const searchButton = document.getElementById("search-button");
const authorInput = document.getElementById("author-input");
const previousButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");

// Sample quote data (replace with your actual quote data)
const quotes = [
    { text: "Genius is one percent inspiration and ninety-nine percent perspiration.", author: "Thomas Edison" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    // Add more quotes here
];

let currentQuoteIndex = 0;

// Function to display a quote
function displayQuote() {
    const quote = quotes[currentQuoteIndex];
    quoteText.textContent = quote.text;
    quoteAuthor.textContent = "- " + quote.author;
}

// Function to search for quotes by author
function searchQuotes() {
    const author = authorInput.value.toLowerCase();
    const filteredQuotes = quotes.filter(quote => quote.author.toLowerCase().includes(author));

    if (filteredQuotes.length === 0) {
        quoteText.textContent = "No quotes found for this author.";
        quoteAuthor.textContent = "";
        previousButton.disabled = true;
        nextButton.disabled = true;
        return;
    }

    currentQuoteIndex = 0;
    quotes = filteredQuotes; // Update quotes array with filtered results
    displayQuote();
    previousButton.disabled = currentQuoteIndex === 0;
    nextButton.disabled = currentQuoteIndex === quotes.length - 1;
}

// Function to display the previous quote
function previousQuote() {
    currentQuoteIndex--;
    if (currentQuoteIndex < 0) {
        currentQuoteIndex = quotes.length - 1;
    }
    displayQuote();
    previousButton.disabled = currentQuoteIndex === 0;
    nextButton.disabled = currentQuoteIndex === quotes.length - 1;
}

// Function to display the next quote
function nextQuote() {
    currentQuoteIndex++;
    if (currentQuoteIndex >= quotes.length) {
        currentQuoteIndex = 0;
    }
    displayQuote();
    previousButton.disabled = currentQuoteIndex === 0;
    nextButton.disabled = currentQuoteIndex === quotes.length - 1;
}

// Event listeners
searchButton.addEventListener("click", searchQuotes);
previousButton.addEventListener("click", previousQuote);
nextButton.addEventListener("click", nextQuote);

// Display the initial quote
displayQuote();