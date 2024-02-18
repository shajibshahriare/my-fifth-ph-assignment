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
    })

}
        const btn = document.getElementById('apply-btn')
        btn.addEventListener("click", function(){
           
        const couponInput = document.getElementById('coupon-input').value ;
        if (couponInput ==="NEW15" || couponInput === "Couple 20"){
            if(couponInput=== "NEW15"){
                const discountElement = document.getElementById('discount-amount')
                const discountAmount = totalPrice * 0.15;
                discountElement.innerText = discountAmount.toFixed(2)
                const grandTotal = document.getElementById('grand-total')
                grandTotal.innerText = totalPrice - discountAmount.toFixed(2)
                document.getElementById('coupon-input').value="";
            }
            if(couponInput === "Couple 20"){
                const discountElement = document.getElementById('discount-amount')
                const discountAmount = totalPrice * 0.2;
                discountElement.innerText = discountAmount.toFixed(2)
                const grandTotal = document.getElementById('grand-total')
                grandTotal.innerText = totalPrice - discountAmount.toFixed(2)
                document.getElementById('coupon-input').value="";
            }
            }else{
              alert("Invalid coupon")
            }

        })
        document.getElementById('phone-num').addEventListener("keyup", function(event){
            const text = parseInt(event.target.value)

            const enableBtn = document.getElementById('btn-next');
            if(typeof text === "number"){

                enableBtn.removeAttribute('disabled')
            }

        })
        // document.getElementById('btn-next').addEventListener("click",function(){

        // })