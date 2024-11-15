// Vérificateur de Palindrome : Créez une fonction récursive pour vérifier si une chaîne donnée est un palindrome 
// (se lit de la même manière à l'endroit et à l'envers), en ignorant les espaces, la ponctuation et les majuscules.

function palindrome(str){

    const cleanStr= str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();

    function checkPalindrome(s,start,end){
        if (start>=end){
            return true
        }else if(s[start]!==s[end]){
            return false
        }
        return checkPalindrome(s,start+1, end-1)
            
    }
    return checkPalindrome(cleanStr, 0, cleanStr.length - 1)
   
}
console.log(palindrome('abba')) //true
console.log(palindrome('hello')) //false
console.log(palindrome('Hi 12321 i!h'))//true