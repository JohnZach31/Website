document.addEventListener('DOMContentLoaded', () => {
  const loadingScreen = document.getElementById('loading-screen');
  const timelineContent = document.getElementById('timeline-content');
  const timelineH1 = timelineContent ? timelineContent.querySelector('h1') : null;
  const timelineH2 = timelineContent ? timelineContent.querySelector('h2') : null;  // Get the <h2> element
  const loadingMessage = document.getElementById('loading-message');

  const messages = [
    "Attempting to code... but I'm also watching cat videos.",
    "Just waiting for the bugs to fix themselves... any minute now.",
    "Hash-mapping my timeline...",
    "You wouldn't believe the amount of caffeine involved in this...",
    "Fixing one bug... accidentally introducing 10 more.",
    "Debugging... but first, let’s finish this solo on the guitar.",
    "Loading... please hold while I pretend to know what I'm doing.",
    "Just a moment... I'm trying to remember where I put my coffee.",
    "Loading... or as I like to call it, 'me time'.",
    "Loading... please hold while I try to remember how to code.",  
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
