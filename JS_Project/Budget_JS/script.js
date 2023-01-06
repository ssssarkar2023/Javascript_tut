const balanceEl = document.querySelector(".balance .value");

const incomeTotalEl = document.querySelector(".income-total");

const outcomeTotalEl = document.querySelector(".outcome-total");

const incomeEl = document.querySelector("#income-tracker");

const expenseEl = document.querySelector("#expense-tracker");

const allEl = document.querySelector("#all");

const incomeList = document.querySelector("#income-tracker .list ");

const expenseList = document.querySelector("#expense-tracker .list");

const allList = document.querySelector("#all .list");

const lists = document.querySelectorAll(".list");

//Tabs

const expenseBtn = document.querySelector(".tab1");

const incomeBtn = document.querySelector(".tab2");

const allBtn = document.querySelector(".tab3");

//Input Buttons

const addExpense = document.querySelector(".add-expense");

const expenseTitle = document.querySelector("#expense-title-input");

const expenseAmount = document.querySelector("#expense-amount-input");


const addIncome = document.querySelector(".add-income");

const incomeTitle = document.querySelector("#income-title-input");

const incomeAmount = document.querySelector("#income-amount-input");

//Necessary variables

let ENTRY_LIST;

// let balance = 0;

// let income = 0;

// let outcome = 0;

let [balance, income, outcome] = [0, 0, 0];

let [deleteIcon, editIcon] = ["fas fa-trash", "far fa-edit"];

ENTRY_LIST = JSON.parse(localStorage.getItem("entry-list")) || [];
updateUI();

//expenseBtn Event Listener

expenseBtn.addEventListener("click", function () {
   
    show(expenseEl);
    hide([incomeEl, allList]);
    active(expenseBtn);
    inactive([incomeBtn, allBtn]);

});


//incomeBtn Event Listener

incomeBtn.addEventListener("click", function () {
   
    show(incomeEl);
    hide([expenseEl, allList]);
    active(incomeBtn);
    inactive([expenseBtn, allBtn]);

});

//allBtn Event Listener
allBtn.addEventListener("click", function () {


    show(allList);
    hide([incomeEl, expenseEl]);
    active(allBtn);
    inactive([incomeBtn,expenseBtn]);

});


//addIncome Event Listener

addIncome.addEventListener("click", budgetIn);

//addExpense Event Listener

addExpense.addEventListener("click", budgetOut);


//lists event listener

lists.forEach(function (list) {
   
    list.addEventListener("click", function (e) {
        // console.log(e.target.localName);
        // console.log(e.target.attributes.class.value);
        // console.log(e.target.parentNode.parentNode);
        if (e.target.localName !== "i") return;

        let targetBtn = e.target.attributes.class.value;

        let entry = e.target.parentNode.parentNode;

        let targetId = entry.attributes.id.value;

        if (targetBtn === editIcon) {
            editEntry(targetId);

        } else if (targetBtn === deleteIcon) {
            deleteEntry(targetId);
        }
    });
});

//function editEntry
function editEntry(targetId) {

    // console.log(ENTRY_LIST[targetId]);
    // console.log(ENTRY_LIST[targetId].type);
    // console.log(ENTRY_LIST[targetId].title);
    //  console.log(ENTRY_LIST[targetId].amount);

    let targetType = ENTRY_LIST[targetId].type;
    
    let targetTitle = ENTRY_LIST[targetId].title;

    let targetAmount = ENTRY_LIST[targetId].amount;

    if (targetType === "income") {
        incomeAmount.value = targetAmount;
        incomeTitle.value=targetTitle;
    } else if (targetType === "expense") {
        expenseAmount.value = targetAmount;
        expenseTitle.value=targetTitle;
    }
    deleteEntry(targetId);
}

//budgetIn function

function budgetIn(e)
{
    e.preventDefault();
    if (!incomeTitle.value || !incomeAmount.value) return;

    let income = {
        type: "income",
        title: incomeTitle.value,
        amount:parseFloat(incomeAmount.value),
    };
    ENTRY_LIST.push(income);
    console.log(ENTRY_LIST);
    updateUI();
    clearInput([incomeTitle,incomeAmount]);
}

//budgetOut function
function budgetOut(e)
{
    e.preventDefault();
    if (!expenseTitle.value || !expenseAmount.value) return;

    let expense = {
      
        type: "expense",
        title: expenseTitle.value,
        amount:parseInt(expenseAmount.value),
    };
    ENTRY_LIST.push(expense);
    console.log(ENTRY_LIST);
    updateUI();
    clearInput([expenseTitle,expenseAmount]);
}

//updateUI() function

function updateUI() {

    income = calculateTotal("income", ENTRY_LIST);

    outcome = calculateTotal("expense", ENTRY_LIST);
    
    balance = calculateBalance(income, outcome);
    
    let sign = income >= outcome ? "₹" : "-₹";

    //updating the UI
    balanceEl.innerHTML = `<p>${sign}</p><p>${balance}</p>`;
    incomeTotalEl.innerHTML = `<p>₹</p><p>${income}</p>`;
    outcomeTotalEl.innerHTML = `<p>₹</p><p>${outcome}</p>`;

    clearElement([expenseList, incomeList, allList]);
    ENTRY_LIST.forEach(function (entry, index) {
        if (entry.type === "expense") {
            showEntry(expenseList, entry.type, entry.title, entry.amount, index);
        } else if (entry.type === "income") {
            showEntry(incomeList,entry.type, entry.title, entry.amount, index);
        }
        showEntry(allList,entry.type, entry.title, entry.amount, index);
    });
    


    updateChart(income, outcome);
    localStorage.setItem("entry-list", JSON.stringify(ENTRY_LIST));
}

//deleteEntry function
function deleteEntry(targetId) {
    ENTRY_LIST.splice(targetId, 1);
    updateUI();
}

//showEntry Function
function showEntry(list, type, title, amount, id)
{
    const entry = `
    <li id="${id}" class="${type}">
    <div>
    ${title}:₹${amount}
    </div>
    <div>
    <i class="far fa-edit"></i>
    <i class="fas fa-trash"></i>
    </div>
    </li>
    `;

    const position = "afterbegin";
    //keep inside the element before its first child
    list.insertAdjacentHTML(position, entry);
}

//function clearElement
function clearElement(elements) {
    elements.forEach(function (element) {
        element.innerHTML = "";
    });
}

//function clearInput()

function clearInput(inputs) {

    inputs.forEach(function (input) {
        input.value = ""; 
    });

}

//calculateTotal functional
function calculateTotal(type, list) {

    let sum = 0;

    list.forEach(function (entry) {
        if (entry.type === type) {
            sum += entry.amount;
        }
    });

    return sum;
    
}

//calculateBalance function 
function calculateBalance(income, outcome) {
    return income - outcome;
}

//show function
function show(element)
{
 
    element.classList.remove("hide");
    
}

//hide function

function hide(elements)
{
    elements.forEach(function (element) {
        element.classList.add("hide"); 
    });
}

//active function

function active(element)
{
    element.classList.add("active");
}

//inactive function

function inactive(elements)
{
    elements.forEach(function (element) {
        element.classList.remove("active"); 
    });
}