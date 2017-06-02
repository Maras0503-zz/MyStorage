/* global pageFunctions */

pageFunctions.login = (function(){
    var init = (function(){
        listeners();
        if (checkSession() == true){
            window.location.replace('mainPage.html');
        }
    });
    var listeners = (function(){
        $('#loginConf').on('click', function(){
            var sucess = checkUser();
            if(sucess == true){
                window.location.replace('mainPage.html');  
            } else {
                myAlert("Błędny login lub hasło! / Wrong login or password!",'doNothing');
            }
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
   
    var checkUser = (function(){
        var ans = null;
        var param = {};
        var pass = $('#passBox').val();
        param['login'] = $('#loginBox').val();
        param['pass'] = md5(pass);
        var time = new Date().getTime();
        param['token'] = md5(""+time);
        param['valid'] = time+28800000;
        $.ajax({       
            type: 'post',
            async: false,
            data: param,
            dataType: 'json',
            url: 'PHP/checkPass.php',      
            success: function(data){
                    window.sessionStorage.setItem('id', data[0].userId);
                    window.sessionStorage.setItem('token', param['token']);
                    if(data[0].userId != null){
                        ans = true;
                    }
            }
        });
        return ans;
    });
    var myAlert = (function(message,action){
        if(action == 'doNothing'){
            $('#myAlertMessage').html(message);
            $('#myAlertContainer').removeClass('hidden');
            addFunctionDoNothing();
        }
    });
    var addFunctionDoNothing = function(){
        $('#myAlertConfirm').on('click', function(){
            $('#myAlertContainer').addClass('hidden');
        });
    };
    
    
    $(document).ready(function(){
        init(); 
    });
}());