
//  EXERCICI COETS //
/*  Coet 1: "32WESSDS"
        Propulsors: 3
    Coet2: "LDSFJA32"
        Propulsors: 6 */

/******Constructor******/

function Rocket (code, propeller) {
    this.code = code;
    this.propeller = propeller;
    this.actualPower = 0;
    this.speedUp = function() {
        this.actualPower = this.actualPower + 10;
        return this.actualPower;
    };
    this.brake = function() {
        if (this.actualPower >= 10) {
            this.actualPower = this.actualPower-10;
            return this.actualPower;
        } else {
            console.log("The rocket " + this.code + "is stopped.")
        } 
    }  
}

/******Console.log de la velocitat******/

function printPower(){
    console.log("Velocitat coet1: " + rocket1.actualPower + ".\nVelocitat coet2: " + rocket2.actualPower);
}

/******Assignació coets******/

var rocket1 = new Rocket ("32WESSDS", [10, 30, 80]);
var rocket2 = new Rocket ("LDSFJA32", [30,40,50,50,30,10]);

/******Console.log del codi + propulsors******/

console.log(rocket1.code + ": " + rocket1.propeller[0] + "," + rocket1.propeller[1] + "," + rocket1.propeller[2] + "\n" + rocket2.code + ": " + rocket2.propeller[0] + "," + rocket2.propeller[1] + "," + rocket2.propeller[2] + rocket2.propeller[3] + "," + rocket2.propeller[4] + "," + rocket2.propeller[5]);


/******Acceleracions/Frenades******/


for( var i=0 ; i<3 ; i++){
    rocket1.speedUp();
    rocket2.speedUp();
}

printPower();

for( var i=0 ; i<5 ; i++){
    rocket1.brake();
}
for( var i=0 ; i<7 ; i++){
    rocket2.speedUp();
}

printPower();

for( var i=0 ; i<15 ; i++){
    rocket1.speedUp();
    rocket2.speedUp();
}

printPower();









/*****INTERACCIO USUARI*****/
/***************************/

/******Constructor******/

function Rocket (code, propeller) {
    this.code = code;
    this.propeller = propeller;
    this.actualPower = 0;
    this.speedUp = function() {
        this.actualPower = this.actualPower + 10;
        return this.actualPower;
    };
    this.brake = function() {
        if (this.actualPower >= 10) {
            this.actualPower = this.actualPower-10;
            return this.actualPower;
        } else {
            console.log("The rocket " + this.code + " is stopped.")
        } 
    }  
}



/******Create Rockets******/
var rockets = [];
var noRockets = true;
function createRocket(code, propeller){
        if(rockets.length == 0){
            var rocket = new Rocket(code, propeller);
            rockets.push(rocket);
            console.log(rockets);
            document.getElementById("info").innerHTML = "Rocket " + rocket.code + " has been created.";
            noRockets = false;
           
            /*Rocket1 appears*/
            document.getElementById("one").classList.remove("hidden");    
        } else if (rockets.length < 2 ){
            var rocket = new Rocket(code, propeller);
            rockets.push(rocket);
            console.log(rockets);
            document.getElementById("info").innerHTML = "Rocket " + rocket.code + " has been created.";
            
            /*Rocket2 appears*/
             document.getElementById("two").classList.remove("hidden"); 
        }   else  {
            document.getElementById("info").innerHTML = "There's already two rockets.";
        }
}


/*MOVES*/



function moveRight(n){
    document.getElementById("one").style.transition = "all 1s";
    document.getElementById("two").style.transition = "all 1s"; 

    if (n==0 && rockets[n].actualPower < 80){
        document.getElementById("one").style.left = rockets[n].actualPower + "%";        
    } else if (n==1 && rockets[n].actualPower < 80){
        document.getElementById("two").style.left = rockets[n].actualPower + "%";        
    }
}
function moveLeft(n){
    document.getElementById("one").style.transition = "all 1s";   
    document.getElementById("two").style.transition = "all 1s";
    
    if (n==0 && rockets[n].actualPower < 80){
        document.getElementById("one").style.left = rockets[n].actualPower + "%";        
    } else if (n==1 && rockets[n].actualPower < 80){
        document.getElementById("two").style.left = rockets[n].actualPower + "%";        
    }
}



/******Acceleracions/Frenades*****/

function accelerate(n){
    if(noRockets){
        rocketless();
    } else {
        rockets[n].speedUp();           
        document.getElementById("info").innerHTML = "Rocket " + rockets[n].code + " has accelerated.";
        
        /*Move right*/
        moveRight(n);
    }
}

function decrease(n){
    if(noRockets){
        rocketless();
    } else {
        rockets[n].brake();
        if(rockets[n].actualPower == 0){
           document.getElementById("info").innerHTML = "Rocket " + rockets[n].code + " has stopped.";
           console.log(rockets[n].code, rockets[n].actualPower);
        } else {
            document.getElementById("info").innerHTML = "Rocket's " + rockets[n].code + " speed has decresed.";
            console.log(rockets[n].code, rockets[n].actualPower);
            moveLeft(n);
        }
    }
}


/******Print Rockets Info*****/

function rocketInfo(n){
    if(noRockets){
        rocketless();
    } else {
    var info = "Rocket " + rockets[n].code + " boosters max power: " + rockets[n].propeller.toString() + ".";
    document.getElementById("info").innerHTML = info;
    return info;
    }
}

function printAll(){
    if(noRockets){
        rocketless();
    } else {
    var allInfo = "";
    for(var i=0 ; i<rockets.length ; i++){
        allInfo+= rocketInfo(i);
    }
    document.getElementById("info").innerHTML = allInfo + " \n";
    }
}

function rocketless(){
    document.getElementById("info").innerHTML = "There're no Rockets yet, create one to continue.";
}




