function init() {
  include();
}

async function include() {
  let includeElements = document.querySelectorAll("[include-html]");
  for (let i = 0; i < includeElements.length; i++) {
    const element = includeElements[i];
    let page = element.getAttribute("include-html");
    let resp = await fetch(page);
    if (resp.ok) {
      element.innerHTML = await resp.text();
    } else {
      element.innerHTML = "Page not Found";
    }
  }
}
