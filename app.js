function newID(elementId, Text) {
    let element = document.getElementById(elementId);
    element.innerHTML = Text;
    return element;
}
newID('p1','nouvotext')