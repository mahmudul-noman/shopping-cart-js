// function:
function getTextElementById(elementId) {
    const TotalElement = document.getElementById(elementId);
    const currentTotalString = TotalElement.innerText;
    const currentTotal = parseInt(currentTotalString);
    return currentTotal;
}


// function: 
function calculateSubTotal() {
    const currentPhoneTotal = getTextElementById('phone-total');
    const currentCaseTotal = getTextElementById('case-total');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementById('sub-total', currentSubTotal);

    // tax calculate
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementById('tax-total', taxAmount);

    // final amount
    const finalAmount = currentSubTotal + taxAmount;
    setTextElementById('final-total', finalAmount);

}


// function
function setTextElementById(elementId, value) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = value;
}