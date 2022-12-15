//Tax calculator
function calculateTax(salary,x){

    //salary = salary before tax.
    //parameter for calculation = new salary.
    
    if(salary <= 4500){
        console.log(y);
    }
    else if(salary <= 6290){
        x = 4500 + (salary - 4500) * 0.9;
        console.log(x);
    }
    else if(salary <= 9030){
        x = 6111 + (salary - 6290) * 0.86;
        console.log(x);
    }
    else if(salary <= 14490){
        x = 8467 + (salary - 9030) * 0.8;
        console.log(x);
    }
    else if(salary <= 20140){
        x = 12835 + (salary - 14490) * 0.7;
        console.log(x);
    }
    else if(salary <= 41910){
        x = 16790 + (salary - 20140) * 0.65;
        console.log(x)
    }
    else if(salary <= 53970){
        x = 30940 + (salary - 41910) * 0.53;
        console.log(x)
    }
    else if(salary > 53970){
        x = 30940 + (salary - 41910) * 0.5;
        console.log(x)
    }
}





calculateTax(6000)