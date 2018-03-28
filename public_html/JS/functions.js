function f(e){
    e=e.which||event.keyCode;
    return(e>44&&e<58||e==8);
}
function e(e){
    e=e.which||event.keyCode;
    return((((e>47&&e<58) || (e>95&&e<106)) || e==8) && e!=190 && e!=188 && e!=110);
}

var acceptDocument = (function(docId){
    param = {};
    param['docId'] = docId;
    $.ajax({
      type: 'POST',
      async: false,
      data: param,
      dataType: 'json',
      url: 'PHP/acceptDocument.php'
    });
});

var acceptDocumentPZ = (function(docId){
    param = {};
    param['docId'] = docId;
    $.ajax({
      type: 'POST',
      async: false,
      data: param,
      dataType: 'json',
      url: 'PHP/acceptDocumentPZ.php'
    });
});
var delDocumentPos = (function(posId){
    param = {};
    param['posId'] = posId;
    $.ajax({
      type: 'POST',
      async: false,
      data: param,
      dataType: 'json',
      url: 'PHP/delDocumentPos.php'
    });
});

var checkDocumentAccept = (function(docId){
    var ans = 0;
    param = {};
    param['docId'] = docId;
    $.ajax({
      type: 'POST',
      async: false,
      data: param,
      dataType: 'json',
      url: 'PHP/checkDocumentAccept.php',            
      success: function(data){
        ans = data[0].accept;
      }
    });
    return ans;
});

var checkQty = (function(prodId, qty){
    var ans = 0;
    param = {};
    param['prodId'] = prodId;
    param['qty'] = qty;
    $.ajax({
        type: 'POST',
        async: false,
        data: param,
        dataType: 'json',
        url: 'PHP/checkQty.php',
        success: function(data){
            ans = data[0].answer;
        }
    });
    return ans;
});

var checkQtyToEdit = (function(posId, qty){
    var ans = 0;
    param = {};
    param['posId'] = posId;
    param['qty'] = qty;
    $.ajax({
        type: 'POST',
        async: false,
        data: param,
        dataType: 'json',
        url: 'PHP/checkQtyToEdit.php',
        success: function(data){
            ans = data[0].answer;
        }
    });
    return ans;
});

var editWZPos = (function(posId, qty, disc){
    var ans = 0;
    param = {};
    param['posId'] = posId;
    param['qty'] = qty;
    param['disc'] = disc;
    $.ajax({
        type: 'POST',
        async: false,
        data: param,
        dataType: 'json',
        url: 'PHP/editWZPos.php',
    });
});
var editFVPos = (function(posId, qty, disc){
    var ans = 0;
    param = {};
    param['posId'] = posId;
    param['qty'] = qty;
    param['disc'] = disc;
    $.ajax({
        type: 'POST',
        async: false,
        data: param,
        dataType: 'json',
        url: 'PHP/editWZPos.php',
    });
});


var getDocumentRecordsCount = (function(docId){
    var ans = 0;
    param = {};
    param['docId'] = docId;
    $.ajax({
      type: 'POST',
      async: false,
      data: param,
      dataType: 'json',
      url: 'PHP/getDocumentRecordsCount.php',            
      success: function(data){
        ans = data[0].count;
      }
    });
    return ans;
});

var getFindProductToAddCount = (function(parameter){
    var ans = 0;
    param = {};
    param['parameter'] = parameter;
    $.ajax({
        type: 'POST',
        async: false,
        data: param,
        dataType: 'json',
        url: 'PHP/getFindProductCount.php',
        success: function(data){
            ans = data[0].count;
        }
    });
    return ans;
});

var getFindProductToAdd = (function(pageNo, ord, docId){
    var ans = 0;
    param = {};
    param['pageNo'] = pageNo;
    param['ord'] = ord;
    param['parameter'] = docId;
    $.ajax({
        type: 'POST',
        async: false,
        data: param,
        dataType: 'json',
        url: 'PHP/getFindProduct.php',
        success: function(data){
            ans = data;
        }
    });
    return ans;
});
var getProductToAddDetails = function (parameter) {
        var ans = {};
        var param = {};
        param['parameter'] = parameter;
        $.ajax({
            type: 'POST',
            async: false,
            data: param,
            dataType: 'json',
            url: 'PHP/getProductDetails.php',
            success: function (data) {
                ans = data;
            }
        });
        return ans;
};
var getProductToAddDetailsById = function (parameter) {
        var ans = {};
        var param = {};
        param['parameter'] = parameter;
        $.ajax({
            type: 'POST',
            async: false,
            data: param,
            dataType: 'json',
            url: 'PHP/getProductDetailsById.php',
            success: function (data) {
                ans = data;
            }
        });
        return ans;
};
var getRecordDetailsByRecordId = function (parameter) {
        var ans = {};
        var param = {};
        param['parameter'] = parameter;
        $.ajax({
            type: 'POST',
            async: false,
            data: param,
            dataType: 'json',
            url: 'PHP/getRecordDetailsByRecordId.php',
            success: function (data) {
                ans = data;
            }
        });
        return ans;
};
var delDocument = (function(docId){
    var param = {};
    param['docId'] = docId;
    $.ajax({
      type: 'POST',
      async: false,
      data: param,
      dataType: 'json',
      url: 'PHP/deleteDocument.php'
    });
});

var dateToFormat = (function(date){
        var formDate;
        var year;
        var month;
        var day;
        var hours;
        var minutes;
        var seconds;
        
        year = date.getYear()+1900;
        month = date.getMonth()+1;
        if(month<=9){month = '0'+month;}
        day = date.getDate();
        if(day<=9){day = '0'+day;}
        hours = date.getHours();
        if(hours<=9){hours = '0'+hours;}
        minutes = date.getMinutes();
        if(minutes<=9){minutes = '0'+minutes;}
        seconds = date.getSeconds();
        if(seconds<=9){seconds = '0'+seconds;}
        
        
        formDate = year+'.'+month+'.'+day+' '+hours+':'+minutes+':'+seconds;
        return formDate;
});

var myAlert = (function(message,action){
    if(action == 'doNothing'){
        $('#myAlertMessage').html(message);
        $('#myAlertContainer').removeClass('hidden');
        $('#myAlertConfirm').on('click', function(){
            $('#myAlertContainer').addClass('hidden');
        });
    } else if(action == 'logout'){
        $('#myAlertMessage').html(message);
        $('#myAlertContainer').removeClass('hidden');
        $('#myAlertConfirm').on('click', function(){        
            window.location.replace('index.html');
            window.sessionStorage.setItem('id', null);
            window.sessionStorage.setItem('token', null);
        });
    }
});