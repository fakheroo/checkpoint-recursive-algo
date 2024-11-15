// Ticket Pricing : Ecrivez un programme qui demande à l'utilisateur d'entrer son âge et qui détermine ensuite le prix d'un billet de cinéma en fonction des critères suivants:

// Enfants (âge <= 12) : 10 $
// Adolescents (13-17 ans) : 15 $
// Adultes (âge >= 18) : 20 $

function verifyAge(age){
    if (age<=12){
        console.log(`Vous etes agé ${age} alors votre ticket coute 10 $ `)
    }else if (age<=17 && age>= 13){
        console.log(`Vous etes agé ${age} alors votre ticket coute 15 $ `)
    } else if (age>=18){
        console.log(`Vous etes agé ${age} alors votre ticket coute 20 $ `)
    }
}

verifyAge(10)
verifyAge(14)
verifyAge(30)