function canGiveBlood(donor, receiver) {
    if(donor == "A+") {
        if(receiver == "A+" || receiver == "AB+") {
            return true;
        } else{
            return false;
        }

    } else if(donor == "A-") {
        if(receiver == "A-"|| receiver == "A+" || receiver == "AB-" || receiver == "AB+") {
            return true;
        } else{
            return false;
        }

    } else if(donor == "B+") {
        if(receiver == "B+" || receiver == "AB+") {
            return true;
        } else{
            return false;
        }

    } else if(donor == "B-") {
        if(receiver == "B-" || receiver == "B+" || receiver == "AB-" || receiver == "AB+") {
            return true;
        } else{
            return false;
        }

    } else if(donor == "AB+") {
        if(receiver == "AB+") {
            return true;
        } else{
            return false;
        }

    } else if(donor == "AB-") {
        if(receiver == "AB-" || receiver == "AB+") {
            return true;
        } else{
            return false;
        }

    } else if(donor == "O+") {
        if(receiver == "O+" || receiver == "B+" || receiver == "A+" || receiver == "AB+") {
            return true;
        } else{
            return false;
        }

    } else if(donor == "O-") {
        if(receiver == "O-" || receiver == "O+" || receiver == "A-" || receiver == "A+" || receiver == "B-" || receiver == "B+" || receiver == "AB-" || receiver == "AB+") {
            return true;
        } else{
            return false;
        }

    } else{
        return "Invalid blood type.";
    }

}

// Testing out the program
console.log(canGiveBlood("O+", "A+"))
console.log(canGiveBlood("A-", "B-"))
console.log(canGiveBlood("A-", "AB+"))

