// Puts all content together
function compileContent(){
    var content = createContent();
    var div = document.createElement("div");
    var compiledC; // Content within image background div

    // Adds background class and image, may be interchangable but currently set up this way
    div.setAttribute('class', 'backgroundImageClass');
    div.style.backgroundImage = 'url(' + content.imgUrl  + ')';

    // Sets up all of the content together
    compiledC = '<div class="content-overlay">';
    compiledC += '<p class="subheadline">' + content.lOne + "</p>";
    compiledC += '<p class="mainheadline">' + content.lTwo + "</p>";
    compiledC += '<div class="' + content.button.className + '">' + content.button.innerText + '</div>';
    compiledC += '</div>';

    div.innerHTML = compiledC;

    return div;
}

/* Adds image to page 
-- c - selector the image is adding it to
*/
function addContentToPage(c){
    var content = compileContent();
    c = document.querySelector(c);

    c.appendChild(content);
}

/* Either use of it is fine */
addContentToPage('#holder-div');
