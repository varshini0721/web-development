function showToast(message, duration = 3000) {

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
    }, duration);
}

const bookLinks = document.querySelectorAll('a[href="#booking"]');
const bookingSection = document.getElementById("booking");
const matchSelect = document.querySelector(
    '#booking select[name="match"]'
);
bookLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const row = link.closest("tr");
        if (row) {
            const matchName = row.cells[1].textContent.trim();
            for (let i = 0; i < matchSelect.options.length; i++) {
                if (matchSelect.options[i].text === matchName) {
                    matchSelect.value = matchSelect.options[i].value;
                    break;
                }
            }
            bookingSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
            showToast(
                matchName + " selected — complete your booking below"
            );
        } 
        else {
            bookingSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
            showToast("Booking section opened!");
        }
    });
});
// 3. Activity 5: Dynamic "About IPL Match" content

document.addEventListener("DOMContentLoaded", function() {

    const demoParagraph = document.getElementById("demo");

    demoParagraph.textContent =
        "IPL 2026 brings together the country's top cricketing talent " +
        "for a high-octane season of matches across major stadiums in " +
        "India. From the opening clash to the final showdown, fans can " +
        "expect thrilling contests, packed stands, and unforgettable " +
        "moments throughout the tournament.";

});
const bookingForm = document.querySelector("#booking form");
bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const oldMessage =
        bookingForm.querySelector(".booking-message");

    if (oldMessage) {
        oldMessage.remove();
    }
    const message = document.createElement("p");
    message.className = "booking-message";
    message.textContent = "Booking successful!";
    message.style.color = "#0B1F3A";
    message.style.fontWeight = "bold";
    message.style.marginTop = "10px";
    const confirmButton =
        bookingForm.querySelector('button[type="submit"]');
    confirmButton.insertAdjacentElement(
        "afterend",
        message
    );
    bookingForm.reset();
    setTimeout(function() {
        message.remove();
    }, 2000);
});