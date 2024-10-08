document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById("input");
    const equals = document.getElementById("third-column");
   

    function equalsButtonClick() {
        let inputValue = input.value;
        console.log(inputValue);
    
        if (inputValue !== undefined) {
            inputValue = inputValue.toString();
            console.log("if на indefiend is work")

            if(inputValue.includes('/')){
                inputValue = parseFloat(inputValue);
                console.log(inputValue);
                input.value = inputValue;
                console.log('/')
            }
            else if(inputValue.includes('*')){
                inputValue = parseFloat(inputValue);
                console.log(inputValue);
                input.value = inputValue;
                console.log('*')
            }
            else if(inputValue.includes('-')){
                inputValue = parseFloat(inputValue);
                console.log(inputValue);
                input.value = inputValue;
                console.log('-')
            }
            else if(inputValue.includes('+')){
                inputValue = parseFloat(inputValue);
                console.log(inputValue);
                input.value = inputValue;
                console.log('+')
            }
        } else {
            console.error('inputValue is undefined');
            console.log("if на indefiend is not work")
        }
    }
    equals.addEventListener('click', equalsButtonClick)
});
