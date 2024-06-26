document.addEventListener('DOMContentLoaded', function () {
    const totalCards = 8;
  
    for (let i = 1; i <= totalCards; i++) {
        const yesButton = document.querySelector(`.yes-btn-${i}`);
        yesButton.addEventListener('click', function () {
            const nextCard = document.querySelector(`.card-${i + 1}`);
            if (nextCard) {
                nextCard.classList.remove('d-none');
            }
        });
    }
  });
  
  
  // function showPopup() {
  //     document.getElementById("popupContainer").classList.remove("d-none");
  // }
  
  // function hidePopup() {
  //     document.getElementById("popupContainer").classList.add("d-none");
  // }
  
  function showPopup() {
      // Get the popup container
      const popup = document.getElementById('popupMessage');
      // Display the popup
      popup.classList.remove('d-none');
  }
  
  function hidePopup() {
      // Get the popup container
      const popup = document.getElementById('popupMessage');
      // Hide the popup
      popup.classList.add('d-none');
  }
  