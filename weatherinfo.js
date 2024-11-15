// Conseil en vêtements de pluie : Développez un programme qui demande à l'utilisateur la température actuelle 
// et s'il pleut ou non. Sur la base de ces informations,
//  conseillez l'utilisateur sur les vêtements à porter.

function weatherCheck(tmp, pluie){
    let pluieInfo= pluie?  'Il pleut! Sortir avec vos parapluies'  :'Il ne pleut pas! Vous n"avez pas besoin de votre parapluie. ' ;
    let conseil =''
     
     if (tmp<0){
        conseil=`Il fait très froid ! La température est de ${tmp}°C, et je vous conseille de ne pas sortir !`
     }else if (tmp<=15 && tmp>=0 && pluie===true){
         
         conseil=`Il fait très froid ! La température est de ${tmp}°C. et Je vous conseille de bien vous couvrir. !`
 
     }else if (tmp>=15 && pluie===false){
        
         conseil=`Il fait beau ! La température est de ${tmp}°C. Profitez de la journée!`
 
 
         
 
     }
     console.log(`Météo : ${pluieInfo} Conseils: ${conseil}`);
 
 }
 weatherCheck(-2, true)
 weatherCheck(8, true)
 weatherCheck(20, false)