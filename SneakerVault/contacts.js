document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault(); 

        var formData = new FormData(document.forms["contactForm"]);
        var name = formData.get('name');
        var email = formData.get('email');
        var message = formData.get('message');
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        if (name === "" || email === "" || message === "") {
            alert("All fields must be filled out.");
            return false;
        }
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return false;
        }

        alert("Thank you for contacting us! We will get back to you soon.");
        document.forms["contactForm"].reset();
        return true;
    });
});