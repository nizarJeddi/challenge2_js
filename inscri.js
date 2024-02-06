

// animation pour la mise en forme (hover):

var titre_inscri=document.getElementById('titre_inscri');
titre_inscri.addEventListener('mouseover',function(){
  this.animate([{opacity:0},{opacity:1}],{duration:1500,easing:'linear'})
})
titre_inscri.addEventListener('mouseout',function(){
  this.style.opacity=1
})
var labels=document.getElementsByClassName('form-label')
for (const iterator of labels) {
  iterator.addEventListener('mouseover',function(){
    iterator.style.fontWeight='bold'
  })
}
for (const iterator of labels) {
  iterator.addEventListener('mouseout',function(){
    iterator.style.fontWeight='normal'
  })
}



// déclaration des variables pour faciliter l'accés au éléments html :

var inscri_nom=document.getElementById('inscri_nom');
var btn_inscri=document.getElementById('btn_inscri');
var text_nom=document.getElementById('text_nom');
var inscri_mot_de_passe=document.getElementById('inscri_mot_de_passe');
var inscri_confirmation_mot_de_passe=document.getElementById('inscri_confirmation_mot_de_passe');
var text_confirmation=document.getElementById('text_confirmation');
var text_mot_de_passe=document.getElementById('text_mot_de_passe');
var inscri_email=document.getElementById('inscri_email');
var inscri_prénom=document.getElementById('inscri_prénom');
var text_prénom=document.getElementById('text_prénom');
var text_email=document.getElementById('text_email');
var div_faux_client=document.getElementById('div_faux_client');
var text_majuscule=document.getElementById('text_majuscule');


var time_out=0


// script! :
var tableau=JSON.parse(localStorage.getItem('users')) || []

btn_inscri.addEventListener('click',function(e){
  e.preventDefault()
  var l=0
  var longueur_prénom=0
  var longueur_nom=0
  var longueur_email=0
  var qualité_email_1=0
  var qualité_email_2=0
  var qualité_email_3=0
  var qualité_email_4=0
  var qualité_email_5=0
  var qualité_email_6=0
  var j=0
  var k=0
  var longueur_mot_de_passe=0
  var longueur_mot_de_passe_intrvl=0
  var lettre=0
  var chiffre=0
  var qualité_mot_de_passe=0
  var saisir_inscri_validé=false;
  var new_utilisateur='';
  if (saisir_inscri_validé==false) {
    
  
  function vérification_nom() {
    
  for (let index = 0; index < inscri_nom.value.length; index++) {
    if   ((inscri_nom.value[index].charCodeAt(0) < 65) || (inscri_nom.value[index].charCodeAt(0) > 123) || 
    ((inscri_nom.value[index].charCodeAt(0) > 90) && (inscri_nom.value[index].charCodeAt(0) < 97))) {
      k=k+1
    }
    
  }
  if (k!=0) {
    text_nom.textContent='nom invalide! entrer seulement des lettres alphabétiques dans un nom ! ..'
    text_nom.style.color='red'
    text_nom.animate([{opacity:0},{opacity:1}],{duration:1000,easing:'linear'})
  }
  if (inscri_nom.value.length<2||inscri_nom.value.length>10) {
    longueur_nom=1
   
    text_nom.textContent='nom invalide! entrer un nom non vide et qui ne dépasse pas 10 caractères ! ..'
    text_nom.style.color='red'
    text_nom.animate([{opacity:0},{opacity:1}],{duration:1000,easing:'linear'}) 
  }
  }
  vérification_nom()



  function vérification_prénom() {
    
    for (let index = 0; index < inscri_prénom.value.length; index++) {
      if   ((inscri_prénom.value[index].charCodeAt(0) < 65) || (inscri_prénom.value[index].charCodeAt(0) > 123) || 
      ((inscri_prénom.value[index].charCodeAt(0) > 90) && (inscri_prénom.value[index].charCodeAt(0) < 97))) {
        l=l+1
      }
      
    }
    if (l!=0) {
      text_prénom.textContent='prénom invalide! entrer seulement des lettres alphabétiques dans un prénom ! ..'
      text_prénom.style.color='red'
      text_prénom.animate([{opacity:0},{opacity:1}],{duration:1000,easing:'linear'})
    }
    if (inscri_prénom.value.length<2||inscri_prénom.value.length>10) {
      longueur_prénom=1
      text_prénom.textContent='prénom invalide! entrer un prénom non vide et qui ne dépasse pas 10 caractères ! ..'
      text_prénom.style.color='red'
      text_prénom.animate([{opacity:0},{opacity:1}],{duration:1000,easing:'linear'}) 
    }
    }
    vérification_prénom()

function vérification_email() {
  if (inscri_email.value.length==0) {
    longueur_email=1
    text_email.textContent='entrer votre adresse email adresse ( adresse vide !) ..'
    text_email.style.color='red'
    text_email.animate([{opacity:0},{opacity:1}],{duration:1000,easing:'linear'}) 
  }

  for (let index = 0; index < inscri_email.value.length; index++) {
    if   (((inscri_email.value[index].charCodeAt(0) <64 )&&(inscri_email.value[index].charCodeAt(0) > 57)) || (inscri_email.value[index].charCodeAt(0) > 123) || 
    ((inscri_email.value[index].charCodeAt(0) > 90) && (inscri_email.value[index].charCodeAt(0) < 97))||((inscri_email.value[index].charCodeAt(0) < 45)))
    {
         qualité_email_1=1;
         text_email.textContent='entrer une adresse qui ne contient pas des caractères spécifiques ! ..'
         text_email.style.color='red'
         text_email.animate([{opacity:0},{opacity:1}],{duration:1000,easing:'linear'})   
    }
  }
  if ((inscri_email.value.indexOf('@')==-1)&&(inscri_email.value.length!=0)) {
    qualité_email_2=1;
    text_email.textContent='Erreur ! manque de l\'arobase : "@" dans votre adresse email ..'
         text_email.style.color='red'
         text_email.animate([{opacity:0},{opacity:1}],{duration:1000,easing:'linear'})
  }
  if ((inscri_email.value.indexOf('@')!=inscri_email.value.lastIndexOf('@'))&&(inscri_email.value.length!=0)) {
    qualité_email_3=1;
    text_email.textContent='Erreur ! il semble l\'existence de "plus" qu\'un arobase :"@" supplémentaire dans votre adresse email ..'
         text_email.style.color='red'
         text_email.animate([{opacity:0},{opacity:1}],{duration:1000,easing:'linear'})
  }
  if ((inscri_email.value.indexOf("gmail.com")==-1)&&(inscri_email.value.indexOf('yahoo.fr')==-1)&&(inscri_email.value.indexOf('outlook.com')==-1)&&(inscri_email.value.indexOf('hotmail.fr')==-1)&&(inscri_email.value.length!=0)) {
    qualité_email_4=1;
    text_email.textContent='vérifier l\'extension de l\'adresse email :elle doit avoir un terme équivalent à : "@gmail.com" ou "@yahoo.fr" ect...'
         text_email.style.color='red'
         text_email.animate([{opacity:0},{opacity:1}],{duration:1000,easing:'linear'}) 
  }
 var hosni=inscri_email.value.split('.')
 console.log(hosni)
 console.log(hosni.length)
 if ((hosni[hosni.length-1]!="com")&&(hosni[hosni.length-1]!="fr")&&(inscri_email.value.length!=0)) {
  qualité_email_5=1;
  text_email.textContent='vérifier l\'extension de l\'adresse email :elle doit ètre fini par: "@gmail.com" ou "@yahoo.fr" ect...'
       text_email.style.color='red'
       text_email.animate([{opacity:0},{opacity:1}],{duration:1000,easing:'linear'}) 
 }
 var mourad=inscri_email.value.split('@') 
 if ((mourad[mourad.length-1].indexOf('.')!=mourad[mourad.length-1].lastIndexOf('.'))&&(inscri_email.value.length!=0)) {
  qualité_email_6=1;
  text_email.textContent='vérifier l\'extension de l\'adresse email :elle doit ètre fini par: "@gmail.com" ou "@yahoo.fr" ect...'
       text_email.style.color='red'
       text_email.animate([{opacity:0},{opacity:1}],{duration:1000,easing:'linear'}) 
 }
  
}
vérification_email()



function vérification_mot_de_passe() {

  if (inscri_mot_de_passe.value.length==0) {
    text_mot_de_passe.textContent='champs vide de mot de passe!'
    longueur_mot_de_passe=1
    text_mot_de_passe.style.color='red'
    text_mot_de_passe.animate([{opacity:0},{opacity:1}],{duration:1000,easing:'linear'})
  }
  if ((inscri_mot_de_passe.value.length>20)||(inscri_mot_de_passe.value.length<8)) {
    text_mot_de_passe.textContent='mot de passe doit avoir 8 caractères au minimum et 20 caractères au maximum !..'
    longueur_mot_de_passe_intrvl=1
    text_mot_de_passe.style.color='red'
    text_mot_de_passe.animate([{opacity:0},{opacity:1}],{duration:1000,easing:'linear'})
  }
  for (let index = 0; index < inscri_mot_de_passe.value.length; index++) {
    if (((inscri_mot_de_passe.value[index].charCodeAt(0) > 64)&&(inscri_mot_de_passe.value[index].charCodeAt(0) < 91))||((inscri_mot_de_passe.value[index].charCodeAt(0) > 96)&&(inscri_mot_de_passe.value[index].charCodeAt(0) < 123))) {
      lettre=lettre+1
    }
    
  }
  for (let index = 0; index < inscri_mot_de_passe.value.length; index++) {
    if (((inscri_mot_de_passe.value[index].charCodeAt(0) > 47)&&(inscri_mot_de_passe.value[index].charCodeAt(0) < 58))) {
      chiffre=chiffre+1
    }
    
  }
  console.log(lettre)
  console.log(chiffre)
  if ((lettre<4)||(chiffre<4)) {
    text_mot_de_passe.textContent='mot de passe doit avoir au moins 4 chiffres  et 4 caractères  !..'
    qualité_mot_de_passe=1
    text_mot_de_passe.style.color='red'
    text_mot_de_passe.animate([{opacity:0},{opacity:1}],{duration:1000,easing:'linear'})
  }
  if (inscri_mot_de_passe.value!=inscri_confirmation_mot_de_passe.value) {
    document.getElementById('text_confirmation').textContent='vérifier la confirmation de votre mot de passe !!'
    document.getElementById('text_confirmation').style.color='red'
    document.getElementById('text_confirmation').animate([{opacity:0},{opacity:1}],{duration:1000,easing:'linear'})
    j=1
  }
}
vérification_mot_de_passe()


// changement de la variable booléén pour finir avec les conditions de saisir(quantité et qualité) du champs de formulaires ,une fois les données sont validées ,,on va traiter un autre condition:
if ((k==0)&&(j==0)&&(l==0)&&(longueur_prénom==0)&&(longueur_nom==0)&&(longueur_email==0)&&(qualité_email_1==0)&&(qualité_email_2==0)&&(qualité_email_3==0)&&(qualité_email_4==0)&&(qualité_email_5==0)&&(qualité_email_6==0)&&(longueur_mot_de_passe_intrvl==0)&&(longueur_mot_de_passe==0)&&(qualité_mot_de_passe==0)) {
  saisir_inscri_validé=true
}
  
} 
// fin du premier condition pour vérifier la qualité et la quantité des données contenues dans le champs de saisir de notre formulaire d'inscription,,maintenant on va vérifier si l'utilisateur est nouveau ou nn!! par la variable booléenne new_utilisateur

if (saisir_inscri_validé==true) {
  function user(p,n,e,m) {
    this.prénom=p;
    this.nom=n
    this.email=e;
    this.mot_de_passe=m; 
    this.list_book=[];
   
  }
  ;
  

  
  // vérification de new_utilisateur ou nn :

  if (tableau.length!=0) {
    for (const iterator of tableau) {
      if ((iterator.email==inscri_email.value)&&(iterator.mot_de_passe==inscri_mot_de_passe.value)&&(iterator.nom==inscri_nom.value)&&(iterator.prénom==inscri_prénom.value)) {
        new_utilisateur='client'
      }
     
      
    }
    for (const iterator of tableau) {
      if ((iterator.email==inscri_email.value)&&((iterator.nom!=inscri_nom.value)||(iterator.prénom!=inscri_prénom.value)||(iterator.mot_de_passe!=inscri_mot_de_passe.value))) {
        new_utilisateur='fake'
      }
     }

    if (new_utilisateur=='fake') {
      div_faux_client.style.display='block'
      div_faux_client.textContent="adresse email a été déjà utilisée par un utilisateur ! veuillez changer cette adresse svp ";
      div_faux_client.style.color='rgb(250,10,10)';
      div_faux_client.animate([{opacity:0},{opacity:1}],{duration:1500,easing:'linear'})

    }
    if (new_utilisateur=='client') {
      alert(inscri_nom.value+' vous avez déjà un compte ! cliquez sur "LOGIN" ci-dessous pour accéder à la page d\'authentification svp')
      document.getElementById('div_log_in').style.fontWeight='bold'
      document.getElementById('div_log_in').animate([{opacity:0},{opacity:1}],{duration:2000,easing:'linear'})
      document.getElementById('hand').style.display='block'
      function animation() {
        document.getElementById('hand').animate([{opacity:0},{opacity:1}],{duration:1000,easing:'linear'})
        time_out=setTimeout(animation,1000)
      }
      animation()
      
      
    }
    if (new_utilisateur=='') {
      tableau.push(new user(inscri_prénom.value,inscri_nom.value,inscri_email.value,inscri_mot_de_passe.value));
      localStorage.setItem('users',JSON.stringify(tableau));
      alert('félécitations '+inscri_nom.value+'! inscription réussite'+'\n'+'veillez saisir votre adresse email et mot de passe dans la page LOGIN qui va ètre déclenchée lors de click du boutton "ok"');
      window.open('./login.html','_self');
      
      
      
    }
    
  }

else{
  
  alert('félécitations '+inscri_nom.value+'! inscription réussite'+'\n'+'veillez saisir votre adresse email et mot de passe dans la page LOGIN qui va ètre déclenchée lors de click du boutton "ok"');
  window.open('./login.html','_self');
  
  tableau.push(new user(inscri_prénom.value,inscri_nom.value,inscri_email.value,inscri_mot_de_passe.value));
  localStorage.setItem('users',JSON.stringify(tableau))
}

}









})


// annulation de l'apparition des textes lors d'un faux saisie d'un champs du formulaire 


inscri_nom.addEventListener('click',function () {
  text_nom.textContent=''
  
})

inscri_nom.addEventListener("keydown", function(e) {
  if (e.keyCode === 8) {
    // Code à exécuter lorsque la touche "Effacer" est enfoncée
    text_nom.textContent=''
    
  }
});



inscri_prénom.addEventListener('click',function () {
  text_prénom.textContent=''
  
})
inscri_prénom.addEventListener("keydown", function(e) {
  if (e.keyCode === 8) {
    // Code à exécuter lorsque la touche "Effacer" est enfoncée
    text_prénom.textContent=''
    
  }
});

inscri_email.addEventListener('click',function () {
  div_faux_client.style.display='none'
  
})



inscri_email.addEventListener("keydown", function(e) {
  if (e.keyCode === 8) {
    // Code à exécuter lorsque la touche "Effacer" est enfoncée
    div_faux_client.style.display='none'
    
  }
});
inscri_email.addEventListener('click',function () {
  text_email.textContent=''
  
})



inscri_email.addEventListener("keydown", function(e) {
  if (e.keyCode === 8) {
    // Code à exécuter lorsque la touche "Effacer" est enfoncée
    text_email.textContent=''
    
  }
});

inscri_mot_de_passe.addEventListener('click',function () {
  text_mot_de_passe.textContent=''
  
})


var click_maj=0
inscri_mot_de_passe.addEventListener("keydown", function(e) {
  if (e.keyCode === 8) {
    // Code à exécuter lorsque la touche "Effacer" est enfoncée
    text_mot_de_passe.textContent=''
    
  }
  if (e.keyCode === 20) {
   click_maj=click_maj+1
    if (click_maj %2 !=0) {
      text_majuscule.textContent='Touche majuscule est activée'
    }
    else{
      text_majuscule.textContent=''
    }
   
    
  }

});





inscri_confirmation_mot_de_passe.addEventListener("keydown", function(e) {
  if (e.keyCode === 8) {
    // Code à exécuter lorsque la touche "Effacer" est enfoncée
    text_confirmation.textContent=''
    
  }
});
inscri_confirmation_mot_de_passe.addEventListener("click", function() {
  
    // Code à exécuter lorsque la touche "Effacer" est enfoncée
    text_confirmation.textContent=''
    
  
});





// annulation de l'animation de login:
document.getElementById('div_log_in').addEventListener('mouseover',function(){
  clearTimeout(time_out)
  this.style.fontWeight='normal'
  document.getElementById('hand').style.display='none'
})




