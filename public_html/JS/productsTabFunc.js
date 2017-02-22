/* global pageFunctions */
var page = 0;
var order = 0;
var count = 0;

pageFunctions.productsTabFunc = (function(){
    var listeners = (function(){
        $('#next').on('click', function(){
            page++;
            getProducts();
            if(page>0){
                $('#previous').removeClass('hidden');
            }
        });
        $('#previous').on('click', function(){
            page--;
            getProducts();
            if(page==0){
                $('#previous').addClass('hidden');
            }
        });
        
        //OPEN AND CLOSE productCatalog
        $('#catalog').on('click', function(){
            $('.tab').addClass('hidden');
            $('.tab').removeClass('show');
            $('#productContainer').removeClass('hidden');
            $('#productContainer').addClass('show');
        });
        $('#closeCatalog').on('click',function(){
            $('#productContainer').removeClass('show');
            $('#productContainer').addClass('hidden');
        });
        $('#reset').on('click', function(){
            order=0;
            page=0;
            $('.arr').addClass('unused');
            $('.arr').removeClass('used');
            $('#idBox').val('');
            $('#nameBox').val('');
            $('#priceMaxBox').val('');
            $('#priceMinBox').val('');
            $('#noMaxBox').val('');
            $('#noMinBox').val('');
            getProducts();
        });
        $('#search').on('click', function(){
            page=0;
            getProducts();
        });

        $('#arrUpId').on('click', function(){
            page = 0;
            $('.arr').addClass('unused');
            $('.arr').removeClass('used');
            $('#arrUpId').addClass('used');
            $('#arrUpId').removeClass('unused');
            $('#previous').addClass('hidden');
            order = 0;
            getProducts();
        });
        $('#arrUpName').on('click', function(){
            page = 0;
            $('.arr').addClass('unused');
            $('.arr').removeClass('used');
            $('#arrUpName').addClass('used');
            $('#arrUpName').removeClass('unused');
            $('#previous').addClass('hidden');
            order = 2;
            getProducts();
        });
        $('#arrUpNo').on('click', function(){
            page = 0;
            $('.arr').addClass('unused');
            $('.arr').removeClass('used');
            $('#arrUpNo').addClass('used');
            $('#arrUpNo').removeClass('unused');
            $('#previous').addClass('hidden');
            order = 6;
            getProducts();
        });
        $('#arrUpPrice').on('click', function(){
            page = 0;
            $('.arr').addClass('unused');
            $('.arr').removeClass('used');
            $('#arrUpPrice').addClass('used');
            $('#arrUpPrice').removeClass('unused');
            $('#previous').addClass('hidden');
            order = 4;
            getProducts();
        });
        $('#arrDownId').on('click', function(){
            page = 0;
            $('.arr').addClass('unused');
            $('.arr').removeClass('used');
            $('#arrDownId').addClass('used');
            $('#arrDownId').removeClass('unused');
            $('#previous').addClass('hidden');
            order = 1;
            getProducts();
        });
        $('#arrDownName').on('click', function(){
            page = 0;
            $('.arr').addClass('unused');
            $('.arr').removeClass('used');
            $('#arrDownName').addClass('used');
            $('#arrDownName').removeClass('unused');
            $('#previous').addClass('hidden');
            order = 3;
            getProducts();
        });
        $('#arrDownNo').on('click', function(){
            page = 0;
            $('.arr').addClass('unused');
            $('.arr').removeClass('used');
            $('#arrDownNo').addClass('used');
            $('#arrDownNo').removeClass('unused');
            $('#previous').addClass('hidden');
            order = 7;
            getProducts();
        });
        $('#arrDownPrice').on('click', function(){
            page = 0;
            $('.arr').addClass('unused');
            $('.arr').removeClass('used');
            $('#arrDownPrice').addClass('used');
            $('#arrDownPrice').removeClass('unused');
            $('#previous').addClass('hidden');
            order = 5;
            getProducts();
        });
    });
    var getProductsCount = (function(){
        param = {};
        //NUMBER MIN
        if($('#noMinBox').val() == ''){
            param['noMin'] = 0;
        }else{
            param['noMin'] = $('#noMinBox').val();
        }
        //NUMBER MAX
        if($('#noMaxBox').val() == ''){
            param['noMax'] = 10000000;
        }else{
            param['noMax'] = $('#noMaxBox').val();
        }
        //PRICE MIN
        if($('#priceMinBox').val() == ''){
            param['minPrice'] = 0;
        }else{
            param['minPrice'] = $('#priceMinBox').val();
        }
        //PRICE MAX
        if($('#priceMaxBox').val() == ''){
            param['maxPrice'] = 10000000;
        }else{
            param['maxPrice'] = $('#priceMaxBox').val();
        }
        //PRODUCT ID
        if($('#idBox').val() == ''){
            param['id'] = 0;
        }else{
            param['id'] = $('#idBox').val();
        }
        param['name'] = $('#nameBox').val();
        $.ajax({
          type: 'POST',
          async: false,
          data: param,
          dataType: 'json',
          url: 'PHP/getProductsCount.php',            
          success: function(data){
            count = data[0].count;
          }
        });
    });
    var getProducts = (function(){
        param = {};
        param['page'] = page;
        param['ord'] = order;
        //NUMBER MIN
        if($('#noMinBox').val() == ''){
            param['noMin'] = 0;
        }else{
            param['noMin'] = $('#noMinBox').val();
        }
        //NUMBER MAX
        if($('#noMaxBox').val() == ''){
            param['noMax'] = 10000000;
        }else{
            param['noMax'] = $('#noMaxBox').val();
        }
        //PRICE MIN
        if($('#priceMinBox').val() == ''){
            param['minPrice'] = 0;
        }else{
            param['minPrice'] = $('#priceMinBox').val();
        }
        //PRICE MAX
        if($('#priceMaxBox').val() == ''){
            param['maxPrice'] = 10000000;
        }else{
            param['maxPrice'] = $('#priceMaxBox').val();
        }
        //PRODUCT ID
        if($('#idBox').val() == ''){
            param['id'] = 0;
        }else{
            param['id'] = $('#idBox').val();
        }
        param['name'] = $("#nameBox").val();
        $.ajax({
          type: 'POST',
          async: false,
          data: param,
          dataType: 'json',
          url: 'PHP/getProducts.php',            
          success: function(data){
              $('#productTabContent').html(createTableContent(data));
              getProductsCount();
              if(count<=10){
                  $('#next').addClass('hidden');
              } else {
                  $('#next').removeClass('hidden');
              }
              if(count<(page*10+10)){
                  $('#next').addClass('hidden');
              } else {
                  $('#next').removeClass('hidden');
              }
          }
        });
    });
    var createTableContent = (function(data){
        ans = '';
        $.each(data,function(index, value){
            ans += "<tr><td class='col9b'>"+value['product_id']+"</td><td class='col2b'>"+value['product_name']+"</td><td class='col3b'>"+value['contractor_name']+"</td><td class='col4b'>"+value['product_number']+"</td><td class='col5b'>"+value['product_price']+"</td><td class='col6b'>"+value['vat_value']+"</td><td class='col7b'>"+value['product_group_name']+"</td><td class='col8b'>"+value['product_status_name']+"</td><td class='col9b'>"+value['product_unit_short']+"</td></tr>";
        });    
        return ans;
    });
    var init = (function(){
        getProducts();
        listeners();
    });
    
    $(document).ready(function(){
        init(); 
    });
    
}());


