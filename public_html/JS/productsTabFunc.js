/* global pageFunctions */
var productTablePage = 0;
var productTableOrder = 1;
var productCount = 0;

pageFunctions.productsTabFunc = (function(){
    var listeners = (function(){
        $(document).on('click', function(e){
            var id = $(e.target).parent().attr('id');
            if(id!=undefined){
                if(id.substring(0,2) == 'PR'){
                    $('.PRrow').removeClass('rowSelected');
                    $('#PR'+id.substring(2,id.lenght)).addClass('rowSelected');
                }
            }
        });
        $(document).on('dblclick', function(e){
            var id = $(e.target).parent().attr('id');
            if(id!=undefined && id!='WZContainer'){
                if(id.substring(0,2) == 'PR'){
                    alert("PRODUCT O ID" + id.substring(2,id.lenght));
                }
            }
        });
        $('#next').on('click', function(){
            $('.PRrow').removeClass('rowSelected');
            productTablePage++;
            getProducts();
            if(productTablePage>0){
                $('#previous').removeClass('hidden');
            }
        });
        $('#previous').on('click', function(){
            $('.PRrow').removeClass('rowSelected');
            productTablePage--;
            getProducts();
            if(productTablePage==0){
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
            //validateSession();
            productTableOrder=1;
            productTablePage=0;
            $('.arr').addClass('unused');
            $('.arr').removeClass('used');
            $('#idBox').val('');
            $('#nameBox').val('');
            $('#priceMaxBox').val('');
            $('#priceMinBox').val('');
            $('#noMaxBox').val('');
            $('#noMinBox').val('');
            $('#previous').addClass('hidden');
            getProducts();
        });
        $('#search').on('click', function(){
            productTablePage=0;
            getProducts();
        });

        $('#arrUpId').on('click', function(){
            productTablePage = 0;
            $('.arr').addClass('unused');
            $('.arr').removeClass('used');
            $('#arrUpId').addClass('used');
            $('#arrUpId').removeClass('unused');
            $('#previous').addClass('hidden');
            productTableOrder = 0;
            getProducts();
        });
        $('#arrUpName').on('click', function(){
            productTablePage = 0;
            $('.arr').addClass('unused');
            $('.arr').removeClass('used');
            $('#arrUpName').addClass('used');
            $('#arrUpName').removeClass('unused');
            $('#previous').addClass('hidden');
            productTableOrder = 2;
            getProducts();
        });
        $('#arrUpNo').on('click', function(){
            productTablePage = 0;
            $('.arr').addClass('unused');
            $('.arr').removeClass('used');
            $('#arrUpNo').addClass('used');
            $('#arrUpNo').removeClass('unused');
            $('#previous').addClass('hidden');
            productTableOrder = 6;
            getProducts();
        });
        $('#arrUpPrice').on('click', function(){
            productTablePage = 0;
            $('.arr').addClass('unused');
            $('.arr').removeClass('used');
            $('#arrUpPrice').addClass('used');
            $('#arrUpPrice').removeClass('unused');
            $('#previous').addClass('hidden');
            productTableOrder = 4;
            getProducts();
        });
        $('#arrDownId').on('click', function(){
            productTablePage = 0;
            $('.arr').addClass('unused');
            $('.arr').removeClass('used');
            $('#arrDownId').addClass('used');
            $('#arrDownId').removeClass('unused');
            $('#previous').addClass('hidden');
            productTableOrder = 1;
            getProducts();
        });
        $('#arrDownName').on('click', function(){
            productTablePage = 0;
            $('.arr').addClass('unused');
            $('.arr').removeClass('used');
            $('#arrDownName').addClass('used');
            $('#arrDownName').removeClass('unused');
            $('#previous').addClass('hidden');
            productTableOrder = 3;
            getProducts();
        });
        $('#arrDownNo').on('click', function(){
            productTablePage = 0;
            $('.arr').addClass('unused');
            $('.arr').removeClass('used');
            $('#arrDownNo').addClass('used');
            $('#arrDownNo').removeClass('unused');
            $('#previous').addClass('hidden');
            productTableOrder = 7;
            getProducts();
        });
        $('#arrDownPrice').on('click', function(){
            productTablePage = 0;
            $('.arr').addClass('unused');
            $('.arr').removeClass('used');
            $('#arrDownPrice').addClass('used');
            $('#arrDownPrice').removeClass('unused');
            $('#previous').addClass('hidden');
            productTableOrder = 5;
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
            productCount = data[0].count;
          }
        });
    });
    var getProducts = (function(){
        param = {};
        param['page'] = productTablePage;
        param['ord'] = productTableOrder;
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
              getProductsCount();
              $('#productTabContent').html(createProductTableContent(data));
              if(productCount<=15){
                  $('#next').addClass('hidden');
              } else {
                  $('#next').removeClass('hidden');
              }
              if(productCount<(productTablePage*15+15)){
                  $('#next').addClass('hidden');
              } else {
                  $('#next').removeClass('hidden');
              }
          }
        });
    });
    var createProductTableContent = (function(data){
        ans = '';
        $.each(data,function(index, value){
            ans += "<tr class='PRrow' id=PR"+value['product_id']+"><td class='col1b'>"+value['product_id']+"</td><td class='col2b'>"+value['product_name']+"</td><td class='col3b'>"+value['contractor_name']+"</td><td class='col4b'>"+value['product_number']+"</td><td class='col5b'>"+value['product_price']+"</td><td class='col6b'>"+value['vat_value']+"</td><td class='col7b'>"+value['product_group_name']+"</td><td class='col8b'>"+value['product_status_name']+"</td><td class='col9b'>"+value['product_unit_short']+"</td></tr>";
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


