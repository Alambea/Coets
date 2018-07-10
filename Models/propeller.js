
/******Constructor******/

function Propeller (propeller) {
    this.actualPower  = 0;
    this.maxPower = propeller;
    this.accelerate = function(){
        if (this.actualPower < this.maxPower){ 
            this.actualPower += 10;
        }
    };
    this.decrease = function(){
         if (this.actualPower >= 10) {
                this.actualPower -= 10;
            } else {
                console.log("The rocket has stopped.");
            }
    }
               
           

}



