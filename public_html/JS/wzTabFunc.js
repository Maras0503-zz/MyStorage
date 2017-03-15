/* global pageFunctions */
var WZTablePage = 0;
var WZTableOrder = 1;
var WZCount = 0;
var WZConPage = 0;
var WZConOrder = 1;
var WZConCount = 0;
var selectedContractorID = 0;
var selectedWZID = 0;

pageFunctions.wzTabFunc = (function(){
    var init = (function(){
        listeners();
        getWZDocuments();
    });
    
    var listeners = (function(){
        $('#confirmNewWZ').on('click', function(){
            addDocument();
        });
        $(document).on('click', function(e){
            var id = $(e.target).parent().attr('id');
            if(id!=undefined){
                if(id.substring(0,4) == 'WZID'){
                    $('.WZrow').removeClass('rowSelected');
                    $('#WZID'+id.substring(4,id.lenght)).addClass('rowSelected');
                }
            }
        });
        $(document).on('click', function(e){
        var id = $(e.target).parent().attr('id');
            if(id!=undefined){
                if(id.substring(0,5) == 'ConID'){
                    $('.WZConRow').removeClass('rowSelected');
                    $('#ConID'+id.substring(5,id.lenght)).addClass('rowSelected');
                    selectedContractorID = id.substring(5,id.lenght);
                }
            }
        });
        $(document).on('dblclick', function(e){
            var id = $(e.target).parent().attr('id');
            if(id!=undefined){
                if(id.substring(0,4) == 'WZID'){
                    $('#WZPopup').removeClass('hidden');
                    $('#WZContainer').addClass('blur');
                    selectedWZID = id.substring(4,id.lenght);
                    getDocumentInfo();
                    getWZRecords();
                }
            }
        });
        $('#cancelNewWZ').on('click', function(){
            $('#WZContainer').removeClass('blur');
            $('#newWZpopup').addClass('hidden');
            $('#selectContractorId').val('');
            $('#selectContractorName').val('');
            $('#selectContractorCity').val('');
            $('#selectContractorNIP').val('');
        });
        $('#newWZ').on('click', function(){
            $('#WZContainer').addClass('blur');
            $('#newWZpopup').removeClass('hidden');
            getContractors();
        });
        $('#WZnext').on('click', function(){
            $('.WZrow').removeClass('rowSelected');
            WZTablePage++;
            getWZDocuments();
            if(WZTablePage>0){
                $('#WZprevious').removeClass('hidden');
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
        
        $('#WZConNext').on('click', function(){
            $('.WZConRow').removeClass('rowSelected');
            WZConPage++;
            getContractors();
            if(WZConPage>0){
                $('#WZConPrevious').removeClass('hidden');
            }
            selectedContractorID = 0;
        });
        $('#WZConPrevious').on('click', function(){
            $('.WZConRow').removeClass('rowSelected');
            WZConPage--;
            getContractors();
            if(WZConPage==0){
                $('#WZConPrevious').addClass('hidden');
            }
            selectedContractorID = 0;
        });
        
        $(document).on('click', function(e){
            if(e.target.id =='newWZpopup' || e.target.id =='WZPopup'){
                $('#WZContainer').removeClass('blur');
                $('.popup').addClass('hidden');
                $('#selectContractorId').val('');
                $('#selectContractorName').val('');
                $('#selectContractorCity').val('');
                $('#selectContractorNIP').val('');
            }
        });
       
        $('#WZTabOpen').on('click', function(){
            $('.tab').addClass('hidden');
            $('#WZContainer').removeClass('hidden');
        });
        $('#closeWZContainer').on('click', function(){
            $('#WZContainer').addClass('hidden');
        });
        $('#closeWZPopup').on('click', function(){
            $('#WZPopup').addClass('hidden');
            $('#WZContainer').removeClass('blur');
        });
        $('#WZsearch').on('click', function(){
            WZTablePage=0;
            getWZDocuments();
        });
        $('#WZConSearch').on('click', function(){
            WZConPage=0;
            getContractors();
        });
        $('#WZConReset').on('click', function(){
            conReset();
        });
        $('#WZreset').on('click', function(){
            reset();
        });
        //ORDER ARROWS CONTROL WZ TAB
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
        //ORDER ARROWS CONTROL CONTRACTORS TAB
        $('#WZConArrUpId').on('click', function(){
            WZTablePage = 0;
            $('.WZConArr').addClass('unused');
            $('.WZConArr').removeClass('used');
            $('#WZConArrUpId').addClass('used');
            $('#WZConArrUpId').removeClass('unused');
            $('#previous').addClass('hidden');
            WZConOrder = 0;
            getContractors();
        });
        $('#WZConArrDownId').on('click', function(){
            WZTablePage = 0;
            $('.WZConArr').addClass('unused');
            $('.WZConArr').removeClass('used');
            $('#WZConArrDownId').addClass('used');
            $('#WZConArrDownId').removeClass('unused');
            $('#previous').addClass('hidden');
            WZConOrder = 1;
            getContractors();
        });
        $('#WZConArrUpConName').on('click', function(){
            WZTablePage = 0;
            $('.WZConArr').addClass('unused');
            $('.WZConArr').removeClass('used');
            $('#WZConArrUpConName').addClass('used');
            $('#WZConArrUpConName').removeClass('unused');
            $('#previous').addClass('hidden');
            WZConOrder = 2;
            getContractors();
        });
        $('#WZConArrDownConName').on('click', function(){
            WZTablePage = 0;
            $('.WZConArr').addClass('unused');
            $('.WZConArr').removeClass('used');
            $('#WZConArrDownConName').addClass('used');
            $('#WZConArrDownConName').removeClass('unused');
            $('#previous').addClass('hidden');
            WZConOrder = 3;
            getContractors();
        });
        $('#WZConArrUpCity').on('click', function(){
            WZTablePage = 0;
            $('.WZConArr').addClass('unused');
            $('.WZConArr').removeClass('used');
            $('#WZConArrUpCity').addClass('used');
            $('#WZConArrUpCity').removeClass('unused');
            $('#previous').addClass('hidden');
            WZConOrder = 4;
            getContractors();
        });
        $('#WZConArrDownCity').on('click', function(){
            WZTablePage = 0;
            $('.WZConArr').addClass('unused');
            $('.WZConArr').removeClass('used');
            $('#WZConArrDownCity').addClass('used');
            $('#WZConArrDownCity').removeClass('unused');
            $('#previous').addClass('hidden');
            WZConOrder = 5;
            getContractors();
        });
        $('confirmNewWZ').on('click', function(){
            
        });
    });
    var reset = (function(){
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
    var conReset = (function(){
            WZConOrder=1;
            WZConPage=0;
            $('.WZConArr').addClass('unused');
            $('.WZConArr').removeClass('used');
            $('#selectContractorId').val('');
            $('#selectContractorName').val('');
            $('#selectContractorCity').val('');
            $('#selectContractorNIP').val('');
            $('#WZConPrevious').addClass('hidden');
            getContractors();
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
    
    var addDocument = (function(){
        param = {};       
        //DOCUMENT ID
        if(selectedContractorID == 0){
            alert('Nie wybrano kontrahenta');
        }else{
            param['docType'] = 1;
            var dateNow = new Date();
            var stamp = dateNow.getTime();
            param['docDate'] = stamp;
            param['docCon'] = selectedContractorID;
            param['docYear'] = dateNow.getYear()+1900;
            param['docCreator'] = window.sessionStorage.getItem('id');
            $.ajax({
              type: 'POST',
              async: false,
              data: param,
              dataType: 'json',
              url: 'PHP/addDocument.php',            
              success: function(){
                reset();
              }
            });
            $('#WZContainer').removeClass('blur');
            $('#newWZpopup').addClass('hidden');
            $('#selectContractorId').val('');
            $('#selectContractorName').val('');
            $('#selectContractorCity').val('');
            $('#selectContractorNIP').val('');
        }
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
            ans += "<tr class='WZrow' id=WZID"+value['document_id']+">\n\
                        <td class='WZcol1b'>"+value['document_id']+"</td>\n\
                        <td class='WZcol2b'>"+value['document_number']+"</td>\n\
                        <td class='WZcol3b'>"+value['document_year']+"</td>\n\
                        <td class='WZcol4b'>"+value['document_contractor_id']+"</td>\n\
                        <td class='WZcol5b'>"+value['contractor_name']+"</td>\n\
                        <td class='WZcol6b'>"+value['document_type_short']+"</td>\n\
                        <td class='WZcol7b'>"+tmpDate+"</td><td class='WZcol8b'>"+tmpAccDate+"</td>\n\
                        <td class='WZcol9b'>"+value['user_fname']+' '+value['user_lname']+"</td>\n\
                    </tr>";
        });    
        return ans;
    });
    var createWZConTableContent = (function(data){
        ans = '';
        $.each(data,function(index, value){
            ans += "<tr class='WZConRow' id=ConID"+value['contractor_id']+">\n\
                        <td class='WZConCol1c'>"+value['contractor_id']+"</td>\n\
                        <td class='WZConCol2c'>"+value['contractor_name']+"</td>\n\
                        <td class='WZConCol3c'>"+value['contractor_nip']+"</td>\n\
                        <td class='WZConCol4c'>"+value['contractor_postal']+"</td>\n\
                        <td class='WZConCol5c'>"+value['contractor_city']+"</td>\n\
                        <td class='WZConCol6c'>"+value['contractor_street']+"</td>\n\
                        <td class='WZConCol7c'>"+value['contractor_tel']+"</td>\n\
                        <td class='WZConCol8c'>"+value['contractor_email']+"</td>\n\
                    </tr>";
        });    
        return ans;
    });
    
    var getWZRecords = (function(){
        param = {};       
        param['docId'] = selectedWZID;
        $.ajax({
          type: 'POST',
          async: false,
          data: param,
          dataType: 'json',
          url: 'PHP/getDocumentRecords.php',            
          success: function(data){
              $('#WZProdTabContent').html(createWZProductTableContent(data));
          }
        });
    });
    
    var getDocumentInfo = (function(){
        param = {};       
        param['docId'] = selectedWZID;
        $.ajax({
          type: 'POST',
          async: false,
          data: param,
          dataType: 'json',
          url: 'PHP/getDocumentInfo.php',            
          success: function(data){
                setValuesWZInfo(data);
          }
        });
    });
    var setValuesWZInfo = (function(data){
        $.each(data,function(index, value){
            $('#WZPopupConId').html('ID: '+value['contractor_id']);
            $('#WZPopupConName').html(value['contractor_name']);
            $('#WZPopupConCity').html(''+value['contractor_postal_code']+' '+value['contractor_city']);
            $('#WZPopupConStreet').html('ul. '+value['contractor_street']);
            $('#WZPopupConPhone').html('tel. '+value['contractor_phone']);
            $('#WZPopupConEmail').html('@: '+value['contractor_email']);
        });
    });
    
    var createWZProductTableContent = (function(data){
        ans = '';
        $('#WZBruttoV0').html(0);
        $('#WZV0').html(0);
        $('#WZBruttoV5').html(0);
        $('#WZV5').html(0);
        $('#WZBruttoV8').html(0);
        $('#WZV8').html(0);
        $('#WZBruttoV23').html(0);
        $('#WZV23').html(0);
        $('#WZBruttoTotal').html(0);
        $('#WZVTotal').html(0);
        var sum0 = 0;
        var sumV0 = 0;
        var sum5 = 0;
        var sumV5 = 0;
        var sum8 = 0;
        var sumV8 = 0;
        var sum23 = 0;
        var sumV23 = 0;
        var sumTotal = 0;
        var sumVTotal = 0;
        var price = 0;
        var number = 0;
        var discount = 0;
        var vat = 0;
        var priceBrutto = 0;
        var valueNetto = 0;
        var valueBrutto = 0;
        var valueBruttoWithDiscount = 0;
        var totalNetto = 0;
        var totalBrutto = 0;
        $.each(data,function(index, value){
            
            price = parseInt(value['document_records_price']);
            number = value['document_records_product_number']/100;
            discount = value['document_records_discount']/100;
            vat = value['vat_value']/100;
            priceBrutto = price+(price*vat);
            valueNetto = price*number;
            valueBrutto = priceBrutto * number;
            valueBruttoWithDiscount = valueBrutto-(valueBrutto*discount);
            valueNettoWithDiscount = valueNetto-(valueNetto*discount);
            vatValue = valueBruttoWithDiscount - valueNettoWithDiscount;
            totalNetto += valueNettoWithDiscount;
            totalBrutto += valueBruttoWithDiscount;
            if(vat == 0.00){
                sum0 += valueBruttoWithDiscount;
                sumV0 += vatValue;
            } else if (vat == 0.05){
                sum5 += valueBruttoWithDiscount;
                sumV5 += vatValue;
            } else if (vat == 0.08){
                sum8 += valueBruttoWithDiscount;
                sumV8 += vatValue;
            } else if (vat == 0.23){
                sum23 += valueBruttoWithDiscount;
                sumV23 += vatValue;
            }
            sumTotal = sum0 + sum5 + sum8 + sum23;
            sumVTotal = sumV0 + sumV5 + sumV8 + sumV23;
            $('#WZBruttoV0').html(Math.round((sum0/100)*100)/100);
            $('#WZV0').html(Math.round((sumV0/100)*100)/100);
            $('#WZBruttoV5').html(Math.round((sum5/100)*100)/100);
            $('#WZV5').html(Math.round((sumV5/100)*100)/100);
            $('#WZBruttoV8').html(Math.round((sum8/100)*100)/100);
            $('#WZV8').html(Math.round((sumV8/100)*100)/100);
            $('#WZBruttoV23').html(Math.round((sum23/100)*100)/100);
            $('#WZV23').html(Math.round((sumV23/100)*100)/100);
            $('#WZBruttoTotal').html(Math.round((sumTotal/100)*100)/100);
            $('#WZVTotal').html(Math.round((sumVTotal/100)*100)/100);
            $('#WZNettoField').html(Math.round((totalNetto/100)*100)/100);
            $('#WZBruttoField').html(Math.round((totalBrutto/100)*100)/100);
            ans += "<tr class='WZProdRow' id=RecID"+value['document_records_id']+">\n\
                    <td class='WZProdCol1c'>"+value['document_records_product_id']+"</td>\n\
                    <td class='WZProdCol2c'>"+value['product_name']+"</td>\n\
                    <td class='WZProdCol3c'>"+number+"</td>\n\
                    <td class='WZProdCol4c'>"+value['product_unit_short']+"</td>\n\
                    <td class='WZProdCol5c'>"+(vat*100)+"</td>\n\
                    <td class='WZProdCol6c'>"+(discount*100)+"</td>\n\
                    <td class='WZProdCol7c'>"+(Math.round((price/100)*100)/100)+"</td>\n\
                    <td class='WZProdCol8c'>"+(Math.round((priceBrutto/100)*100)/100)+"</td>\n\
                    <td class='WZProdCol9c'>"+(Math.round((valueNetto/100)*100)/100)+"</td>\n\
                    <td class='WZProdCol10c'>"+(Math.round((valueBrutto/100)*100)/100)+"</td>\n\
                    <td class='WZProdCol11c'>"+(Math.round((valueBruttoWithDiscount/100)*100)/100)+"</td>\n\
            </tr>";
        });    
        return ans;
    });
    
    var getContractorsCount = (function(){
        param = {};
        //Contractor ID
        if($('#selectContractorId').val() == ''){
            param['id'] = 0;
        }else{
            param['id'] = $('#selectContractorId').val();
        }
        param['conName'] = $("#selectContractorName").val();
        param['conCity'] = $("#selectContractorCity").val();
        param['conNIP'] = $("#selectContractorNIP").val();
        $.ajax({
          type: 'POST',
          async: false,
          data: param,
          dataType: 'json',
          url: 'PHP/getContractorsCount.php',            
          success: function(data){
            WZConCount = data[0].count;
          }
        });
    });
    var getContractors = (function(){
        param = {};       
        selectedContractorID = 0;
        //Contractor ID
        if($('#selectContractorId').val() == ''){
            param['id'] = 0;
        }else{
            param['id'] = $('#selectContractorId').val();
        }
        param['conName'] = $("#selectContractorName").val();
        param['conCity'] = $("#selectContractorCity").val();
        param['conNIP'] = $("#selectContractorNIP").val();
        
        param['ord'] = WZConOrder;
        param['pageNo'] = WZConPage;
        $.ajax({
          type: 'POST',
          async: false,
          data: param,
          dataType: 'json',
          url: 'PHP/getContractors.php',            
          success: function(data){
              getContractorsCount();
              $('#WZConTabContent').html(createWZConTableContent(data));
              if(WZConCount<=5){
                  $('#WZConNext').addClass('hidden');
              } else {
                  $('#WZConNext').removeClass('hidden');
              }
              if(WZConCount<(WZConPage*5+5)){
                  $('#WZConNext').addClass('hidden');
              } else {
                  $('#WZConNext').removeClass('hidden');
              }
          }
        });
    });
    $(document).ready(function(){
        init(); 
    });
}());
 