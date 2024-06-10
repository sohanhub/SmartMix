document.getElementById('openPopupBtn').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'block';
});

document.getElementById('closePopupBtn').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});

document.getElementById('button1').addEventListener('click', function() {
    alert('Button 1 clicked');
});

document.getElementById('button2').addEventListener('click', function() {
    alert('Button 2 clicked');
});

// Close the popup if the user clicks anywhere outside of the popup content
window.addEventListener('click', function(event) {
    var popup = document.getElementById('popup');
    if (event.target == popup) {
        popup.style.display = 'none';
    }
});
