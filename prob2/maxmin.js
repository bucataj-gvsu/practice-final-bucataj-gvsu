function addMore() {
  let inputList = document.getElementById("input-list");

  for (let i = 0; i < 10; i++) {
    let newInput = document.createElement("input");
    newInput.setAttribute("type", "text");
    inputList.appendChild(newInput);
  }
}

document.getElementById("more").onclick = addMore;

function addDeleteButton() {
  removeButton = document.createElement("button");
  removeButton.setAttribute("id", "delete");
  removeButton.innerText = "Delete";

  // from StackOverflow https://tinyurl.com/slvljt9
  target = document.getElementById("more");
  target.parentNode.insertBefore(removeButton, target.nextSibling);
}

addDeleteButton();

