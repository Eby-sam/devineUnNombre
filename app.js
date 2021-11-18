let trouver = Math.floor(Math.random() * 100) + 1;
let chance = 9;
let rep = document.getElementById("rep");
let rest = document.getElementById("chiffre");
let champ = document.getElementById("text");
let push = document.getElementById("click");
let user = document.getElementById("rep-U");
let reset = document.getElementById("reset");

//function monClick
function monClick() {

    if (chance > -1) {

        if (parseInt(champ.value) === trouver) {
            rep.innerHTML = "trouver !!!";
            rep.style.fontSize = '3.5rem';
            user.innerHTML += champ.value + " ";
        }
        else if (parseInt(champ.value) < trouver) {

            rep.innerHTML = "FAUX ton nombre est trop petit.";
            rep.style.fontSize = '1.5rem';
            rest.innerHTML = chance--;
            user.innerHTML += champ.value + " ";
        }
        else if (parseInt(champ.value) > trouver) {
            rep.innerHTML = "FAUX ton nombre est trop grand.";
            rep.style.fontSize = '1.5rem';
            rest.innerHTML = chance--;
            user.innerHTML += champ.value + " ";
        }
        else {

        }
    }
    else {
        rep.innerHTML = "Perdu";
        rep.style.fontSize = '2.5rem';
    }
}

// function "reset"
function supp() {
    champ.value = null;
    user.innerHTML = null;
    rest.innerHTML = null;
}

// the "push" button simply allows you to validate the number entered ^^
push.addEventListener("click",monClick);

// the "restart" button will reset the default values = null
reset.addEventListener("click",supp);