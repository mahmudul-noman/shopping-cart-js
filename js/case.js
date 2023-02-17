/**
 * 1. add event listener to case plus btn
 * 2. get value inside the case number field
 * 3. convert number from string
 * 4. calculate new case number
 * 5. set value to case input field
 */

// function: case number update :::::::::::::::::
function updateCaseNumber(isIncrease) {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const PreviousCaseNumber = parseInt(caseNumberString);

    let newCaseNumber;

    if (isIncrease) {
        newCaseNumber = PreviousCaseNumber + 1;
    }
    else {
        newCaseNumber = PreviousCaseNumber - 1;
    }

    caseNumberField.value = newCaseNumber;

    return newCaseNumber;
}

// function: update case price
function updateCaseTotalPrice(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}

// case number plus & update price total
document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(true);
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
})
// case number minus & update price total
document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(false);
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
})