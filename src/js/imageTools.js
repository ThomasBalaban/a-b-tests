/* Returns either 1 or -1 on a 50% chance */
function randomChanceTwo(){
    var plusOrMinus = Math.random() < 0.5 ? -1 : 1;

    return plusOrMinus;
}

/* Can enter two seperate images to add to the page here, will use randomChanceTwo to see what number is selected and choose based upon that */
function selectImage() {
    var imageSelected;
    var imgSelection = randomChanceTwo();

    var findname = cookie.findCookieName();

    var images = [ 
        [
            'static/images/kittens-book-list-4-3.jpg', // image url
            'Space Image 1' // image alt tag
        ],
        [
            'static/images/rwghegrh.jpg',
            'Space Image 2'
        ]
    ];
    

    if( cookie.cookieExists( findname ) == false ) {
        cookie.makeCookie(imgSelection);
        imageSelected = imgSelection == 1 ? images[0] : images[1];
    } else {
        imageSelected = cookie.useCookie( findname ) == 1 ? images[0] : images[1];
    }

    cookie.deleteCookie(findname);

    return imageSelected;
}

/* Creates the image object 

- This class can be extended upon to to output html
*/
function newImage(){
    var imgSelection = selectImage();
    var img = new Image();

    img.src = imgSelection[0];
    img.alt = imgSelection[1];

    return img;
}