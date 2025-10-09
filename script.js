
// whatssapp
const waNumber = "919829284699"; // Replace with your WhatsApp number

function toggleWA() {
  document.getElementById("wa-box").classList.toggle("hidden");
}

function sendWA(msg) {
  let url = `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");

  // Close the chat popup after sending
  document.getElementById("wa-box").classList.add("hidden");
}

// form validation
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value.trim();

  if (!name || !phone || !service) {
    alert("Please fill in all required (*) fields.");
    return false;
  }
  return true;
}

// faq
document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".faq-question");

  questions.forEach((q) => {
    q.addEventListener("click", () => {
      const answer = q.nextElementSibling;
      const icon = q.querySelector("i");

      // Close all other answers (accordion style)
      document.querySelectorAll(".faq-answer").forEach((el) => {
        if (el !== answer) {
          el.style.maxHeight = null;
          el.previousElementSibling
            .querySelector("i")
            .classList.remove("rotate-180");
        }
      });

      // Toggle current answer
      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        icon.classList.remove("rotate-180");
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
        icon.classList.add("rotate-180");
      }
    });
  });
});
// animation
AOS.init({
        duration: 1500, // Animation duration in milliseconds
        once: true,    // Whether animation should happen only once
    });