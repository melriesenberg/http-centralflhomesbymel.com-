document.addEventListener("DOMContentLoaded", function() {
  // Function to fetch and insert HTML content
  const loadHTML = (elementId, filePath) => {
    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.text();
      })
      .then(data => {
        const element = document.getElementById(elementId);
        if (element) {
          element.innerHTML = data;
        }
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  };

  // Load the header, banner, and footer
  loadHTML('header-placeholder', '/assets/includes/header.html');
  loadHTML('banner-placeholder', '/assets/includes/banner.html');
  loadHTML('footer-placeholder', '/assets/includes/footer.html');
});
