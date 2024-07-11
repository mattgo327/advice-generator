document.addEventListener("DOMContentLoaded", async function () {
  await fetchAndDisplayAdvice();
});

document
  .getElementById("advice-button")
  .addEventListener("click", async function (event) {
    event.preventDefault(); // Prevent default link behavior
    await fetchAndDisplayAdvice();
  });

async function fetchAndDisplayAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    const adviceId = document.getElementById("advice-id");
    const quoteId = document.getElementById("quote-id");
    adviceId.textContent = `ADVICE #${data.slip.id}`;
    quoteId.textContent = `“${data.slip.advice}”`;
  } catch (error) {
    console.error("Error fetching advice:", error);
  }
}
