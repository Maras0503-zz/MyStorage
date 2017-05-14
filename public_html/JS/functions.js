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

var getFindProductToAddCount = (function(docId){
    var ans = 0;
    param = {};
    param['parameter'] = docId;
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