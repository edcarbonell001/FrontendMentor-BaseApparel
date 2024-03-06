// Selecting the email input element
const emailInput = document.querySelector('#email');

// Selecting the submit button
const submitButton = document.querySelector('#submit');

// Regular expression for email validation
const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

// Selecting the error icon element
const errorIcon = document.querySelector('.icon-error');

// Selecting the error text element
const errorText = document.querySelector('.text-error');

// Selecting the form group element
const formGroup = document.querySelector('.form-group');

// Array to store errors
let errorMessages = [];

// Event listener for the click event on the submit button
submitButton.addEventListener('click', event => {
  // Removing the success class from the error text
  errorText.classList.remove('text-success');

  // Resetting the error messages
  errorMessages = [];

  // Preventing the default form submission
  event.preventDefault();

  // Validating the email address
  const email = emailInput.value;

  // Checking if the email is empty or undefined
  if (email == '' || email === undefined) {
    errorMessages.push('Please provide us your email');

    // Displaying the error icon and message
    errorIcon.style.display = 'block';
    errorText.innerText = errorMessages[0];
  } else if (!email.match(emailRegex)) { // Checking if the email is valid
    errorMessages.push('Please provide us your valid email');

    // Displaying the error icon and message
    errorIcon.style.display = 'block';
    errorText.innerText = errorMessages[0];
  }

  // Checking if there are no errors
  if (!errorMessages.length > 0) {
    // Hiding the error icon
    errorIcon.style.display = 'none';

    // Adding the success class to the error text and displaying the success message
    errorText.classList.add('text-success');
    errorText.innerText = 'Thank you for subscribing to our newsletter.';
  }
});
