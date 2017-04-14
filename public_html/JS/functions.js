function f(e){
    e=e.which||event.keyCode;
    return(e>44&&e<58||e==8);
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

var delDocument = (function(docId){
    param = {};
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