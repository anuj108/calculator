let screen = document.getElementById("abc");
buttons = document.querySelectorAll("button");
let screenValue = "";
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    console.log("button text is", buttonText);
    if (buttonText == "=") {
      screen.value = eval(screenValue);
    } else if (buttonText == "CLEAR") {
      screen.value = "";
      screenValue = screen.value;
    } else {
      screenValue += buttonText;
      console.log(screenValue);
      screen.value = screenValue;
    }
  });
}

function chargebattery() {
  var a;
  a = document.getElementById("charging");
  a.innerHTML = "&#xf244;";
  setTimeout(function () {
    a.innerHTML = "&#xf243;";
  }, 30000);
  setTimeout(function () {
    a.innerHTML = "&#xf242;";
  }, 30000);
  setTimeout(function () {
    a.innerHTML = "&#xf241;";
  }, 30000);
  setTimeout(function () {
    a.innerHTML = "&#xf240;";
  }, 100);
}
chargebattery();
setInterval(chargebattery, 70000);
