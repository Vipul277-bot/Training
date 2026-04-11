

function handleSubmit(event){
    event.preventDefault();


    let Amount=document.getElementById("Amount").value;
let Info=document.getElementById("Info").value;
let Catagory=document.getElementById("Catagory").value;

    if(Amount===""||Info===""||Catagory==""){
        alert("Enter all the fields");
        return;
    }


    let expense={
        id:Date.now(),
        Amount,
        Info,
        Catagory
    };

    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    expenses.push(expense);
    localStorage.setItem("expenses", JSON.stringify(expenses));

    let li=document.createElement("li");
    li.id=expense.id;
    li.innerHTML=Amount+"-"+Info+"-"+Catagory;

    let dltbtn=document.createElement("button");
    dltbtn.textContent="Delete";
    dltbtn.className="btn btn-danger btn-sm ms-2";
    dltbtn.onclick=function(){
        dltExpense(expense.id);
    }

    let edtbtn=document.createElement("button");
    edtbtn.textContent="Edit";
    edtbtn.className="btn btn-warning btn-sm ms-2";

    edtbtn.onclick=function(){
        editExpense(expense);
    }

    document.getElementById("Expense").appendChild(li);
    li.appendChild(dltbtn);
    li.appendChild(edtbtn);


    document.getElementById("Amount").value="";
    document.getElementById("Info").value="";
    document.getElementById("Catagory").value="";
    


}

function dltExpense(id){
    let expenses=JSON.parse(localStorage.getItem("expenses"))||[];

    expenses=expenses.filter(exp=>exp.id!==id);
    localStorage.setItem("expenses",JSON.stringify(expenses));

    document.getElementById(id).remove();

}

function editExpense(expense) {
    // Fill form with old values
    document.getElementById("Amount").value = expense.Amount;
    document.getElementById("Info").value = expense.Info;
    document.getElementById("Catagory").value = expense.Catagory;

    // Delete old entry
    dltExpense(expense.id);
}