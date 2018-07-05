
/******Constructor******/

function Rocket (code, propeller) {
    this.code = code;   

    var pr=[];
    for (var i=0 ; i< propeller.length ; i++){
    var p  = new Propeller(propeller[i]);
    pr.push(p);
    }
    
    this.propeller = pr;
    
/**CONTROLAR L'AUGMENTAT DE LA POTENCIA DE CADA PROPULSOR FINS AL SEU MAXIM**/
    this.speedUp = function() {
        for (var i=0 ; i<pr.length ; i++){
            if (pr[i].actualPower < pr[i].maxPower){ 
             pr[i].setActualPower(pr[i].actualPower + 10);
            }
        }   
    };
    
    this.brake = function() {
        for (var i=0 ; i<pr.length ; i++){
                
            if (pr[i].actualPower >= 10) {
                pr[i].setActualPower(pr[i].actualPower - 10);
            } else {
                console.log("The rocket " + this.code + "is stopped.");
            }
        }
    };
    
    this.actualSpeed = function() {
        var speed = 0;
        for (var i=0 ; i<pr.length ; i++){
            speed += pr[i].actualPower;
        }
        return speed;
    }
}
