/* global pageFunctions */

pageFunctions.sessionControl = (function(){
    var init = (function(){
        validateSession();
        listeners();
    });
    
    var validateSession = (function(){
        if(checkSession() != true){
            alert("Sesia wygasła, zaloguj się ponownie.");
            window.location.replace('index.html');
            window.sessionStorage.setItem('id', null);
            window.sessionStorage.setItem('token', null);
        } 
    });
    
    var logout = (function(){
        alert("Wylogowano!");
        window.location.replace('index.html');
        window.sessionStorage.setItem('id', null);
        window.sessionStorage.setItem('token', null);
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
        param['id'] = sessionStorage.getItem('id');
        param['token'] = sessionStorage.getItem('token');
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