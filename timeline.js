document.addEventListener('DOMContentLoaded', () => {
  const loadingScreen = document.getElementById('loading-screen');
  const timelineContent = document.getElementById('timeline-content');
  const timelineH1 = timelineContent ? timelineContent.querySelector('h1') : null;

  if (loadingScreen && timelineContent && timelineH1) {
      setTimeout(() => {
          loadingScreen.classList.add('hiding');
          setTimeout(() => {
               loadingScreen.style.display = 'none';
               timelineContent.classList.remove('hidden');
               setTimeout(() => {

                    timelineContent.classList.add('visible');
                    timelineH1.classList.add('visible'); 
               }, 10); 


          }, 500); 

      }, 1500); 

  } else {
      console.error("Required elements not found.");
      if (loadingScreen) {
          loadingScreen.style.display = 'none';
      }
  }
});