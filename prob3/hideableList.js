function hasClass(element, className) {
  for (let i = 0; i < element.classList.length; i++) {
    if (element.classList[i] === className) {
      return true;
    }
  }
  return false;
}

function hider(hl) {
  let targetList = hl.children;
  for (let i = 0; i < targetList.length; i++) {
    let target = targetList[i];
    if (!hasClass(target, "hl-header")) {
      if (target.style.display === "none") {
        target.style.display = "";
      } else if (target.style.display === "") {
        target.style.display = "none";
      } else {
        console.log(`Unexpected display value ${target.style.display}`);
        console.log(target);
      }
    }
  }
}

function makeHideables() {
  targets = document.getElementsByClassName("hideableList");

  for (let i = 0; i < targets.length; i++) {
    let target = targets[i];
    target.onclick = () => { hider(target) };
  }
}

makeHideables();

