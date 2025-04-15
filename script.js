document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById("trickle-title");
  
    function wrapLetters(text) {
      return text.split("").map((char, i) => {
        if (char === " ") return `<span class="letter" style="display:inline-block; width:0.4em;">&nbsp;</span>`;
        return `<span class="letter" style="animation-delay:${i * 0.05}s">${char}</span>`;
      }).join("");
    }
  
    title.innerHTML = wrapLetters(title.textContent);
  
    // Start the animation once the page loads
    title.querySelectorAll(".letter").forEach((span) => {
      span.classList.add("trickle-back");
    });

  });
