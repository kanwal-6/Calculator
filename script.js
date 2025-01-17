let inputBox = document.querySelector("input");

        function valuePass(number){
            inputBox.value += number;
        }

        function calculate(){
            try{
                inputBox.value = eval(inputBox.value);
            }
            catch(e){
                inputBox.value = "Syntax Error";
            }
        }
        function clears(){
            inputBox.value = "";
        }
        function backspace(){
            inputBox.value = inputBox.value.slice(0,-1);
        }