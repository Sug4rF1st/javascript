var annee1 = window.prompt("Entrez votre année de naissance")/*variable 1 'annee1 sera la viariable du chiffre entré dans la case'*/
var annee2 = 2022/*variable 2 'l'année actuelle (2022)'*/
var age = annee2 - annee1/*variable 3 'pour trouvé l'âge de la personne (annee2 - annee1)'*/
if(age >= 18)/*si age es supérieur ou égal a 18*/ 
{/*alors*/
    alert("Vous êtes majeur : "+age)/*on es majeur + notre age*/
}/*finsi*/
else/*sinon*/
{
    alert("Vous êtes mineur : "+age)/*on es mineur + notre age*/
}