/* global pageFunctions */

pageFunctions.sessionControl = (function(){
    var init = (function(){
        validateSession();
        listeners();
    });
    
    var validateSession = (function(){
        if(checkSession() != true){
            if(window.localStorage.getItem('lang')=='pl') {
                myAlert('Sesia wygasła, zaloguj się ponownie.','logout');
            } else if(window.localStorage.getItem('lang')=='en'){
                myAlert('Session expired, please log in again.','logout');
            } else {
                myAlert('Sesia wygasła, zaloguj się ponownie.','logout');
            }
        } 
    });
    
    var logout = (function(){
        if(window.localStorage.getItem('lang')=='pl') {
            myAlert("Wylogowano.", 'logout');
        } else if(window.localStorage.getItem('lang')=='en'){
            myAlert("Log off.", 'logout');
        } else {
            myAlert("Wylogowano.", 'logout');
        }
    });
    
    var listeners = (function(){
        $('#logout').on('click', function(){
            logout();
        });
    });
    
    var checkSession = (function(){
        var ans = false;
        var param = {};
        var time = new Date().getTime();
        param['id'] = localStorage.getItem('id');
        param['token'] = localStorage.getItem('token');
        param['valid'] = time;
        $.ajax({       
            type: 'post',
            async: false,
            data: param,
            dataType: 'json',
            url: 'PHP/checkToken.php',      
            success: function(data){
                    if(data[0].isValid != 0){
                        ans = true;
                    }
            }
        });
        return ans;
    });
    
    $(document).ready(function(){
        init(); 
    });
}());