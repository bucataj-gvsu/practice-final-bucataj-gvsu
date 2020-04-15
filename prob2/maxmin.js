function appendAfter(element, target) {
  // from StackOverflow https://tinyurl.com/slvljt9
  // N.B. Doesn't work for a last element
  target.parentNode.insertBefore(element, target.nextSibling);
}

/****************************/

function addMore() {
  let inputList = document.getElementById("input-list");

  for (let i = 0; i < 10; i++) {
    let newInput = document.createElement("input");
    newInput.setAttribute("type", "text");
    inputList.appendChild(newInput);
  }
}

document.getElementById("more").onclick = addMore;

/****************************/

function addDeleters() {
  alert('TODO');
}

function addDeleteButton() {
  removeButton = document.createElement("button");
  removeButton.setAttribute("id", "delete");
  removeButton.innerText = "Delete";
  removeButton.onclick = addDeleters;

  appendAfter(removeButton, document.getElementById("more"));
}

addDeleteButton();

