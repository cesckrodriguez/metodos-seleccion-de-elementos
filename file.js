let divCase = document.getElementsByTagName("div");
let classCase = document.getElementById("identificador");
let queryCase = document.querySelector(".container");
let querCaseAll = document.querySelectorAll(".container");


//con el tagName obtenemos una lista de elementos de esa etiqueta, la cual podemos revisar meditante indices como un vector sin serlo
document.write(divCase[2]);
document.write("+");

//con el ById obtenemos un unico valor de acuerdo al id establecido
document.write(classCase);
document.write("+");

//con el querySelector obtenemos el primer elemento de la clase, atributo o lo que sea que se busque
document.write(queryCase);
document.write("+");

//con el querySelectorAll obtenemos una lista de todos los elementos con la clase o atributo establecidos, lo podemos revisar mediante indices como en el vector
document.write(querCaseAll[3]);
document.write("+");