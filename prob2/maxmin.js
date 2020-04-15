function addMore() {
  let inputList = document.getElementById("input-list");

  for (let i = 0; i < 10; i++) {
    let newInput = document.createElement("input");
    newInput.setAttribute("type", "text");
    inputList.appendChild(newInput);
  }
}

document.getElementById("more").onclick = addMore;

