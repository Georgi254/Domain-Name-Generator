/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let dom = [".com", ".net", ".io"]

  let textHTML = "<ul>";

  // 1. Generar todas las combinaciones de los 3 arreglos
  // 2. Mostrar una lista con todas las combinaciones en html

  textHTML = "</ul>";

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < dom.length; l++) {
        const element1 = pronoun[i];
        const element2 = adj[j];
        const element3 = noun[k];
        const element4 = dom[l];

        let domainName = element1 + element2 + element3 + element4;
        textHTML += '<li class="list-group-item">' + domainName + '</li>'
      }
    }
  }
}

  let element = document.querySelector("#domain");
  element.innerHTML = textHTML;

  console.log("Hello Rigo from the console!");
};

