    // JavaScript code for form validation
	// Prevent form from submitting

      // Retrieve the input field value

      // Regular expression pattern for alphanumeric input

      // Check if the input value matches the pattern

        // Valid input: display confirmation and submit the form

        // Invalid input: display error message

let inputField; // input variable
let submit = document.getElementById("submit"); // submit button

submit.addEventListener("click", checkInput);

function checkInput() {
  const checkAlphaNum = /^[a-zA-Z0-9]+$/; // used to compare if input is alphanumeric
  inputField = document.getElementById("inputField")

  if (checkAlphaNum.test(inputField.value)) {
    window.alert("Input is the correct format and has been submitted.")
    inputField.setCustomValidity("")
  } else {
    inputField.setCustomValidity("Error, input isn't alpanumeric.")
  }
}

