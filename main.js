let inputs = document.querySelectorAll("input");
let form = document.querySelector("form");
let date = "";
form.addEventListener("submit" ,function(e) {
  e.preventDefault();
  for (let i = 0; i < inputs.length; i++) {
    if(inputs[i].parentElement.getAttribute("for") == inputs[i].id) {
   
      date+= inputs[i].value + " ";
    }
  };
  console.log(date)
})