
/******Constructor******/

function Propeller (propeller) {
    this.actualPower  = 0;
    this.maxPower = propeller;
    
    this.setActualPower = function(n){
        this.actualPower = n;
    }
}



