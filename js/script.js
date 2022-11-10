quote = [
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote:
      "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.",
    author: "Winston Churchill",
  },
  {
    quote: "Don't Let Yesterday Take Up Too Much Of Today.",
    author: "Will Rogers",
  },
  {
    quote:
      "You Learn More From Failure Than From Success. Don't Let It Stop You. Failure Builds Character.",
    author: "Unknown",
  },
  {
    quote: "It's Not Whether You Get Knocked Down, It's Whether You Get Up.",
    author: "Vince Lombardi",
  },
  {
    " quote":
      "If You Are Working On Something That You Really Care About, You Don't Have To Be Pushed. The Vision Pulls You.",
    author: "Steve Jobs",
  },
];

let btn = document.querySelector("#btn");
let quote = document.querySelector("#quote");
let authnr = document.querySelector("#authnr");
btn.addEventListener("click", () => {
  let random = Math.floor(Math.random() * quote.length);
  quote.innerHTML = quote[random].quote;
  authnr.innerHTML = quote[random].authnr;
});
console.log(quote);
