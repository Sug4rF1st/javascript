var nbr1 = window.prompt('Entrez votre premier nombre');
var ope = window.prompt("Entrez u opérateur");
var nbr2 = window.prompt('Entrez votre deuxieme nombre');
var pinb1 = parseInt (nbr1);
var pinb2 = parseInt (nbr2);

console.log (typeof pinb1);
console.log (typeof pinb2);


switch (ope)
{
    case "+" :
        alert (pinb1 + pinb2);
        break;

    case "-" :
        alert (pinb1 - pinb2);
        break;

    case "*" :
        alert (pinb1 * pinb2);
        break;

    case "/" :
        alert (pinb1 / pinb2);
        break;

    default :
    alert ("erreur");
}