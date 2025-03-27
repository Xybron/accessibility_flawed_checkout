  // Poor Focus Order: Focus jumps directly to the submit button after email.
  document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const emailInput = document.querySelector('input[type="text"]');
    const emailError = document.getElementById('email-error');

    if (!emailInput.value.includes('@')) {
      emailError.style.display = 'block'; // Show unclear error message
    } else {
      alert('Order placed successfully!');
    }
  });