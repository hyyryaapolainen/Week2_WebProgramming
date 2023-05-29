import "./styles.css";

if (document.readyState !== "loading") {
  console.log("Document is ready!");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document is ready after waiting!");
    initializeCode();
  });
}

function initializeCode() {
  const submitFormButton = document.getElementById("submit-form");

  submitFormButton.addEventListener("click", function () {
    let table = document.getElementById("user-table");
    let row = table.insertRow(-1);
    let user = row.insertCell(0);
    let email = row.insertCell(1);
    let address = row.insertCell(2);
    let admin = row.insertCell(3);
    user.innerHtml = document.getElementById("input-username").value;
    email.innerHtml = document.getElementById("input-email").value;
    address.innerHtml = document.getElementById("input-address").value;
    admin.innerHtml = document.getElementById("input-admin").value ? "X" : "-";
  });
}
