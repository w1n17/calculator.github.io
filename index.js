document.addEventListener('DOMContentLoaded', function() { 
  const input = document.getElementById("input"); 
  const allButtons = Array.from(document.getElementsByTagName("button")) 
  const history = document.getElementById('history-of-calculations');

  allButtons.map((button) => { 
    button.addEventListener('click', (e) =>{ 
      let cal = input.value; 
      switch (e.target.innerText) { 
        case "Delete": 
          input.value = ""; 
          break; 
        case "=": 
          try { 
              let beforeCal = cal;
              cal = eval(cal) 
              input.value = cal;
              const p = document.createElement('p');
              p.classList.add('PStyle');
              p.style.cssText = 'font-size: 150%; text-align: right; box-sizing: border-box; padding-right: 5%; font-family: Times New Roman, Times, serif;'
              p.innerHTML = beforeCal + " = " + cal
              p.onclick = function(){
                input.value = cal
            }
            history.prepend(p)
          } catch (e) { 
            input.value = "Error" 
          } 
          break; 
        case "%": 
          let passedText = cal + "/100"; 
          input.value = eval(passedText); 
          console.log(input.value)
          let beforeCal = cal;
          const p = document.createElement('p');
          p.classList.add('PStyle');
          p.innerHTML = beforeCal + "% = " + input.value
          history.prepend(p)
          break; 
        default: 
          input.value += e.target.innerText; 
      } 
    }) 
  }) 
});