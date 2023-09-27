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
let reg = /^[a-zA-Zé]+$/
let attempt=1
let alreadyUse = 0
let erreur = document.querySelector(".erreur")
let balisedevineP = document.querySelector(".devineP")
let baliseDevine = document.querySelector(".devineP")
const replayButton = document.querySelector('.replay')
let tryWord = document.querySelector(".tryWord")
let valueInputGuess = "??"


function affiche (){
    baliseHistory.style.visibility = "visible"
    balisedevineP.style.visibility = "visible"
    playbutton2.style.visibility = "visible"
    tryWord.style.visibility = "visible"
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
    baliseDevine.style.letterSpacing= "20px"
    baliseDevine.style.paddingLeft = "20px"
    baliseDevine.innerHTML = UnderGuess
    if (UnderGuess.toLowerCase()==randomWord){
        baliseDevine.style.color = "green"
        animeLetter()
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
    erreur.style.visibility = 'hidden'
}

function playtoReplay(){
    replayButton.style.display = "flex"
    playbutton.remove()
}



replayButton.addEventListener("click", function(event) {
    event.preventDefault()
    affiche()
    reset()
    searchRandomWord()
    dataToUnder(randomWord)
    ShowUnder()
    console.log('value:', valueInputGuess)
  }); 

playbutton.addEventListener("click", function(event) {
    event.preventDefault()
    playtoReplay()
    affiche()
    reset()
    searchRandomWord()
    dataToUnder(randomWord)
    ShowUnder()
  }); 

  playbutton3.addEventListener("click", function(event) {
    event.preventDefault()
    let inputGuess = document.querySelector(".tryInput")
    valueInputGuess = inputGuess.value.toLowerCase()
    if (valueInputGuess==randomWord){
        baliseDevine.style.color = "green"
        baliseDevine.innerHTML = randomWord.charAt(0).toUpperCase() + randomWord.slice(1);
        animeLetter();
    }
    else if (valueInputGuess =="" || reg.test(valueInputGuess)!==true ) {
        let erreurPropal = document.querySelector('.erreurPropal')
        erreurPropal.style.display = 'block'
        return
    }
    else{
        alert("Vous avez perdu!")
        baliseDevine.style.color = "red"
        baliseDevine.innerHTML = randomWord.charAt(0).toUpperCase() + randomWord.slice(1);
    }
    document.getElementById("premierPlan").classList.remove("show")
    document.getElementById("arrierePlan").style.display = "none";
    document.getElementById("premierPlan").style.display = "none";
    
    return valueInputGuess = randomWord
    
  }); 


let modal = document.querySelector("#premierPlan")

function listenerKey(){
    document.addEventListener("keydown",function(event){
        if (attempt == 11) {
            return
        }
        if (UnderGuess.toLowerCase()==randomWord) {
            return
        }
        if (modal.classList.contains("show")) {
            return
        }
        if (valueInputGuess==randomWord) {
            return
        }
        console.log(event.key)
        console.log(reg.test(event.key))
        if (reg.test(event.key) == true && event.key.length ==1) {
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
                console.log(attempt);
                if (attempt == 11) {
                    baliseDevine.style.color = "red"
                    baliseDevine.innerHTML = randomWord.charAt(0).toUpperCase() + randomWord.slice(1);
                    alert('Vous avez perdu.')
                    return UnderGuess = baliseDevine.innerHTML
                }
            }
            else{
                return
            }
            
            UnderGuess = UnderGuess.charAt(0).toUpperCase() + UnderGuess.slice(1)
            
            ShowUnder()
            if (UnderGuess.toLowerCase()==randomWord){
                return UnderGuess
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
    console.log(randomWord)
    console.log(UnderGuess.toLowerCase())
    if (UnderGuess.toLowerCase()==randomWord || valueInputGuess == randomWord){
        return
    }
    document.getElementById("arrierePlan").style.display = "block";
    document.getElementById("premierPlan").style.display = "block";
    document.getElementById("premierPlan").classList.add("modalContentPerso", "show")
    let cancelButtons = document.querySelectorAll(".close, .containerBgOpacity");
        cancelButtons.forEach(function (button) {
            button.addEventListener("click", function () {
                document.getElementById("premierPlan").classList.remove("show")
                document.getElementById("arrierePlan").style.display = "none";
                document.getElementById("premierPlan").style.display = "none";
            });
        })
};

function animeLetter(){
    balisedevineP.innerHTML = balisedevineP.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    let anim = document.querySelectorAll('.letter')
    let delay = 50
    anim.forEach(element => {element.animate(
        [
          { transform: "translateY(0px)" },
          { transform: "translateY(-10px)" },
        ],
        {
          duration: 300,
          delay: delay,
          iterations: 1,
          
        },
      );
      delay+=80;
    })
}


// document.body.style.backgroundColor="red"

