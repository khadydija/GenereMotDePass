//Declaration des selecteurs
const classCheck = document.querySelectorAll('.check');
const classLongPass = document.querySelector('.longPass');
const classSumb = document.querySelector('.submit');
const passWord = document.querySelector('.passWord');
const button = document.querySelector("button");

//Les evenements
classSumb.addEventListener('click',function(e){
    e.preventDefault()
    const longPass = +classLongPass.value;
    console.log(longPass)
    let somme = 0;
    classCheck.forEach(element => {
        // console.log(element.checked)
        somme += element.checked 
    });

  const passe = genereMotDePasse(longPass,classCheck,somme)
  console.log("--------"+passe, somme, longPass)
  passWord.value = passe
  console.log(passe)

  button.addEventListener('click', (e) => {
    e.preventDefault()
    // passe.select();
    navigator.clipboard.writeText(passWord.value);
    button.innerText = "copier"
    console.log('Je suis cliqué');
  });
})


//Declaraction des fonction

function genereMotDePasse(nbreCaractere, checks,sommeChek){
    let mpt=""
    if(nbreCaractere >= 15 && nbreCaractere <= 20){
        
        for (let index = 0; index < nbreCaractere; index+=sommeChek) {
            checks.forEach(element => {
                if (element.checked) {
                    if(element.name === "majuscule"){
                        mpt += caractereMaj()
                    }
                    else if(element.name === "miniscule"){
                        mpt += caractereMin()
                    }
                    else if(element.name === "contientNbre"){
                        mpt += number()
                    }
                    else{
                        mpt += caractSpecieau()
                    }
                }
                
           });
            
        }

    }
    // console.log("------------"+mpt);
    return mpt
}


function caractereMaj(){
    const nombre = Math.floor(Math.random()*26 + 65);
    const caractere = String.fromCharCode(nombre);
    return caractere;

}
// console.log(caractereMaj());

function caractereMin(){
    const nombre = Math.floor(Math.random()*26 + 97);
    const caractere = String.fromCharCode(nombre);
    return caractere;

}
// console.log(caractereMin());

function number(){
    const nbre = Math.floor(Math.random()*10);
    return nbre;

}
// console.log(number());

function caractSpecieau(){
    const caractereSpeciaux = '#@!?%/{[|}]_-*$^§&<>';
    const specieau = Math.floor(Math.random()*(caractereSpeciaux.length));
    const cara = caractereSpeciaux[specieau]
    return cara
}
// console.log(caractSpecieau());
