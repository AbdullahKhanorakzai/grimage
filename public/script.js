// script.js
const downloadButton = document.getElementById("downloadButton");
const qrImage = document.querySelector(".qr-image");
const inputField = document.getElementById("inputField"); // Reference to the input field

downloadButton.addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = qrImage.src;
  link.download = "qr-code.png"; // Set the desired file name here
  link.click();
});

// QR animation
// qrImage.classList.add("hidden");
const generateButton = document.querySelector(".button");

generateButton.addEventListener("click", (e) => {
  // Check if the input field is empty or has no valu
  // qrImage.classList.add("hidden");
  qrImage.classList.add("fade-in");
});
