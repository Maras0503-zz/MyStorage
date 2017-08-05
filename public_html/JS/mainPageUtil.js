/* global pageFunctions */

pageFunctions.mainPageUtil = (function(){
    var init = (function(){
        listeners();
    });
    var listeners = (function(){
        $(document).on('dblclick', function(){
            window.getSelection().removeAllRanges();
        });
        $('#brand').on('click', function(){
            window.location.replace('mainPage.html');
        });
    });

    
    $(document).ready(function(){
        init(); 
    });
})();

