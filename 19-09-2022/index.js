const submit = document.querySelectorAll(".submit-btn");
const price = document.querySelectorAll(".price");
const Alert = document.querySelectorAll(".item-des .alert");
const quality = document.querySelectorAll(".quality");

submit[0].onclick = function () {
  let avgQuality = +quality[0].value;
  let avgPrice = +price[0].value;

  if (avgQuality > 10 || avgQuality < 1) {
    console.log(
      "Please Select Minimum 1 Item or 10 item or less than 10 Items"
    );
    Alert[0].classList.add("active");
  } else {
    let totalPrice = avgPrice * avgQuality;
    console.log(totalPrice);
  }
};

const AlertOff = document.querySelectorAll(".item-des .alert small");
AlertOff[0].addEventListener("click", () => {
  Alert[0].classList.remove("active");
});
/*
const itemDes = document.querySelector(".item-des");

const alerts = document.createElement("div");
alerts.classList.add("alert");
itemDes.appendChild(alerts);
console.log(alerts);
/*/
