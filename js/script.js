document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");
  
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const formData = new FormData(contactForm);
      const requestOptions = {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json"
        }
      };
  
      fetch(contactForm.action, requestOptions)
        .then(response => {
          if (response.ok) {
            alert("Message sent successfully!");
            contactForm.reset();
          } else {
            alert("Error sending message.");
          }
        })
        .catch(error => {
          console.error("Error:", error);
          alert("Error sending message.");
        });
    });
});
  