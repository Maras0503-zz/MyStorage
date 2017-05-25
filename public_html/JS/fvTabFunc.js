/* global pageFunctions */
var FVTablePage = 0;
var FVTableOrder = 1;
var FVProdToAddPage = 0;
var FVProdToAddOrder = 1;
var FVFindProdCount = 0;
var FVCount = 0;
var FVConPage = 0;
var FVselectedFindProduct = 0;
var FVConOrder = 1;
var FVConCount = 0;
var FVselectedContractorID = 0;
var selectedFVID = 0;
var isDocumentAccepted = 0;
var productPrice = 0;
var productVat = 0;
var selectedProductToAdd = 0;
var selectedFVRecord = 0;
var divider = 0;

pageFunctions.wzTabFunc = (function(){
    var init = (function(){
        listeners();
        getFVDocuments();
    });
    
    var listeners = (function(){
        $('#confirmNewFV').on('click', function(){
            addDocument();
        });
        
        $("#delFV").on('click', function(){
            var docAccept = checkDocumentAccept(selectedFVID);
            if(selectedFVID != 0 && docAccept != 1){
                var txt = '';
                if (window.localStorage.getItem('lang') == 'pl') {
                    txt = 'Czy napewno chcesz usunąć dokument?';
                } else if (window.localStorage.getItem('lang') == 'en') {
                    txt = 'Are you sure you want to delete the document?';
                } else {
                    txt = 'Czy napewno chcesz usunąć dokument?';
                }
                var r = confirm(txt);
                if (r == true) {
                    delDocument(selectedFVID);
                    selectedFVID = 0;
                    reset();
                } 
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
                    alert(txt);
                } else {
                    var txt = '';
                    if (window.localStorage.getItem('lang') == 'pl') {
                        txt = 'Nie wybrano dokumentu!';
                    } else if (window.localStorage.getItem('lang') == 'en') {
                        txt = 'Document is not selected!';
                    } else {
                        txt = 'Nie wybrano dokumentu!';
                    }
                    alert(txt);
                }
            }
        });
        $(document).on('click', function(e){
            var id = $(e.target).parent().attr('id');
            if(id!=undefined){
                if(id.substring(0,4) == 'FVID'){
                    $('.FVrow').removeClass('rowSelected');
                    $('#FVID'+id.substring(4,id.lenght)).addClass('rowSelected');
                    selectedFVID = id.substring(4,id.lenght);
                }
            }
        });
        $('#newFVRecord').on('click', function () {
            $('#FVProdWithoutCommaInput').removeClass('wrongValue');
            $('#FVProdFloatingPointInput').removeClass('wrongValue');
            $('#FVProdAddDiscount').removeClass('wrongValue');
            $('#FVProdWithoutCommaInput').val('');
            $('#FVProdFloatingPointInput').val('');
            $('#FVPosAddValue').html('');
            $('#FVPosAddValueGross').html('');
            $('#FVProdAddDiscount').val('');
            if (getFindProductToAddCount($('#FVproductSearch').val()) == 1) {
                $('#FVAddingProduct').removeClass('hidden');
                fillProductAddingForm($('#FVproductSearch').val());
                $('#FVproductSearch').val('');

            } else {
                FVProdToAddPage = 0;
                FVProdToAddOrder = 1;
                $('#FVChosingProduct').removeClass('hidden');
                FVFindProdCount = getFindProductToAddCount($('#FVproductSearch').val());
                $('#FVProdChoseTabContent').html(createFVProductToAddContent(getFindProductToAdd(FVProdToAddPage, FVProdToAddOrder, $('#FVproductSearch').val())));
                $('#FVProdSearchDetails').val($('#FVproductSearch').val());
                $('#FVproductSearch').val('');
            }
        });
        $('#deleteFVRecord').on('click', function(){
            if(selectedFVRecord != 0) {
                delDocumentPos(selectedFVRecord);
                getFVRecords(selectedFVID);
            } else {
                alert('Nie wybrano pozycji do usunięcia!');
            } 
        });
        $('#editFVRecord').on('click', function(){
            if(selectedFVRecord != 0){
                $('#FVProdWithoutCommaEditInput').removeClass('wrongValue');
                $('#FVProdFloatingPointEditInput').removeClass('wrongValue');
                $('#FVProdEditDiscount').removeClass('wrongValue');
                $('#FVProdWithoutCommaEditInput').val('');
                $('#FVProdFloatingPointEditInput').val('');
                $('#FVPosEditValue').html('');
                $('#FVPosEditValueGross').html('');
                $('#FVProdEditDiscount').val('');
                $('#FVEditProduct').removeClass('hidden');
                fillRecordEditForm(selectedFVRecord);
            } else {
                alert('Nie wybrano pozycji!');
            }
        });
        $('#cancelFVEditProduct').on('click', function(){
            $('#FVEditProduct').addClass('hidden');
        });
        $('#calculateValueFV').on('click', function(){
            var qty;
            var disc;
            var sum;
            var gross;
            if(divider == 1){
                qty = parseFloat($('#FVProdWithoutCommaInput').val());
                disc = $('#FVProdAddDiscount').val();
                sum = (productPrice*qty)-(productPrice*qty*(disc/100));
                gross = sum+(sum*(productVat/100));
                $('#FVPosAddValue').html(Math.round(sum*100)/100);
                $('#FVPosAddValueGross').html(Math.round(gross*100)/100);
            } else {
                qty = parseFloat($('#FVProdFloatingPointInput').val());
                disc = $('#FVProdAddDiscount').val();
                sum = (productPrice*qty)-(productPrice*qty*(disc/100));
                gross = sum+(sum*(productVat/100));
                $('#FVPosAddValue').html(Math.round(sum*100)/100);
                $('#FVPosAddValueGross').html(Math.round(gross*100)/100);
            }
        });
        $('#calculateValueFVEdit').on('click', function(){
            var qty;
            var disc;
            var sum;
            var gross;
            if(divider == 1){
                qty = parseFloat($('#FVProdWithoutCommaEditInput').val());
                disc = $('#FVProdEditDiscount').val();
                sum = (productPrice*qty)-(productPrice*qty*(disc/100));
                gross = sum+(sum*(productVat/100));
                $('#FVPosEditValue').html(Math.round(sum*100)/100);
                $('#FVPosEditValueGross').html(Math.round(gross*100)/100);
            } else {
                qty = parseFloat($('#FVProdFloatingPointEditInput').val());
                disc = $('#FVProdEditDiscount').val();
                sum = (productPrice*qty)-(productPrice*qty*(disc/100));
                gross = sum+(sum*(productVat/100));
                $('#FVPosEditValue').html(Math.round(sum*100)/100);
                $('#FVPosEditValueGross').html(Math.round(gross*100)/100);
            }
        });
        $('#confirmFVProdChose').on('click', function (){
            $('#FVAddingProduct').removeClass('hidden');
            fillProductAddingFormById(FVselectedFindProduct);
            $('#FVChosingProduct').addClass('hidden');
        });
        $('#FVProdFloatingPointInput').on('focus', function () {
            $('#FVProdFloatingPointInput').removeClass('wrongValue');
        });
        $('#FVProdWithoutCommaInput').on('focus', function () {
            $('#FVProdWithoutCommaInput').removeClass('wrongValue');
        });
        $('#FVProdAddDiscount').on('focus', function () {
            $('#FVProdAddDiscount').removeClass('wrongValue');
        });
        $('#FVProdFloatingPointEditInput').on('focus', function () {
            $('#FVProdFloatingPointEditInput').removeClass('wrongValue');
        });
        $('#FVProdWithoutCommaEditInput').on('focus', function () {
            $('#FVProdWithoutCommaEditInput').removeClass('wrongValue');
        });
        $('#FVProdEditDiscount').on('focus', function () {
            $('#FVProdEditDiscount').removeClass('wrongValue');
        });
        $('#confirmFVAddProduct').on('click', function(){
            if(divider == 0){
                if(!isNaN($('#FVProdFloatingPointInput').val()) && !isNaN($('#FVProdAddDiscount').val())){
                    if($('#FVProdFloatingPointInput').val() != 0){
                        if(checkQty(selectedProductToAdd, Math.round($('#FVProdWithoutCommaInput').val() * 100)) == 1){
                            addPosToFV(selectedFVID, selectedProductToAdd, Math.round($('#FVProdFloatingPointInput').val() * 100), Math.round($('#FVProdAddDiscount').val() * 100));
                            getFVRecords();
                            $('#FVAddingProduct').addClass('hidden');
                        } else {
                            fillProductAddingFormById(FVselectedFindProduct);
                            $('#FVProdFloatingPointInput').addClass('wrongValue');
                            alert('Zbyt mało towaru na magazynie');
                        }
                    } else {
                        $('#FVProdFloatingPointInput').addClass('wrongValue');
                        alert('Ilość musi być większa od 0');
                    }
                } else {
                    if(isNaN($('#FVProdAddDiscount').val())) {
                        $('#FVProdAddDiscount').addClass('wrongValue');
                    }
                    if(isNaN($('#FVProdFloatingPointInput').val())){
                        $('#FVProdFloatingPointInput').addClass('wrongValue');
                    }
                    alert('Niepoprawne wartości');
                }
            } else if (divider == 1){
                if(!isNaN($('#FVProdWithoutCommaInput').val()) && !isNaN($('#FVProdAddDiscount').val())){
                    if($('#FVProdWithoutCommaInput').val() != 0){
                        if(checkQty(selectedProductToAdd, Math.round($('#FVProdWithoutCommaInput').val() * 100)) == 1){
                            addPosToFV(selectedFVID, selectedProductToAdd, Math.round($('#FVProdWithoutCommaInput').val() * 100), Math.round($('#FVProdAddDiscount').val() * 100));
                            getFVRecords();
                            $('#FVAddingProduct').addClass('hidden');
                        } else {
                            fillProductAddingFormById(FVselectedFindProduct);
                            $('#FVProdWithoutCommaInput').addClass('wrongValue');
                            alert('Zbyt mało towaru na magazynie');
                        }
                    } else {
                        $('#FVProdWithoutCommaInput').addClass('wrongValue');
                        alert('Ilość musi być większa od 0');
                    }
                } else {
                    if(isNaN($('#FVProdAddDiscount').val())) {
                        $('#FVProdAddDiscount').addClass('wrongValue');
                    }
                    if(isNaN($('#FVProdWithoutCommaInput').val())){
                        $('#FVProdWithoutCommaInput').addClass('wrongValue');
                    }
                    alert('Niepoprawne wartości');
                }
            }
        });
        $('#confirmFVEditProduct').on('click', function(){
            console.log(selectedFVRecord);
            if(divider == 0){
                if(!isNaN($('#FVProdFloatingPointEditInput').val()) && !isNaN($('#FVProdEditDiscount').val())){
                    if($('#FVProdFloatingPointEditInput').val() != 0){
                        if(checkQtyToEdit(selectedFVRecord, $('#FVProdFloatingPointEditInput').val() * 100) == 1){
                            editFVPos(selectedFVRecord, $('#FVProdFloatingPointEditInput').val() * 100, $('#FVProdEditDiscount').val() * 100);
                            getFVRecords();
                            $('#FVEditProduct').addClass('hidden');
                        } else {
                            fillRecordEditForm(selectedFVRecord);
                            $('#FVProdFloatingPointEditInput').addClass('wrongValue');
                            alert('Zbyt mało towaru na magazynie');
                        }
                    } else {
                        $('#FVProdFloatingPointEditInput').addClass('wrongValue');
                        alert('Ilość musi być większa od 0');
                    }
                } else {
                    if(isNaN($('#FVProdEditDiscount').val())) {
                        $('#FVProdEditDiscount').addClass('wrongValue');
                    }
                    if(isNaN($('#FVProdFloatingPointEditInput').val())){
                        $('#FVProdFloatingPointEditInput').addClass('wrongValue');
                    }
                    alert('Niepoprawne wartości');
                }
            } else if (divider == 1){
                if(!isNaN($('#FVProdWithoutCommaEditInput').val()) && !isNaN($('#FVProdEditDiscount').val())){
                    if($('#FVProdWithoutCommaEditInput').val() != 0){
                        if(checkQtyToEdit(selectedFVRecord, $('#FVProdWithoutCommaEditInput').val() * 100) == 1){
                            editFVPos(selectedFVRecord, $('#FVProdWithoutCommaEditInput').val() * 100, $('#FVProdEditDiscount').val() * 100);
                            getFVRecords();
                            $('#FVEditProduct').addClass('hidden');
                        } else {
                            fillRecordEditForm(selectedFVRecord);
                            $('#FVProdWithoutCommaEditInput').addClass('wrongValue');
                            alert('Zbyt mało towaru na magazynie');
                        }
                    } else {
                        $('#FVProdWithoutCommaEditInput').addClass('wrongValue');
                        alert('Ilość musi być większa od 0');
                    }
                } else {
                    if(isNaN($('#FVProdEditDiscount').val())) {
                        $('#FVProdEditDiscount').addClass('wrongValue');
                    }
                    if(isNaN($('#FVProdWithoutCommaEditInput').val())){
                        $('#FVProdWithoutCommaEditInput').addClass('wrongValue');
                    }
                    alert('Niepoprawne wartości');
                }
            }
        });
        $('#FVProdSearch').on('click', function () {
            FVProdToAddPage = 0;
            FVProdToAddOrder = 1;
            FVselectedFindProduct = 0;
            $('.WZProdToAdd').removeClass('rowSelected');
            FVFindProdCount = getFindProductToAddCount($('#FVProdSearchDetails').val());
            $('#FVProdChosePrevious').addClass('hidden');
            $('#FVProdChoseTabContent').html(createFVProductToAddContent(getFindProductToAdd(FVProdToAddPage, FVProdToAddOrder, $('#FVProdSearchDetails').val())));
        });
        $('#FVProdReset').on('click', function () {
            FVProdToAddPage = 0;
            FVProdToAddOrder = 1;
            FVselectedFindProduct = 0;
            $('.WZProdToAdd').removeClass('rowSelected');
            $('#FVProdChosePrevious').addClass('hidden');
            $('#FVProdSearchDetails').val('');
            FVFindProdCount = getFindProductToAddCount($('#FVProdSearchDetails').val());
            $('#FVProdChoseTabContent').html(createFVProductToAddContent(getFindProductToAdd(FVProdToAddPage, FVProdToAddOrder, $('#FVProdSearchDetails').val())));
        });
        $('#FVProdChoseNext').on('click', function () {
            $('.WZProdToAdd').removeClass('rowSelected');
            FVProdToAddPage++;
            $('#FVProdChoseTabContent').html(createFVProductToAddContent(getFindProductToAdd(FVProdToAddPage, FVProdToAddOrder, $('#FVProdSearchDetails').val())));
            if (FVProdToAddPage > 0) {
                $('#FVProdChosePrevious').removeClass('hidden');
            }
            FVFindProdCount = getFindProductToAddCount($('#FVProdSearchDetails').val());
            if (FVFindProdCount <= 5) {
                $('#FVProdChoseNext').addClass('hidden');
            } else {
                $('#FVProdChoseNext').removeClass('hidden');
            }
            if (FVFindProdCount < (FVProdToAddPage * 5 + 5)) {
                $('#FVProdChoseNext').addClass('hidden');
            } else {
                $('#FVProdChoseNext').removeClass('hidden');
            }
        });
        $('#FVProdChosePrevious').on('click', function () {
            $('.WZProdToAdd').removeClass('rowSelected');
            FVProdToAddPage--;
            $('#FVProdChoseNext').removeClass('hidden');
            $('#FVProdChoseTabContent').html(createFVProductToAddContent(getFindProductToAdd(FVProdToAddPage, FVProdToAddOrder, $('#FVProdSearchDetails').val())));
            if (FVProdToAddPage == 0) {
                $('#FVProdChosePrevious').addClass('hidden');
            }
        });
        $('#cancelFVAddProduct').on('click', function () {
            $('#FVAddingProduct').addClass('hidden');
        });
        $('#cancelFVProdChose').on('click', function () {
            $('#FVChosingProduct').addClass('hidden');
        });
        $('#acceptFV').on('click', function(){
            var accept = 0;
            var count = 0;
            if(selectedFVID!=0){
                accept = checkDocumentAccept(selectedFVID);
                count = getDocumentRecordsCount(selectedFVID);
                if(accept == 1){
                    var txt = '';
                    if (window.localStorage.getItem('lang') == 'pl') {
                        txt = 'Dokument już zatwierdzony!';
                    } else if (window.localStorage.getItem('lang') == 'en') {
                        txt = 'Document is alredy accepted!';
                    } else {
                        txt = 'Dokument już zatwierdzony!';
                    }
                    alert(txt);
                } else if (count == 0){
                    var txt = '';
                    if (window.localStorage.getItem('lang') == 'pl') {
                        txt = 'Dokument jest pusty!';
                    } else if (window.localStorage.getItem('lang') == 'en') {
                        txt = 'Document is empty!';
                    } else {
                        txt = 'Dokument jest pusty!';
                    }
                    alert(txt);
                } else {
                    acceptDocument(selectedFVID);
                    reset();
                    selectedFVID = 0;
                }
            }
        });
        $(document).on('click', function(e){
        var id = $(e.target).parent().attr('id');
            if(id!=undefined){
                if(id.substring(0,5) == 'ConID'){
                    $('.FVConRow').removeClass('rowSelected');
                    $('#ConID'+id.substring(5,id.lenght)).addClass('rowSelected');
                    FVselectedContractorID = id.substring(5,id.lenght);
                }
            }
        });
        $(document).on('click', function (e) {
            var id = $(e.target).parent().attr('id');
            if (id != undefined) {
                if (id.substring(0, 11) == 'FVProdToAdd') {
                    $('.WZProdToAdd').removeClass('rowSelected');
                    $('#FVProdToAdd' + id.substring(11, id.lenght)).addClass('rowSelected');
                    FVselectedFindProduct = id.substring(11, id.lenght);
                }
            }
        });
        $(document).on('click', function (e) {
            var id = $(e.target).parent().attr('id');
            if (id != undefined) {
                if (id.substring(0, 7) == 'FVRecID') {
                    $('.WZProdRow').removeClass('rowSelected');
                    $('#FVRecID' + id.substring(7, id.lenght)).addClass('rowSelected');
                    selectedFVRecord = id.substring(7, id.lenght);
                }
            }
        });
        $(document).on('dblclick', function(e){
            var id = $(e.target).parent().attr('id');
            if(id!=undefined){
                if(id.substring(0,4) == 'FVID'){
                    $('#FVPopup').removeClass('hidden');
                    $('#FVContainer').addClass('blur');
                    selectedFVID = id.substring(4,id.lenght);
                    selectedFVRecord = 0;
                    isDocumentAccepted = checkDocumentAccept(selectedFVID);
                    if(isDocumentAccepted == 0){
                        $('#newFVRecord').removeClass('hidden');
                        $('#editFVRecord').removeClass('hidden');
                        $('#deleteFVRecord').removeClass('hidden');
                        $('#FVproductSearch').removeClass('hidden');
                    } else {
                        $('#newFVRecord').addClass('hidden');
                        $('#editFVRecord').addClass('hidden');
                        $('#deleteFVRecord').addClass('hidden');
                        $('#FVproductSearch').addClass('hidden');
                    }
                    getDocumentInfo();
                    getFVRecords();
                }
            }
        });
        $('#cancelNewFV').on('click', function(){
            $('#FVContainer').removeClass('blur');
            $('#newFVpopup').addClass('hidden');
            $('#selectContractorId').val('');
            $('#selectContractorName').val('');
            $('#selectContractorCity').val('');
            $('#selectContractorNIP').val('');
        });
        $('#newFV').on('click', function(){
            $('#FVContainer').addClass('blur');
            $('#newFVpopup').removeClass('hidden');
            getContractors();
        });
        $('#FVnext').on('click', function(){
            $('.FVrow').removeClass('rowSelected');
            FVTablePage++;
            getFVDocuments();
            if(FVTablePage>0){
                $('#FVprevious').removeClass('hidden');
            }
        });
        $('#FVprevious').on('click', function(){
            $('.FVrow').removeClass('rowSelected');
            FVTablePage--;
            getFVDocuments();
            if(FVTablePage==0){
                $('#FVprevious').addClass('hidden');
            }
        });
        $('#FVConNext').on('click', function(){
            $('.FVConRow').removeClass('rowSelected');
            FVConPage++;
            getContractors();
            if(FVConPage>0){
                $('#FVConPrevious').removeClass('hidden');
            }
            selectedContractorID = 0;
        });
        $('#FVConPrevious').on('click', function(){
            $('.FVConRow').removeClass('rowSelected');
            FVConPage--;
            getContractors();
            if(FVConPage==0){
                $('#FVConPrevious').addClass('hidden');
            }
            selectedContractorID = 0;
        });
        
        $(document).on('click', function(e){
            if(e.target.id =='newFVpopup' || e.target.id =='FVPopup'){
                $('#FVContainer').removeClass('blur');
                $('.popup').addClass('hidden');
                $('#selectContractorId').val('');
                $('#selectContractorName').val('');
                $('#selectContractorCity').val('');
                $('#selectContractorNIP').val('');
            }
        });
       
        $('#FVTabOpen').on('click', function(){
            $('.tab').addClass('hidden');
            $('#FVContainer').removeClass('hidden');
        });
        $('#closeFVContainer').on('click', function(){
            $('#FVContainer').addClass('hidden');
        });
        $('#closeFVPopup').on('click', function(){
            $('#FVPopup').addClass('hidden');
            $('#FVContainer').removeClass('blur');
        });
        $('#FVsearch').on('click', function(){
            FVTablePage=0;
            getFVDocuments();
        });
        $('#FVConSearch').on('click', function(){
            FVConPage=0;
            getContractors();
        });
        $('#FVConReset').on('click', function(){
            conReset();
        });
        $('#FVreset').on('click', function(){
            reset();
        });
        $('#FVarrUpId').on('click', function(){
            FVTablePage = 0;
            $('.FVarr').addClass('unused');
            $('.FVarr').removeClass('used');
            $('#FVarrUpId').addClass('used');
            $('#FVarrUpId').removeClass('unused');
            $('#previous').addClass('hidden');
            FVTableOrder = 0;
            getFVDocuments();
        });
        $('#FVarrDownId').on('click', function(){
            FVTablePage = 0;
            $('.FVarr').addClass('unused');
            $('.FVarr').removeClass('used');
            $('#FVarrDownId').addClass('used');
            $('#FVarrDownId').removeClass('unused');
            $('#previous').addClass('hidden');
            FVTableOrder = 1;
            getFVDocuments();
        });
        $('#FVarrUpNo').on('click', function(){
            FVTablePage = 0;
            $('.FVarr').addClass('unused');
            $('.FVarr').removeClass('used');
            $('#FVarrUpNo').addClass('used');
            $('#FVarrUpNo').removeClass('unused');
            $('#previous').addClass('hidden');
            FVTableOrder = 2;
            getFVDocuments();
        });
        $('#FVarrDownNo').on('click', function(){
            FVTablePage = 0;
            $('.FVarr').addClass('unused');
            $('.FVarr').removeClass('used');
            $('#FVarrDownNo').addClass('used');
            $('#FVarrDownNo').removeClass('unused');
            $('#previous').addClass('hidden');
            FVTableOrder = 3;
            getFVDocuments();
        });
        $('#FVarrUpDate').on('click', function(){
            FVTablePage = 0;
            $('.FVarr').addClass('unused');
            $('.FVarr').removeClass('used');
            $('#FVarrUpDate').addClass('used');
            $('#FVarrUpDate').removeClass('unused');
            $('#previous').addClass('hidden');
            FVTableOrder = 4;
            getFVDocuments();
        });
        $('#FVarrDownDate').on('click', function(){
            FVTablePage = 0;
            $('.FVarr').addClass('unused');
            $('.FVarr').removeClass('used');
            $('#FVarrDownDate').addClass('used');
            $('#FVarrDownDate').removeClass('unused');
            $('#previous').addClass('hidden');
            FVTableOrder = 5;
            getFVDocuments();
        });
        $('#FVarrUpAccDate').on('click', function(){
            FVTablePage = 0;
            $('.FVarr').addClass('unused');
            $('.FVarr').removeClass('used');
            $('#FVarrUpAccDate').addClass('used');
            $('#FVarrUpAccDate').removeClass('unused');
            $('#previous').addClass('hidden');
            FVTableOrder = 6;
            getFVDocuments();
        });
        $('#FVarrDownAccDate').on('click', function(){
            FVTablePage = 0;
            $('.FVarr').addClass('unused');
            $('.FVarr').removeClass('used');
            $('#FVarrDownAccDate').addClass('used');
            $('#FVarrDownAccDate').removeClass('unused');
            $('#previous').addClass('hidden');
            FVTableOrder = 7;
            getFVDocuments();
        });
        $('#FVarrUpConId').on('click', function(){
            FVTablePage = 0;
            $('.FVarr').addClass('unused');
            $('.FVarr').removeClass('used');
            $('#FVarrUpConId').addClass('used');
            $('#FVarrUpConId').removeClass('unused');
            $('#previous').addClass('hidden');
            FVTableOrder = 8;
            getFVDocuments();
        });
        $('#FVarrDownConId').on('click', function(){
            FVTablePage = 0;
            $('.FVarr').addClass('unused');
            $('.FVarr').removeClass('used');
            $('#FVarrDownConId').addClass('used');
            $('#FVarrDownConId').removeClass('unused');
            $('#previous').addClass('hidden');
            FVTableOrder = 9;
            getFVDocuments();
        });
        $('#FVarrUpConName').on('click', function(){
            FVTablePage = 0;
            $('.FVarr').addClass('unused');
            $('.FVarr').removeClass('used');
            $('#FVarrUpConName').addClass('used');
            $('#FVarrUpConName').removeClass('unused');
            $('#previous').addClass('hidden');
            FVTableOrder = 10;
            getFVDocuments();
        });
        $('#FVarrDownConName').on('click', function(){
            FVTablePage = 0;
            $('.FVarr').addClass('unused');
            $('.FVarr').removeClass('used');
            $('#FVarrDownConName').addClass('used');
            $('#FVarrDownConName').removeClass('unused');
            $('#previous').addClass('hidden');
            FVTableOrder = 11;
            getFVDocuments();
        });
        //ORDER ARROWS CONTROL CONTRACTORS TAB
        $('#FVConArrUpId').on('click', function(){
            FVTablePage = 0;
            $('.FVConArr').addClass('unused');
            $('.FVConArr').removeClass('used');
            $('#FVConArrUpId').addClass('used');
            $('#FVConArrUpId').removeClass('unused');
            $('#previous').addClass('hidden');
            FVConOrder = 0;
            getContractors();
        });
        $('#FVConArrDownId').on('click', function(){
            FVTablePage = 0;
            $('.FVConArr').addClass('unused');
            $('.FVConArr').removeClass('used');
            $('#FVConArrDownId').addClass('used');
            $('#FVConArrDownId').removeClass('unused');
            $('#previous').addClass('hidden');
            FVConOrder = 1;
            getContractors();
        });
        $('#FVConArrUpConName').on('click', function(){
            FVTablePage = 0;
            $('.FVConArr').addClass('unused');
            $('.FVConArr').removeClass('used');
            $('#FVConArrUpConName').addClass('used');
            $('#FVConArrUpConName').removeClass('unused');
            $('#previous').addClass('hidden');
            FVConOrder = 2;
            getContractors();
        });
        $('#FVConArrDownConName').on('click', function(){
            FVTablePage = 0;
            $('.FVConArr').addClass('unused');
            $('.FVConArr').removeClass('used');
            $('#FVConArrDownConName').addClass('used');
            $('#FVConArrDownConName').removeClass('unused');
            $('#previous').addClass('hidden');
            FVConOrder = 3;
            getContractors();
        });
        $('#FVConArrUpCity').on('click', function(){
            FVTablePage = 0;
            $('.FVConArr').addClass('unused');
            $('.FVConArr').removeClass('used');
            $('#FVConArrUpCity').addClass('used');
            $('#FVConArrUpCity').removeClass('unused');
            $('#previous').addClass('hidden');
            FVConOrder = 4;
            getContractors();
        });
        $('#FVConArrDownCity').on('click', function(){
            FVTablePage = 0;
            $('.FVConArr').addClass('unused');
            $('.FVConArr').removeClass('used');
            $('#FVConArrDownCity').addClass('used');
            $('#FVConArrDownCity').removeClass('unused');
            $('#previous').addClass('hidden');
            FVConOrder = 5;
            getContractors();
        });
        $('confirmNewFV').on('click', function(){
            
        });
    });
    var reset = (function(){
            FVTableOrder=1;
            FVTablePage=0;
            $('.FVarr').addClass('unused');
            $('.FVarr').removeClass('used');
            $('#FVidBox').val('');
            $('#FVnoBox').val('');
            $('#FVconIdBox').val('');
            $('#FVconNameBox').val('');
            $('#FVprevious').addClass('hidden');
            getFVDocuments();
    });
    var conReset = (function(){
            FVConOrder=1;
            FVConPage=0;
            $('.FVConArr').addClass('unused');
            $('.FVConArr').removeClass('used');
            $('#selectContractorId').val('');
            $('#selectContractorName').val('');
            $('#selectContractorCity').val('');
            $('#selectContractorNIP').val('');
            $('#FVConPrevious').addClass('hidden');
            getContractors();
    });
    var getFVCount = (function(){
        param = {};
        //DOCUMENT ID
        if($('#FVidBox').val() == ''){
            param['docId'] = 0;
        }else{
            param['docId'] = $('#FVidBox').val();
        }
        //CONTRACTOR ID
        if($('#FVconIdBox').val() == ''){
            param['conId'] = 0;
        }else{
            param['conId'] = $('#FVconIdBox').val();
        }
        //DOCUMENT NO
        if($('#FVnoBox').val() == ''){
            param['docNo'] = 0;
        }else{
            param['docNo'] = $('#FVnoBox').val();
        }
        param['docType'] = 5;
        param['conName'] = $("#FVconNameBox").val();
        $.ajax({
          type: 'POST',
          async: true,
          data: param,
          dataType: 'json',
          url: 'PHP/getDocumentsCount.php',            
          success: function(data){
            FVCount = data[0].count;
          }
        });
    });
    var getFVDocuments = (function(){
        param = {};       
        //DOCUMENT ID
        if($('#FVidBox').val() == ''){
            param['docId'] = 0;
        }else{
            param['docId'] = $('#FVidBox').val();
        }
        //CONTRACTOR ID
        if($('#FVconIdBox').val() == ''){
            param['conId'] = 0;
        }else{
            param['conId'] = $('#FVconIdBox').val();
        }
        //DOCUMENT NO
        if($('#FVnoBox').val() == ''){
            param['docNo'] = 0;
        }else{
            param['docNo'] = $('#FVnoBox').val();
        }
        param['docType'] = 5;
        param['conName'] = $("#FVconNameBox").val();
        param['ord'] = FVTableOrder;
        param['page'] = FVTablePage;
        $.ajax({
          type: 'POST',
          async: false,
          data: param,
          dataType: 'json',
          url: 'PHP/getDocuments.php',            
          success: function(data){
              getFVCount();
              $('#FVTabContent').html(createFVTableContent(data));
              if(FVCount<=15){
                  $('#FVnext').addClass('hidden');
              } else {
                  $('#FVnext').removeClass('hidden');
              }
              if(FVCount <= (FVTablePage*15+15)){
                  $('#FVnext').addClass('hidden');
              } else {
                  $('#FVnext').removeClass('hidden');
              }
          }
        });
    });
    var addDocument = (function(){
        param = {};       
        //DOCUMENT ID
        if(selectedContractorID == 0){
            alert('Nie wybrano kontrahenta');
        }else{
            param['docType'] = 5;
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
            $('#FVContainer').removeClass('blur');
            $('#newFVpopup').addClass('hidden');
            $('#selectContractorId').val('');
            $('#selectContractorName').val('');
            $('#selectContractorCity').val('');
            $('#selectContractorNIP').val('');
        }
    });
    var createFVTableContent = (function(data){
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
            ans += "<tr class='FVrow' id=FVID"+value['document_id']+">\n\
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
    var createFVConTableContent = (function(data){
        ans = '';
        $.each(data,function(index, value){
            ans += "<tr class='FVConRow' id=ConID"+value['contractor_id']+">\n\
                        <td class='FVConCol1c'>"+value['contractor_id']+"</td>\n\
                        <td class='FVConCol2c'>"+value['contractor_name']+"</td>\n\
                        <td class='FVConCol3c'>"+value['contractor_nip']+"</td>\n\
                        <td class='FVConCol4c'>"+value['contractor_postal']+"</td>\n\
                        <td class='FVConCol5c'>"+value['contractor_city']+"</td>\n\
                        <td class='FVConCol6c'>"+value['contractor_street']+"</td>\n\
                        <td class='FVConCol7c'>"+value['contractor_tel']+"</td>\n\
                        <td class='FVConCol8c'>"+value['contractor_email']+"</td>\n\
                    </tr>";
        });    
        return ans;
    });
    var createFVProductToAddContent = (function (data) {
        ans = '';
        if (FVFindProdCount <= 5) {
                $('#FVProdChoseNext').addClass('hidden');
            } else {
                $('#FVProdChoseNext').removeClass('hidden');
        }
        if (FVFindProdCount <= (FVProdToAddPage * 5) + 5) {
                $('#FVProdChoseNext').addClass('hidden');
            } else {
                $('#FVProdChoseNext').removeClass('hidden');
        }
        $.each(data, function (index, value) {
            ans += "<tr class='WZProdToAdd' id=FVProdToAdd" + value['product_id'] + ">\n\
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
        $('#FVProdAddId').html(details[0]['product_id']);
        $('#FVProdAddName').html(details[0]['product_name']);
        $('#FVProdAddProducer').html(details[0]['contractor_name']);
        $('#FVProdAddPrice').html((details[0]['product_price'])/100);
        $('#FVProdAddQty').html(details[0]['product_number']/100 +' '+ details[0]['product_unit']);
        productPrice = (details[0]['product_price']/100);
        productVat = (details[0]['vat_value']);
        selectedProductToAdd = details[0]['product_id'];
        FVselectedFindProduct = details[0]['product_id'];
        if(details[0]['product_divider'] == 0) {
            $('#FVProdFloatingPoint').removeClass('hidden');
            $('#FVProdWithoutComma').addClass('hidden');
        } else {
            $('#FVProdFloatingPoint').addClass('hidden');
            $('#FVProdWithoutComma').removeClass('hidden');
        }
        divider = details[0]['product_divider'];
    };
    var fillProductAddingFormById = function (searchDetails) {
        var details = getProductToAddDetailsById(searchDetails);
        $('#FVProdAddId').html(details[0]['product_id']);
        $('#FVProdAddName').html(details[0]['product_name']);
        $('#FVProdAddProducer').html(details[0]['contractor_name']);
        $('#FVProdAddPrice').html((details[0]['product_price'])/100);
        $('#FVProdAddQty').html(details[0]['product_number']/100 +' '+ details[0]['product_unit']);
        productPrice = (details[0]['product_price']/100);
        productVat = (details[0]['vat_value']);
        selectedProductToAdd = details[0]['product_id'];
        if(details[0]['product_divider'] == 0) {
            $('#FVProdFloatingPoint').removeClass('hidden');
            $('#FVProdWithoutComma').addClass('hidden');
        } else {
            $('#FVProdFloatingPoint').addClass('hidden');
            $('#FVProdWithoutComma').removeClass('hidden');
        }
        divider = details[0]['product_divider'];
    };
    var fillRecordEditForm = function (searchDetails) {
        var details = getRecordDetailsByRecordId(searchDetails);
        $('#FVProdEditId').html(details[0]['product_id']);
        $('#FVProdEditName').html(details[0]['product_name']);
        $('#FVProdEditProducer').html(details[0]['contractor_name']);
        $('#FVProdEditPrice').html((details[0]['product_price'])/100);
        $('#FVProdEditQty').html(details[0]['product_number']/100 +' '+ details[0]['product_unit']);
        productPrice = (details[0]['product_price']/100);
        productVat = (details[0]['vat_value']);
        selectedProductToAdd = details[0]['product_id'];
        FVselectedFindProduct = details[0]['product_id'];
        $('#FVProdEditDiscount').val(details[0]['discount']);
        if(details[0]['product_divider'] == 0) {
            $('#FVProdFloatingPointEdit').removeClass('hidden');
            $('#FVProdWithoutCommaEdit').addClass('hidden');
            $('#FVProdFloatingPointEditInput').val(details[0]['document_records_product_number']/100);
        } else {
            $('#FVProdFloatingPointEdit').addClass('hidden');
            $('#FVProdWithoutCommaEdit').removeClass('hidden');
            $('#FVProdWithoutCommaEditInput').val(details[0]['document_records_product_number']/100);
        }
        divider = details[0]['product_divider'];
    };
    var getFVRecords = (function(){
        param = {};       
        param['docId'] = selectedFVID;
        $.ajax({
          type: 'POST',
          async: false,
          data: param,
          dataType: 'json',
          url: 'PHP/getDocumentRecords.php',            
          success: function(data){
              $('#FVProdTabContent').html(createFVProductTableContent(data));
          }
        });
    });
    var getDocumentInfo = (function(){
        param = {};       
        param['docId'] = selectedFVID;
        $.ajax({
          type: 'POST',
          async: false,
          data: param,
          dataType: 'json',
          url: 'PHP/getDocumentInfo.php',            
          success: function(data){
                setValuesFVInfo(data);
          }
        });
    });
    var addPosToFV = (function (docId, prodId, qty, discount) {
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
            url: 'PHP/addPosToWZ.php'
        });
    });
    var setValuesFVInfo = (function(data){
        var tempDate;
        $.each(data,function(index, value){
            $('#FVPopupConId').html('ID: '+value['contractor_id']);
            $('#FVPopupConName').html(value['contractor_name']);
            $('#FVPopupConCity').html(''+value['contractor_postal_code']+' '+value['contractor_city']);
            $('#FVPopupConStreet').html('ul. '+value['contractor_street']);
            $('#FVPopupConPhone').html('tel. '+value['contractor_phone']);
            $('#FVPopupConEmail').html('@: '+value['contractor_email']);
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
    var createFVProductTableContent = (function(data){
        ans = '';
        selectedFVRecord = 0;
        $('#FVBruttoV0').html(0);
        $('#FVV0').html(0);
        $('#FVBruttoV5').html(0);
        $('#FVV5').html(0);
        $('#FVBruttoV8').html(0);
        $('#FVV8').html(0);
        $('#FVBruttoV23').html(0);
        $('#FVV23').html(0);
        $('#FVBruttoTotal').html(0);
        $('#FVVTotal').html(0);
        $('#FVNettoField').html(0);
        $('#FVBruttoField').html(0);
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
            valueBruttoWithDiscount = valueBrutto-(valueBrutto*discount/100);
            valueNettoWithDiscount = valueNetto-(valueNetto*discount/100);
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
            $('#FVBruttoV0').html(Math.round((sum0/100)*100)/100);
            $('#FVV0').html(Math.round((sumV0/100)*100)/100);
            $('#FVBruttoV5').html(Math.round((sum5/100)*100)/100);
            $('#FVV5').html(Math.round((sumV5/100)*100)/100);
            $('#FVBruttoV8').html(Math.round((sum8/100)*100)/100);
            $('#FVV8').html(Math.round((sumV8/100)*100)/100);
            $('#FVBruttoV23').html(Math.round((sum23/100)*100)/100);
            $('#FVV23').html(Math.round((sumV23/100)*100)/100);
            $('#FVBruttoTotal').html(Math.round((sumTotal/100)*100)/100);
            $('#FVVTotal').html(Math.round((sumVTotal/100)*100)/100);
            $('#FVNettoField').html(Math.round((totalNetto/100)*100)/100);
            $('#FVBruttoField').html(Math.round((totalBrutto/100)*100)/100);
            
            if (isDocumentAccepted == 0) {
                ans += "<tr class='WZProdRow' id=FVRecID" + value['document_records_id'] + ">\n\
                            <td class='FVProdCol1c'>" + value['document_records_product_id'] + "</td>\n\
                            <td class='FVProdCol2c'>" + value['product_name'] + "</td>\n\
                            <td class='FVProdCol3c'>" + number + "</td>\n\
                            <td class='FVProdCol4c'>" + value['product_unit_short'] + "</td>\n\
                            <td class='FVProdCol5c'>" + (vat * 100) + "</td>\n\
                            <td class='FVProdCol6c'>" + (discount) + "</td>\n\
                            <td class='FVProdCol7c'>" + (Math.round((price / 100) * 100) / 100) + "</td>\n\
                            <td class='FVProdCol8c'>" + (Math.round((priceBrutto / 100) * 100) / 100) + "</td>\n\
                            <td class='FVProdCol9c'>" + (Math.round((valueNetto / 100) * 100) / 100) + "</td>\n\
                            <td class='FVProdCol10c'>" + (Math.round((valueBrutto / 100) * 100) / 100) + "</td>\n\
                            <td class='FVProdCol11c'>" + (Math.round((valueBruttoWithDiscount / 100) * 100) / 100) + "</td>\n\
                        </tr>";
            } else {
                ans += "<tr class='WZProdRow'>\n\
                            <td class='FVProdCol1c'>" + value['document_records_product_id'] + "</td>\n\
                            <td class='FVProdCol2c'>" + value['product_name'] + "</td>\n\
                            <td class='FVProdCol3c'>" + number + "</td>\n\
                            <td class='FVProdCol4c'>" + value['product_unit_short'] + "</td>\n\
                            <td class='FVProdCol5c'>" + (vat * 100) + "</td>\n\
                            <td class='FVProdCol6c'>" + (discount) + "</td>\n\
                            <td class='FVProdCol7c'>" + (Math.round((price / 100) * 100) / 100) + "</td>\n\
                            <td class='FVProdCol8c'>" + (Math.round((priceBrutto / 100) * 100) / 100) + "</td>\n\
                            <td class='FVProdCol9c'>" + (Math.round((valueNetto / 100) * 100) / 100) + "</td>\n\
                            <td class='FVProdCol10c'>" + (Math.round((valueBrutto / 100) * 100) / 100) + "</td>\n\
                            <td class='FVProdCol11c'>" + (Math.round((valueBruttoWithDiscount / 100) * 100) / 100) + "</td>\n\
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
            FVConCount = data[0].count;
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
        
        param['ord'] = FVConOrder;
        param['pageNo'] = FVConPage;
        $.ajax({
          type: 'POST',
          async: false,
          data: param,
          dataType: 'json',
          url: 'PHP/getContractors.php',            
          success: function(data){
              getContractorsCount();
              $('#FVConTabContent').html(createFVConTableContent(data));
              if(FVConCount<=5){
                  $('#FVConNext').addClass('hidden');
              } else {
                  $('#FVConNext').removeClass('hidden');
              }
              if(FVConCount<(FVConPage*5+5)){
                  $('#FVConNext').addClass('hidden');
              } else {
                  $('#FVConNext').removeClass('hidden');
              }
          }
        });
    });
    $(document).ready(function(){
        init(); 
    });
}());
 