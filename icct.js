// Modal dialog functionality
var modal = document.getElementById("myModal");
var startLink = document.getElementById("start-link");
var confirmYes = document.getElementById("confirmYes");
var confirmNo = document.getElementById("confirmNo");
let homeEl = document.querySelector(".container");

// Show modal dialog when clicking "CLICK HERE TO START"
startLink.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default link behavior
  modal.style.display = "block"; // Display modal dialog
  homeEl.style.display = "none";
});

// Close modal and show form if "Yes" is clicked
// confirmYes.addEventListener("click", function () {
//   modal.style.display = "none"; // Close modal
//   document.getElementById("registration-form").style.display = "block"; // Show registration form
//   startLink.parentNode.style.display = "none"; // Hide "CLICK HERE TO START" link
//   homeEl.style.display = "block";
// });

// Close modal if "No" is clicked
confirmNo.addEventListener("click", function () {
  modal.style.display = "none"; // Close modal
  homeEl.style.display = "block";
});

// Show message after form submission
document
  .getElementById("registration-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    document.getElementById("message").style.display = "block"; // Show message
    setTimeout(function () {
      document.getElementById("message").style.display = "none"; // Hide message after 3 seconds
    }, 3000); // 3000 milliseconds = 3 seconds
  });
