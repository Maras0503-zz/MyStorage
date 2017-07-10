/* global pageFunctions */
var PZTablePage = 0;
var PZTableOrder = 1;
var PZProdToAddPage = 0;
var PZProdToAddOrder = 1;
var PZFindProdCount = 0;
var PZCount = 0;
var PZConPage = 0;
var PZselectedFindProduct = 0;
var PZConOrder = 1;
var PZConCount = 0;
var PZselectedContractorID = 0;
var selectedPZID = 0;
var isDocumentAccepted = 0;
var productPrice = 0;
var productVat = 0;
var selectedProductToAdd = 0;
var selectedPZRecord = 0;
var divider = 0;

pageFunctions.FVTabFunc = (function(){
    var init = (function(){
        listeners();
    });
    
    var listeners = (function(){
        $('#generatePZPDF').on('click', function(){
            createPDF();
        });
        $('#confirmNewPZ').on('click', function(){
            addDocument();
        });
        
        $("#delPZ").on('click', function(){
            var docAccept = checkDocumentAccept(selectedPZID);
            if(selectedPZID != 0 && docAccept != 1){
                var txt = '';
                if (window.localStorage.getItem('lang') == 'pl') {
                    txt = 'Czy napewno chcesz usunąć dokument?';
                } else if (window.localStorage.getItem('lang') == 'en') {
                    txt = 'Are you sure you want to delete the document?';
                } else {
                    txt = 'Czy napewno chcesz usunąć dokument?';
                }
                myConfirm(txt, 'deleteDocument', selectedPZID);
            } else {
                if(docAccept == 1){
                    var txt = '';
                    if (window.localStorage.getItem('lang') == 'pl') {
                        txt = 'Dokument zatwierdzony, nie można usunąć!';
                    } else if (window.localStorage.getItem('lang') == 'en') {
                        txt = 'Document is accepted, you can not delete it!';
                    } else {
                        txt = 'Dokument zatwierdzony, nie można usunąć!';
                    }
                    myAlert(txt,'doNothing');
                } else {
                    var txt = '';
                    if (window.localStorage.getItem('lang') == 'pl') {
                        txt = 'Nie wybrano dokumentu!';
                    } else if (window.localStorage.getItem('lang') == 'en') {
                        txt = 'Document is not selected!';
                    } else {
                        txt = 'Nie wybrano dokumentu!';
                    }
                    myAlert(txt,'doNothing');
                }
            }
        });
        $(document).on('click', function(e){
            var id = $(e.target).parent().attr('id');
            if(id!=undefined){
                if(id.substring(0,4) == 'PZID'){
                    $('.WZrow').removeClass('rowSelected');
                    $('#PZID'+id.substring(4,id.lenght)).addClass('rowSelected');
                    selectedPZID = id.substring(4,id.lenght);
                }
            }
        });
        $('#newPZRecord').on('click', function () {
            $('#PZProdWithoutCommaInput').removeClass('wrongValue');
            $('#PZProdFloatingPointInput').removeClass('wrongValue');
            $('#PZProdWithoutCommaInput').val('');
            $('#PZProdFloatingPointInput').val('');
            if (getFindProductToAddCount($('#PZproductSearch').val()) == 1) {
                $('#PZAddingProduct').removeClass('hidden');
                fillProductAddingForm($('#PZproductSearch').val());
                $('#PZproductSearch').val('');

            } else {
                PZProdToAddPage = 0;
                PZProdToAddOrder = 1;
                $('#PZChosingProduct').removeClass('hidden');
                PZFindProdCount = getFindProductToAddCount($('#PZproductSearch').val());
                $('#PZProdChoseTabContent').html(createPZProductToAddContent(getFindProductToAdd(PZProdToAddPage, PZProdToAddOrder, $('#PZproductSearch').val())));
                $('#PZProdSearchDetails').val($('#PZproductSearch').val());
                $('#PZproductSearch').val('');
            }
        });
        $('#deletePZRecord').on('click', function(){
            if(selectedPZRecord != 0) {
                delDocumentPos(selectedPZRecord);
                getPZRecords(selectedPZID);
            } else {
                myAlert('Nie wybrano pozycji do usunięcia!','doNothing');
            } 
        });
        $('#editPZRecord').on('click', function(){
            if(selectedPZRecord != 0){
                $('#PZProdWithoutCommaEditInput').removeClass('wrongValue');
                $('#PZProdFloatingPointEditInput').removeClass('wrongValue');
                $('#PZProdWithoutCommaEditInput').val('');
                $('#PZProdFloatingPointEditInput').val('');
                $('#PZEditProduct').removeClass('hidden');
                fillRecordEditForm(selectedPZRecord);
            } else {
                myAlert('Nie wybrano pozycji!','doNothing');
            }
        });
        $('#cancelPZEditProduct').on('click', function(){
            $('#PZEditProduct').addClass('hidden');
        });
        $('#confirmPZProdChose').on('click', function (){
            $('#PZAddingProduct').removeClass('hidden');
            fillProductAddingFormById(PZselectedFindProduct);
            $('#PZChosingProduct').addClass('hidden');
        });
        $('#PZProdFloatingPointInput').on('focus', function () {
            $('#PZProdFloatingPointInput').removeClass('wrongValue');
        });
        $('#PZProdWithoutCommaInput').on('focus', function () {
            $('#PZProdWithoutCommaInput').removeClass('wrongValue');
        });
        $('#PZProdFloatingPointEditInput').on('focus', function () {
            $('#PZProdFloatingPointEditInput').removeClass('wrongValue');
        });
        $('#PZProdWithoutCommaEditInput').on('focus', function () {
            $('#PZProdWithoutCommaEditInput').removeClass('wrongValue');
        });
        $('#confirmPZAddProduct').on('click', function(){
            if(divider == 0){
                if(!isNaN($('#PZProdFloatingPointInput').val())){
                    if($('#PZProdFloatingPointInput').val() != 0){
                        addPosToPZ(selectedPZID, selectedProductToAdd, Math.round($('#PZProdFloatingPointInput').val() * 100), 0);
                        getPZRecords();
                        $('#PZAddingProduct').addClass('hidden');
                    } else {
                        $('#PZProdFloatingPointInput').addClass('wrongValue');
                        myAlert('Ilość musi być większa od 0','doNothing');
                    }
                } else {
                    if(isNaN($('#PZProdFloatingPointInput').val())){
                        $('#PZProdFloatingPointInput').addClass('wrongValue');
                    }
                    myAlert('Niepoprawne wartości','doNothing');
                }
            } else if (divider == 1){
                if(!isNaN($('#PZProdWithoutCommaInput').val())){
                    if($('#PZProdWithoutCommaInput').val() != 0){
                        addPosToPZ(selectedPZID, selectedProductToAdd, Math.round($('#PZProdWithoutCommaInput').val() * 100), 0);
                        getPZRecords();
                        $('#PZAddingProduct').addClass('hidden');
                    } else {
                        $('#PZProdWithoutCommaInput').addClass('wrongValue');
                        myAlert('Ilość musi być większa od 0','doNothing');
                    }
                } else {
                    if(isNaN($('#PZProdWithoutCommaInput').val())){
                        $('#PZProdWithoutCommaInput').addClass('wrongValue');
                    }
                    myAlert('Niepoprawne wartości','doNothing');
                }
            }
        });
        $('#confirmPZEditProduct').on('click', function(){
            if(divider == 0){
                if(!isNaN($('#PZProdFloatingPointEditInput').val())){
                    if($('#PZProdFloatingPointEditInput').val() != 0){
                        editPZPos(selectedPZRecord, $('#PZProdFloatingPointEditInput').val() * 100, 0);
                        getPZRecords();
                        $('#PZEditProduct').addClass('hidden');
                    } else {
                        $('#PZProdFloatingPointEditInput').addClass('wrongValue');
                        myAlert('Ilość musi być większa od 0','doNothing');
                    }
                } else {
                    if(isNaN($('#PZProdFloatingPointEditInput').val())){
                        $('#PZProdFloatingPointEditInput').addClass('wrongValue');
                    }
                    myAlert('Niepoprawne wartości','doNothing');
                }
            } else if (divider == 1){
                if(!isNaN($('#PZProdWithoutCommaEditInput').val())){
                        if($('#PZProdWithoutCommaEditInput').val() != 0){
                            editPZPos(selectedPZRecord, $('#PZProdWithoutCommaEditInput').val() * 100, 0);
                            getPZRecords();
                            $('#PZEditProduct').addClass('hidden');
                        } else {
                            $('#PZProdWithoutCommaEditInput').addClass('wrongValue');
                            myAlert('Ilość musi być większa od 0','doNothing');
                        }
                } else {
                    if(isNaN($('#PZProdWithoutCommaEditInput').val())){
                        $('#PZProdWithoutCommaEditInput').addClass('wrongValue');
                    }
                    myAlert('Niepoprawne wartości','doNothing');
                }
            }
        });
        $('#PZProdSearch').on('click', function () {
            PZProdToAddPage = 0;
            PZProdToAddOrder = 1;
            PZselectedFindProduct = 0;
            $('.FVProdToAdd').removeClass('rowSelected');
            PZFindProdCount = getFindProductToAddCount($('#PZProdSearchDetails').val());
            $('#PZProdChosePrevious').addClass('hidden');
            $('#PZProdChoseTabContent').html(createPZProductToAddContent(getFindProductToAdd(PZProdToAddPage, PZProdToAddOrder, $('#PZProdSearchDetails').val())));
        });
        $('#PZProdReset').on('click', function () {
            PZProdToAddPage = 0;
            PZProdToAddOrder = 1;
            PZselectedFindProduct = 0;
            $('.FVProdToAdd').removeClass('rowSelected');
            $('#PZProdChosePrevious').addClass('hidden');
            $('#PZProdSearchDetails').val('');
            PZFindProdCount = getFindProductToAddCount($('#PZProdSearchDetails').val());
            $('#PZProdChoseTabContent').html(createPZProductToAddContent(getFindProductToAdd(PZProdToAddPage, PZProdToAddOrder, $('#PZProdSearchDetails').val())));
        });
        $('#PZProdChoseNext').on('click', function () {
            $('.FVProdToAdd').removeClass('rowSelected');
            PZProdToAddPage++;
            $('#PZProdChoseTabContent').html(createPZProductToAddContent(getFindProductToAdd(PZProdToAddPage, PZProdToAddOrder, $('#PZProdSearchDetails').val())));
            if (PZProdToAddPage > 0) {
                $('#PZProdChosePrevious').removeClass('hidden');
            }
            PZFindProdCount = getFindProductToAddCount($('#PZProdSearchDetails').val());
            if (PZFindProdCount <= 5) {
                $('#PZProdChoseNext').addClass('hidden');
            } else {
                $('#PZProdChoseNext').removeClass('hidden');
            }
            if (PZFindProdCount < (PZProdToAddPage * 5 + 5)) {
                $('#PZProdChoseNext').addClass('hidden');
            } else {
                $('#PZProdChoseNext').removeClass('hidden');
            }
        });
        $('#PZProdChosePrevious').on('click', function () {
            $('.FVProdToAdd').removeClass('rowSelected');
            PZProdToAddPage--;
            $('#PZProdChoseNext').removeClass('hidden');
            $('#PZProdChoseTabContent').html(createPZProductToAddContent(getFindProductToAdd(PZProdToAddPage, PZProdToAddOrder, $('#PZProdSearchDetails').val())));
            if (PZProdToAddPage == 0) {
                $('#PZProdChosePrevious').addClass('hidden');
            }
        });
        $('#cancelPZAddProduct').on('click', function () {
            $('#PZAddingProduct').addClass('hidden');
        });
        $('#cancelPZProdChose').on('click', function () {
            $('#PZChosingProduct').addClass('hidden');
        });
        $('#acceptPZ').on('click', function(){
            var accept = 0;
            var count = 0;
            if(selectedPZID!=0){
                accept = checkDocumentAccept(selectedPZID);
                count = getDocumentRecordsCount(selectedPZID);
                if(accept == 1){
                    var txt = '';
                    if (window.localStorage.getItem('lang') == 'pl') {
                        txt = 'Dokument już zatwierdzony!';
                    } else if (window.localStorage.getItem('lang') == 'en') {
                        txt = 'Document is alredy accepted!';
                    } else {
                        txt = 'Dokument już zatwierdzony!';
                    }
                    myAlert(txt,'doNothing');
                } else if (count == 0){
                    var txt = '';
                    if (window.localStorage.getItem('lang') == 'pl') {
                        txt = 'Dokument jest pusty!';
                    } else if (window.localStorage.getItem('lang') == 'en') {
                        txt = 'Document is empty!';
                    } else {
                        txt = 'Dokument jest pusty!';
                    }
                    myAlert(txt,'doNothing');
                } else {
                    acceptDocumentPZ(selectedPZID);
                    reset();
                    selectedPZID = 0;
                }
            }
        });
        $(document).on('click', function(e){
        var id = $(e.target).parent().attr('id');
            if(id!=undefined){
                if(id.substring(0,5) == 'ConID'){
                    $('.PZConRow').removeClass('rowSelected');
                    $('#ConID'+id.substring(5,id.lenght)).addClass('rowSelected');
                    PZselectedContractorID = id.substring(5,id.lenght);
                }
            }
        });
        $(document).on('click', function (e) {
            var id = $(e.target).parent().attr('id');
            if (id != undefined) {
                if (id.substring(0, 11) == 'PZProdToAdd') {
                    $('.PZProdToAdd').removeClass('rowSelected');
                    $('#PZProdToAdd' + id.substring(11, id.lenght)).addClass('rowSelected');
                    PZselectedFindProduct = id.substring(11, id.lenght);
                }
            }
        });
        $(document).on('click', function (e) {
            var id = $(e.target).parent().attr('id');
            if (id != undefined) {
                if (id.substring(0, 7) == 'PZRecID') {
                    $('.PZProdRow').removeClass('rowSelected');
                    $('#PZRecID' + id.substring(7, id.lenght)).addClass('rowSelected');
                    selectedPZRecord = id.substring(7, id.lenght);
                }
            }
        });
        $(document).on('dblclick', function(e){
            var id = $(e.target).parent().attr('id');
            if(id!=undefined){
                if(id.substring(0,4) == 'PZID'){
                    $('#PZPopup').removeClass('hidden');
                    $('#PZContainer').addClass('blur');
                    selectedPZID = id.substring(4,id.lenght);
                    selectedPZRecord = 0;
                    isDocumentAccepted = checkDocumentAccept(selectedPZID);
                    if(isDocumentAccepted == 0){
                        $('#newPZRecord').removeClass('hidden');
                        $('#editPZRecord').removeClass('hidden');
                        $('#deletePZRecord').removeClass('hidden');
                        $('#PZproductSearch').removeClass('hidden');
                        $('#generatePZPDF').addClass('hidden');
                    } else {
                        $('#newPZRecord').addClass('hidden');
                        $('#editPZRecord').addClass('hidden');
                        $('#deletePZRecord').addClass('hidden');
                        $('#PZproductSearch').addClass('hidden');
                        $('#generatePZPDF').removeClass('hidden');
                    }
                    getDocumentInfo();
                    getPZRecords();
                }
            }
        });
        $('#cancelNewPZ').on('click', function(){
            $('#PZContainer').removeClass('blur');
            $('#newPZpopup').addClass('hidden');
            $('#selectContractorId').val('');
            $('#selectContractorName').val('');
            $('#selectContractorCity').val('');
            $('#selectContractorNIP').val('');
        });
        $('#newPZ').on('click', function(){
            $('#PZContainer').addClass('blur');
            $('#newPZpopup').removeClass('hidden');
            getContractors();
        });
        $('#PZnext').on('click', function(){
            $('.FVrow').removeClass('rowSelected');
            PZTablePage++;
            getPZDocuments();
            if(PZTablePage>0){
                $('#PZprevious').removeClass('hidden');
            }
        });
        $('#PZprevious').on('click', function(){
            $('.FVrow').removeClass('rowSelected');
            PZTablePage--;
            getPZDocuments();
            if(PZTablePage==0){
                $('#PZprevious').addClass('hidden');
            }
        });
        $('#PZConNext').on('click', function(){
            $('.FVConRow').removeClass('rowSelected');
            PZConPage++;
            getContractors();
            if(PZConPage>0){
                $('#PZConPrevious').removeClass('hidden');
            }
            PZselectedContractorID = 0;
        });
        $('#PZConPrevious').on('click', function(){
            $('.PZConRow').removeClass('rowSelected');
            PZConPage--;
            getContractors();
            if(PZConPage==0){
                $('#PZConPrevious').addClass('hidden');
            }
            PZselectedContractorID = 0;
        });
        
        $(document).on('click', function(e){
            if(e.target.id =='newPZpopup' || e.target.id =='PZPopup'){
                $('#PZContainer').removeClass('blur');
                $('.popup').addClass('hidden');
                $('#selectContractorId').val('');
                $('#selectContractorName').val('');
                $('#selectContractorCity').val('');
                $('#selectContractorNIP').val('');
            }
        });
       
        $('#PZTabOpen').on('click', function(){
            $('#WZPopup').addClass('hidden');
            $('#WZContainer').removeClass('blur');
            $('#PZPopup').addClass('hidden');
            $('#PZContainer').removeClass('blur');
            $('#FVPopup').addClass('hidden');
            $('#FVContainer').removeClass('blur');
            $('.popup').addClass('hidden');
            $('.tab').addClass('hidden');
            $('#bs-example-navbar-collapse-1').removeClass('in');
            $('#PZContainer').removeClass('hidden');
            getPZDocuments();
        });
        $('#closePZContainer').on('click', function(){
            $('#PZContainer').addClass('hidden');
        });
        $('#closePZPopup').on('click', function(){
            $('#PZPopup').addClass('hidden');
            $('#PZContainer').removeClass('blur');
        });
        $('#PZsearch').on('click', function(){
            PZTablePage=0;
            getPZDocuments();
        });
        $('#PZConSearch').on('click', function(){
            PZConPage=0;
            getContractors();
        });
        $('#PZConReset').on('click', function(){
            conReset();
        });
        $('#PZreset').on('click', function(){
            reset();
        });
        $('#PZarrUpId').on('click', function(){
            PZTablePage = 0;
            $('.FVarr').addClass('unused');
            $('.FVarr').removeClass('used');
            $('#PZarrUpId').addClass('used');
            $('#PZarrUpId').removeClass('unused');
            $('#previous').addClass('hidden');
            PZTableOrder = 0;
            getPZDocuments();
        });
        $('#PZarrDownId').on('click', function(){
            PZTablePage = 0;
            $('.FVarr').addClass('unused');
            $('.FVarr').removeClass('used');
            $('#PZarrDownId').addClass('used');
            $('#PZarrDownId').removeClass('unused');
            $('#previous').addClass('hidden');
            PZTableOrder = 1;
            getPZDocuments();
        });
        $('#PZarrUpNo').on('click', function(){
            PZTablePage = 0;
            $('.FVarr').addClass('unused');
            $('.FVarr').removeClass('used');
            $('#PZarrUpNo').addClass('used');
            $('#PZarrUpNo').removeClass('unused');
            $('#previous').addClass('hidden');
            PZTableOrder = 2;
            getPZDocuments();
        });
        $('#PZarrDownNo').on('click', function(){
            PZTablePage = 0;
            $('.FVarr').addClass('unused');
            $('.FVarr').removeClass('used');
            $('#PZarrDownNo').addClass('used');
            $('#PZarrDownNo').removeClass('unused');
            $('#previous').addClass('hidden');
            PZTableOrder = 3;
            getPZDocuments();
        });
        $('#PZarrUpDate').on('click', function(){
            PZTablePage = 0;
            $('.FVarr').addClass('unused');
            $('.FVarr').removeClass('used');
            $('#PZarrUpDate').addClass('used');
            $('#PZarrUpDate').removeClass('unused');
            $('#previous').addClass('hidden');
            PZTableOrder = 4;
            getPZDocuments();
        });
        $('#PZarrDownDate').on('click', function(){
            PZTablePage = 0;
            $('.FVarr').addClass('unused');
            $('.FVarr').removeClass('used');
            $('#PZarrDownDate').addClass('used');
            $('#PZarrDownDate').removeClass('unused');
            $('#previous').addClass('hidden');
            PZTableOrder = 5;
            getPZDocuments();
        });
        $('#PZarrUpAccDate').on('click', function(){
            PZTablePage = 0;
            $('.FVarr').addClass('unused');
            $('.FVarr').removeClass('used');
            $('#PZarrUpAccDate').addClass('used');
            $('#PZarrUpAccDate').removeClass('unused');
            $('#previous').addClass('hidden');
            PZTableOrder = 6;
            getPZDocuments();
        });
        $('#PZarrDownAccDate').on('click', function(){
            PZTablePage = 0;
            $('.FVarr').addClass('unused');
            $('.FVarr').removeClass('used');
            $('#PZarrDownAccDate').addClass('used');
            $('#PZarrDownAccDate').removeClass('unused');
            $('#previous').addClass('hidden');
            PZTableOrder = 7;
            getPZDocuments();
        });
        $('#PZarrUpConId').on('click', function(){
            PZTablePage = 0;
            $('.FVarr').addClass('unused');
            $('.FVarr').removeClass('used');
            $('#PZarrUpConId').addClass('used');
            $('#PZarrUpConId').removeClass('unused');
            $('#previous').addClass('hidden');
            PZTableOrder = 8;
            getPZDocuments();
        });
        $('#PZarrDownConId').on('click', function(){
            PZTablePage = 0;
            $('.FVarr').addClass('unused');
            $('.FVarr').removeClass('used');
            $('#PZarrDownConId').addClass('used');
            $('#PZarrDownConId').removeClass('unused');
            $('#previous').addClass('hidden');
            PZTableOrder = 9;
            getPZDocuments();
        });
        $('#PZarrUpConName').on('click', function(){
            PZTablePage = 0;
            $('.FVarr').addClass('unused');
            $('.FVarr').removeClass('used');
            $('#PZarrUpConName').addClass('used');
            $('#PZarrUpConName').removeClass('unused');
            $('#previous').addClass('hidden');
            PZTableOrder = 10;
            getPZDocuments();
        });
        $('#PZarrDownConName').on('click', function(){
            PZTablePage = 0;
            $('.FVarr').addClass('unused');
            $('.FVarr').removeClass('used');
            $('#PZarrDownConName').addClass('used');
            $('#PZarrDownConName').removeClass('unused');
            $('#previous').addClass('hidden');
            PZTableOrder = 11;
            getPZDocuments();
        });
        //ORDER ARROWS CONTROL CONTRACTORS TAB
        $('#PZConArrUpId').on('click', function(){
            PZTablePage = 0;
            $('.FVConArr').addClass('unused');
            $('.FVConArr').removeClass('used');
            $('#PZConArrUpId').addClass('used');
            $('#PZConArrUpId').removeClass('unused');
            $('#previous').addClass('hidden');
            PZConOrder = 0;
            getContractors();
        });
        $('#PZConArrDownId').on('click', function(){
            PZTablePage = 0;
            $('.FVConArr').addClass('unused');
            $('.FVConArr').removeClass('used');
            $('#PZConArrDownId').addClass('used');
            $('#PZConArrDownId').removeClass('unused');
            $('#previous').addClass('hidden');
            PZConOrder = 1;
            getContractors();
        });
        $('#PZConArrUpConName').on('click', function(){
            PZTablePage = 0;
            $('.FVConArr').addClass('unused');
            $('.FVConArr').removeClass('used');
            $('#PZConArrUpConName').addClass('used');
            $('#PZConArrUpConName').removeClass('unused');
            $('#previous').addClass('hidden');
            PZConOrder = 2;
            getContractors();
        });
        $('#PZConArrDownConName').on('click', function(){
            PZTablePage = 0;
            $('.FVConArr').addClass('unused');
            $('.FVConArr').removeClass('used');
            $('#PZConArrDownConName').addClass('used');
            $('#PZConArrDownConName').removeClass('unused');
            $('#previous').addClass('hidden');
            PZConOrder = 3;
            getContractors();
        });
        $('#PZConArrUpCity').on('click', function(){
            PZTablePage = 0;
            $('.FVConArr').addClass('unused');
            $('.FVConArr').removeClass('used');
            $('#PZConArrUpCity').addClass('used');
            $('#PZConArrUpCity').removeClass('unused');
            $('#previous').addClass('hidden');
            PZConOrder = 4;
            getContractors();
        });
        $('#PZConArrDownCity').on('click', function(){
            PZTablePage = 0;
            $('.FVConArr').addClass('unused');
            $('.FVConArr').removeClass('used');
            $('#PZConArrDownCity').addClass('used');
            $('#PZConArrDownCity').removeClass('unused');
            $('#previous').addClass('hidden');
            PZConOrder = 5;
            getContractors();
        });
    });
    var reset = (function(){
            PZTableOrder=1;
            PZTablePage=0;
            $('.FVarr').addClass('unused');
            $('.FVarr').removeClass('used');
            $('#PZidBox').val('');
            $('#PZnoBox').val('');
            $('#PZconIdBox').val('');
            $('#PZconNameBox').val('');
            $('#PZprevious').addClass('hidden');
            getPZDocuments();
    });
    var conReset = (function(){
            PZConOrder=1;
            PZConPage=0;
            $('.FVConArr').addClass('unused');
            $('.FVConArr').removeClass('used');
            $('#selectContractorId').val('');
            $('#selectContractorName').val('');
            $('#selectContractorCity').val('');
            $('#selectContractorNIP').val('');
            $('#PZConPrevious').addClass('hidden');
            getContractors();
    });
    var getPZCount = (function(){
        param = {};
        //DOCUMENT ID
        if($('#PZidBox').val() == ''){
            param['docId'] = 0;
        }else{
            param['docId'] = $('#PZidBox').val();
        }
        //CONTRACTOR ID
        if($('#PZconIdBox').val() == ''){
            param['conId'] = 0;
        }else{
            param['conId'] = $('#PZconIdBox').val();
        }
        //DOCUMENT NO
        if($('#PZnoBox').val() == ''){
            param['docNo'] = 0;
        }else{
            param['docNo'] = $('#PZnoBox').val();
        }
        param['docType'] = 4;
        param['conName'] = $("#PZconNameBox").val();
        $.ajax({
          type: 'POST',
          async: true,
          data: param,
          dataType: 'json',
          url: 'PHP/getDocumentsCount.php',            
          success: function(data){
            PZCount = data[0].count;
          }
        });
    });
    var getPZDocuments = (function(){
        param = {};       
        //DOCUMENT ID
        if($('#PZidBox').val() == ''){
            param['docId'] = 0;
        }else{
            param['docId'] = $('#PZidBox').val();
        }
        //CONTRACTOR ID
        if($('#PZconIdBox').val() == ''){
            param['conId'] = 0;
        }else{
            param['conId'] = $('#PZconIdBox').val();
        }
        //DOCUMENT NO
        if($('#PZnoBox').val() == ''){
            param['docNo'] = 0;
        }else{
            param['docNo'] = $('#PZnoBox').val();
        }
        param['docType'] = 4;
        param['conName'] = $("#PZconNameBox").val();
        param['ord'] = PZTableOrder;
        param['page'] = PZTablePage;
        $.ajax({
          type: 'POST',
          async: false,
          data: param,
          dataType: 'json',
          url: 'PHP/getDocuments.php',            
          success: function(data){
              getPZCount();
              $('#PZTabContent').html(createPZTableContent(data));
              if(PZCount<=15){
                  $('#PZnext').addClass('hidden');
              } else {
                  $('#PZnext').removeClass('hidden');
              }
              if(PZCount <= (PZTablePage*15+15)){
                  $('#PZnext').addClass('hidden');
              } else {
                  $('#PZnext').removeClass('hidden');
              }
          }
        });
    });
    var addDocument = (function(){
        param = {};       
        //DOCUMENT ID
        if(PZselectedContractorID == 0){
            myAlert('Nie wybrano kontrahenta','doNothing');
        }else{
            param['docType'] = 4;
            var dateNow = new Date();
            var stamp = dateNow.getTime();
            param['docDate'] = stamp;
            param['docCon'] = PZselectedContractorID;
            param['docYear'] = dateNow.getYear()+1900;
            param['docCreator'] = window.localStorage.getItem('id');
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
            $('#PZContainer').removeClass('blur');
            $('#newPZpopup').addClass('hidden');
            $('#selectContractorId').val('');
            $('#selectContractorName').val('');
            $('#selectContractorCity').val('');
            $('#selectContractorNIP').val('');
        }
    });
    var createPZTableContent = (function(data){
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
            ans += "<tr class='WZrow' id=PZID"+value['document_id']+">\n\
                        <td class='DocCol1b'>"+value['document_id']+"</td>\n\
                        <td class='DocCol2b'>"+value['document_number']+"</td>\n\
                        <td class='DocCol3b'>"+value['document_year']+"</td>\n\
                        <td class='DocCol4b'>"+value['document_contractor_id']+"</td>\n\
                        <td class='DocCol5b'>"+value['contractor_name']+"</td>\n\
                        <td class='DocCol6b'>"+value['document_type_short']+"</td>\n\
                        <td class='DocCol7b'>"+tmpDate+"</td> \n\
                        <td class='DocCol8b'>"+tmpAccDate+"</td>\n\
                        <td class='DocCol9b'>"+value['user_fname']+' '+value['user_lname']+"</td>\n\
                    </tr>";
        });    
        return ans;
    });
    var createPZConTableContent = (function(data){
        ans = '';
        $.each(data,function(index, value){
            ans += "<tr class='PZConRow' id=ConID"+value['contractor_id']+">\n\
                        <td class='PZConCol1c'>"+value['contractor_id']+"</td>\n\
                        <td class='PZConCol2c'>"+value['contractor_name']+"</td>\n\
                        <td class='PZConCol3c'>"+value['contractor_nip']+"</td>\n\
                        <td class='PZConCol4c'>"+value['contractor_postal']+"</td>\n\
                        <td class='PZConCol5c'>"+value['contractor_city']+"</td>\n\
                        <td class='PZConCol6c'>"+value['contractor_street']+"</td>\n\
                        <td class='PZConCol7c'>"+value['contractor_tel']+"</td>\n\
                        <td class='PZConCol8c'>"+value['contractor_email']+"</td>\n\
                    </tr>";
        });    
        return ans;
    });
    var createPZProductToAddContent = (function (data) {
        ans = '';
        if (PZFindProdCount <= 5) {
                $('#PZProdChoseNext').addClass('hidden');
            } else {
                $('#PZProdChoseNext').removeClass('hidden');
        }
        if (PZFindProdCount <= (PZProdToAddPage * 5) + 5) {
                $('#PZProdChoseNext').addClass('hidden');
            } else {
                $('#PZProdChoseNext').removeClass('hidden');
        }
        $.each(data, function (index, value) {
            ans += "<tr class='PZProdToAdd' id=PZProdToAdd" + value['product_id'] + ">\n\
                        <td class='WZProdChoseCol1c'>" + value['product_id'] + "</td>\n\
                        <td class='WZProdChoseCol2c'>" + value['product_name'] + "</td>\n\
                        <td class='WZProdChoseCol3c'>" + value['contractor_name'] + "</td>\n\
                        <td class='WZProdChoseCol4c'>" + value['product_price']/100 + "</td>\n\
                        <td class='WZProdChoseCol5c'>" + value['product_number']/100 + "</td>\n\
                    </tr>";
        });
        return ans;
    });
    var fillProductAddingForm = function (searchDetails) {
        var details = getProductToAddDetails(searchDetails);
        $('#PZProdAddId').html(details[0]['product_id']);
        $('#PZProdAddName').html(details[0]['product_name']);
        $('#PZProdAddProducer').html(details[0]['contractor_name']);
        $('#PZProdAddPrice').html((details[0]['product_price'])/100);
        $('#PZProdAddQty').html(details[0]['product_number']/100 +' '+ details[0]['product_unit']);
        productPrice = (details[0]['product_price']/100);
        productVat = (details[0]['vat_value']);
        selectedProductToAdd = details[0]['product_id'];
        PZselectedFindProduct = details[0]['product_id'];
        if(details[0]['product_divider'] == 0) {
            $('#PZProdFloatingPoint').removeClass('hidden');
            $('#PZProdWithoutComma').addClass('hidden');
        } else {
            $('#PZProdFloatingPoint').addClass('hidden');
            $('#PZProdWithoutComma').removeClass('hidden');
        }
        divider = details[0]['product_divider'];
    };
    var fillProductAddingFormById = function (searchDetails) {
        var details = getProductToAddDetailsById(searchDetails);
        $('#PZProdAddId').html(details[0]['product_id']);
        $('#PZProdAddName').html(details[0]['product_name']);
        $('#PZProdAddProducer').html(details[0]['contractor_name']);
        $('#PZProdAddPrice').html((details[0]['product_price'])/100);
        $('#PZProdAddQty').html(details[0]['product_number']/100 +' '+ details[0]['product_unit']);
        productPrice = (details[0]['product_price']/100);
        productVat = (details[0]['vat_value']);
        selectedProductToAdd = details[0]['product_id'];
        if(details[0]['product_divider'] == 0) {
            $('#PZProdFloatingPoint').removeClass('hidden');
            $('#PZProdWithoutComma').addClass('hidden');
        } else {
            $('#PZProdFloatingPoint').addClass('hidden');
            $('#PZProdWithoutComma').removeClass('hidden');
        }
        divider = details[0]['product_divider'];
    };
    var fillRecordEditForm = function (searchDetails) {
        var details = getRecordDetailsByRecordId(searchDetails);
        $('#PZProdEditId').html(details[0]['product_id']);
        $('#PZProdEditName').html(details[0]['product_name']);
        $('#PZProdEditProducer').html(details[0]['contractor_name']);
        $('#PZProdEditPrice').html((details[0]['product_price'])/100);
        $('#PZProdEditQty').html(details[0]['product_number']/100 +' '+ details[0]['product_unit']);
        productPrice = (details[0]['product_price']/100);
        productVat = (details[0]['vat_value']);
        selectedProductToAdd = details[0]['product_id'];
        PZselectedFindProduct = details[0]['product_id'];
        $('#PZProdEditDiscount').val(details[0]['discount']/100);
        if(details[0]['product_divider'] == 0) {
            $('#PZProdFloatingPointEdit').removeClass('hidden');
            $('#PZProdWithoutCommaEdit').addClass('hidden');
            $('#PZProdFloatingPointEditInput').val(details[0]['document_records_product_number']/100);
        } else {
            $('#PZProdFloatingPointEdit').addClass('hidden');
            $('#PZProdWithoutCommaEdit').removeClass('hidden');
            $('#PZProdWithoutCommaEditInput').val(details[0]['document_records_product_number']/100);
        }
        divider = details[0]['product_divider'];
    };
    var myConfirm = (function(message,action,parameter1){
        if(action == 'deleteDocument'){
            $('#myConfirmMessage').html(message);
            $('#myConfirmContainer').removeClass('hidden');
            $('#myConfirmConfirm').on('click', function(){
                delDocument(parameter1);
                selectedPZID = 0;
                reset();
                $('#myConfirmContainer').addClass('hidden');
            });
            $('#myConfirmAbort').on('click', function(){
                $('#myConfirmContainer').addClass('hidden');
            });
        }
    });
    var getPZRecords = (function(){
        ans = '';
        param = {};       
        param['docId'] = selectedPZID;
        $.ajax({
          type: 'POST',
          async: false,
          data: param,
          dataType: 'json',
          url: 'PHP/getDocumentRecords.php',            
          success: function(data){
              ans = createPZProductTableContent(data);
              $('#PZProdTabContent').html(createPZProductTableContent(data));
          }
        });
        return ans;
    });
    var getDocumentInfo = (function(){
        param = {};       
        param['docId'] = selectedPZID;
        $.ajax({
          type: 'POST',
          async: false,
          data: param,
          dataType: 'json',
          url: 'PHP/getDocumentInfo.php',            
          success: function(data){
                setValuesPZInfo(data);
          }
        });
    });
    var addPosToPZ = (function (docId, prodId, qty, discount) {
        var param = {};
        param['docId'] = docId;
        param['prodId'] = prodId;
        param['qty'] = qty;
        param['discount'] = discount;
        $.ajax({
            type: 'POST',
            async: false,
            data: param,
            dataType: 'json',
            url: 'PHP/addPosToPZ.php'
        });
    });
    var setValuesPZInfo = (function(data){
        var tempDate;
        $.each(data,function(index, value){
            $('#PZPopupConId').html('ID: '+value['contractor_id']);
            $('#PZPopupConName').html(value['contractor_name']);
            $('#PZPopupConCity').html(''+value['contractor_postal_code']+' '+value['contractor_city']);
            $('#PZPopupConStreet').html('ul. '+value['contractor_street']);
            $('#PZPopupConPhone').html('tel. '+value['contractor_phone']);
            $('#PZPopupConEmail').html('@: '+value['contractor_email']);
            tempDate = parseInt(value['document_accept_date']);
            if(value['document_accept_date'] != 0){
                tempDate = new Date(tempDate);
                tempDate = dateToFormat(tempDate);
            } else {
                tempDate = "00-00-00 00:00:00";
            }
            $('#dateField').html(tempDate);
        });
    });
    var createPZProductTableContent = (function(data){
        ans = '';
        selectedPZRecord = 0;
        var number = 0;
        $.each(data,function(index, value){
            number = value['document_records_product_number']/100;
            if (isDocumentAccepted == 0) {
                ans += "<tr class='PZProdRow' id=PZRecID" + value['document_records_id'] + ">\n\
                            <td class='PZProdCol1c'>" + value['document_records_product_id'] + "</td>\n\
                            <td class='PZProdCol2c'>" + value['product_name'] + "</td>\n\
                            <td class='PZProdCol3c'>" + number + "</td>\n\
                            <td class='PZProdCol4c'>" + value['product_unit_short'] + "</td>\n\
                        </tr>";
            } else {
                ans += "<tr class='WZProdRow'>\n\
                            <td class='PZProdCol1c'>" + value['document_records_product_id'] + "</td>\n\
                            <td class='PZProdCol2c'>" + value['product_name'] + "</td>\n\
                            <td class='PZProdCol3c'>" + number + "</td>\n\
                            <td class='PZProdCol4c'>" + value['product_unit_short'] + "</td>\n\
                        </tr>";
            }
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
            PZConCount = data[0].count;
          }
        });
    });

    var getContractors = (function(){
        param = {};       
        PZselectedContractorID = 0;
        //Contractor ID
        if($('#selectContractorId').val() == ''){
            param['id'] = 0;
        }else{
            param['id'] = $('#selectContractorId').val();
        }
        param['conName'] = $("#selectContractorName").val();
        param['conCity'] = $("#selectContractorCity").val();
        param['conNIP'] = $("#selectContractorNIP").val();
        
        param['ord'] = PZConOrder;
        param['pageNo'] = PZConPage;
        $.ajax({
          type: 'POST',
          async: false,
          data: param,
          dataType: 'json',
          url: 'PHP/getContractors.php',            
          success: function(data){
              getContractorsCount();
              $('#PZConTabContent').html(createPZConTableContent(data));
              if(PZConCount<=5){
                  $('#PZConNext').addClass('hidden');
              } else {
                  $('#PZConNext').removeClass('hidden');
              }
              if(PZConCount<(PZConPage*5+5)){
                  $('#PZConNext').addClass('hidden');
              } else {
                  $('#PZConNext').removeClass('hidden');
              }
          }
        });
    });
    var createPDF = (function(){
        document.myForm.myVar1.value = selectedPZID;
        document.myForm.myVar2.value = window.localStorage.getItem('id');
        document.myForm.myVar3.value = window.localStorage.getItem('token');
        document.myForm.myVar4.value = window.localStorage.getItem('lang');
        document.myForm.submit();
    });
    $(document).ready(function(){
        init(); 
    });
}());
 