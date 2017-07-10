/* global pageFunctions */

pageFunctions.sessionControl = (function(){
    var init = (function(){
        validateSession();
        listeners();
    });
    
    var validateSession = (function(){
        if(checkSession(false) != true){
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
        $(document).on('click' ,function(event){
            if(event.target){
                window.localStorage.setItem('check', 1);
            }
        });
        $('#logout').on('click', function(){
            logout();
        });
    });
    
    var checkSession = (function(isReloading){
        var ans = false;
        var param = {};
        var time = new Date().getTime();
        param['id'] = window.localStorage.getItem('id');
        param['token'] = window.localStorage.getItem('token');
        param['valid'] = time;
        if(isReloading == false){
            param['check'] = window.localStorage.getItem('check');
            window.localStorage.setItem('check', 0);
        } else {
            param['check'] = 1;
        }
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
        checkSession(true);
        setInterval(validateSession, 60000); 
    });
}());