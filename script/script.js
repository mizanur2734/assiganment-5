const allBtnSet = document.getElementsByClassName("complete-btn");

let count = 23;
let countSet = 6;
for (const btn of allBtnSet) {
  btn.addEventListener("click", function (e) {
    if (allBtnSet === 1) {
      alert("success full");
    } else {
      alert("disable");
    }
    count = count + 1;
    document.getElementById("sit").innerText = count;
    countSet = countSet - 1;
    document.getElementById("sit-let").innerText = countSet;

    const container = document.getElementById("transaction-container");
    const div = document.createElement("div");
    div.innerHTML = `
    <p class="bg-[#F4F7FF] font-bold mt-4 px-1">You have Complete The Task Add Dark Mode at 12:48:15 PM</p>
    `;
    container.appendChild(div);
  });
}

function addBtn() {
  document.getElementById("test").setAttribute("disabled", true);
}

document.getElementById("cashout-box").addEventListener("click", function () {
  document.getElementById("cashout-box").style.display = "block";
  document.getElementById("transaction-container").style.display = "none";
});
document.getElementById("cashout-box").addEventListener("click", function () {
  document.getElementById("cashout-box").style.display = "block";
  document.getElementById("transaction-container").style.display = "none";
});
