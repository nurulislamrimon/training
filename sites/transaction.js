
document.getElementById("deposit-button").addEventListener("click", function () {
    // deposit calculation
    const newDepositInput = document.getElementById("deposit-input");
    const newDepositAmount = newDepositInput.value;
    const existDeposit = document.getElementById("exist-deposit");
    const existDepositAmount = existDeposit.innerText;

    const totalDeposit = parseFloat(existDepositAmount) + parseFloat(newDepositAmount);

    existDeposit.innerText = totalDeposit;
    // balance calculation
    const existBalance = document.getElementById("exist-balance");
    const totalBalance = parseFloat(newDepositAmount) + parseFloat(existBalance.innerText);

    existBalance.innerText = totalBalance;


    // clearing input
    newDepositInput.value = '';
});

// withdraw calculation
document.getElementById("withdraw-button").addEventListener("click", function () {
    const newWithdrawInput = document.getElementById("withdraw-input");
    const newWithdrawAmount = newWithdrawInput.value;
    const existWithdraw = document.getElementById("exist-withdraw");

    const totalWithdraw = parseFloat(existWithdraw.innerText) + parseFloat(newWithdrawAmount);

    existWithdraw.innerText = totalWithdraw;

    // balance calculation
    const existBalance = document.getElementById("exist-balance");

    const remainBalance = parseFloat(existBalance.innerText) - parseFloat(newWithdrawAmount);

    existBalance.innerText = remainBalance;

    // clearing input
    newWithdrawInput.value = ""
})