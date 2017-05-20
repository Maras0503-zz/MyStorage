/* global pageFunctions */
var WZTablePage = 0;
var WZTableOrder = 1;
var WZProdToAddPage = 0;
var WZProdToAddOrder = 1;
var WZFindProdCount = 0;
var WZCount = 0;
var WZConPage = 0;
var selectedFindProduct = 0;
var WZConOrder = 1;
var WZConCount = 0;
var selectedContractorID = 0;
var selectedWZID = 0;
var productPrice = 0;
var productVat = 0;
var selectedProductToAdd = 0;
var selectedWZRecord = 0;
var isDocumentAccepted = 0;
var divider = 0;
pageFunctions.wzTabFunc = function () {
    var init = (function () {
        listeners();
        getWZDocuments();
    });

    var listeners = (function () {
        $('#confirmNewWZ').on('click', function () {
            addDocument();
        });
        $("#delWZ").on('click', function () {
            var docAccept = checkDocumentAccept(selectedWZID);
            if (selectedWZID != 0 && docAccept != 1) {
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
                    delDocument(selectedWZID);
                    selectedWZID = 0;
                    reset();
                } else {

                }
            } else {
                if (docAccept == 1) {
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
        $(document).on('click', function (e) {
            var id = $(e.target).parent().attr('id');
            if (id != undefined) {
                if (id.substring(0, 4) == 'WZID') {
                    $('.WZrow').removeClass('rowSelected');
                    $('#WZID' + id.substring(4, id.lenght)).addClass('rowSelected');
                    selectedWZID = id.substring(4, id.lenght);
                }
            }
        });
        $('#newWZRecord').on('click', function () {
            $('#WZProdWithoutCommaInput').removeClass('wrongValue');
            $('#WZProdFloatingPointInput').removeClass('wrongValue');
            $('#WZProdAddDiscount').removeClass('wrongValue');
            $('#WZProdWithoutCommaInput').val('');
            $('#WZProdFloatingPointInput').val('');
            $('#WZPosAddValue').html('');
            $('#WZPosAddValueGross').html('');
            $('#WZProdAddDiscount').val('');
            if (getFindProductToAddCount($('#WZproductSearch').val()) == 1) {
                $('#WZAddingProduct').removeClass('hidden');
                fillProductAddingForm($('#WZproductSearch').val());
                $('#WZproductSearch').val('');

            } else {
                $('#WZChosingProduct').removeClass('hidden');
                $('#WZProdChoseTabContent').html(createWZProductToAddContent(getFindProductToAdd(WZProdToAddPage, WZProdToAddOrder, $('#WZproductSearch').val())));
                $('#WZProdSearchDetails').val($('#WZproductSearch').val());
                $('#WZproductSearch').val('');
            }
        });

        $('#deleteWZRecord').on('click', function(){
            console.log(selectedWZID);
            console.log(selectedWZRecord);
            if(selectedWZRecord != 0) {
                delDocumentPos(selectedWZRecord);
                getWZRecords(selectedWZID);
            } else {
                alert('Nie wybrano pozycji do usunięcia!');
            } 
        });

        $('#calculateValue').on('click', function(){
            var qty;
            var disc;
            var sum;
            var gross;
            if(divider == 1){
                qty = parseFloat($('#WZProdWithoutCommaInput').val());
                disc = $('#WZProdAddDiscount').val();
                sum = (productPrice*qty)-(productPrice*qty*(disc/100));
                gross = sum+(sum*(productVat/100));
                $('#WZPosAddValue').html(Math.round(sum*100)/100);
                $('#WZPosAddValueGross').html(Math.round(gross*100)/100);
            } else {
                qty = parseFloat($('#WZProdFloatingPointInput').val());
                disc = $('#WZProdAddDiscount').val();
                sum = (productPrice*qty)-(productPrice*qty*(disc/100));
                gross = sum+(sum*(productVat/100));
                $('#WZPosAddValue').html(Math.round(sum*100)/100);
                $('#WZPosAddValueGross').html(Math.round(gross*100)/100);
            }
        });

        $('#confirmWZProdChose').on('click', function (){
            $('#WZAddingProduct').removeClass('hidden');
            fillProductAddingFormById(selectedFindProduct);
            $('#WZChosingProduct').addClass('hidden');
        });
        $('#WZProdFloatingPointInput').on('focus', function () {
            $('#WZProdFloatingPointInput').removeClass('wrongValue');
        });
        $('#WZProdWithoutCommaInput').on('focus', function () {
            $('#WZProdWithoutCommaInput').removeClass('wrongValue');
        });
        $('#WZProdAddDiscount').on('focus', function () {
            $('#WZProdAddDiscount').removeClass('wrongValue');
        });
        $('#confirmWZAddProduct').on('click', function(){
            if(divider == 0){
                if(!isNaN($('#WZProdFloatingPointInput').val()) && !isNaN($('#WZProdAddDiscount').val())){
                    if($('#WZProdFloatingPointInput').val() != 0){
                        if(checkQty(selectedProductToAdd, Math.round($('#WZProdWithoutCommaInput').val() * 100)) == 1){
                            addPosToWZ(selectedWZID, selectedProductToAdd, Math.round($('#WZProdFloatingPointInput').val() * 100), Math.round($('#WZProdAddDiscount').val() * 100));
                            getWZRecords();
                            $('#WZAddingProduct').addClass('hidden');
                        } else {
                            fillProductAddingFormById(selectedFindProduct);
                            $('#WZProdFloatingPointInput').addClass('wrongValue');
                            alert('Zbyt towaru mało na magazynie');
                        }
                    } else {
                        $('#WZProdFloatingPointInput').addClass('wrongValue');
                        alert('Ilość musi być większa od 0');
                    }
                } else {
                    if(isNaN($('#WZProdAddDiscount').val())) {
                        $('#WZProdAddDiscount').addClass('wrongValue');
                    }
                    if(isNaN($('#WZProdFloatingPointInput').val())){
                        $('#WZProdFloatingPointInput').addClass('wrongValue');
                    }
                    alert('Niepoprawne wartości');
                }
            } else if (divider == 1){
                if(!isNaN($('#WZProdWithoutCommaInput').val()) && !isNaN($('#WZProdAddDiscount').val())){
                    if($('#WZProdWithoutCommaInput').val() != 0){
                        if(checkQty(selectedProductToAdd, Math.round($('#WZProdWithoutCommaInput').val() * 100)) == 1){
                            addPosToWZ(selectedWZID, selectedProductToAdd, Math.round($('#WZProdWithoutCommaInput').val() * 100), Math.round($('#WZProdAddDiscount').val() * 100));
                            getWZRecords();
                            $('#WZAddingProduct').addClass('hidden');
                        } else {
                            fillProductAddingFormById(selectedFindProduct);
                            $('#WZProdWithoutCommaInput').addClass('wrongValue');
                            alert('Zbyt mało towaru na magazynie');
                        }
                    } else {
                        $('#WZProdWithoutCommaInput').addClass('wrongValue');
                        alert('Ilość musi być większa od 0');
                    }
                } else {
                    if(isNaN($('#WZProdAddDiscount').val())) {
                        $('#WZProdAddDiscount').addClass('wrongValue');
                    }
                    if(isNaN($('#WZProdWithoutCommaInput').val())){
                        $('#WZProdWithoutCommaInput').addClass('wrongValue');
                    }
                    alert('Niepoprawne wartości');
                }
            }
        });

        $('#WZProdSearch').on('click', function () {
            WZProdToAddPage = 0;
            WZProdToAddOrder = 1;
            selectedFindProduct = 0;
            $('.WZProdToAdd').removeClass('rowSelected');
            WZFindProdCount = getFindProductToAddCount($('#WZProdSearchDetails').val());
            if (WZFindProdCount <= 5) {
                $('#WZProdChoseNext').addClass('hidden');
            } else {
                $('#WZProdChoseNext').removeClass('hidden');
            }
            if (WZFindProdCount < (WZProdToAddPage * 5 + 5)) {
                $('#WZProdChoseNext').addClass('hidden');
            } else {
                $('#WZProdChoseNext').removeClass('hidden');
            }
            $('#WZProdChosePrevious').addClass('hidden');
            $('#WZProdChoseTabContent').html(createWZProductToAddContent(getFindProductToAdd(WZProdToAddPage, WZProdToAddOrder, $('#WZProdSearchDetails').val())));
        });

        $('#WZProdReset').on('click', function () {
            WZProdToAddPage = 0;
            WZProdToAddOrder = 1;
            selectedFindProduct = 0;
            $('.WZProdToAdd').removeClass('rowSelected');
            WZFindProdCount = getFindProductToAddCount($('#WZProdSearchDetails').val());
            if (WZFindProdCount <= 5) {
                $('#WZProdChoseNext').addClass('hidden');
            } else {
                $('#WZProdChoseNext').removeClass('hidden');
            }
            if (WZFindProdCount < (WZProdToAddPage * 5 + 5)) {
                $('#WZProdChoseNext').addClass('hidden');
            } else {
                $('#WZProdChoseNext').removeClass('hidden');
            }
            $('#WZProdChosePrevious').addClass('hidden');
            $('#WZProdSearchDetails').val('');
            $('#WZProdChoseTabContent').html(createWZProductToAddContent(getFindProductToAdd(WZProdToAddPage, WZProdToAddOrder, $('#WZProdSearchDetails').val())));
        });

        $('#WZProdChoseNext').on('click', function () {
            $('.WZProdToAdd').removeClass('rowSelected');
            WZProdToAddPage++;
            $('#WZProdChoseTabContent').html(createWZProductToAddContent(getFindProductToAdd(WZProdToAddPage, WZProdToAddOrder, $('#WZProdSearchDetails').val())));
            if (WZProdToAddPage > 0) {
                $('#WZProdChosePrevious').removeClass('hidden');
            }
            WZFindProdCount = getFindProductToAddCount($('#WZProdSearchDetails').val());
            if (WZFindProdCount <= 5) {
                $('#WZProdChoseNext').addClass('hidden');
            } else {
                $('#WZProdChoseNext').removeClass('hidden');
            }
            if (WZFindProdCount < (WZProdToAddPage * 5 + 5)) {
                $('#WZProdChoseNext').addClass('hidden');
            } else {
                $('#WZProdChoseNext').removeClass('hidden');
            }

        });

        $('#WZProdChosePrevious').on('click', function () {
            $('.WZProdToAdd').removeClass('rowSelected');
            WZProdToAddPage--;
            $('#WZProdChoseNext').removeClass('hidden');
            $('#WZProdChoseTabContent').html(createWZProductToAddContent(getFindProductToAdd(WZProdToAddPage, WZProdToAddOrder, $('#WZProdSearchDetails').val())));
            if (WZProdToAddPage == 0) {
                $('#WZProdChosePrevious').addClass('hidden');
            }
        });

        $('#cancelWZAddProduct').on('click', function () {
            $('#WZAddingProduct').addClass('hidden');
        });
        $('#cancelWZProdChose').on('click', function () {
            $('#WZChosingProduct').addClass('hidden');
        });

        $('#acceptWZ').on('click', function () {
            var accept = 0;
            var count = 0;
            if (selectedWZID != 0) {
                accept = checkDocumentAccept(selectedWZID);
                count = getDocumentRecordsCount(selectedWZID);
                if (accept == 1) {
                    var txt = '';
                    if (window.localStorage.getItem('lang') == 'pl') {
                        txt = 'Dokument już zatwierdzony!';
                    } else if (window.localStorage.getItem('lang') == 'en') {
                        txt = 'Document is alredy accepted!';
                    } else {
                        txt = 'Dokument już zatwierdzony!';
                    }
                    alert(txt);
                } else if (count == 0) {
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
                    acceptDocument(selectedWZID);
                    reset();
                    selectedWZID = 0;
                }
            }
        });

        $(document).on('click', function (e) {
            var id = $(e.target).parent().attr('id');
            if (id != undefined) {
                if (id.substring(0, 5) == 'ConID') {
                    $('.WZConRow').removeClass('rowSelected');
                    $('#ConID' + id.substring(5, id.lenght)).addClass('rowSelected');
                    selectedContractorID = id.substring(5, id.lenght);
                }
            }
        });

        $(document).on('click', function (e) {
            var id = $(e.target).parent().attr('id');
            if (id != undefined) {
                if (id.substring(0, 9) == 'ProdToAdd') {
                    $('.WZProdToAdd').removeClass('rowSelected');
                    $('#ProdToAdd' + id.substring(9, id.lenght)).addClass('rowSelected');
                    selectedFindProduct = id.substring(9, id.lenght);
                }
            }
        });

        $(document).on('click', function (e) {
            var id = $(e.target).parent().attr('id');
            if (id != undefined) {
                if (id.substring(0, 7) == 'WZRecID') {
                    $('.WZProdRow').removeClass('rowSelected');
                    $('#WZRecID' + id.substring(7, id.lenght)).addClass('rowSelected');
                    selectedWZRecord = id.substring(7, id.lenght);
                }
            }
        });
        $(document).on('dblclick', function (e) {
            var id = $(e.target).parent().attr('id');
            if (id != undefined) {
                if (id.substring(0, 4) == 'WZID') {
                    $('#WZPopup').removeClass('hidden');
                    $('#WZContainer').addClass('blur');
                    selectedWZID = id.substring(4, id.lenght);
                    isDocumentAccepted = checkDocumentAccept(selectedWZID);
                    if (isDocumentAccepted == 0) {
                        $('#newWZRecord').removeClass('hidden');
                        $('#editWZRecord').removeClass('hidden');
                        $('#deleteWZRecord').removeClass('hidden');
                        $('#WZproductSearch').removeClass('hidden');
                    } else {
                        $('#newWZRecord').addClass('hidden');
                        $('#editWZRecord').addClass('hidden');
                        $('#deleteWZRecord').addClass('hidden');
                        $('#WZproductSearch').addClass('hidden');
                    }
                    getDocumentInfo();
                    getWZRecords();
                }
            }
        });
        $('#cancelNewWZ').on('click', function () {
            $('#WZContainer').removeClass('blur');
            $('#newWZpopup').addClass('hidden');
            $('#selectContractorId').val('');
            $('#selectContractorName').val('');
            $('#selectContractorCity').val('');
            $('#selectContractorNIP').val('');
        });
        $('#newWZ').on('click', function () {
            $('#WZContainer').addClass('blur');
            $('#newWZpopup').removeClass('hidden');
            getContractors();
        });
        $('#WZnext').on('click', function () {
            $('.WZrow').removeClass('rowSelected');
            WZTablePage++;
            getWZDocuments();
            if (WZTablePage > 0) {
                $('#WZprevious').removeClass('hidden');
            }
        });
        $('#WZprevious').on('click', function () {
            $('.WZrow').removeClass('rowSelected');
            WZTablePage--;
            getWZDocuments();
            if (WZTablePage == 0) {
                $('#WZprevious').addClass('hidden');
            }
        });

        $('#WZConNext').on('click', function () {
            $('.WZConRow').removeClass('rowSelected');
            WZConPage++;
            getContractors();
            if (WZConPage > 0) {
                $('#WZConPrevious').removeClass('hidden');
            }
            selectedContractorID = 0;
        });
        $('#WZConPrevious').on('click', function () {
            $('.WZConRow').removeClass('rowSelected');
            WZConPage--;
            getContractors();
            if (WZConPage == 0) {
                $('#WZConPrevious').addClass('hidden');
            }
            selectedContractorID = 0;
        });

        $(document).on('click', function (e) {
            if (e.target.id == 'newWZpopup' || e.target.id == 'WZPopup') {
                $('#WZContainer').removeClass('blur');
                $('.popup').addClass('hidden');
                $('#selectContractorId').val('');
                $('#selectContractorName').val('');
                $('#selectContractorCity').val('');
                $('#selectContractorNIP').val('');
            }
        });

        $('#WZTabOpen').on('click', function () {
            $('.tab').addClass('hidden');
            $('#WZContainer').removeClass('hidden');
        });
        $('#closeWZContainer').on('click', function () {
            $('#WZContainer').addClass('hidden');
        });
        $('#closeWZPopup').on('click', function () {
            $('#WZPopup').addClass('hidden');
            $('#WZContainer').removeClass('blur');
        });
        $('#WZsearch').on('click', function () {
            WZTablePage = 0;
            getWZDocuments();
        });
        $('#WZConSearch').on('click', function () {
            WZConPage = 0;
            getContractors();
        });
        $('#WZConReset').on('click', function () {
            conReset();
        });
        $('#WZreset').on('click', function () {
            reset();
        });
        //ORDER ARROWS CONTROL WZ TAB
        $('#WZarrUpId').on('click', function () {
            WZTablePage = 0;
            $('.WZarr').addClass('unused');
            $('.WZarr').removeClass('used');
            $('#WZarrUpId').addClass('used');
            $('#WZarrUpId').removeClass('unused');
            $('#previous').addClass('hidden');
            WZTableOrder = 0;
            getWZDocuments();
        });
        $('#WZarrDownId').on('click', function () {
            WZTablePage = 0;
            $('.WZarr').addClass('unused');
            $('.WZarr').removeClass('used');
            $('#WZarrDownId').addClass('used');
            $('#WZarrDownId').removeClass('unused');
            $('#previous').addClass('hidden');
            WZTableOrder = 1;
            getWZDocuments();
        });
        $('#WZarrUpNo').on('click', function () {
            WZTablePage = 0;
            $('.WZarr').addClass('unused');
            $('.WZarr').removeClass('used');
            $('#WZarrUpNo').addClass('used');
            $('#WZarrUpNo').removeClass('unused');
            $('#previous').addClass('hidden');
            WZTableOrder = 2;
            getWZDocuments();
        });
        $('#WZarrDownNo').on('click', function () {
            WZTablePage = 0;
            $('.WZarr').addClass('unused');
            $('.WZarr').removeClass('used');
            $('#WZarrDownNo').addClass('used');
            $('#WZarrDownNo').removeClass('unused');
            $('#previous').addClass('hidden');
            WZTableOrder = 3;
            getWZDocuments();
        });
        $('#WZarrUpDate').on('click', function () {
            WZTablePage = 0;
            $('.WZarr').addClass('unused');
            $('.WZarr').removeClass('used');
            $('#WZarrUpDate').addClass('used');
            $('#WZarrUpDate').removeClass('unused');
            $('#previous').addClass('hidden');
            WZTableOrder = 4;
            getWZDocuments();
        });
        $('#WZarrDownDate').on('click', function () {
            WZTablePage = 0;
            $('.WZarr').addClass('unused');
            $('.WZarr').removeClass('used');
            $('#WZarrDownDate').addClass('used');
            $('#WZarrDownDate').removeClass('unused');
            $('#previous').addClass('hidden');
            WZTableOrder = 5;
            getWZDocuments();
        });
        $('#WZarrUpAccDate').on('click', function () {
            WZTablePage = 0;
            $('.WZarr').addClass('unused');
            $('.WZarr').removeClass('used');
            $('#WZarrUpAccDate').addClass('used');
            $('#WZarrUpAccDate').removeClass('unused');
            $('#previous').addClass('hidden');
            WZTableOrder = 6;
            getWZDocuments();
        });
        $('#WZarrDownAccDate').on('click', function () {
            WZTablePage = 0;
            $('.WZarr').addClass('unused');
            $('.WZarr').removeClass('used');
            $('#WZarrDownAccDate').addClass('used');
            $('#WZarrDownAccDate').removeClass('unused');
            $('#previous').addClass('hidden');
            WZTableOrder = 7;
            getWZDocuments();
        });
        $('#WZarrUpConId').on('click', function () {
            WZTablePage = 0;
            $('.WZarr').addClass('unused');
            $('.WZarr').removeClass('used');
            $('#WZarrUpConId').addClass('used');
            $('#WZarrUpConId').removeClass('unused');
            $('#previous').addClass('hidden');
            WZTableOrder = 8;
            getWZDocuments();
        });
        $('#WZarrDownConId').on('click', function () {
            WZTablePage = 0;
            $('.WZarr').addClass('unused');
            $('.WZarr').removeClass('used');
            $('#WZarrDownConId').addClass('used');
            $('#WZarrDownConId').removeClass('unused');
            $('#previous').addClass('hidden');
            WZTableOrder = 9;
            getWZDocuments();
        });
        $('#WZarrUpConName').on('click', function () {
            WZTablePage = 0;
            $('.WZarr').addClass('unused');
            $('.WZarr').removeClass('used');
            $('#WZarrUpConName').addClass('used');
            $('#WZarrUpConName').removeClass('unused');
            $('#previous').addClass('hidden');
            WZTableOrder = 10;
            getWZDocuments();
        });
        $('#WZarrDownConName').on('click', function () {
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
        $('#WZConArrUpId').on('click', function () {
            WZTablePage = 0;
            $('.WZConArr').addClass('unused');
            $('.WZConArr').removeClass('used');
            $('#WZConArrUpId').addClass('used');
            $('#WZConArrUpId').removeClass('unused');
            $('#previous').addClass('hidden');
            WZConOrder = 0;
            getContractors();
        });
        $('#WZConArrDownId').on('click', function () {
            WZTablePage = 0;
            $('.WZConArr').addClass('unused');
            $('.WZConArr').removeClass('used');
            $('#WZConArrDownId').addClass('used');
            $('#WZConArrDownId').removeClass('unused');
            $('#previous').addClass('hidden');
            WZConOrder = 1;
            getContractors();
        });
        $('#WZConArrUpConName').on('click', function () {
            WZTablePage = 0;
            $('.WZConArr').addClass('unused');
            $('.WZConArr').removeClass('used');
            $('#WZConArrUpConName').addClass('used');
            $('#WZConArrUpConName').removeClass('unused');
            $('#previous').addClass('hidden');
            WZConOrder = 2;
            getContractors();
        });
        $('#WZConArrDownConName').on('click', function () {
            WZTablePage = 0;
            $('.WZConArr').addClass('unused');
            $('.WZConArr').removeClass('used');
            $('#WZConArrDownConName').addClass('used');
            $('#WZConArrDownConName').removeClass('unused');
            $('#previous').addClass('hidden');
            WZConOrder = 3;
            getContractors();
        });
        $('#WZConArrUpCity').on('click', function () {
            WZTablePage = 0;
            $('.WZConArr').addClass('unused');
            $('.WZConArr').removeClass('used');
            $('#WZConArrUpCity').addClass('used');
            $('#WZConArrUpCity').removeClass('unused');
            $('#previous').addClass('hidden');
            WZConOrder = 4;
            getContractors();
        });
        $('#WZConArrDownCity').on('click', function () {
            WZTablePage = 0;
            $('.WZConArr').addClass('unused');
            $('.WZConArr').removeClass('used');
            $('#WZConArrDownCity').addClass('used');
            $('#WZConArrDownCity').removeClass('unused');
            $('#previous').addClass('hidden');
            WZConOrder = 5;
            getContractors();
        });
        $('confirmNewWZ').on('click', function () {

        });
    });
    var reset = (function () {
        WZTableOrder = 1;
        WZTablePage = 0;
        $('.WZarr').addClass('unused');
        $('.WZarr').removeClass('used');
        $('#WZidBox').val('');
        $('#WZnoBox').val('');
        $('#WZconIdBox').val('');
        $('#WZconNameBox').val('');
        $('#WZprevious').addClass('hidden');
        getWZDocuments();
    });
    var conReset = (function () {
        WZConOrder = 1;
        WZConPage = 0;
        $('.WZConArr').addClass('unused');
        $('.WZConArr').removeClass('used');
        $('#selectContractorId').val('');
        $('#selectContractorName').val('');
        $('#selectContractorCity').val('');
        $('#selectContractorNIP').val('');
        $('#WZConPrevious').addClass('hidden');
        getContractors();
    });
    var getWZCount = (function () {
        var param = {};
        //DOCUMENT ID
        if ($('#WZidBox').val() == '') {
            param['docId'] = 0;
        } else {
            param['docId'] = $('#WZidBox').val();
        }
        //CONTRACTOR ID
        if ($('#WZconIdBox').val() == '') {
            param['conId'] = 0;
        } else {
            param['conId'] = $('#WZconIdBox').val();
        }
        //DOCUMENT NO
        if ($('#WZnoBox').val() == '') {
            param['docNo'] = 0;
        } else {
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
            success: function (data) {
                WZCount = data[0].count;
            }
        });
    });
    var getWZDocuments = (function () {
        var param = {};
        //DOCUMENT ID
        if ($('#WZidBox').val() == '') {
            param['docId'] = 0;
        } else {
            param['docId'] = $('#WZidBox').val();
        }
        //CONTRACTOR ID
        if ($('#WZconIdBox').val() == '') {
            param['conId'] = 0;
        } else {
            param['conId'] = $('#WZconIdBox').val();
        }
        //DOCUMENT NO
        if ($('#WZnoBox').val() == '') {
            param['docNo'] = 0;
        } else {
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
            success: function (data) {
                getWZCount();
                $('#WZTabContent').html(createWZTableContent(data));
                if (WZCount <= 15) {
                    $('#WZnext').addClass('hidden');
                } else {
                    $('#WZnext').removeClass('hidden');
                }
                if (WZCount < (WZTablePage * 15 + 15)) {
                    $('#WZnext').addClass('hidden');
                } else {
                    $('#WZnext').removeClass('hidden');
                }
            }
        });
    });

    var addDocument = (function () {
        var param = {};
        //DOCUMENT ID
        if (selectedContractorID == 0) {
            alert('Nie wybrano kontrahenta');
        } else {
            param['docType'] = 1;
            var dateNow = new Date();
            var stamp = dateNow.getTime();
            param['docDate'] = stamp;
            param['docCon'] = selectedContractorID;
            param['docYear'] = dateNow.getYear() + 1900;
            param['docCreator'] = window.sessionStorage.getItem('id');
            $.ajax({
                type: 'POST',
                async: false,
                data: param,
                dataType: 'json',
                url: 'PHP/addDocument.php',
                success: function () {
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

    var createWZTableContent = (function (data) {
        var ans = '';
        var tmpDate;
        var tmpAccDate;
        $.each(data, function (index, value) {

            tmpDate = new Date(parseInt(value['document_date']));
            tmpDate = dateToFormat(tmpDate);
            if (value['document_accept_date'] != 0) {
                tmpAccDate = new Date(parseInt(value['document_accept_date']));
                tmpAccDate = dateToFormat(tmpAccDate);
            } else {
                tmpAccDate = "nie zatwierdzony";
            }
            ans += "<tr class='WZrow' id=WZID" + value['document_id'] + ">\n\
                        <td class='DocCol1b'>" + value['document_id'] + "</td>\n\
                        <td class='DocCol2b'>" + value['document_number'] + "</td>\n\
                        <td class='DocCol3b'>" + value['document_year'] + "</td>\n\
                        <td class='DocCol4b'>" + value['document_contractor_id'] + "</td>\n\
                        <td class='DocCol5b'>" + value['contractor_name'] + "</td>\n\
                        <td class='DocCol6b'>" + value['document_type_short'] + "</td>\n\
                        <td class='DocCol7b'>" + tmpDate + "</td>\n\
                        <td class='DocCol8b'>" + tmpAccDate + "</td>\n\
                        <td class='DocCol9b'>" + value['user_fname'] + ' ' + value['user_lname'] + "</td>\n\
                    </tr>";
        });
        return ans;
    });
    var createWZConTableContent = (function (data) {
        var ans = '';
        $.each(data, function (index, value) {
            ans += "<tr class='WZConRow' id=ConID" + value['contractor_id'] + ">\n\
                        <td class='WZConCol1c'>" + value['contractor_id'] + "</td>\n\
                        <td class='WZConCol2c'>" + value['contractor_name'] + "</td>\n\
                        <td class='WZConCol3c'>" + value['contractor_nip'] + "</td>\n\
                        <td class='WZConCol4c'>" + value['contractor_postal'] + "</td>\n\
                        <td class='WZConCol5c'>" + value['contractor_city'] + "</td>\n\
                        <td class='WZConCol6c'>" + value['contractor_street'] + "</td>\n\
                        <td class='WZConCol7c'>" + value['contractor_tel'] + "</td>\n\
                        <td class='WZConCol8c'>" + value['contractor_email'] + "</td>\n\
                    </tr>";
        });
        return ans;
    });

    var createWZProductToAddContent = (function (data) {
        ans = '';
        $.each(data, function (index, value) {
            ans += "<tr class='WZProdToAdd' id=ProdToAdd" + value['product_id'] + ">\n\
                        <td class='WZProdChoseCol1c'>" + value['product_id'] + "</td>\n\
                        <td class='WZProdChoseCol2c'>" + value['product_name'] + "</td>\n\
                        <td class='WZProdChoseCol3c'>" + value['contractor_name'] + "</td>\n\
                        <td class='WZProdChoseCol4c'>" + value['product_price']/100 + "</td>\n\
                        <td class='WZProdChoseCol5c'>" + value['product_number']/100 + "</td>\n\
                    </tr>";
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

    var fillProductAddingForm = function (searchDetails) {
        var details = getProductToAddDetails(searchDetails);
        $('#WZProdAddId').html(details[0]['product_id']);
        $('#WZProdAddName').html(details[0]['product_name']);
        $('#WZProdAddProducer').html(details[0]['contractor_name']);
        $('#WZProdAddPrice').html((details[0]['product_price'])/100);
        $('#WZProdAddQty').html(details[0]['product_number']/100);
        productPrice = (details[0]['product_price']/100);
        productVat = (details[0]['vat_value']);
        selectedProductToAdd = details[0]['product_id'];
        selectedFindProduct = details[0]['product_id'];
        if(details[0]['product_divider'] == 0) {
            $('#WZProdFloatingPoint').removeClass('hidden');
            $('#WZProdWithoutComma').addClass('hidden');
        } else {
            $('#WZProdFloatingPoint').addClass('hidden');
            $('#WZProdWithoutComma').removeClass('hidden');
        }
        divider = details[0]['product_divider'];
    };

    var fillProductAddingFormById = function (searchDetails) {
        var details = getProductToAddDetailsById(searchDetails);
        $('#WZProdAddId').html(details[0]['product_id']);
        $('#WZProdAddName').html(details[0]['product_name']);
        $('#WZProdAddProducer').html(details[0]['contractor_name']);
        $('#WZProdAddPrice').html((details[0]['product_price'])/100);
        $('#WZProdAddQty').html(details[0]['product_number']/100);
        productPrice = (details[0]['product_price']/100);
        productVat = (details[0]['vat_value']);
        selectedProductToAdd = details[0]['product_id'];
        if(details[0]['product_divider'] == 0) {
            $('#WZProdFloatingPoint').removeClass('hidden');
            $('#WZProdWithoutComma').addClass('hidden');
        } else {
            $('#WZProdFloatingPoint').addClass('hidden');
            $('#WZProdWithoutComma').removeClass('hidden');
        }
        divider = details[0]['product_divider'];
    };

    var getWZRecords = (function () {
        param = {};
        param['docId'] = selectedWZID;
        $.ajax({
            type: 'POST',
            async: false,
            data: param,
            dataType: 'json',
            url: 'PHP/getDocumentRecords.php',
            success: function (data) {
                $('#WZProdTabContent').html(createWZProductTableContent(data));
            }
        });
    });

    var getDocumentInfo = (function () {
        param = {};
        param['docId'] = selectedWZID;
        $.ajax({
            type: 'POST',
            async: false,
            data: param,
            dataType: 'json',
            url: 'PHP/getDocumentInfo.php',
            success: function (data) {
                setValuesWZInfo(data);
            }
        });
    });

    var addPosToWZ = (function (docId, prodId, qty, discount) {
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

    var setValuesWZInfo = (function (data) {
        var tempDate;
        $.each(data, function (index, value) {
            $('#WZPopupConId').html('ID: ' + value['contractor_id']);
            $('#WZPopupConName').html(value['contractor_name']);
            $('#WZPopupConCity').html('' + value['contractor_postal_code'] + ' ' + value['contractor_city']);
            $('#WZPopupConStreet').html('ul. ' + value['contractor_street']);
            $('#WZPopupConPhone').html('tel. ' + value['contractor_phone']);
            $('#WZPopupConEmail').html('@: ' + value['contractor_email']);
            tempDate = parseInt(value['document_accept_date']);
            if (value['document_accept_date'] != 0) {
                tempDate = new Date(tempDate);
                tempDate = dateToFormat(tempDate);
            } else {
                tempDate = "00-00-00 00:00:00";
            }
            $('#dateField').html(tempDate);
        });
    });

    var createWZProductTableContent = (function (data) {
        var ans = '';
        selectedWZRecord = 0;
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
        $('#WZNettoField').html(0);
        $('#WZBruttoField').html(0);
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
        $.each(data, function (index, value) {

            price = parseInt(value['document_records_price']);
            number = value['document_records_product_number'] / 100;
            discount = value['document_records_discount'] / 100;
            vat = value['vat_value'] / 100;
            priceBrutto = price + (price * vat);
            valueNetto = price * number;
            valueBrutto = priceBrutto * number;
            valueBruttoWithDiscount = valueBrutto - (valueBrutto * (discount/100));
            valueNettoWithDiscount = valueNetto - (valueNetto * (discount/100));
            vatValue = valueBruttoWithDiscount - valueNettoWithDiscount;
            totalNetto += valueNettoWithDiscount;
            totalBrutto += valueBruttoWithDiscount;
            if (vat == 0.00) {
                sum0 += valueBruttoWithDiscount;
                sumV0 += vatValue;
            } else if (vat == 0.05) {
                sum5 += valueBruttoWithDiscount;
                sumV5 += vatValue;
            } else if (vat == 0.08) {
                sum8 += valueBruttoWithDiscount;
                sumV8 += vatValue;
            } else if (vat == 0.23) {
                sum23 += valueBruttoWithDiscount;
                sumV23 += vatValue;
            }
            sumTotal = sum0 + sum5 + sum8 + sum23;
            sumVTotal = sumV0 + sumV5 + sumV8 + sumV23;
            $('#WZBruttoV0').html(Math.round((sum0 / 100) * 100) / 100);
            $('#WZV0').html(Math.round((sumV0 / 100) * 100) / 100);
            $('#WZBruttoV5').html(Math.round((sum5 / 100) * 100) / 100);
            $('#WZV5').html(Math.round((sumV5 / 100) * 100) / 100);
            $('#WZBruttoV8').html(Math.round((sum8 / 100) * 100) / 100);
            $('#WZV8').html(Math.round((sumV8 / 100) * 100) / 100);
            $('#WZBruttoV23').html(Math.round((sum23 / 100) * 100) / 100);
            $('#WZV23').html(Math.round((sumV23 / 100) * 100) / 100);
            $('#WZBruttoTotal').html(Math.round((sumTotal / 100) * 100) / 100);
            $('#WZVTotal').html(Math.round((sumVTotal / 100) * 100) / 100);
            $('#WZNettoField').html(Math.round((totalNetto / 100) * 100) / 100);
            $('#WZBruttoField').html(Math.round((totalBrutto / 100) * 100) / 100);

            if (isDocumentAccepted == 0) {
                ans += "<tr class='WZProdRow' id=WZRecID" + value['document_records_id'] + ">\n\
                            <td class='WZProdCol1c'>" + value['document_records_product_id'] + "</td>\n\
                            <td class='WZProdCol2c'>" + value['product_name'] + "</td>\n\
                            <td class='WZProdCol3c'>" + number + "</td>\n\
                            <td class='WZProdCol4c'>" + value['product_unit_short'] + "</td>\n\
                            <td class='WZProdCol5c'>" + (vat * 100) + "</td>\n\
                            <td class='WZProdCol6c'>" + (discount) + "</td>\n\
                            <td class='WZProdCol7c'>" + (Math.round((price / 100) * 100) / 100) + "</td>\n\
                            <td class='WZProdCol8c'>" + (Math.round((priceBrutto / 100) * 100) / 100) + "</td>\n\
                            <td class='WZProdCol9c'>" + (Math.round((valueNetto / 100) * 100) / 100) + "</td>\n\
                            <td class='WZProdCol10c'>" + (Math.round((valueBrutto / 100) * 100) / 100) + "</td>\n\
                            <td class='WZProdCol11c'>" + (Math.round((valueBruttoWithDiscount / 100) * 100) / 100) + "</td>\n\
                        </tr>";
            } else {
                ans += "<tr class='WZProdRow'>\n\
                            <td class='WZProdCol1c'>" + value['document_records_product_id'] + "</td>\n\
                            <td class='WZProdCol2c'>" + value['product_name'] + "</td>\n\
                            <td class='WZProdCol3c'>" + number + "</td>\n\
                            <td class='WZProdCol4c'>" + value['product_unit_short'] + "</td>\n\
                            <td class='WZProdCol5c'>" + (vat * 100) + "</td>\n\
                            <td class='WZProdCol6c'>" + (discount) + "</td>\n\
                            <td class='WZProdCol7c'>" + (Math.round((price / 100) * 100) / 100) + "</td>\n\
                            <td class='WZProdCol8c'>" + (Math.round((priceBrutto / 100) * 100) / 100) + "</td>\n\
                            <td class='WZProdCol9c'>" + (Math.round((valueNetto / 100) * 100) / 100) + "</td>\n\
                            <td class='WZProdCol10c'>" + (Math.round((valueBrutto / 100) * 100) / 100) + "</td>\n\
                            <td class='WZProdCol11c'>" + (Math.round((valueBruttoWithDiscount / 100) * 100) / 100) + "</td>\n\
                        </tr>";
            }
        });
        return ans;
    });

    var getContractorsCount = (function () {
        param = {};
        //Contractor ID
        if ($('#selectContractorId').val() == '') {
            param['id'] = 0;
        } else {
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
            success: function (data) {
                WZConCount = data[0].count;
            }
        });
    });

    var getContractors = (function () {
        param = {};
        selectedContractorID = 0;
        //Contractor ID
        if ($('#selectContractorId').val() == '') {
            param['id'] = 0;
        } else {
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
            success: function (data) {
                getContractorsCount();
                $('#WZConTabContent').html(createWZConTableContent(data));
                if (WZConCount <= 5) {
                    $('#WZConNext').addClass('hidden');
                } else {
                    $('#WZConNext').removeClass('hidden');
                }
                if (WZConCount < (WZConPage * 5 + 5)) {
                    $('#WZConNext').addClass('hidden');
                } else {
                    $('#WZConNext').removeClass('hidden');
                }
            }
        });
    });
    $(document).ready(function () {
        init();
    });
}();
 