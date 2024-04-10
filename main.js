// ---- Main.js ----

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome
}

// Book a quote nav button
let quoteMenu = document.getElementById("quoteMenu");
let quoteMenuInfo = document.getElementById("quoteMenuInfo");
let closeQuoteMenu = document.getElementById("closeQuoteMenu");

function quoteMenuDisplay() {
  quoteMenu.style.display = "flex";
  quoteMenuInfo.style.display = "inline";
  closeQuoteMenu.style.display = "block";

  // Listen for close button click
  document.querySelector('.closeQuoteMenu').addEventListener('click', function () {
    quoteMenu.style.display = "none";

  })
}
