const shortenForm = document.getElementById("shorten-form");
const longUrlInput = document.getElementById("long-url");
const shortenedLinkDiv = document.getElementById("shortened-link");

shortenForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const longUrl = longUrlInput.value;

    // Simulate shortening by appending a unique identifier
    const uniqueId = Math.random().toString(36).substring(7);
    const shortenedUrl = `http://short.url/${uniqueId}`;

    // Display the shortened link
    shortenedLinkDiv.innerHTML = `<p>Shortened Link:</p><a href="${shortenedUrl}" target="_blank">${shortenedUrl}</a>`;

    // Clear the input field
    longUrlInput.value = "";
});
