var cookie = (function(){
    var cookieTools = {};

    /* Creates cookie */
    cookieTools.makeCookie = makeCookie;
    function makeCookie(imgId){
        document.cookie = "randomStopper=" + imgId + "; imgNum='test'; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    };

    /* Returns the cookie number id for select image */
    cookieTools.useCookie = useCookie;
    function useCookie(findname){
        var cookieval = document.cookie.match('randomStopper').input;
        
        cookieval = findname.input;
        cookieval = cookieval.replace('randomStopper=', '');
        
        return cookieval;
    }

    /* checks if cookie exists based upon its name for select image */
    cookieTools.cookieExists = cookieExists;
    function cookieExists(findname){
        if (findname != null) {        
            return true;
        } else {
            return false;
        }
    }

    /* Testing purposes - set up a delete cookie */
    cookieTools.deleteCookie = deleteCookie;
    function deleteCookie(findname) {
        var deleteBtn = buttonCreate('cta-btn opaquered-btn delete-cookie', 'delete cookie'); 
        var divItsAddedTo = document.querySelector('.about-section__card-header');
        divItsAddedTo.prepend(deleteBtn);
        
        deleteBtn.addEventListener('click', function(){
            document.cookie = findname + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            //setTimeout(function (){
                location.reload();
            //}, 500)
        });

        return deleteBtn
    }


    // finding the name of the cookie, parameter can be changed to appropriate naming convention
    cookieTools.findCookieName = findCookieName();
    function findCookieName(){
        var findname;

        return function name(){
            return findname = document.cookie.match('randomStopper');
        }
    } 

    return cookieTools;
})();
