// Creates a button and adds classes and text
function buttonCreate(classes, text){
    var button = document.createElement('div');
    button.setAttribute('class', classes);
    button.innerHTML = text;

    return button;
}