const form = document.querySelector('.form'); // Select the form element

form.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent default form submission

  // Submit the form to Formspree using fetch
  const formData = new FormData(form);
  const formAction = form.getAttribute('action');
  
  try {
    const response = await fetch(formAction, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      // Form submitted successfully
      alert('Form data submitted successfully!');

      form.reset();     
    } else {
      // Handle error if the form submission was not successful
      alert('Failed to deliver the form data. Please try again.');
    }
  } catch (error) {
    console.error('Error submitting the form:', error);
    alert('An error occurred. Please try again later.');
  }
});
