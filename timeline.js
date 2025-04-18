document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const timelineContent = document.getElementById('timeline-content');
  
    if (loadingScreen && timelineContent) {
      setTimeout(() => {
        loadingScreen.style.display = 'none';
        timelineContent.classList.remove('hidden');
      }, 1500);
    }
  });
  