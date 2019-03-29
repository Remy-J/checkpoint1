/*
Un employé de théatre voudrait afficher la liste de tous les sièges présents dans sa salle principale.
Dans la salle les sièges sont répartis de la manière suivantes : 
  - Il y a 26 colonnes de sièges, numérotés de "1" à "26"
  - Chaque colonne contient 100 sièges, numérotés de "1" à "100"

Au final la liste devra ressembler à : 
1-1 
1-2
1-3
.
.
.
26-98
26-99
26-100

Écrire une fonction qui retourne un tableau comprenant tous les numéros des sièges.
*/

let colonne = 1;
let siege = 1;
let nbSiegesParCol = 100;
let nbSieges = 26*nbSiegesParCol;
let result = []

function listeSiege (){
for (let i = 0; i<nbSieges; i++){
  if (siege > 100){
    colonne=colonne+1
    siege=1;
  }
  result[i] = `${colonne}-${siege}`
  siege++
}
return result.join("\n")
}
console.log (listeSiege ())