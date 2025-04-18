document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const timelineContent = document.getElementById('projects-content');
    const timelineH1 = timelineContent ? timelineContent.querySelector('h1') : null;
    const timelineH2 = timelineContent ? timelineContent.querySelector('h2') : null;  // Get the <h2> element
    const loadingMessage = document.getElementById('loading-message');
  
    const messages = [
      "Hold on... just duct-taping some Python to the backend real quick.",
      "Almost there! Just convincing my code to behave like it’s supposed to.",
      "Can't wait to show you my projects... if I can remember where I saved them.",
      "You wouldn't believe the amount of caffeine involved in this...",
      "Deploying magic… a.k.a. functions that worked yesterday and now don’t.",
      "“Loading... Please enjoy this brief interlude played on imaginary drums. 🥁(If you hear a beat in your head, it's working.)",
      "This portfolio was handcrafted with HTML, CSS, JavaScript, and emotional damage.",
      "Rendering code and questioning my life choices simultaneously.",
      "Hopefully you also play Minecraft...",
      "Forgot my food in the oven... but this is more important.",  
    ];
  
    if (loadingMessage) {
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      loadingMessage.textContent = randomMessage;
    }
  
    if (loadingScreen && timelineContent && (timelineH1 || timelineH2)) {
      // Random loading time between 1.2s and 2.8s
      const randomTime = Math.random() * (2800 - 1200) + 1200;
  
      setTimeout(() => {
        loadingScreen.classList.add('hiding');
  
        setTimeout(() => {
          loadingScreen.style.display = 'none';
          timelineContent.classList.remove('hidden');
  
          setTimeout(() => {
            timelineContent.classList.add('visible');
            if (timelineH1) timelineH1.classList.add('visible');
            if (timelineH2) timelineH2.classList.add('visible');  // Add visibility to <h2>
          }, 10);
        }, 500); // fade-out duration
      }, randomTime);
    } else {
      console.error("Required elements not found.");
      if (loadingScreen) {
        loadingScreen.style.display = 'none';
      }
    }
  });
  