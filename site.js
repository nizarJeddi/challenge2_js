

var t=JSON.parse(localStorage.getItem('users'))||[];

var connected_user =JSON.parse(localStorage.getItem('connected'))||{};
var per=JSON.parse(localStorage.getItem('liste spéciale'))||{};

var tableau_livres_scientifiques=JSON.parse(localStorage.getItem('liste_scientifique'))||[]
var indice=-1
for (let index = 0; index < t.length; index++) {
 if ((t[index].email==connected_user.email)&&(t[index].mot_de_passe==connected_user.mot_de_passe)) {
  indice=index
 }
  
}
// tri par la méthode "sort()":


//  t[indice].list_book.sort(function (a,b){
//  if (a.edition!=b.edition) {
//   var n1=Number(a.edition)
//     var n2=Number(b.edition)
//     return n1-n2
//   }
//   else{
//     return a.titre.localeCompare(b.titre)
//   }
 
// })





// tri par selection en tenant compte de deux critères :

// var indice_tri=0

// for (let c = 0; c < t[indice].list_book.length-1; c++) {
//   indice_tri=c
  
//   for (let d = c; d < t[indice].list_book.length; d++) {
//     if (parseInt(t[indice].list_book[d].edition)<parseInt(t[indice].list_book[indice_tri].edition)) {
//       indice_tri=d
//     }
//     else if((parseInt(t[indice].list_book[d].edition)==parseInt(t[indice].list_book[indice_tri].edition))&&(t[indice].list_book[d].titre<t[indice].list_book[indice_tri].titre)){

//       indice_tri=d

//     }

//   }
//  var permutation=t[indice].list_book[c]
//  t[indice].list_book[c]=t[indice].list_book[indice_tri]
//  t[indice].list_book[indice_tri]=permutation
 

//  }

connected_user.list_book.sort(function (a,b){
   if (a.edition!=b.edition) {
    var n1=Number(a.edition)
     var n2=Number(b.edition)
      return n1-n2
    }
    else{
     return a.titre.localeCompare(b.titre)
   }
   
   })

//  tri par insertion :


for (let e = 1; e < t[indice].list_book.length; e++) {
  var variable=t[indice].list_book[e]
  
  var j=e-1
  while ((j>=0)&&(t[indice].list_book[j].edition>variable.edition)) {
    t[indice].list_book[j+1]=t[indice].list_book[j]
   j=j-1
  }
  t[indice].list_book[j+1]=variable
 
  while ((j>=0)&&(t[indice].list_book[j].edition==variable.edition)&&(t[indice].list_book[j].titre>variable.titre)) {
    t[indice].list_book[j+1]=t[indice].list_book[j]
   j=j-1
  }
  t[indice].list_book[j+1]=variable
 
 
 }



 



  
  










var param=t[indice].list_book.length.toString()


document.getElementById('compteur').textContent='( '+param+' )'
document.getElementById('compteur').animate([{opacity:0},{opacity:1}],{duration:1000,delay:500,easing:'linear'})
document.getElementById('compteur').animate([{opacity:0},{opacity:1}],{duration:1000,delay:500,easing:'linear'})










document.getElementById('titre_site').textContent=connected_user.nom;


var input_titre=document.getElementById('input_titre');
var input_autheur=document.getElementById('input_autheur');
var input_année=document.getElementById('input_année');
var input_scientifique=document.getElementById('input_scientifique');
var input_littéraire=document.getElementById('input_littéraire');
var btn_save=document.getElementById('btn_save');
var body_scientifique=document.getElementById('body_scientifique');
var text_titre=document.getElementById('text_titre');
var text_autheur=document.getElementById('text_autheur');
var text_année=document.getElementById('text_année');
var text_check=document.getElementById('text_check');


if ( t[indice].list_book.length!=0) {
  for (let j = 0; j < t[indice].list_book.length; j++) {
  
    body_scientifique.innerHTML+='<tr class="nv_ligne">'+'<td id="col1" class="fw-bold">'+(j+1)+"</td>"+'<td id="col2" class="fw-bold">'+t[indice].list_book[j].titre+"</td>"+'<td id="col3"  class="fw-bold">'+t[indice].list_book[j].autheur+"</td>"+'<td id="col4" class="fw-bold">'+t[indice].list_book[j].edition+"</td>"+'<td>'+'<button id="btn_chek" class="btn btn-sm btn-warning">'+'<i class="fa fa-check"></i>'+'</button>'+'</td>'+'<td>'+'<button id="btn_modif" class="btn btn-sm btn-success">'+'<i class="fa fa-edit"></i>'+'</button>'+'</td>'+'<td class"child">'+'<button id="btn_supp" class="btn btn-sm btn-danger">'+'<i class="fa fa-trash"></i>'+'</button>'+'</td>'+'<tr/>'   ;

    // body_scientifique.innerHTML+="<tr >"+'<td id="col1" class="fw-bold">'+(j+1)+"</td>"+'<td id="col2" class="fw-bold">'+t[indice].list_book[j].titre+"</td>"+'<td id="col3"  class="fw-bold">'+t[indice].list_book[j].autheur+"</td>"+'<td id="col4" class="fw-bold">'+t[indice].list_book[j].edition+"</td>"+'<td>'+'<button class="btn btn-sm btn-warning">'+'<i class="fa fa-check"></i>'+'</button>'+'</td>'+'<td>'+'<button class="btn btn-sm btn-success">'+'<i class="fa fa-edit"></i>'+'</button>'+'</td>'+'<td>'+'<button class="btn btn-sm btn-danger">'+'<i class="fa fa-trash"></i>'+'</button>'+'</td>'+'<tr/>'
  } 
}



var nizar=-1
  var oussama=0
  var ghofrane=0
  


var fils=document.getElementsByClassName('child');
var tableau_titres=document.querySelectorAll('#col2');
var tableau_autheurs=document.querySelectorAll('#col3')
var tableau_année=document.querySelectorAll('#col4')
var btn_supp=document.querySelectorAll('#btn_supp');
var btn_modif=document.querySelectorAll('#btn_modif')
var btn_chek=document.querySelectorAll('#btn_chek')
var new_elements=document.getElementsByClassName('nv_ligne');

for (let j = 0; j < btn_supp.length; j++) {
btn_supp[j].addEventListener('click',function(){
  
  var réference=[]
 body_scientifique.removeChild(new_elements[j])
  nizar=j
  console.log(j)


  function éléments_effacés(t,auth) {
    this.titr=t;
    this.auteur=auth
  }
  if (nizar!=-1) {
    réference.push(new éléments_effacés(tableau_titres[nizar].textContent,tableau_autheurs[nizar].textContent))
 console.log(réference)
 console.log(tableau_titres[nizar].textContent)
 console.log(tableau_autheurs[nizar].textContent) 
  }

 
  for (let p= 0; p < t[indice].list_book.length; p++) {
    if ((réference[0].titr== t[indice].list_book[p].titre)&&(réference[0].auteur== t[indice].list_book[p].autheur)) {
        oussama=p
      t[indice].list_book.splice(oussama,1)
      
    }
   
    
  }

  for (let g = 0; g < connected_user.list_book.length; g++) {
    if ((réference[0].titr== connected_user.list_book[g].titre)&&(réference[0].auteur== connected_user.list_book[g].autheur)) {
      ghofrane=g
   
    connected_user.list_book.splice(ghofrane,1)
  }
    
  }




console.log(t[indice].list_book)
localStorage.setItem('users',JSON.stringify(t))
 
localStorage.setItem('connected',JSON.stringify(connected_user))

location.reload()

})




}
var sami=-1
var animation_alert=0
for (let m = 0; m < btn_modif.length; m++) {
  btn_modif[m].addEventListener('click',function(){
    clearTimeout(animation_alert)
    sami=m
    
    tableau_titres[m].contentEditable='true'

   tableau_autheurs[m].contentEditable='true'
   
   tableau_année[m].contentEditable='true'

   function alert() {
    btn_chek[m].className="btn btn-sm btn-danger"

    btn_chek[m].animate([{opacity:0},{opacity:1}],{duration:1000,easing:'linear'})

    
    animation_alert=setTimeout(alert,1000)
   }
  alert()
  var nouvelle_valeur_titre=tableau_titres[m].textContent
  var cellule_titre=tableau_titres[m]
  cellule_titre.textContent=nouvelle_valeur_titre

  var nouvelle_valeur_autheur=tableau_autheurs[m].textContent
  var cellule_autheur=tableau_autheurs[m]
  cellule_autheur.textContent=nouvelle_valeur_autheur


  var nouvelle_valeur_année=tableau_année[m].textContent
  var cellule_année=tableau_année[m]
  cellule_année.textContent=nouvelle_valeur_année

  tableau_titres[m].focus()


  t[indice].list_book[m].titre=cellule_titre.textContent
  t[indice].list_book[m].autheur=cellule_autheur.textContent
  t[indice].list_book[m].edition=cellule_année.textContent

  
  connected_user.list_book[m].titre=cellule_titre.textContent
  connected_user.list_book[m].autheur=cellule_autheur.textContent
  connected_user.list_book[m].edition=cellule_année.textContent

  localStorage.setItem('users',JSON.stringify(t))
  
  localStorage.setItem('connected',JSON.stringify(connected_user))
  



  })
  
}

// console.log(btn_chek)
// console.log(btn_chek[0])
for (let m = 0; m < btn_chek.length; m++) {
  btn_chek[m].addEventListener('click',function(){
    btn_chek[m].className="btn btn-sm btn-warning"
    clearTimeout(animation_alert)
    sami=m
    
   

  //  function alert() {
  //   btn_chek[m].animate([{opacity:0},{opacity:1}],{duration:1000,easing:'linear'})
  //   animation_alert=setTimeout(alert,1000)
  //  }
  // alert()
  var nouvelle_valeur_titre=tableau_titres[m].textContent
  var cellule_titre=tableau_titres[m]
  cellule_titre.textContent=nouvelle_valeur_titre

  var nouvelle_valeur_autheur=tableau_autheurs[m].textContent
  var cellule_autheur=tableau_autheurs[m]
  cellule_autheur.textContent=nouvelle_valeur_autheur


  var nouvelle_valeur_année=tableau_année[m].textContent
  var cellule_année=tableau_année[m]
  cellule_année.textContent=nouvelle_valeur_année


  t[indice].list_book[m].titre=cellule_titre.textContent
  t[indice].list_book[m].autheur=cellule_autheur.textContent
  t[indice].list_book[m].edition=cellule_année.textContent
  connected_user.list_book[m].titre=cellule_titre.textContent
  connected_user.list_book[m].autheur=cellule_autheur.textContent
  connected_user.list_book[m].edition=cellule_année.textContent

  localStorage.setItem('users',JSON.stringify(t))
  
  
  localStorage.setItem('connected',JSON.stringify(connected_user))
  
location.reload()


  })
  
}













var time_out=0 
var i=0

btn_save.addEventListener('click',function(e){
  
  e.preventDefault();
 
  var para_1=0
  var para_2=0
  var para_3=0
  var para_4=0
  var para_5=0
  
  if (input_titre.value.length==0) {
    para_1=1;
    text_titre.textContent='champs vide ! tapez le titre de livre svp '
    text_titre.animate([{opacity:0},{opacity:1}],{duration:1000,easing:'linear'})
  }
  if (input_autheur.value.length==0) {
    para_2=1;
    text_autheur.textContent='champs vide ! tapez le nom de l\'autheur de livre svp '
    text_autheur.animate([{opacity:0},{opacity:1}],{duration:1000,easing:'linear'})
  }
  if (input_année.value.length==0) {
    para_3=1;
    text_année.textContent='champs vide ! tapez l\'année d\'édition de ce livre svp '
    text_année.animate([{opacity:0},{opacity:1}],{duration:1000,easing:'linear'})
  }
  if ((input_scientifique.checked==false)&&(input_littéraire.checked==false)) {
    para_4=1;
    text_check.textContent='champs obligatoire ! choisissez le genre le de livre svp (scientifique ou littéraire)  '
    text_check.animate([{opacity:0},{opacity:1}],{duration:1000,easing:'linear'})
  }

  var t=JSON.parse(localStorage.getItem('users'))||[];

for (let k = 0; k < t[indice].list_book.length; k++) {
  if ((t[indice].list_book[k].titre.trim()==input_titre.value.trim())&&(t[indice].list_book[k].autheur.trim()==input_autheur.value.trim())) {
    para_5=1;
    document.getElementById('text_controle').textContent='Erreur !'+'\n'+' ce livre a été précédament enregistré dans votre liste-books !'
    document.getElementById('text_controle').animate([{opacity:0},{opacity:1}],{duration:1000,easing:'linear'})
  }
  
}

  if ((para_1==0)&&(para_2==0)&&(para_3==0)&&(para_4==0)&&(para_5==0)) {

   
body_scientifique.innerHTML+='<tr class="nv_ligne">'+'<td id="col1" class="fw-bold">'+(t[indice].list_book.length+1)+"</td>"+'<td id="col2" class="fw-bold">'+input_titre.value+"</td>"+'<td id="col3"  class="fw-bold">'+input_autheur.value+"</td>"+'<td id="col4" class="fw-bold">'+input_année.value+"</td>"+'<td>'+'<button id="btn_chek" class="btn btn-sm btn-warning">'+'<i class="fa fa-check"></i>'+'</button>'+'</td>'+'<td>'+'<button id="btn_modif" class="btn btn-sm btn-success">'+'<i class="fa fa-edit"></i>'+'</button>'+'</td>'+'<td class"child">'+'<button id="btn_supp" class="btn btn-sm btn-danger">'+'<i class="fa fa-trash"></i>'+'</button>'+'</td>'+'<tr/>'   ;



function animation() {
  new_elements[new_elements.length-1].animate([{opacity:0},{opacity:1}],{duration:1000,easing:'linear'})
  time_out=setTimeout(animation,1000)
}
animation()



function livres_scientifiques(tit,a,année) {
    
  this.titre=tit;
  this.autheur=a;
  this.edition=année;
  
  
}

t[indice].list_book.push(new livres_scientifiques(input_titre.value,input_autheur.value,input_année.value));
connected_user.list_book.push(new livres_scientifiques(input_titre.value,input_autheur.value,input_année.value));

localStorage.setItem('users',JSON.stringify(t))
localStorage.setItem('connected',JSON.stringify(connected_user))
location.reload()


  }

 
 

  


})



















// variable crée pour l'animation




// annulation de l'apparition des textes lors d'un faux saisie d'un champs du formulaire 


input_titre.addEventListener('click',function () {
  text_titre.textContent=''
  document.getElementById('text_controle').textContent=''
  
})

input_titre.addEventListener("keydown", function(e) {
  if (e.keyCode === 8) {
    // Code à exécuter lorsque la touche "Effacer" est enfoncée
    text_titre.textContent=''
    document.getElementById('text_controle').textContent=''
  }
});

input_autheur.addEventListener('click',function () {
  text_autheur.textContent=''
  document.getElementById('text_controle').textContent=''
})

input_autheur.addEventListener("keydown", function(e) {
  if (e.keyCode === 8) {
    // Code à exécuter lorsque la touche "Effacer" est enfoncée
    text_autheur.textContent=''
    document.getElementById('text_controle').textContent=''
  }
});

input_année.addEventListener('click',function () {
  text_année.textContent=''
  
})

input_année.addEventListener("keydown", function(e) {
  if (e.keyCode === 8) {
    // Code à exécuter lorsque la touche "Effacer" est enfoncée
    text_année.textContent=''
    
  }
});
input_scientifique.addEventListener('click',function () {
  text_check.textContent=''
  
})
input_littéraire.addEventListener('click',function () {
  text_check.textContent=''
  
})

document.getElementById('table_scientifique').addEventListener('mouseover',function(){
  clearTimeout(time_out)
})


document.getElementById('btn_reset').addEventListener('click',function(){

  text_titre.textContent=''
  text_autheur.textContent=''
  text_année.textContent=''
  text_check.textContent=''
  document.getElementById('text_controle').textContent=''




})















