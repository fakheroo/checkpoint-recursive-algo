// Séquence de Fibonacci : Mettez en œuvre une fonction récursive pour générer le nième nombre de Fibonacci.
//  La séquence de Fibonacci commence par 0 et 1,
//  et chaque nombre suivant est la somme des deux nombres précédents (0, 1, 1, 2, 3, 5, 8, ...).

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
    
  }
  console.log(fibonacci(9))
  
  
  
  // function fibonacci(n) {
  //     if (n === 0) return 0;
  //     if (n === 1) return 1;
    
  //     let a = 0, b = 1;
  //     for (let i = 2; i <= n; i++) {
  //       let temp = a + b;
  //       a = b;
  //       b = temp;
  //     }
  //     return b;
  //   }
    
  //   console.log(fibonacci(9))