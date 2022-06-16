var prenom = " ";
var compteur = 0;
var total = " ";

while ((prenom = prompt("Saisissez le prenom"))!=="")
{
    compteur++;
    total = total+" "+ prenom;
}

console.log("le nombre de prenoms" +compteur+ "les prenoms"+ total);