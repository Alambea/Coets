
/******Constructor******/

function Rocket (code, propeller) {
    this.code = code;   

    var pr=[];
    for (var i=0 ; i< propeller.length ; i++){
    var p  = new Propeller(propeller[i]);
    pr.push(p);
    }
    
    this.propeller = pr;
    this.currentSpeed = 0;
    
/**CONTROLAR L'AUGMENTAT DE LA POTENCIA DE CADA PROPULSOR FINS AL SEU MAXIM**/
    this.speedUp = function() {
        for (var i=0 ; i<pr.length ; i++){
            pr[i].accelerate();
        } 
        console.log(propeller);
        this.computeSpeed();
    };
    
    this.brake = function() {
        for (var i=0 ; i<pr.length ; i++){
            pr[i].decrease();
        }
        console.log(propeller);
        this.computeSpeed();
    };
    
    this.computeSpeed = function() {
        var speed = 0;
        for (var i=0 ; i<pr.length ; i++){
            speed += pr[i].actualPower;
        }
        this.currentSpeed = speed;
    };
    this.getMaxPower = function(){
        var mP = 0;
        for (var i=0 ; i<pr.length ; i++){
            mP += pr[i].maxPower;
        }
        return mP;
    }
}
