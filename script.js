document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById("trickle-title");
  
    function wrapLetters(text) {
      return text.split("").map((char, i) => {
        if (char === " ") return `<span class="letter" style="display:inline-block; width:0.4em;">&nbsp;</span>`;
        return `<span class="letter" style="animation-delay:${i * 0.05}s">${char}</span>`;
      }).join("");
    }
  
    title.innerHTML = wrapLetters(title.textContent);
  
    title.addEventListener("mouseenter", () => {
      title.querySelectorAll(".letter").forEach((span) => {
        span.classList.remove("trickle");
        void span.offsetWidth;
        span.classList.add("trickle");
      });
    });
  });
  