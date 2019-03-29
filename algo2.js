/* 
* Corriger la fonction minMax()
* La fonction récupère un tableau de nombres positifs, négatifs ou nuls
* Et retourne un tableau à 2 entrées contenant la valeur minimale
* et la valeur maximale du tableau récupéré en entrée
* 
* Exemple 1 :
* Tableau d'entrée : [4, 6, 35, -65, -9, 0, 67]
* Résultat : [-65, 67]
* 
* Exemple 2 :
* Tableau d'entrée : [-30, 5, 43, 108, -5, -7, 89]
* Résultat : [-30, 108]
* 
* Exemple 3 :
* Tableau d'entrée : [56, 7, 63, 9, 7, 12, 85]
* Résultat : [7, 85]
*/


// Création d'un array1 pour lancer les tests avec node.

const array1 = [56, 7, 63, 9, 7, 12, 85,444444,-222];


const minMax = (entrée) => {
  const array=[];
  let min = 0;
  let max = 0;

  for (let i = 1; i<entrée.length; i++) {
    if (entrée[i] < min) {
      min = entrée[i];
    }
    if (entrée[i] > max) {
      max = entrée[i];
    }
    
  }
    array.push(min, max);
  console.log(array);
}

minMax(array1);