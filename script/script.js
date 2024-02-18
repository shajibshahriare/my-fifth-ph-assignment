let totalPrice = 0;
const seats = document.querySelectorAll(".sit");

for (let i = 0; i < seats.length; i++) {
    const seat = seats[i];

    seat.addEventListener("click", function () {
        const seatNumber = seat.innerText;
        console.log(seatNumber)
        const clickSeat = seat.classList.add('bg-green-500')
        const ticketContainer = document.getElementById("ticket-container")

        const newDiv = document.createElement("div");
        const p1 = document.createElement("p1");
        const p2 = document.createElement("p2");
        const p3 = document.createElement("p3");

        p1.innerText = seatNumber;
        p2.innerText = "Economy";
        p3.innerText = parseInt(550);
        newDiv.appendChild(p1)
        newDiv.appendChild(p2)
        newDiv.appendChild(p3)
        ticketContainer.appendChild(newDiv)

        const newSeatElement = document.getElementById('seat-amount');
        const currentSeatElement = newSeatElement.innerText;
        const currentSeat = parseInt(currentSeatElement);

        const newSeatAmount = currentSeat - 1;
        newSeatElement.innerText = newSeatAmount;

        const newTicketElement = document.getElementById('ticket-count');
        const currentTicketElement = newTicketElement.innerText;
        const currentTicket = parseInt(currentTicketElement);

        const newTicketAmount = currentTicket + 1;
        newTicketElement.innerText = newTicketAmount;

        totalPrice = newTicketAmount * 550 ;
        const price = document.getElementById('total-price').innerText = totalPrice

        


        // console.log( totalPrice)


    })

}
// function addBackgroundColorByClassName(elementClassName){
//     const element = document.getElementsByClassName(elementClassName)
//     element.classList.add('bg-green-500')
// }