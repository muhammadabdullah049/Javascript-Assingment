



// let totalIncome = 0;
// let totalExpense = 0;

// function addIncome() {
//     const incomeInput = document.getElementById("income");
//     const incomeAmount = parseFloat(incomeInput.value);
//     totalIncome += incomeAmount;
//     document.getElementById("totalIncome").textContent = totalIncome.toFixed(2);
//     incomeInput.value = "";
// }

// function addExpense() {
//     const expenseInput = document.getElementById("expense");
//     const expenseAmount = parseFloat(expenseInput.value);
//     totalExpense += expenseAmount;
//     document.getElementById("totalExpense").textContent = totalExpense.toFixed(2);
//     expenseInput.value = "";
// }

let totalIncome = 0;
let totalExpense = 0;

function addIncome() {
    const incomeInput = document.getElementById("income");
    const incomeAmount = parseFloat(incomeInput.value);
    if (!isNaN(incomeAmount)) {
        totalIncome += incomeAmount;
        updateSummary();
        incomeInput.value = "";
    } else {
        alert("Please enter a valid income amount.");
    }
}

function addExpense() {
    const expenseInput = document.getElementById("expense");
    const expenseAmount = parseFloat(expenseInput.value);
    if (!isNaN(expenseAmount)) {
        totalExpense += expenseAmount;
        updateSummary();
        expenseInput.value = "";
    } else {
        alert("Please enter a valid expense amount.");
    }
}

function updateSummary() {
    const savings = totalIncome - totalExpense;
    document.getElementById("totalIncome").textContent = totalIncome.toFixed(2);
    document.getElementById("totalExpense").textContent = totalExpense.toFixed(2);
    document.getElementById("savings").textContent = savings.toFixed(2);
}

