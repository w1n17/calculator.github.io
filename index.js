document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById("input");
    const equals = document.getElementById("third-column");
    const deleteButton = document.getElementById("deleteButton")
    const valueOfButtons = Array.from(document.getElementsByClassName("buttons"))
    const allButtons = Array.from(document.getElementsByTagName("button"))

    allButtons.map((button) => {
      button.addEventListener('click', (e) =>{
        let cal = input.value;
        switch (e.target.innerText) {
          case "Delete":
            input.value = "";
            break;
          case "=":
            try {
              if (cal > 0.001) {
                Math.round(cal, 3)
                input.value = eval(cal)
                console.log(1)
              }
              else{
              input.value = eval(cal)
              console.log(2)
              }
            } catch (e) {
              input.value = "Error"
            }
            break;
          case "%":
            let passedText = input.value + "/100";
            input.value = eval(passedText);
            break;
          default:
            input.value += e.target.innerText;
        }
      })
    })
});