import { Component } from '@angular/core';


@Component({
    selector:'calculator-component',
    templateUrl:'./calculator.view.html'
})
export class Calculator{
    currentExpression: string;
    result: number;
    newNumber: string =``;
    previousOperator: Array<string> =Array<string>();
    constructor(){
        this.currentExpression = ``;
        this.result=0;
    }
    updateExpression(value:string,digit:boolean){
        var operator: string;
        
        this.currentExpression += value;
        if(digit==true ){
            if(this.newNumber==null){
                this.newNumber=value;
            }
            else{
            this.newNumber+=value;
            }
        }
        else{
            if(this.previousOperator.length!=0)
            {
                operator = this.previousOperator[this.previousOperator.length-1];
                this.previousOperator.push(value);
            }
            else{
                this.result= +this.newNumber;
                this.previousOperator.push(value);
            }
            switch(operator){
                case "+":{
                    this.result = this.result+ +this.newNumber;
                    break;
                }
                case "-":{
                    this.result = this.result- +this.newNumber;
                    break;
                }
                case "*":{
                    this.result = this.result* +this.newNumber;
                    break;
                }
                case "/":{
                    this.result = this.result/ +this.newNumber;
                    break;
                }
                case "=":{
                    this.result=this.result;
                    break;
                }                                
            }
            
            this.newNumber=null;
        }
    }
}