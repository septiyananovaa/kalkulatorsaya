class Calculator{
    updateDisplay(){
        document.getElementById('display').value =this.displayvalue;
    }
    constructor(){
        this.displayvalue ='';
    }
    appendNumber(number){
        this.displayvalue +=number;
        this.updateDisplay();
    }
    appendOperator(operator){
        if(this.displayvalue !=='');
        this.displayvalue +=' '+operator+' ';
        this.updateDisplay();
    }
    clearDisplay(){
        this.displayvalue ='';
        this.updateDisplay();
    }
    backspace(){
        this.displayvalue = this.displayvalue.slice(0,-1);
        this.updateDisplay();
    }
    calculateResult(){
        try {
            const result =eval (this.displayvalue);
            this.displayvalue =result;
            this.updateDisplay();
        } catch (error) {
            this.displayvalue ='error';
            this.updateDisplay();
        }
    }
}
const calculator =new Calculator();