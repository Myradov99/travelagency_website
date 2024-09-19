document.getElementById('submitButton').addEventListener('click', function(event) {
    // Check form validity before redirecting
    var form = document.getElementById('chatForm');
    if (form.checkValidity()) {
        // Allow form submission, will redirect to thankyou.html
        form.submit();
    } else {
        event.preventDefault();  // Prevent form submission if not valid
        alert('Please fill in all required fields.');  // Show validation error
    }
});
