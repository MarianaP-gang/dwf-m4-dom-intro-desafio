const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const listA= document.querySelector(".lista");
  const list= document.querySelectorAll(".lista li");
  
  for (const el of list) {
    el.remove();

  }


  for (const elem of cosasQueAprendimos) {
    //creo primero el elementi <li>
    const newLi= document.createElement("li");
    //le agrego el texto (es necesario ponr la igualdad)
    newLi.textContent = elem.tema;
    //agrego la clase

    newLi.classList.add(elem.class || "item");
    
    // lo agrego a la lista
    listA.append(newLi);
  }
}

main();
