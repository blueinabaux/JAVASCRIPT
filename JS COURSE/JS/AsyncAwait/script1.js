
function walkDog(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const dogWalked = true;
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

async function doChores(){
    
    try{
        const dogwalkedResult = await walkDog();
        console.log(dogwalkedResult);

        const cleanResult = await clean();
        console.log(cleanResult);

        console.log("ALL CHORES FINISHED !");
    }
    catch(error){
        console.error(error);
    }
}

doChores();
