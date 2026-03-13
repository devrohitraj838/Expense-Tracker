let expenses = [];

function addexpense(){
    let title =  document.getElementById("title").value;
    let amount  = document.getElementById("amount").value;

    if (title.trim() && amount && !isNaN(amount)) {
        let expense ={
            title:title,
            amount:Number(amount)
        };
        expenses.push(expense);
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
    expenses.forEach((expense, index) =>{
        total +=expense.amount;
        list.innerHTML += `
        <li>
        ${expense.title} - ${expense.amount}
        <button onclick="deleteExpense(${index})">X</button>
        </li>
        `;
    });
    document.getElementById("total").innerText = total;
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    displayExpense();
}