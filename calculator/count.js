let input = document.getElementById("print_input");
let buttons = document.querySelectorAll(".col");
let string = "";

let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      input.value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      input.value = string;
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});

let mode = document.getElementById("mode_con");
