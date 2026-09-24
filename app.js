function showToast(message) {
    const toast = document.createElement("div");
    toast.textContent = message;
    toast.style.position = "fixed";
    toast.style.bottom = "30px";
    toast.style.right = "30px";
    toast.style.backgroundColor = "#0B1F3A";
    toast.style.color = "white";
    toast.style.padding = "15px 20px";
    toast.style.borderRadius = "8px";
    toast.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.3)";
    toast.style.zIndex = "9999";
    toast.style.fontWeight = "bold";
    document.body.appendChild(toast);
    setTimeout(function() {
        toast.remove();
    }, 3000);
}
const bookButtons = document.querySelectorAll('a[href="#booking"]');

bookButtons.forEach(function(button) {
    button.addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("booking").scrollIntoView({
            behavior: "smooth"
        });
        showToast("Booking section opened!");
    });

});
const bookingForm = document.querySelector("#booking form");
bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const oldMessage = bookingForm.querySelector(".booking-message");
    if (oldMessage) {
        oldMessage.remove();
    }
    const message = document.createElement("p");
    message.className = "booking-message";
    message.textContent = "Booking successful!";
    message.style.color = "#0B1F3A";
    message.style.fontWeight = "bold";
    message.style.marginTop = "10px";
    const confirmButton = bookingForm.querySelector(
        'button[type="submit"]'
    );
    confirmButton.insertAdjacentElement("afterend", message);
});