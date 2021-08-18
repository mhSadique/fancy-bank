// Balances
let moneyDeposited = document.getElementById('deposited');
let moneyToDeposit = document.getElementById('deposit-field');
// Withdraw-Deposit
let moneyWithdrawn = document.getElementById('withdrawn');
let moneyToWithdraw = document.getElementById('withdraw-field'); //to be taken down
// Total Balance
let totalBalance = document.getElementById('balance');

// Withdraw-Deposit Buttons
let btnDeposit = document.getElementById('deposit-btn');
let btnWithdraw = document.getElementById('withdraw-btn');



// Deposit Money
btnDeposit.addEventListener('click', () => {
    // update the deposited balance
    if (isNaN(moneyToDeposit.value)) {
        alert('Invalid amount.');
        moneyToDeposit.value = '';    
        return;
    }
    if (+moneyToDeposit.value < 0) {
        alert('Please put a positive amount.');
        moneyToDeposit.value = '';    
        return;
    }
    moneyDeposited.textContent = +moneyDeposited.textContent + +moneyToDeposit.value;
    
    // update the main balance
    totalBalance.textContent = +totalBalance.textContent + +moneyToDeposit.value;
    // make the deposit field empty
    moneyToDeposit.value = '';    
});


// Withdraw Money
btnWithdraw.addEventListener('click', () => {
    // update the withdrawn balance
    if (isNaN(moneyToWithdraw.value)) {
        alert('Invalid amount.');
        moneyToWithdraw.value = '';    
        return;
    }
    if (+moneyToWithdraw.value < 0) {
        alert('Please put a positive amount.');
        moneyToWithdraw.value = '';    
        return;
    }
    if (+moneyToWithdraw.value > +totalBalance.textContent) {
        alert('Insufficient balance.');
        moneyToWithdraw.value = '';
        return;
    }
    moneyWithdrawn.textContent = +moneyWithdrawn.textContent + +moneyToWithdraw.value;
    
    // update the main balance
    totalBalance.textContent = +totalBalance.textContent - +moneyToWithdraw.value;
    // make the withdraw field empty
    moneyToWithdraw.value = '';
});


