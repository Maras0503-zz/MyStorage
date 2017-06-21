pageFunctions.additionalWindowsFunc = function () {
    var init = (function () {
        listeners();
    });
    var listeners = (function(){
        $('#closeAddProductWindow').on('click', function(){
            $('#addProduct').addClass('hidden');
        });
        $('#addProductOpen').on('click', function(){
            $('#addProduct').removeClass('hidden');
            $('#newProductGroupSelect').html(createProductToAddGroupSelect(getGroups()));
            $('#newProductVatSelect').html(createProductToAddVatSelect(getVats()));
            $('#newProductUnitSelect').html(createProductToAddUnitSelect(getUnits()));
            $('#newProductProducersSelect').html(createProductToAddProducersSelect(getProducers()));
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
            if($('#newProductProducersSelect').val() != 0 && $('#newProductGroupSelect').val() != 0 && $('#newProductVatSelect').val() != 0 && $('#newProductUnitSelect').val() != 0){
                if(!isNaN($('#newProductPriceBox').val()) && $('#newProductPriceBox').val() != ''){
                    console.log($('#newProductPriceBox').val());
                    if($('#newProductPriceBox').val() != 0){

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