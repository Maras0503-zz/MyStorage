/* global pageFunctions */

pageFunctions.wzTabFunc = (function(){
    var init = (function(){
        listeners();
    });
    
    var listeners = (function(){    
        //OPEN AND CLOSE WZtab
        $('#WZTabOpen').on('click', function(){
            $('.tab').addClass('hidden');
            $('.tab').removeClass('show');
            $('#WZContainer').removeClass('hidden');
            $('#WZContainer').addClass('show');
        });
        $('#closeWZContainer').on('click', function(){
            $('#WZContainer').addClass('hidden');
            $('#WZContainer').removeClass('show');
        });
    });
    $(document).ready(function(){
        init(); 
    });
}());
 