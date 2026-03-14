let expenses = [];

// Load expenses from localStorage on page load
window.onload = function() {
    let saved = localStorage.getItem("expenses");
    if(saved){
        expenses = JSON.parse(saved);
        displayExpense();
    }
}

function addexpense(){
    let title = document.getElementById("title").value;
    let amount = document.getElementById("amount").value;

    if (title.trim() && amount && !isNaN(amount)) {
        let expense = {
            title: title,
            amount: Number(amount)
        };
        expenses.push(expense);
        saveToLocalStorage(); // Save after adding
        displayExpense();
        document.getElementById("title").value = "";
        document.getElementById("amount").value = "";
    } else {
        alert("Please enter a valid title and amount.");
    }
}

function displayExpense(){
    let list = document.getElementById("expenseList");
    list.innerHTML = "";
    let total = 0;
    expenses.forEach((expense, index) => {
        total += expense.amount;
        list.innerHTML += `
        <li>
            <span class="expense-text">${expense.title} - ₹${expense.amount}</span>
            <button class="delete-btn" onclick="deleteExpense(${index})">×</button>
        </li>
        `;
    });
    document.getElementById("total").innerText = total;
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    saveToLocalStorage(); // Save after deleting
    displayExpense();
}

// Helper function to save to localStorage
function saveToLocalStorage() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
}
