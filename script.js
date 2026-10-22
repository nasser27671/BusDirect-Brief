const submitButton = document.getElementById("submit-button");
if (submitButton) {
    submitButton.addEventListener('click', e => {
        e.preventDefault();
        const nameInput = document.getElementById("reservation-name");
        const seatNumber = document.getElementById("seat-number");
        const name = nameInput.value;
        const seat = seatNumber.value;

        const selectedSeat = document.getElementById("seat-" + seat);

        if (selectedSeat) {
            const nameText = document.createElement("reserved-seat");
            nameText.textContent = name;
            nameText.style.display = "block";
            selectedSeat.style.backgroundColor = "#c60000";
            nameText.style.fontSize = "10px";
            selectedSeat.appendChild(nameText);
        }
    });
}