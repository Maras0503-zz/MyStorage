/* global pageFunctions */

pageFunctions.mainPageUtil = (function(){
    var init = (function(){
        listeners();
    });
    var listeners = (function(){
        $('#brand').on('click', function(){
            window.location.replace('mainPage.html');
        });
    });
    
    $(document).ready(function(){
        init(); 
    });
})();

