function addCSSRule(className, xform) {
  // from: https://gomakethings.com/two-ways-to-set-an-elements-css-with-vanilla-javascript/
  // from: https://love2dev.com/blog/css-text-transform/
  document.stylesheets[0].insertRule(`.${className} { text-transform: ${xform} }`, 0);
}

function upYourCases() {
  console.log("Clicked!");
  addCSSRule("allcaps", "uppercase");
  addCSSRule("upcase", "capitalize");
}

document.getElementById("decorate").onclick = upYourCases;

