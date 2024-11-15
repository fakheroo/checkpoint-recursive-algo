// Fonction de puissance : Écrire une fonction récursive pour calculer le résultat de l'élévation d'un nombre à une puissance donnée.

function power(x,n){
    if (n===0){
        return 1
    } else if (n===1){
        return x
    } else {
        return x*power(x,n-1)
    }
}
console.log(power(5,2))