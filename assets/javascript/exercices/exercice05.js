var reponse1 = window.prompt("Saisissez votre nom"); // window.prompt (pour ouvrir la nom de la variable) +nom de la variable
var reponse2 = window.prompt("Saisissez votre prénom");

if(window.confirm("Etes-vous un homme ?") == true) /* (if=si) la fenetre s'ouvre, question qui vas apparaître dans la fenetre
                                                    (si "Etes-vous un Homme est vrai)*/

    alert("Bonjour Monsieur "+reponse1+reponse2) /*(alert=alors) Fenetre alert apparaît (alors apparaît "Bonjour Monsieu + reponse1 + reponse2")*/
else{ //(else=sinon) sinon
    alert("Bonjour Madame "+reponse1+reponse2) /*(alert=alors) Fenetre alert apparaît (alors apparaît "Bonjour Madame + reponse1 + reponse2")*/
}
