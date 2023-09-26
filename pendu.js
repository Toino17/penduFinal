let data = [
            "abandonné",
            "abattoir",
            "abattu",
            "abeille",
            "abomination",
            "abordable",
            "abrasif",
            "abricot",
            "absence",
            "absent",
            "absolution",
            "absorbable",
            "absorbant",
            "absorber",
            "abstinence",
            "abstinent",
            "abstrait",
            "abstraitement",
            "absurde",
            "absurdement",
            "absurdité",
            "absurdités",
            "abuser de",
            "académie",
            "académique",
            "acceptant",
            "accessoires",
            "accident",
            "accidentel",
            "accord",
            "achevée",
            "acide",
            "acier",
            "acoustique",
            "acrobate",
            "acrobatie",
            "acrobatique",
            "acteur"
]

let playbutton = document.querySelector(".play")
let playbutton2 = document.querySelector(".tryWord")
let playbutton3 = document.querySelector(".playButton3")
let UnderGuess = ""
let baliseHistory = document.querySelector(".historyP")
let historia = "Historique: "
let reg = /^[a-zA-Zé]$/
let attempt=1
let alreadyUse = 0
let erreur = document.querySelector(".erreur")
let balisedevineP = document.querySelector(".devineP")
let baliseDevine = document.querySelector(".devineP")
const tryWord = document.querySelector(".tryWord")

function affiche (){
    baliseHistory.style.visibility = "visible"
    balisedevineP.style.visibility = "visible"
    playbutton2.style.visibility = "visible"
}

function searchRandomWord(){
   let randomNumber = Math.floor((Math.random() * data.length))
   
   return randomWord = data[randomNumber];
}

function dataToUnder(randomWord){
    let UnderGuess1 = ""
    
    for (let i = 0; i < randomWord.length; i++) {
        UnderGuess1 += "_"
    }
    return UnderGuess = UnderGuess1
}

function ShowUnder(){
    baliseDevine.style.letterSpacing = "20px"
    baliseDevine.innerHTML = UnderGuess
    if (UnderGuess.toLowerCase()==randomWord){
        baliseDevine.style.color = "green"
    }
}

function history(){
   indexstory = historia.indexOf(event.key.toLowerCase(), 11)
   let erreur = document.querySelector(".erreur")
   if (indexstory ==-1){
    erreur.style.visibility = "hidden"
    erreur.innerHTML = "Message Erreur"
    historia += event.key.toLowerCase()
    baliseHistory.innerHTML = historia
    return alreadyUse = 0
   }
   else{
    erreur.innerHTML = `Lettre ${event.key.toUpperCase()} déjà utilisée`
    erreur.style.visibility = "visible"
    erreur.id = "erreur"
    setTimeout(function anim (){erreur.id=""}, 500)
    return alreadyUse = 1
   }
}

function reset(){
    baliseHistory.innerHTML = "Historique: "
    historia = "Historique: "
        for (attempt=2 ; attempt <= 11; attempt++) {
        document.getElementById(`rect${attempt}`).style.display = "none"   
    }
    attempt = 1
    baliseDevine.style.color = "black"
    tryWord.style.visibility = "hidden" 
}



playbutton.addEventListener("click", function(event) {
    event.preventDefault()
    affiche()
    reset()
    searchRandomWord()
    dataToUnder(randomWord)
    ShowUnder()
  }); 

  playbutton3.addEventListener("click", function(event) {
    event.preventDefault()
    let inputGuess = document.querySelector(".tryInput")
    let valueInputGuess = inputGuess.value.toLowerCase()
    if (valueInputGuess==randomWord){
        baliseDevine.style.color = "green"

    }
    // creatediv.classList.add('b');
    // creatediv.id = 'presentation';
    // document.body.appendChild(creatediv);
  }); 
  let modal = document.querySelector("#premierPlan")
console.log(modal.classList.contains("show"))

function listenerKey(){
    document.addEventListener("keydown",function(event){
        if (modal.classList.contains("show")) {
            return
        }
        console.log(event.target)
        if (reg.test(event.key) == true ) {
            caracKey = (event.key.toLowerCase())
            history()
            let pos = randomWord.indexOf(caracKey)
            let count = 0
            let ind = -1
            while (pos != -1) {
                count++;
                pos = randomWord.indexOf(caracKey, pos + 1);
            }
            if(count > 0){
                for (let i = 0; i < count; i++) {
                        ind = randomWord.indexOf(caracKey, ind+1)
                        UnderGuess = UnderGuess.replaceAt(ind, caracKey)      
                }
            }
            else if (alreadyUse==0){
                attempt++
                document.getElementById(`rect${attempt}`).style.display = "block"
            }
            else{
                return
            }
            
            UnderGuess = UnderGuess.charAt(0).toUpperCase() + UnderGuess.slice(1)
            
            ShowUnder()
            if (UnderGuess.toLowerCase()==randomWord){
                
            }
    }   }   )
    
    String.prototype.replaceAt = function(index, replacement) {
        if (index >= this.length) {
            return this.valueOf();
        }
        return this.substring(0, index) + replacement + this.substring(index + 1);
    }
}

listenerKey()


function Modal() {
    document.getElementById("arrierePlan").style.display = "block";
    document.getElementById("premierPlan").style.display = "block";
    document.getElementById("premierPlan").classList.add("modalContentPerso", "show")
    console.log(modal)
    let cancelButtons = document.querySelectorAll(".close, .containerBgOpacity, .playButton3");
        cancelButtons.forEach(function (button) {
            button.addEventListener("click", function () {
                document.getElementById("premierPlan").classList.remove("show")
                document.getElementById("arrierePlan").style.display = "none";
                document.getElementById("premierPlan").style.display = "none";
            });
        })
        console.log(modal.classList.contains("show"))
};


// document.body.style.backgroundColor="red"