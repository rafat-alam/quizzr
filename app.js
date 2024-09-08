let tableLine = document.getElementById("table-line");
let numberOfLines = document.getElementById("numoflines");
let tableOf = document.getElementById("tableof");
let submitButton = document.getElementById("submitbutton");
let form = document.getElementById("form");

function tablePrint() {
  form.setAttribute("style", "display:none");
  for(let i =1; i<=numberOfLines.value; i++) {
    tableLine.innerHTML += tableOf.value +" * " +i+" = "+tableOf.value*i +"<br />";
  }
}

function checkForm() {
  if(numberOfLines.value!="" && tableOf.value!="" && numberOfLines.value>0) {
    tablePrint();
  } else {
    alert("Enter Correctly.");
  }
}

submitButton.addEventListener("click", checkForm);