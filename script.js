// Wait for the DOM to be loaded
document.addEventListener('DOMContentLoaded', function () {
  // Get the form element
  var form = document.querySelector('form');

  // Add submit event listener to the form
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Perform form validation and submission logic here

    // Example: Log the form data to the console
    var username = document.querySelector('input[type="text"]').value;
    var password = document.querySelector('input[type="password"]').value;
    console.log('Username:', username);
    console.log('Password:', password);

    // Reset the form
    form.reset();
  });
});
