
//****************************FASE 1****************************//


///******Rocket assignment******/
var rocket1 = new Rocket ("32WESSDS", [10, 30, 80]);
var rocket2 = new Rocket ("LDSFJA32", [30,40,50,50,30,10]);

/******Rocket Code + number of Propellers*******/
console.log(rocket1.code + " has: " + rocket1.propeller.length + " propellers. \n" + rocket2.code + " has: " + rocket2.propeller.length + " propellers.");


//****************************FASE 2****************************//

/******Speed Console.log******/
function printPower(){
    console.log("Rocket 1 power: " + rocket1.currentSpeed + "\nRocket 2 power: " + rocket2.currentSpeed);
}

/******Code + Propellers Console.log******/
console.log(rocket1.code + ": number of propellers: " + rocket1.propeller.length + ": "+ rocket1.propeller[0].maxPower + "," + rocket1.propeller[1].maxPower + "," + rocket1.propeller[2].maxPower + "\n" + rocket2.code + ": number of propellers: " + rocket2.propeller.length + ": " + rocket2.propeller[0].maxPower + "," + rocket2.propeller[1].maxPower + "," + rocket2.propeller[2].maxPower + "," + rocket2.propeller[3].maxPower + "," + rocket2.propeller[4].maxPower + "," + rocket2.propeller[5].maxPower);



//****************************FASE 3****************************//

/******Acceleracions/Frenades******/
console.log("Actual speed rocket 1: " + rocket1.currentSpeed + "\nActual speed rocket 2: " + rocket2.currentSpeed);


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
            document.getElementById("info").innerHTML = "Rocket " + rocket.code + " has been created_";
            document.getElementById("screen-0").innerHTML = rocket.currentSpeed;
            noRockets = false;
            
            /*Rocket1 appears*/
            document.getElementById("32WESSDS").classList.remove("hidden");    
        } else if (rockets.length < 2  && repeatedRocket(code) == false){
           
            var rocket = new Rocket(code, propeller);
            rockets.push(rocket);
            document.getElementById("info").innerHTML = "Rocket " + rocket.code + " has been created_";
            document.getElementById("title-1").innerHTML = "Actual state_";
            document.getElementById("screen-1").innerHTML = rocket.currentSpeed;            /*Rocket2 appears*/
             document.getElementById("LDSFJA32").classList.remove("hidden"); 
        } else if (repeatedRocket(code) == true){
            document.getElementById("info").innerHTML = "This rocket has already been created_";

        } else  {
            document.getElementById("info").innerHTML = "There's already two rockets_";
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
        document.getElementById("32WESSDS").style.left = (rockets[n].currentSpeed/2.5) + "%";   
    } else if (n==1){
        document.getElementById("LDSFJA32").style.left = (rockets[n].currentSpeed/2.5) + "%";        
    }
}
function moveLeft(n){
    document.getElementById("32WESSDS").style.transition = "all 1s";   
    document.getElementById("LDSFJA32").style.transition = "all 1s";
    
    if (n==0){
        document.getElementById("32WESSDS").style.left = (rockets[n].currentSpeed/2.5) + "%";        
    } else if (n==1){
        document.getElementById("LDSFJA32").style.left = (rockets[n].currentSpeed/2.5) + "%";        
    }
}



/******Acceleracions/Frenades*****/

function accelerate(n){
    if(noRockets){
        rocketless();
    } else {
        rockets[n].speedUp();    
        if (rockets[n].currentSpeed == rockets[n].getMaxPower()){
            document.getElementById("info").innerHTML = "Rocket " + rockets[n].code + " has reached its maximum power_";
            var idTitle = "title-"+ n;
            var idScreen = "screen-"+n;
            document.getElementById(idTitle).innerHTML = "Max power!";
            document.getElementById(idScreen).style.color = "brown";
            document.getElementById(idScreen).style.textShadow = "2px 2px darkred";        
            document.getElementById(idScreen).innerHTML = rockets[n].currentSpeed;
        } else {
            document.getElementById("info").innerHTML = "Rocket " + rockets[n].code + " has accelerated_";
            var idTitle = "title-"+ n;
            var idScreen = "screen-"+n;
            document.getElementById(idTitle).innerHTML = "speed up!";
            document.getElementById(idScreen).innerHTML = rockets[n].currentSpeed;

            /*Move right*/
            moveRight(n);
        }
    }
}

function decrease(n){
    if(noRockets){
        rocketless();
    } else {
        if(rockets[n].currentSpeed !== 0){
            rockets[n].brake();
            document.getElementById("info").innerHTML = "Rocket's " + rockets[n].code + " speed has decresed_";
            var idTitle = "title-"+ n;
            var idScreen = "screen-"+n;
            document.getElementById(idScreen).removeAttribute("style");
            document.getElementById(idTitle).innerHTML = "Slow down!";
            document.getElementById(idScreen).innerHTML = rockets[n].currentSpeed;
            
            moveLeft(n);
            if (rockets[n].currentSpeed == 0){
                printStopped(n);

            }
        } else {
            printStopped(n);
        }
    }
}

function printStopped(n){
    var idTitle = "title-"+ n;
    var idScreen = "screen-"+n;
    document.getElementById(idTitle).innerHTML = "Stopped";
    document.getElementById(idScreen).innerHTML = "___";
    document.getElementById("info").innerHTML = "Rocket " + rockets[n].code + " has stopped_";
    console.log(rockets[n].code, rockets[n].currentSpeed);
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
    var info = "Rocket " + rockets[n].code + " boosters max power: " + propList.toString() + "_\n";
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
    document.getElementById("info").innerHTML = "There're no Rockets yet, create one to continue_";
}




