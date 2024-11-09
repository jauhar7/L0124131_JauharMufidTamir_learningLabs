const showPopupButton = document.getElementById('showPopup');
const customPopup = document.getElementById('customPopup');
const closeBtn = document.getElementById('closeBtn');

showPopupButton.onclick = function() {
    customPopup.style.display = 'block';
    setTimeout(() => {
        customPopup.style.opacity = 1;
    }, 10); 
};

closeBtn.onclick = function() {
    customPopup.style.opacity = 0;
    setTimeout(() => {
        customPopup.style.display = 'none';
    }, 500);
};