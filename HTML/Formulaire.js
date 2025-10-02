function Valider() 
{ 
   var compteur=0;  
    var r1 = document.querySelector('input[name=q1]:checked').value;
    var r2 = document.querySelector('input[name=q2]:checked').value;
    var r3 = document.querySelector('input[name=q3]:checked').value;
    var r4 = document.querySelector('input[name=q4]:checked').value;
    var r5 = document.querySelector('input[name=q5]:checked').value;
    var r6 = document.getElementById('q6').value;  
    if (r1 == "b")
        compteur++; 
    if (r2 =="a")
        compteur++; 
    if (r3 =="c")
        compteur++;
    if (r4 =="b")
        compteur++;
    if (r5 =="c")
        compteur++;
    if (r6 == "Edgar Wright")
        compteur++;

    document.getElementsByTagName('div')[0].innerHTML=" Vous avez "+compteur+" bonne(s) réponse(s)"; 
} 