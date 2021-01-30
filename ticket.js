function Quantity(id, isCount) {
  const ticketCount = document.getElementById(id);
  const ticketValue = parseInt(ticketCount.value);

  if (isCount) {
    ticketCount.value = ticketValue + 1;
  }

  if (isCount == false && ticketValue > 0) {
    ticketCount.value = ticketValue - 1;
  }

  calculateTotalPrice();
}

function calculateTotalPrice() {
  const firstClass = ticketPrice("first-class");
  const economyClass = ticketPrice("economy-class");

  const subtotalValue = document.getElementById("subTotal");
  const totalTicketCost = firstClass + economyClass;
  subtotalValue.innerText = "$" + totalTicketCost;

  const vat = document.getElementById("tax-amount");
  const totalVat = totalTicketCost * 0.1;
  vat.innerText = "$" + totalVat;

  const totalValue = document.getElementById("grandTotal");
  totalValue.innerText = totalTicketCost + totalVat;
}

function ticketPrice(TicketName) {
  const firstClassTicketPrice = 150;
  const economyClassTicketPrice = 100;

  const valueOfInputField = document.getElementById(TicketName);
  const totalNumberOfTickets = parseInt(valueOfInputField.value);

  if (TicketName == "first-class") {
    return firstClassTicketPrice * totalNumberOfTickets;
  }

  if (TicketName == "economy-class") {
    return economyClassTicketPrice * totalNumberOfTickets;
  }
}
