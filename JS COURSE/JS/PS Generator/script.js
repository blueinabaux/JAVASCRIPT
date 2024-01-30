
const psLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumber = true;

function generatePassword(psLength, includeLowerCase, includeUpperCase, includeNumber){
    const lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";

    let allowedChars = "";
    let pass = "";

    if(includeLowerCase){
        allowedChars+=lowerCaseChar;
    }
    else{
        allowedChars+="";
    }

    if(includeUpperCase){
        allowedChars+=upperCaseChar;
    }
    else{
        allowedChars+="";
    }

    if(includeNumber){
        allowedChars+=numbers;
    }
    
    else{
        allowedChars+="";
    }

    // allowedChars+= includeLowerCase ? lowerCaseChar : "";
    // allowedChars+= includeUpperCase ? upperCaseChar : "";
    // allowedChars+= includeNumber ? numbers : "";

    if(psLength<=0){
        return `Warning : Password must have atleast one Character`;
    }

    if(allowedChars.length === 0){
        return `Warning : Atleast one set of Characters needs to be selected ! `;
    }

    for(let i=0;i<psLength;i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        pass += allowedChars[randomIndex];
    }


    console.log(allowedChars);

    

    return pass;
}

const password = generatePassword(psLength, includeLowerCase, includeUpperCase, includeNumber);

console.log(`Generated Password : ${password}`);

