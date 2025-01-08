document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("expense-form");
    const expenseList = document.querySelector("#expense-list ul");


    form.addEventListener("submit", (e)=>{
        e.preventDefault();

        const description =document.getElementById("exp").value;
        const amount =document.getElementById("Money").value;
        const category =document.getElementById("category").value;

        const li = document.createElement("li");
        li.textContent = `${description} : Rs${amount} | Transaction Category:${category}`;
        expenseList.appendChild(li);

        form.reset();
    });
});