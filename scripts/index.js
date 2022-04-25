// Store the wallet amount to your local storage with key "amount"

let showBalance =(localStorage.getItem("amount"))||0

function addAmount(){
    let userBalance =(localStorage.getItem("amount"))|| 0;

    let userAmount=document.getElementById("amount").value;
    console.log(userBalance);


    let toatl=Number(userBalance)+Number(userAmount);

    localStorage.setItem("amount",(toatlBalance));

    document.getElementById("wallet").innerText=toatlBalance;
}