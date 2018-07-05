
//****************************FASE 1****************************//


///******Rocket assignment******/
var rocket1 = new Rocket ("32WESSDS", [10, 30, 80]);
var rocket2 = new Rocket ("LDSFJA32", [30,40,50,50,30,10]);

/******Rocket Code + number of Propellers*******/
console.log(rocket1.code + " has: " + rocket1.propeller.length + " propellers. \n" + rocket2.code + " has: " + rocket2.propeller.length + " propellers.");


//****************************FASE 2****************************//

/******Speed Console.log******/
function printPower(){
    console.log("Rocket 1 power: " + rocket1.actualSpeed() + "\nRocket 2 power: " + rocket2.actualSpeed());
}

/******Code + Propellers Console.log******/
console.log(rocket1.code + ": number of propellers: " + rocket1.propeller.length + ": "+ rocket1.propeller[0].maxPower + "," + rocket1.propeller[1].maxPower + "," + rocket1.propeller[2].maxPower + "\n" + rocket2.code + ": number of propellers: " + rocket2.propeller.length + ": " + rocket2.propeller[0].maxPower + "," + rocket2.propeller[1].maxPower + "," + rocket2.propeller[2].maxPower + "," + rocket2.propeller[3].maxPower + "," + rocket2.propeller[4].maxPower + "," + rocket2.propeller[5].maxPower);



//****************************FASE 3****************************//

/******Acceleracions/Frenades******/
console.log("Actual speed rocket 1: " + rocket1.actualSpeed() + "\nActual speed rocket 2: " + rocket2.actualSpeed());


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











//////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*****INTERACCIO USUARI*****/
/***************************/



/******Create Rockets******/
var rockets = [];
var noRockets = true;

function createRocket(code, propeller){
        if(rockets.length == 0){
            var rocket = new Rocket(code, propeller);
            rockets.push(rocket);
            document.getElementById("info").innerHTML = "Rocket " + rocket.code + " has been created.";
            noRockets = false;
            
            /*Rocket1 appears*/
            document.getElementById("32WESSDS").classList.remove("hidden");    
        } else if (rockets.length < 2  && repeatedRocket(code) == false){
           
            var rocket = new Rocket(code, propeller);
            rockets.push(rocket);
            document.getElementById("info").innerHTML = "Rocket " + rocket.code + " has been created.";
            
            /*Rocket2 appears*/
             document.getElementById("LDSFJA32").classList.remove("hidden"); 
        } else if (repeatedRocket(code) == true){
            document.getElementById("info").innerHTML = "This rocket has already been created.";

        } else  {
            document.getElementById("info").innerHTML = "There's already two rockets.";
        }
}


function repeatedRocket(code){
    if (!noRockets){
        for (var i=0 ; i<rockets.length ; i++){
            if (rockets[i].code == code){
                return true;
            } else {
                return false;
            }
        }
    }
}

/*MOVES*/



function moveRight(n){
    document.getElementById("32WESSDS").style.transition = "all 1s";
    document.getElementById("LDSFJA32").style.transition = "all 1s"; 
    if (n==0){
        document.getElementById("32WESSDS").style.left = (rockets[n].actualSpeed()/2.5) + "%";   
        console.log(rockets[n].actualSpeed())
    } else if (n==1){
        document.getElementById("LDSFJA32").style.left = (rockets[n].actualSpeed()/2.5) + "%";        
    }
}
function moveLeft(n){
    document.getElementById("32WESSDS").style.transition = "all 1s";   
    document.getElementById("LDSFJA32").style.transition = "all 1s";
    
    if (n==0){
        document.getElementById("32WESSDS").style.left = (rockets[n].actualSpeed()/2.5) + "%";        
    } else if (n==1){
        document.getElementById("LDSFJA32").style.left = (rockets[n].actualSpeed()/2.5) + "%";        
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
        if(rockets[n].actualSpeed() !== 0){
            rockets[n].brake();
            document.getElementById("info").innerHTML = "Rocket's " + rockets[n].code + " speed has decresed.";
            console.log(rockets[n].code, rockets[n].actualSpeed());
            moveLeft(n);
            if (rockets[n].actualSpeed() == 0){
                printStopped(n);

            }
        } else {
            printStopped(n);
        }
    }
}

function printStopped(n){
    document.getElementById("info").innerHTML = "Rocket " + rockets[n].code + " has stopped.";
    console.log(rockets[n].code, rockets[n].actualSpeed());
}

/******Print Rockets Info*****/

function rocketInfo(n){
    if(noRockets){
        rocketless();
    } else {
        var propList = [];
        for ( var i=0 ; i<rockets[n].propeller.length ; i++){
            var p = rockets[n].propeller[i].actualPower
            propList.push(p);
        }
    var info = "Rocket " + rockets[n].code + " boosters max power: " + propList.toString() + "\n";
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
    document.getElementById("info").innerHTML = allInfo;
    }
}

function rocketless(){
    document.getElementById("info").innerHTML = "There're no Rockets yet, create one to continue.";
}




