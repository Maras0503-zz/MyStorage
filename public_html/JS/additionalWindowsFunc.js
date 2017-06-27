pageFunctions.additionalWindowsFunc = function () {
    var init = (function () {
        listeners();
    });
    var listeners = (function(){
        var data;
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
            $('#addProduct').removeClass('hidden');
            $('#newProductGroupSelect').html(createProductToAddGroupSelect(getGroups()));
            $('#newProductVatSelect').html(createProductToAddVatSelect(getVats()));
            $('#newProductUnitSelect').html(createProductToAddUnitSelect(getUnits()));
            $('#newProductProducersSelect').html(createProductToAddProducersSelect(getProducers()));
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
            //disable all inputs until product found by id
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

    var createProductToAddProducersSelect = (function (data) {
        ans = '';
        ans += '<option value=0></option>';
        $.each(data, function (index, value) {
            ans += "<option value="+ value['contractor_id'] +">"+ value['contractor_name'] + "</option>";
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