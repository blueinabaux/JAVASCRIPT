
function walkDog(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const dogWalked = false;
            if(dogWalked){
                resolve("Take the dog for a walk");
            }
            else{
                reject("The dog didnt walk");
            }
        }, 1500);
    })
}

function clean(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            
            const mood = false;
            if(mood){
                resolve("Clean the Kitchen");
            }
            else{
                reject("The Kitchen is not cleaned");
            }
        }, 2500);
    })
}

walkDog().then(value => {console.log(value); return clean()})
         .then(value => {console.log(value); console.log("ALL THE WORK IS FINISHED !")})
         .catch(error => console.error(error));