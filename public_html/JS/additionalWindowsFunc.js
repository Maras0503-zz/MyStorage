pageFunctions.additionalWindowsFunc = function () {
    var data;
    var contractorData = {};
    var contractorsListOrder = 1;
    var contractorsListCount = 0;
    var contractorsListPage = 0;
    var contractorsListSelectedID = 0;
    var init = (function () {
        listeners();
    });
    var listeners = (function(){
        $('#contractorsList').on('click', function(){
            $('#contractorsListWindow').removeClass('hidden');
            getContractors();
        });
        $(document).on('click', function (e) {
            var id = $(e.target).parent().attr('id');
            if (id != undefined) {
                if (id.substring(0, 9) == 'ConListID') {
                    $('.ConListRow').removeClass('rowSelected');
                    $('#ConListID' + id.substring(9, id.lenght)).addClass('rowSelected');
                    contractorsListSelectedID = id.substring(9, id.lenght);
                    console.log(contractorsListSelectedID);
                }
            }
        });
        $('#closeContractorsListWindow').on('click', function(){
            $('#contractorsListId').val('');
            $('#contractorsListName').val('');
            $('#contractorsListCity').val('');
            $('#contractorsListNIP').val('');
            $('#contractorsListWindow').addClass('hidden');
        });

        $('#acceptEditContractor').on('click', function(){
            if(contractorData.length != 0){
                var txt = '';
                if (window.localStorage.getItem('lang') == 'pl') {
                    txt = 'Czy zapisać zmiany?';
                } else if (window.localStorage.getItem('lang') == 'en') {
                    txt = 'Save changes?';
                } else {
                    txt = 'Czy zapisać zmiany?';
                }
                myConfirm(txt, 'editContractor');
            } else {
                var txt = '';
                if (window.localStorage.getItem('lang') == 'pl') {
                    txt = 'Znajdź i zedytuj kontrahenta przed zapisem!';
                } else if (window.localStorage.getItem('lang') == 'en') {
                    txt = 'Find and edit contractor before save!';
                } else {
                    txt = 'Znajdź i zedytuj kontrahenta przed zapisem!';
                }
                myAlert(txt,'doNothing');
            }
        });

        //ORDER AR  ROWS CONTROL CONTRACTORS TAB
        $('#ConListArrUpId').on('click', function () {
            contractorsListPage = 0;
            $('.ConListArr').addClass('unused');
            $('.ConListArr').removeClass('used');
            $('#ConListArrUpId').addClass('used');
            $('#ConListArrUpId').removeClass('unused');
            $('#previous').addClass('hidden');
            contractorsListOrder = 0;
            getContractors();
        });
        $('#ConListArrDownId').on('click', function () {
            contractorsListPage = 0;
            $('.ConListArr').addClass('unused');
            $('.ConListArr').removeClass('used');
            $('#ConListArrDownId').addClass('used');
            $('#ConListArrDownId').removeClass('unused');
            $('#previous').addClass('hidden');
            contractorsListOrder = 1;
            getContractors();
        });
        $('#ConListArrUpConName').on('click', function () {
            contractorsListPage = 0;
            $('.ConListArr').addClass('unused');
            $('.ConListArr').removeClass('used');
            $('#ConListArrUpConName').addClass('used');
            $('#ConListArrUpConName').removeClass('unused');
            $('#previous').addClass('hidden');
            contractorsListOrder = 2;
            getContractors();
        });
        $('#ConListArrDownConName').on('click', function () {
            contractorsListPage = 0;
            $('.ConListArr').addClass('unused');
            $('.ConListArr').removeClass('used');
            $('#ConListArrDownConName').addClass('used');
            $('#ConListArrDownConName').removeClass('unused');
            $('#previous').addClass('hidden');
            contractorsListOrder = 3;
            getContractors();
        });
        $('#ConListArrUpCity').on('click', function () {
            contractorsListPage = 0;
            $('.ConListArr').addClass('unused');
            $('.ConListArr').removeClass('used');
            $('#ConListArrUpCity').addClass('used');
            $('#ConListArrUpCity').removeClass('unused');
            $('#previous').addClass('hidden');
            contractorsListOrder = 4;
            getContractors();
        });
        $('#ConListArrDownCity').on('click', function () {
            WZTablePage = 0;
            $('.ConListArr').addClass('unused');
            $('.ConListArr').removeClass('used');
            $('#ConListArrDownCity').addClass('used');
            $('#ConListArrDownCity').removeClass('unused');
            $('#previous').addClass('hidden');
            contractorsListOrder = 5;
            getContractors();
        }); 

        $('#acceptAddContractor').on('click', function(){
            if($('#newContractorNameBox').val().length != 0 || $('#newContractorStreetBox').val().length != 0 || $('#newContractorPostalCodeBox').val().length != 0 || $('#newContractorCityBox').val().length != 0 || $('#newContractorNipBox').val().length != 0 || $('#newContractorPhoneBox').val().length != 0 || $('#newContractorEmailBox').val().length != 0){
                var isExists = checkContractorNameAndNip($('#newContractorNameBox').val(),$('#newContractorNipBox').val()); 
                if(isExists == 3){
                    addContractor($('#newContractorNameBox').val(), $('#newContractorStreetBox').val(), $('#newContractorPostalCodeBox').val(), $('#newContractorCityBox').val(), $('#newContractorNipBox').val(), $('#newContractorPhoneBox').val(), $('#newContractorEmailBox').val(), $('#newContractorIsProviderSelect').val() );
                    $('#addContractor').addClass('hidden');
                } else {
                    if(isExists == 2){
                        var txt = '';
                        if (window.localStorage.getItem('lang') == 'pl') {
                            txt = 'NIP jest zajęty, czy napewno chcesz dodać kontrahenta?';
                        } else if (window.localStorage.getItem('lang') == 'en') {
                            txt = 'UTR is occuped, are you sure that you want add contractor?';
                        } else {
                            txt = 'NIP jest zajęty, czy napewno chcesz dodać kontrahenta?';
                        }
                        myConfirm(txt, 'addContractor');
                    } else if(isExists == 1){
                        var txt = '';
                        if (window.localStorage.getItem('lang') == 'pl') {
                            txt = 'Nazwa jest zajęta, czy napewno chcesz dodać kontrahenta?';
                        } else if (window.localStorage.getItem('lang') == 'en') {
                            txt = 'Name is occuped, are you sure that you want add contractor?';
                        } else {
                            txt = 'Nazwa jest zajęta, czy napewno chcesz dodać kontrahenta?';
                        }
                        myConfirm(txt, 'addContractor');
                    } else if(isExists == 0){
                        var txt = '';
                        if (window.localStorage.getItem('lang') == 'pl') {
                            txt = 'Nazwa i NIP są zajęte, czy napewno chcesz dodać kontrahenta?';
                        } else if (window.localStorage.getItem('lang') == 'en') {
                            txt = 'UTR and Name is occuped, are you sure that you want add contractor?';
                        } else {
                            txt = 'Nazwa i NIP są zajęte, czy napewno chcesz dodać kontrahenta?';
                        }
                        myConfirm(txt, 'addContractor');
                    }
                }
            } else {
                var txt = '';
                if (window.localStorage.getItem('lang') == 'pl') {
                    txt = 'Nie uzupełnione pola!';
                } else if (window.localStorage.getItem('lang') == 'en') {
                    txt = 'Fields are not filled!';
                } else {
                    txt = 'Nie uzupełnione pola!';
                }
                myAlert(txt,'doNothing');
            }
        });
        

        $('#closeAddProductWindow').on('click', function(){
            $('#addProduct').addClass('hidden');
        });
        $('#addProductOpen').on('click', function(){
            $('#WZPopup').addClass('hidden');
            $('#WZContainer').removeClass('blur');
            $('#PZPopup').addClass('hidden');
            $('#PZContainer').removeClass('blur');
            $('#FVPopup').addClass('hidden');
            $('#FVContainer').removeClass('blur');
            $('.popup').addClass('hidden');
            $('.tab').addClass('hidden');
            $('#newProductNameBox').val('');
            $('#newProductPriceBox').val('');
            $('#newProductCodeBox').val('');
            $('#bs-example-navbar-collapse-1').removeClass('in');
            $('#addProduct').removeClass('hidden');
            $('#newProductGroupSelect').html(createProductToAddGroupSelect(getGroups()));
            $('#newProductVatSelect').html(createProductToAddVatSelect(getVats()));
            $('#newProductUnitSelect').html(createProductToAddUnitSelect(getUnits()));
            $('#newProductProducersSelect').html(createProductToAddProducersSelect(getProducers()));
        });

        $('#contractorsListNewCon').on('click', function(){
            $('#WZPopup').addClass('hidden');
            $('#WZContainer').removeClass('blur');
            $('#PZPopup').addClass('hidden');
            $('#PZContainer').removeClass('blur');
            $('#FVPopup').addClass('hidden');
            $('#FVContainer').removeClass('blur');
            $('#newContractorNameBox').val('');
            $('#newContractorStreetBox').val('');
            $('#newContractorStreetNoBox').val('');
            $('#newContractorPostalCodeBox').val('');
            $('#newContractorCityBox').val('');
            $('#newContractorNipBox').val('');
            $('#newContractorPhoneBox').val('');
            $('#newContractorEmailBox').val('');
            $('#bs-example-navbar-collapse-1').removeClass('in');
            $('#addContractor').removeClass('hidden');
        });

        $('#contractorsListEditCon').on('click', function(){
            Object.keys(contractorData).length = 0
            $('#WZPopup').addClass('hidden');
            $('#WZContainer').removeClass('blur');
            $('#PZPopup').addClass('hidden');
            $('#PZContainer').removeClass('blur');
            $('#FVPopup').addClass('hidden');
            $('#FVContainer').removeClass('blur');
            $('#editContractorNameBox').val('');
            $('#editContractorStreetBox').val('');
            $('#editContractorStreetNoBox').val('');
            $('#editContractorPostalCodeBox').val('');
            $('#editContractorCityBox').val('');
            $('#editContractorNipBox').val('');
            $('#editContractorPhoneBox').val('');
            $('#editContractorEmailBox').val('');
            $('#searchContractor').val('');
            $('#searchContractor').attr('disabled', false);
            $('#editContractorNameBox').prop('disabled', true);
            $('#editContractorStreetBox').prop('disabled', true);
            $('#editContractorPostalCodeBox').prop('disabled', true);
            $('#editContractorCityBox').prop('disabled', true);
            $('#editContractorNipBox').prop('disabled', true);
            $('#editContractorPhoneBox').prop('disabled', true);
            $('#editContractorEmailBox').prop('disabled', true);
            $('#editContractorIsProviderSelect').prop('disabled', true);
            $('#bs-example-navbar-collapse-1').removeClass('in');
            $('#editContractor').removeClass('hidden');
            Object.keys(contractorData).length = 0
            contractorData = getContractorDetails(contractorsListSelectedID);
            $('#editContractorNameBox').val(contractorData[0].contractor_name);
            $('#editContractorStreetBox').val(contractorData[0].contractor_street);
            $('#editContractorPostalCodeBox').val(contractorData[0].contractor_postal_code);
            $('#editContractorCityBox').val(contractorData[0].contractor_city);
            $('#editContractorNipBox').val(contractorData[0].contractor_nip);
            $('#editContractorPhoneBox').val(contractorData[0].contractor_phone);
            $('#editContractorEmailBox').val(contractorData[0].contractor_email);
            $('#editContractorIsProviderSelect').val(contractorData[0].contractor_provider);
            $('#editContractorNameBox').prop('disabled', false);
            $('#editContractorStreetBox').prop('disabled', false);
            $('#editContractorStreetNoBox').prop('disabled', false);
            $('#editContractorPostalCodeBox').prop('disabled', false);
            $('#editContractorCityBox').prop('disabled', false);
            $('#editContractorNipBox').prop('disabled', false);
            $('#editContractorPhoneBox').prop('disabled', false);
            $('#editContractorEmailBox').prop('disabled', false);
            $('#acceptEditContractor').attr('disabled', false);
            $('#searchContractor').prop('disabled', true);
            $('#editContractorIsProviderSelect').prop('disabled', false);
        });

        $('#closeEditProductWindow').on('click', function(){
            $('#editProduct').addClass('hidden');
        });
        $('#editProductOpen').on('click', function(){
            $('#WZPopup').addClass('hidden');
            $('#WZContainer').removeClass('blur');
            $('#PZPopup').addClass('hidden');
            $('#PZContainer').removeClass('blur');
            $('#FVPopup').addClass('hidden');
            $('#FVContainer').removeClass('blur');
            $('.popup').addClass('hidden');
            $('.tab').addClass('hidden');
            $('#bs-example-navbar-collapse-1').removeClass('in');
            //disable all inputs until product found by id
            $("#searchProductToEditById").prop('disabled', false);
            $("#searchProductId").prop('disabled', false);
            $("#editProductNameBox").prop('disabled', true);
            $("#editProductPriceBox").prop('disabled', true);
            $("#editProductCodeBox").prop('disabled', true);
            $("#editProductGroupSelect").prop('disabled', true);
            $("#editProductVatSelect").prop('disabled', true);
            $("#editProductUnitSelect").prop('disabled', true);
            $('#acceptEditContractor').attr('disabled', true);
            $("#editProductProducersSelect").prop('disabled', true);
            $('#editProductNameBox').val('');
            $('#editProductPriceBox').val('');
            $('#editProductCodeBox').val('');
            $('#searchProductId').val('');
            $('#editProduct').removeClass('hidden');
            $('#editProductGroupSelect').html(createProductToAddGroupSelect(getGroups()));
            $('#editProductVatSelect').html(createProductToAddVatSelect(getVats()));
            $('#editProductUnitSelect').html(createProductToAddUnitSelect(getUnits()));
            $('#editProductProducersSelect').html(createProductToAddProducersSelect(getProducers()));
        });

        $('#searchContractorToEdit').on('click', function(){
            Object.keys(contractorData).length = 0
            contractorData = getContractorDetails($('#searchContractor').val());
            if(contractorData.length != 0){
                $('#editContractorNameBox').val(contractorData[0].contractor_name);
                $('#editContractorStreetBox').val(contractorData[0].contractor_street);
                $('#editContractorPostalCodeBox').val(contractorData[0].contractor_postal_code);
                $('#editContractorCityBox').val(contractorData[0].contractor_city);
                $('#editContractorNipBox').val(contractorData[0].contractor_nip);
                $('#editContractorPhoneBox').val(contractorData[0].contractor_phone);
                $('#editContractorEmailBox').val(contractorData[0].contractor_email);
                $('#editContractorIsProviderSelect').val(contractorData[0].contractor_provider);
                $('#editContractorNameBox').prop('disabled', false);
                $('#editContractorStreetBox').prop('disabled', false);
                $('#editContractorStreetNoBox').prop('disabled', false);
                $('#editContractorPostalCodeBox').prop('disabled', false);
                $('#editContractorCityBox').prop('disabled', false);
                $('#editContractorNipBox').prop('disabled', false);
                $('#editContractorPhoneBox').prop('disabled', false);
                $('#editContractorEmailBox').prop('disabled', false);
                $('#acceptEditContractor').attr('disabled', false);
                $('#searchContractor').prop('disabled', true);
                $('#editContractorIsProviderSelect').prop('disabled', false);
            } else {
                var txt = '';
                if (window.localStorage.getItem('lang') == 'pl') {
                    txt = 'Nie znaleziono kontrahenta!';
                } else if (window.localStorage.getItem('lang') == 'en') {
                    txt = 'Contractor is not found!';
                } else {
                    txt = 'Nie zanaleziono kontrahenta!';
                }
                myAlert(txt,'doNothing');
            }
        });

        $('#searchContractorToEditReset').on('click', function(){
            $('#editContractorNameBox').val('');
            $('#editContractorStreetBox').val('');
            $('#editContractorPostalCodeBox').val('');
            $('#editContractorCityBox').val('');
            $('#editContractorNipBox').val('');
            $('#editContractorPhoneBox').val('');
            $('#editContractorEmailBox').val('');
            $('#searchContractor').val('');
            $('#editContractorNameBox').prop('disabled', true);
            $('#editContractorStreetBox').prop('disabled', true);
            $('#editContractorStreetNoBox').prop('disabled', true);
            $('#editContractorPostalCodeBox').prop('disabled', true);
            $('#editContractorCityBox').prop('disabled', true);
            $('#editContractorNipBox').prop('disabled', true);
            $('#editContractorPhoneBox').prop('disabled', true);
            $('#editContractorEmailBox').prop('disabled', true);
            $('#searchContractor').prop('disabled', false);
            $('#editContractorIsProviderSelect').prop('disabled', true);
            Object.keys(contractorData).length = 0
        });

        $('#contractorEdit').on('click', function(){
            Object.keys(contractorData).length = 0
            $('#WZPopup').addClass('hidden');
            $('#WZContainer').removeClass('blur');
            $('#PZPopup').addClass('hidden');
            $('#PZContainer').removeClass('blur');
            $('#FVPopup').addClass('hidden');
            $('#FVContainer').removeClass('blur');
            $('.popup').addClass('hidden');
            $('.tab').addClass('hidden');
            $('#editContractorNameBox').val('');
            $('#editContractorStreetBox').val('');
            $('#editContractorStreetNoBox').val('');
            $('#editContractorPostalCodeBox').val('');
            $('#editContractorCityBox').val('');
            $('#editContractorNipBox').val('');
            $('#editContractorPhoneBox').val('');
            $('#editContractorEmailBox').val('');
            $('#searchContractor').val('');
            $('#searchContractor').attr('disabled', false);
            $('#editContractorNameBox').prop('disabled', true);
            $('#editContractorStreetBox').prop('disabled', true);
            $('#editContractorPostalCodeBox').prop('disabled', true);
            $('#editContractorCityBox').prop('disabled', true);
            $('#editContractorNipBox').prop('disabled', true);
            $('#editContractorPhoneBox').prop('disabled', true);
            $('#editContractorEmailBox').prop('disabled', true);
            $('#editContractorIsProviderSelect').prop('disabled', true);
            $('#bs-example-navbar-collapse-1').removeClass('in');
            $('#editContractor').removeClass('hidden');
        });
        $('#contractorAdd').on('click', function(){
            $('#WZPopup').addClass('hidden');
            $('#WZContainer').removeClass('blur');
            $('#PZPopup').addClass('hidden');
            $('#PZContainer').removeClass('blur');
            $('#FVPopup').addClass('hidden');
            $('#FVContainer').removeClass('blur');
            $('.popup').addClass('hidden');
            $('.tab').addClass('hidden');
            $('#newContractorNameBox').val('');
            $('#newContractorStreetBox').val('');
            $('#newContractorStreetNoBox').val('');
            $('#newContractorPostalCodeBox').val('');
            $('#newContractorCityBox').val('');
            $('#newContractorNipBox').val('');
            $('#newContractorPhoneBox').val('');
            $('#newContractorEmailBox').val('');
            $('#bs-example-navbar-collapse-1').removeClass('in');
            $('#addContractor').removeClass('hidden');
        });
        $('#contractorList').on('click', function(){

        });
        $('#closeAddContractorWindow').on('click', function(){
            $('#addContractor').addClass('hidden');
        });
        $('#closeEditContractorWindow').on('click', function(){
            $('#editContractor').addClass('hidden');
        });
        $('#searchProductToEditById').on('click', function(){
            var vat = 0;
            var price = 0;
            data = getProductDetailsToEdit($('#searchProductId').val());
            if(data[0] != undefined){
                $("#searchProductToEditById").prop('disabled', true);
                $("#searchProductId").prop('disabled', true);
                $("#editProductNameBox").prop('disabled', false);
                $("#editProductPriceBox").prop('disabled', false);
                $("#editProductCodeBox").prop('disabled', false);
                $("#editProductGroupSelect").prop('disabled', false);
                $("#editProductVatSelect").prop('disabled', false);
                $("#editProductUnitSelect").prop('disabled', false);
                $("#editProductProducersSelect").prop('disabled', false);
                $("#editProductNameBox").val(data[0].product_name);
                $("#editProductCodeBox").val(data[0].product_ean);
                $("#editProductGroupSelect").val(data[0].product_group);
                $("#editProductVatSelect").val(data[0].product_vat);
                vat=parseFloat($("#editProductVatSelect option:selected").text())/100;
                price = data[0].product_price/100+((data[0].product_price/100)*vat);
                price = Math.round(price*100)/100;
                $("#editProductPriceBox").val(price);
                $("#editProductUnitSelect").val(data[0].product_unit);
                $("#editProductProducersSelect").val(data[0].product_producer);
            } else {
                var txt = '';
                if (window.localStorage.getItem('lang') == 'pl') {
                    txt = 'Nie znaleziono produktu!';
                } else if (window.localStorage.getItem('lang') == 'en') {
                    txt = 'Product not found!';
                } else {
                    txt = 'Nie znaleziono produktu!';
                }
                myAlert(txt,'doNothing');
            }
        });

        $('#acceptEditProduct').on('click', function(){
            var vat = 0;
            var price = 0;
            if(data != undefined){
                vat = parseFloat($("#editProductVatSelect option:selected").text())/100;
                price = (Math.round((($('#editProductPriceBox').val() / (1+vat))*100))/100)*100;
                editProduct($("#searchProductId").val(), $("#editProductNameBox").val(), $("#editProductProducersSelect").val(), $("#editProductGroupSelect").val(), $("#editProductVatSelect").val(), $("#editProductUnitSelect").val(), price, $("#editProductCodeBox").val());
            } else {
                var txt = '';
                if (window.localStorage.getItem('lang') == 'pl') {
                    txt = 'Nie znaleziono produktu!';
                } else if (window.localStorage.getItem('lang') == 'en') {
                    txt = 'Product not found!';
                } else {
                    txt = 'Nie znaleziono produktu!';
                }
                myAlert(txt,'doNothing');
            }
            $('#editProduct').addClass('hidden');
        });

        $('#searchProductToEditReset').on('click', function(){
            $("#searchProductToEditById").prop('disabled', false);
            $("#searchProductId").prop('disabled', false);
            $("#editProductNameBox").prop('disabled', true);
            $("#editProductPriceBox").prop('disabled', true);
            $("#editProductCodeBox").prop('disabled', true);
            $("#editProductGroupSelect").prop('disabled', true);
            $("#editProductVatSelect").prop('disabled', true);
            $("#editProductUnitSelect").prop('disabled', true);
            $("#editProductProducersSelect").prop('disabled', true);
            $('#editProductNameBox').val('');
            $('#editProductPriceBox').val('');
            $('#editProductCodeBox').val('');
            $('#searchProductId').val('');
            $('#editProduct').removeClass('hidden');
            $('#editProductGroupSelect').html(createProductToAddGroupSelect(getGroups()));
            $('#editProductVatSelect').html(createProductToAddVatSelect(getVats()));
            $('#editProductUnitSelect').html(createProductToAddUnitSelect(getUnits()));
            $('#editProductProducersSelect').html(createProductToAddProducersSelect(getProducers()));
        });

        $('#newProductProducersSelect').on('click', function(){
            $('#newProductProducersSelect').removeClass('wrongValue');
        });
        $('#newProductGroupSelect').on('click', function(){
            $('#newProductGroupSelect').removeClass('wrongValue');
        });
        $('#newProductVatSelect').on('click', function(){
            $('#newProductVatSelect').removeClass('wrongValue');
        });
        $('#newProductUnitSelect').on('click', function(){
            $('#newProductUnitSelect').removeClass('wrongValue');
        });

        $('#oldPassBox').on('click', function(){
            $('#oldPassBox').removeClass('wrongValue');
        });
        $('#newPassBox').on('click', function(){
            $('#newPassBox').removeClass('wrongValue');
        });
        $('#repPassBox').on('click', function(){
            $('#repPassBox').removeClass('wrongValue');
        });

        $('#priceHistory').on('click',function(){
            $('#priceHistoryWindow').removeClass('hidden');
            $('#priceHistoryTableContent').html(createPriceHistoryTableContent(getPriceHistory()));
        });
        $('#priceHistoryClose').on('click',function(){ 
            $('#priceHistoryWindow').addClass('hidden');            
        });
        $('#acceptAddProduct').on('click', function(){
            var vat = 0;
            var price = 0;
            if($('#newProductProducersSelect').val() != 0 && $('#newProductGroupSelect').val() != 0 && $('#newProductVatSelect').val() != 0 && $('#newProductUnitSelect').val() != 0){
                if(!isNaN($('#newProductPriceBox').val()) && $('#newProductPriceBox').val() != ''){
                    if($('#newProductPriceBox').val() >= 0){
                        if(nameExists($('#newProductNameBox').val())==1){
                            vat = parseFloat($("#newProductVatSelect option:selected").text())/100;
                            price = (Math.round((($('#newProductPriceBox').val() / (1+vat))*100))/100)*100;
                            createNewProduct($('#newProductNameBox').val().toUpperCase(), $('#newProductProducersSelect').val(), $('#newProductGroupSelect').val(), $('#newProductVatSelect').val(), $('#newProductUnitSelect').val(), price, $('#newProductCodeBox').val());
                            $('#newProductNameBox').val('');
                            $('#newProductProducersSelect').val(0);
                            $('#newProductGroupSelect').val(0);
                            $('#newProductVatSelect').val(0);
                            $('#newProductUnitSelect').val(0);
                            $('#newProductPriceBox').val('');
                            $('#newProductCodeBox').val('');

                            $('#WZPopup').addClass('hidden');
                            $('#WZContainer').removeClass('blur');
                            $('#PZPopup').addClass('hidden');
                            $('#PZContainer').removeClass('blur');
                            $('#FVPopup').addClass('hidden');
                            $('#FVContainer').removeClass('blur');
                            $('.popup').addClass('hidden');
                            $('.tab').addClass('hidden');
                        } else {
                            var txt = '';
                            if (window.localStorage.getItem('lang') == 'pl') {
                                txt = 'Podana nazwa jest zajęta!';
                            } else if (window.localStorage.getItem('lang') == 'en') {
                                txt = 'Given name is alredy used!';
                            } else {
                                txt = 'Podana nazwa jest zajęta!';
                            }
                            myAlert(txt,'doNothing');
                        }
                    } else {
                        var txt = '';
                        if (window.localStorage.getItem('lang') == 'pl') {
                            txt = 'Cena musi być większa od 0!';
                        } else if (window.localStorage.getItem('lang') == 'en') {
                            txt = 'Price must be greater than 0!';
                        } else {
                            txt = 'Cena musi być większa od 0!';
                        }
                        myAlert(txt,'doNothing');
                    }
                } else {
                    var txt = '';
                    if (window.localStorage.getItem('lang') == 'pl') {
                        txt = 'Cena jest niepoprawna!';
                    } else if (window.localStorage.getItem('lang') == 'en') {
                        txt = 'Price is incorrect!';
                    } else {
                        txt = 'Cena jest niepoprawna!';
                    }
                    myAlert(txt,'doNothing');
                }
            } else {
                var txt = '';
                if (window.localStorage.getItem('lang') == 'pl') {
                    txt = 'Wszystkie wartości muszą być wybrane!';
                } else if (window.localStorage.getItem('lang') == 'en') {
                    txt = 'All values must be selected!';
                } else {
                    txt = 'Wszystkie wartości muszą być wybrane!';
                }
                myAlert(txt,'doNothing');
                if($('#newProductProducersSelect').val() == 0){
                $('#newProductProducersSelect').addClass('wrongValue');
                }
                if($('#newProductGroupSelect').val() == 0){
                    $('#newProductGroupSelect').addClass('wrongValue');
                }
                if($('#newProductVatSelect').val() == 0){
                    $('#newProductVatSelect').addClass('wrongValue');
                }
                if($('#newProductUnitSelect').val() == 0){
                    $('#newProductUnitSelect').addClass('wrongValue');
                }
            }
        });
        $('#changePasswordOpen').on('click', function(){
            $('#WZPopup').addClass('hidden');
            $('#WZContainer').removeClass('blur');
            $('#PZPopup').addClass('hidden');
            $('#PZContainer').removeClass('blur');
            $('#FVPopup').addClass('hidden');
            $('#FVContainer').removeClass('blur');
            $('.popup').addClass('hidden');
            $('.tab').addClass('hidden');
            $('#oldPassBox').val('');
            $('#newPassBox').val('');
            $('#repPassBox').val('');
            $('#bs-example-navbar-collapse-1').removeClass('in');
            $('#changePasswordPopup').removeClass('hidden');
        });
        $('#closeChangePasswordPopup').on('click', function(){
            $('#changePasswordPopup').addClass('hidden');
        });
        $('#acceptChangePassword').on('click', function(){
            if($('#oldPassBox').val() != $('#newPassBox').val()){
                if (checkOldPass(window.localStorage.getItem('id'),$('#oldPassBox').val()) == 1){
                    if ($('#newPassBox').val().length >= 8){
                        if ($('#newPassBox').val() == $('#repPassBox').val()) {
                            changePassword(window.localStorage.getItem('id'),$('#newPassBox').val());
                            $('#changePasswordPopup').addClass('hidden');
                        } else {
                            var txt = '';
                            if (window.localStorage.getItem('lang') == 'pl') {
                                txt = 'Wpisane hasła różnią się!';
                            } else if (window.localStorage.getItem('lang') == 'en') {
                                txt = 'Inserted passwords are different!';
                            } else {
                                txt = 'Wpisane hasła różnią się!';
                            }
                            $('#newPassBox').addClass('wrongValue');
                            $('#repPassBox').addClass('wrongValue');
                            myAlert(txt,'doNothing');
                        }
                    } else {
                        var txt = '';
                        if (window.localStorage.getItem('lang') == 'pl') {
                            txt = 'Nowe hasło jest zbyt krótkie! (min 8 znaków)';
                        } else if (window.localStorage.getItem('lang') == 'en') {
                            txt = 'New password is too short! (min 8 characters)';
                        } else {
                            txt = 'Nowe hasło jest zbyt krótkie! (min 8 znaków)';
                        }
                        $('#newPassBox').addClass('wrongValue');
                        myAlert(txt,'doNothing');
                    }
                } else {
                    var txt = '';
                    if (window.localStorage.getItem('lang') == 'pl') {
                        txt = 'Stare hasło jest niepoprawne!';
                    } else if (window.localStorage.getItem('lang') == 'en') {
                        txt = 'Old password is incorrect!';
                    } else {
                        txt = 'Stare hasło jest niepoprawne!';
                    }
                    $('#oldPassBox').addClass('wrongValue');
                    myAlert(txt,'doNothing');
                }
            } else {
                var txt = '';
                if (window.localStorage.getItem('lang') == 'pl') {
                    txt = 'Nowe hasło musi różnić się od starego!';
                } else if (window.localStorage.getItem('lang') == 'en') {
                    txt = 'New password must be different than old one!';
                } else {
                    txt = 'Nowe hasło musi różnić się od starego!';
                }
                $('#newPassBox').addClass('wrongValue');
                myAlert(txt,'doNothing');
            }
        });
    });
    

    var createProductToAddGroupSelect = (function (data) {
        ans = '';
        ans += '<option value=0></option>';
        $.each(data, function (index, value) {
            ans += "<option value="+ value['product_group_id'] +">"+ value['product_group_name'] +"</option>";
        });
        return ans;
    });

    var getGroups = (function(){
        var ans = 0;
        $.ajax({
            type: 'POST',
            async: false,
            dataType: 'json',
            url: 'PHP/getProductsGroups.php',
            success: function(data){
                ans = data;
            }
        });
        return ans;
    });

    var createProductToAddVatSelect = (function (data) {
        ans = '';
        ans += '<option value=0></option>';
        $.each(data, function (index, value) {
            ans += "<option value="+ value['vat_id'] +">"+ value['vat_value'] +"</option>";
        });
        return ans;
    });

    var getVats = (function(){
        var ans = 0;
        $.ajax({
            type: 'POST',
            async: false,
            dataType: 'json',
            url: 'PHP/getProductsVat.php',
            success: function(data){
                ans = data;
            }
        });
        return ans;
    });

    var createProductToAddUnitSelect = (function (data) {
        ans = '';
        ans += '<option value=0></option>';
        $.each(data, function (index, value) {
            ans += "<option value="+ value['product_unit_id'] +">"+ value['product_unit_name'] + " [" + value['product_unit_short']+"]</option>";
        });
        return ans;
    });
    
    var createPriceHistoryTableContent = (function (data) {
        var ans = '';
        var date;
        $.each(data, function (index, value) {
            date = new Date(parseInt(value['price_history_change_date']));
            ans += "<tr> <td class='PriceHistCol1c'>"+ value['price_history_price']/100 +"</td><td class='PriceHistCol1c'>"+ dateToFormat(date) + "</td></tr>";
        });
        return ans;
    });
    
    var getPriceHistory = (function(){
        var ans = 0;
        var param = {};
        param['prodId'] = $('#productPopupID').html();
        $.ajax({
            type: 'POST',
            async: false,
            data: param,
            dataType: 'json',
            url: 'PHP/getPriceHistory.php',
            success: function(data){
                ans = data;
            }
        });
        return ans;
    });


    var getUnits = (function(){
        var ans = 0;
        $.ajax({
            type: 'POST',
            async: false,
            dataType: 'json',
            url: 'PHP/getProductsUnits.php',
            success: function(data){
                ans = data;
            }
        });
        return ans;
    });

    var getContractorsCount = (function(){
        param = {};
        //Contractor ID
        if($('#contractorsListId').val() == ''){
            param['id'] = 0;
        }else{
            param['id'] = $('#contractorsListId').val();
        }
        param['conName'] = $("#contractorsListName").val();
        param['conCity'] = $("#contractorsListCity").val();
        param['conNIP'] = $("#contractorsListNIP").val();
        $.ajax({
          type: 'POST',
          async: false,
          data: param,
          dataType: 'json',
          url: 'PHP/getContractorsCount.php',            
          success: function(data){
            contractorsListCount = data[0].count;
          }
        });
    });

    var getContractors = (function(){
        param = {};       
        contractorsListSelectedID = 0;
        //Contractor ID
        if($('#contractorsListId').val() == ''){
            param['id'] = 0;
        }else{
            param['id'] = $('#contractorsListId').val();
        }
        param['conName'] = $("#contractorsListName").val();
        param['conCity'] = $("#contractorsListCity").val();
        param['conNIP'] = $("#contractorsListNIP").val();
        
        param['ord'] = contractorsListOrder;
        param['pageNo'] = contractorsListPage;
        $.ajax({
          type: 'POST',
          async: false,
          data: param,
          dataType: 'json',
          url: 'PHP/getContractorsToList.php',            
          success: function(data){
              getContractorsCount();
              $('#contractorsListTabContent').html(createContractorsListTabContent(data));
              if(contractorsListCount<=15){
                  $('#contractorsListNext').addClass('hidden');
              } else {
                  $('#contractorsList').removeClass('hidden');
              }
              if(contractorsListCount<(contractorsListPage*15+15)){
                  $('#contractorsList').addClass('hidden');
              } else {
                  $('#contractorsList').removeClass('hidden');
              }
          }
        });
    });

    var createProductToAddProducersSelect = (function (data) {
        ans = '';
        ans += '<option value=0></option>';
        $.each(data, function (index, value) {
            ans += "<option value="+ value['contractor_id'] +">"+ value['contractor_name'] + "</option>";
        });
        return ans;
    });

    var myConfirm = (function(message,action){
        $('#myConfirmAbort').on('click', function(){
            $('#myConfirmContainer').addClass('hidden');
        });
        if(action == 'addContractor'){
            $('#myConfirmMessage').html(message);
            $('#myConfirmContainer').removeClass('hidden');
            $('#myConfirmConfirm').on('click', function(){
                addContractor($('#newContractorNameBox').val(), $('#newContractorStreetBox').val(), $('#newContractorPostalCodeBox').val(), $('#newContractorCityBox').val(), $('#newContractorNipBox').val(), $('#newContractorPhoneBox').val(), $('#newContractorEmailBox').val(), $('#newContractorIsProviderSelect').val() );
                $('#addContractor').addClass('hidden');
                $('#myConfirmContainer').addClass('hidden');
            });
        } else if (action == 'editContractor'){
            $('#myConfirmMessage').html(message);
            $('#myConfirmContainer').removeClass('hidden');
            $('#myConfirmConfirm').on('click', function(){
                editContractor(contractorData[0].contractor_id, $('#editContractorNameBox').val(), $('#editContractorStreetBox').val(), $('#editContractorPostalCodeBox').val(), $('#editContractorCityBox').val(), $('#editContractorNipBox').val(), $('#editContractorPhoneBox').val(), $('#editContractorEmailBox').val(), $('#editContractorIsProviderSelect').val() );
                $('#editContractor').addClass('hidden');
                Object.keys(contractorData).length = 0;
                $('#myConfirmContainer').addClass('hidden');
            });
        }
    });

    var createContractorsListTabContent = (function(data){
        ans = '';
        $.each(data,function(index, value){
            ans += "<tr class='ConListRow' id=ConListID"+value['contractor_id']+">\n\
                        <td class='DocConCol1c'>"+value['contractor_id']+"</td>\n\
                        <td class='DocConCol2c'>"+value['contractor_name']+"</td>\n\
                        <td class='DocConCol3c'>"+value['contractor_nip']+"</td>\n\
                        <td class='DocConCol4c'>"+value['contractor_postal']+"</td>\n\
                        <td class='DocConCol5c'>"+value['contractor_city']+"</td>\n\
                        <td class='DocConCol6c'>"+value['contractor_street']+"</td>\n\
                        <td class='DocConCol7c'>"+value['contractor_tel']+"</td>\n\
                        <td class='DocConCol8c'>"+value['contractor_email']+"</td>\n\
                    </tr>";
        });    
        return ans;
    });

    var getProducers = (function(){
        var ans = 0;
        $.ajax({
            type: 'POST',
            async: false,
            dataType: 'json',
            url: 'PHP/getProducers.php',
            success: function(data){
                ans = data;
            }
        });
        return ans;
    });

    $(document).ready(function () {
        init();
    });
}();