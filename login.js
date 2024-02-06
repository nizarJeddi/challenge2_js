var tableau=JSON.parse(localStorage.getItem('users'))||[];

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


// déclaration des variables pour faciliter l'accés aux éléments html :

var btn_login=document.getElementById('btn_login');
var login_email_input=document.getElementById('login_email_input');
var login_mot_de_passe_input=document.getElementById('login_mot_de_passe_input');
var login_email_text=document.getElementById('login_email_text');
var login_text_mot_de_passe=document.getElementById('login_text_mot_de_passe');
var login_inscrit=document.getElementById('login_inscrit');

// mon propre script :


var time_out=0

btn_login.addEventListener('click',function (e) {
  e.preventDefault();
var indice=-1;
var client=false;




  function vérification_compte() {
    
   for (let index = 0; index < tableau.length; index++) {
    if ((tableau[index].email==login_email_input.value)&&(tableau[index].mot_de_passe==login_mot_de_passe_input.value)) {
      indice=index;
      client=true
    }
    
   }
   if ((indice>=0)&&(client==true)) {
    alert('félécitations '+tableau[indice].nom+'! login est validé ');
    console.log(tableau[indice]);
    
    localStorage.setItem('connected',JSON.stringify(tableau[indice]))
    window.open('./site.html','_self');
   }
    else {
      alert(' vous n\'avez  un compte ! cliquez sur "S\'inscrire" ci-dessous pour accéder à la page d\'inscription svp')
      login_inscrit.style.fontWeight='bold'
      login_inscrit.animate([{opacity:0},{opacity:1}],{duration:2000,easing:'linear'})
      document.getElementById('hand').style.display='block'
      function animation() {
        document.getElementById('hand').animate([{opacity:0},{opacity:1}],{duration:1000,easing:'linear'})
        time_out=setTimeout(animation,1000)
      }
      animation()
   }



  }
  vérification_compte()









})





// annulation de l'animation de login:
login_inscrit.addEventListener('mouseover',function(){
  clearTimeout(time_out)
  this.style.fontWeight='normal'
  document.getElementById('hand').style.display='none'
})