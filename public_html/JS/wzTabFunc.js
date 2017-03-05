/* global pageFunctions */
var WZTablePage = 0;
var WZTableOrder = 1;
var WZCount = 0;

pageFunctions.wzTabFunc = (function(){
    var init = (function(){
        listeners();
        getWZDocuments();
    });
    
    var listeners = (function(){
        $(document).on('click', function(e){
            var id = $(e.target).parent().attr('id');
            if(id!=undefined && id!='WZContainer'){
                if(id.substring(0,2) == 'WZ'){
                    $('.WZrow').removeClass('rowSelected');
                    $('#WZ'+id.substring(2,id.lenght)).addClass('rowSelected');
                }
            }
        });
        $(document).on('dblclick', function(e){
            var id = $(e.target).parent().attr('id');
            if(id!=undefined && id!='WZContainer'){
                if(id.substring(0,2) == 'WZ'){
                    alert("WZ o id" + id.substring(2,id.lenght));
                }
            }
        });
        $('#newWZ').on('click', function(){
            $('#WZContainer').addClass('blur');
            $('#newWZpopup').removeClass('hidden');
        });
        $('#cancelNewWZ').on('click', function(){
            $('#WZContainer').removeClass('blur');
            $('#newWZpopup').addClass('hidden');
        });
        $('#WZnext').on('click', function(){
            $('.WZrow').removeClass('rowSelected');
            WZTablePage++;
            getWZDocuments();
            if(WZTablePage>0){
                $('#WZprevious').removeClass('hidden');
            }
        });
        $(document).on('click', function(e){
            if(e.target.id =='newWZpopup'){
                $('#WZContainer').removeClass('blur');
                $('#newWZpopup').addClass('hidden');
            }
        });
        $('#WZprevious').on('click', function(){
            $('.WZrow').removeClass('rowSelected');
            WZTablePage--;
            getWZDocuments();
            if(WZTablePage==0){
                $('#WZprevious').addClass('hidden');
            }
        });
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
        $('#WZsearch').on('click', function(){
            WZTablePage=0;
            getWZDocuments();
        });
        $('#WZreset').on('click', function(){
            WZTableOrder=1;
            WZTablePage=0;
            $('.WZarr').addClass('unused');
            $('.WZarr').removeClass('used');
            $('#WZidBox').val('');
            $('#WZnoBox').val('');
            $('#WZconIdBox').val('');
            $('#WZconNameBox').val('');
            $('#previous').addClass('hidden');
            getWZDocuments();
        });
        $('#WZarrUpId').on('click', function(){
            WZTablePage = 0;
            $('.WZarr').addClass('unused');
            $('.WZarr').removeClass('used');
            $('#WZarrUpId').addClass('used');
            $('#WZarrUpId').removeClass('unused');
            $('#previous').addClass('hidden');
            WZTableOrder = 0;
            getWZDocuments();
        });
        $('#WZarrDownId').on('click', function(){
            WZTablePage = 0;
            $('.WZarr').addClass('unused');
            $('.WZarr').removeClass('used');
            $('#WZarrDownId').addClass('used');
            $('#WZarrDownId').removeClass('unused');
            $('#previous').addClass('hidden');
            WZTableOrder = 1;
            getWZDocuments();
        });
        $('#WZarrUpNo').on('click', function(){
            WZTablePage = 0;
            $('.WZarr').addClass('unused');
            $('.WZarr').removeClass('used');
            $('#WZarrUpNo').addClass('used');
            $('#WZarrUpNo').removeClass('unused');
            $('#previous').addClass('hidden');
            WZTableOrder = 2;
            getWZDocuments();
        });
        $('#WZarrDownNo').on('click', function(){
            WZTablePage = 0;
            $('.WZarr').addClass('unused');
            $('.WZarr').removeClass('used');
            $('#WZarrDownNo').addClass('used');
            $('#WZarrDownNo').removeClass('unused');
            $('#previous').addClass('hidden');
            WZTableOrder = 3;
            getWZDocuments();
        });
        $('#WZarrUpDate').on('click', function(){
            WZTablePage = 0;
            $('.WZarr').addClass('unused');
            $('.WZarr').removeClass('used');
            $('#WZarrUpDate').addClass('used');
            $('#WZarrUpDate').removeClass('unused');
            $('#previous').addClass('hidden');
            WZTableOrder = 4;
            getWZDocuments();
        });
        $('#WZarrDownDate').on('click', function(){
            WZTablePage = 0;
            $('.WZarr').addClass('unused');
            $('.WZarr').removeClass('used');
            $('#WZarrDownDate').addClass('used');
            $('#WZarrDownDate').removeClass('unused');
            $('#previous').addClass('hidden');
            WZTableOrder = 5;
            getWZDocuments();
        });
        $('#WZarrUpAccDate').on('click', function(){
            WZTablePage = 0;
            $('.WZarr').addClass('unused');
            $('.WZarr').removeClass('used');
            $('#WZarrUpAccDate').addClass('used');
            $('#WZarrUpAccDate').removeClass('unused');
            $('#previous').addClass('hidden');
            WZTableOrder = 6;
            getWZDocuments();
        });
        $('#WZarrDownAccDate').on('click', function(){
            WZTablePage = 0;
            $('.WZarr').addClass('unused');
            $('.WZarr').removeClass('used');
            $('#WZarrDownAccDate').addClass('used');
            $('#WZarrDownAccDate').removeClass('unused');
            $('#previous').addClass('hidden');
            WZTableOrder = 7;
            getWZDocuments();
        });
        $('#WZarrUpConId').on('click', function(){
            WZTablePage = 0;
            $('.WZarr').addClass('unused');
            $('.WZarr').removeClass('used');
            $('#WZarrUpConId').addClass('used');
            $('#WZarrUpConId').removeClass('unused');
            $('#previous').addClass('hidden');
            WZTableOrder = 8;
            getWZDocuments();
        });
        $('#WZarrDownConId').on('click', function(){
            WZTablePage = 0;
            $('.WZarr').addClass('unused');
            $('.WZarr').removeClass('used');
            $('#WZarrDownConId').addClass('used');
            $('#WZarrDownConId').removeClass('unused');
            $('#previous').addClass('hidden');
            WZTableOrder = 9;
            getWZDocuments();
        });
        $('#WZarrUpConName').on('click', function(){
            WZTablePage = 0;
            $('.WZarr').addClass('unused');
            $('.WZarr').removeClass('used');
            $('#WZarrUpConName').addClass('used');
            $('#WZarrUpConName').removeClass('unused');
            $('#previous').addClass('hidden');
            WZTableOrder = 10;
            getWZDocuments();
        });
        $('#WZarrDownConName').on('click', function(){
            WZTablePage = 0;
            $('.WZarr').addClass('unused');
            $('.WZarr').removeClass('used');
            $('#WZarrDownConName').addClass('used');
            $('#WZarrDownConName').removeClass('unused');
            $('#previous').addClass('hidden');
            WZTableOrder = 11;
            getWZDocuments();
        });
    });
    var getWZCount = (function(){
        param = {};
        //DOCUMENT ID
        if($('#WZidBox').val() == ''){
            param['docId'] = 0;
        }else{
            param['docId'] = $('#WZidBox').val();
        }
        //CONTRACTOR ID
        if($('#WZconIdBox').val() == ''){
            param['conId'] = 0;
        }else{
            param['conId'] = $('#WZconIdBox').val();
        }
        //DOCUMENT NO
        if($('#WZnoBox').val() == ''){
            param['docNo'] = 0;
        }else{
            param['docNo'] = $('#WZnoBox').val();
        }
        param['docType'] = 1;
        param['conName'] = $("#WZconNameBox").val();
        $.ajax({
          type: 'POST',
          async: false,
          data: param,
          dataType: 'json',
          url: 'PHP/getDocumentsCount.php',            
          success: function(data){
            WZCount = data[0].count;
          }
        });
    });
    var getWZDocuments = (function(){
        param = {};       
        //DOCUMENT ID
        if($('#WZidBox').val() == ''){
            param['docId'] = 0;
        }else{
            param['docId'] = $('#WZidBox').val();
        }
        //CONTRACTOR ID
        if($('#WZconIdBox').val() == ''){
            param['conId'] = 0;
        }else{
            param['conId'] = $('#WZconIdBox').val();
        }
        //DOCUMENT NO
        if($('#WZnoBox').val() == ''){
            param['docNo'] = 0;
        }else{
            param['docNo'] = $('#WZnoBox').val();
        }
        param['docType'] = 1;
        param['conName'] = $("#WZconNameBox").val();
        param['ord'] = WZTableOrder;
        param['page'] = WZTablePage;
        $.ajax({
          type: 'POST',
          async: false,
          data: param,
          dataType: 'json',
          url: 'PHP/getDocuments.php',            
          success: function(data){
              getWZCount();
              $('#WZTabContent').html(createWZTableContent(data));
              if(WZCount<=15){
                  $('#WZnext').addClass('hidden');
              } else {
                  $('#WZnext').removeClass('hidden');
              }
              if(WZCount<(WZTablePage*15+15)){
                  $('#WZnext').addClass('hidden');
              } else {
                  $('#WZnext').removeClass('hidden');
              }
          }
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
    var createWZTableContent = (function(data){
        ans = '';
        var tmpDate;
        var tmpAccDate;
        $.each(data,function(index, value){
            
            tmpDate = new Date(parseInt(value['document_date']));
            tmpDate = dateToFormat(tmpDate);
            if(value['document_accept_date'] != 0){
                tmpAccDate = new Date(parseInt(value['document_accept_date']));
                tmpAccDate = dateToFormat(tmpAccDate);
            } else {
                tmpAccDate = "nie zatwierdzony";
            }
            ans += "<tr class='WZrow' id=WZ"+value['document_id']+"><td class='WZcol1b'>"+value['document_id']+"</td><td class='WZcol2b'>"+value['document_number']+"</td><td class='WZcol3b'>"+value['document_year']+"</td><td class='WZcol4b'>"+value['document_contractor_id']+"</td><td class='WZcol5b'>"+value['contractor_name']+"</td><td class='WZcol6b'>"+value['document_type_short']+"</td><td class='WZcol7b'>"+tmpDate+"</td><td class='WZcol8b'>"+tmpAccDate+"</td></tr>";
        });    
        return ans;
    });
    $(document).ready(function(){
        init(); 
    });
}());
 