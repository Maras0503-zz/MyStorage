/* global pageFunctions */
var productTablePage = 0;
var productTableOrder = 1;
var productCount = 0;
var selectedProduct = 0;
pageFunctions.productsTabFunc = (function(){
    var listeners = (function(){
        $(document).on('click', function(e){
            var id = $(e.target).parent().attr('id');
            if(id!=undefined){
                if(id.substring(0,6) == 'ProdID'){
                    $('.PRrow').removeClass('rowSelected');
                    $('#ProdID'+id.substring(6,id.lenght)).addClass('rowSelected');
                }
            }
        });
        $(document).on('dblclick', function(e){
            var id = $(e.target).parent().attr('id');
            $('#productPhoto').html("");
            if(id!=undefined){
                selectedProduct = id.substring(6,id.lenght);
                if(id.substring(0,6) == 'ProdID'){
                    selectedProduct = id.substring(6,id.lenght);
                    $('#productPopupID').html(selectedProduct);
                    $('#productPopup').removeClass('hidden');
                        $.get("productPhotos/"+selectedProduct+".jpg")
                            .done(function() { 
                                $('#productPhoto').html('<img class="photo" src="productPhotos/'+selectedProduct+'.jpg" alt="Brak zdjęcia">');
                            }).fail(function() { 
                                $('#productPhoto').html('<img class="photo" src="productPhotos/brak.jpg" alt="Brak zdjęcia">');
                            });
                }
            }
        });
        $(document).on('tap', function(e){
            var id = $(e.target).parent().attr('id');
            $('#productPhoto').html("");
            if(id!=undefined){
                selectedProduct = id.substring(6,id.lenght);
                if(id.substring(0,6) == 'ProdID'){
                    selectedProduct = id.substring(6,id.lenght);
                    $('#productPopupID').html(selectedProduct);
                    $('#productPopup').removeClass('hidden');
                        $.get("productPhotos/"+selectedProduct+".jpg")
                            .done(function() { 
                                $('#productPhoto').html('<img class="photo" src="productPhotos/'+selectedProduct+'.jpg" alt="Brak zdjęcia">');
                            }).fail(function() { 
                                $('#productPhoto').html('<img class="photo" src="productPhotos/brak.jpg" alt="Brak zdjęcia">');
                            });
                }
            }
        });
        
        $('#changeImageProductPopup').on('click', function(e){
            window.open("choseImage.php?prodId="+selectedProduct);
        });
        $('#closeProductPopup').on('click', function(){
            $('#productPopup').addClass('hidden');
        });
        $('#PRnext').on('click', function(){
            $('.PRrow').removeClass('rowSelected');
            productTablePage++;
            getProducts();
            if(productTablePage>0){
                $('#PRprevious').removeClass('hidden');
            }
        });
        $('#PRprevious').on('click', function(){
            $('.PRrow').removeClass('rowSelected');
            productTablePage--;
            getProducts();
            if(productTablePage==0){
                $('#PRprevious').addClass('hidden');
            }
        });
        
        //OPEN AND CLOSE productCatalog
        $('#catalog').on('click', function(){
            $('.tab').addClass('hidden');
            $('.tab').removeClass('blur');
            $('.popup').addClass('hidden');
            $('.tab').removeClass('show');
            $('#productContainer').removeClass('hidden');
            $('#productContainer').addClass('show');
            $('.tab').removeClass('blur');
            getProducts();
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
            $('#PRprevious').addClass('hidden');
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
            $('#PRprevious').addClass('hidden');
            productTableOrder = 0;
            getProducts();
        });
        $('#arrUpName').on('click', function(){
            productTablePage = 0;
            $('.arr').addClass('unused');
            $('.arr').removeClass('used');
            $('#arrUpName').addClass('used');
            $('#arrUpName').removeClass('unused');
            $('#PRprevious').addClass('hidden');
            productTableOrder = 2;
            getProducts();
        });
        $('#arrUpNo').on('click', function(){
            productTablePage = 0;
            $('.arr').addClass('unused');
            $('.arr').removeClass('used');
            $('#arrUpNo').addClass('used');
            $('#arrUpNo').removeClass('unused');
            $('#PRprevious').addClass('hidden');
            productTableOrder = 6;
            getProducts();
        });
        $('#arrUpPrice').on('click', function(){
            productTablePage = 0;
            $('.arr').addClass('unused');
            $('.arr').removeClass('used');
            $('#arrUpPrice').addClass('used');
            $('#arrUpPrice').removeClass('unused');
            $('#PRprevious').addClass('hidden');
            productTableOrder = 4;
            getProducts();
        });
        $('#arrDownId').on('click', function(){
            productTablePage = 0;
            $('.arr').addClass('unused');
            $('.arr').removeClass('used');
            $('#arrDownId').addClass('used');
            $('#arrDownId').removeClass('unused');
            $('#PRprevious').addClass('hidden');
            productTableOrder = 1;
            getProducts();
        });
        $('#arrDownName').on('click', function(){
            productTablePage = 0;
            $('.arr').addClass('unused');
            $('.arr').removeClass('used');
            $('#arrDownName').addClass('used');
            $('#arrDownName').removeClass('unused');
            $('#PRprevious').addClass('hidden');
            productTableOrder = 3;
            getProducts();
        });
        $('#arrDownNo').on('click', function(){
            productTablePage = 0;
            $('.arr').addClass('unused');
            $('.arr').removeClass('used');
            $('#arrDownNo').addClass('used');
            $('#arrDownNo').removeClass('unused');
            $('#PRprevious').addClass('hidden');
            productTableOrder = 7;
            getProducts();
        });
        $('#arrDownPrice').on('click', function(){
            productTablePage = 0;
            $('.arr').addClass('unused');
            $('.arr').removeClass('used');
            $('#arrDownPrice').addClass('used');
            $('#arrDownPrice').removeClass('unused');
            $('#PRprevious').addClass('hidden');
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
                  $('#PRnext').addClass('hidden');
              } else {
                  $('#PRnext').removeClass('hidden');
              }
              if(productCount <= (productTablePage*15+15)){
                  $('#PRnext').addClass('hidden');
              } else {
                  $('#PRnext').removeClass('hidden');
              }
          }
        });
    });
    var createProductTableContent = (function(data){
        var ans = '';
        var price = 0;
        
        $.each(data,function(index, value){
            price = value['product_price']/100+((value['product_price']/100)*(value['vat_value']/100));
            price = Math.round(price*100)/100;
            ans += "<tr class='PRrow' id=ProdID"+value['product_id']+"><td class='col1b'>"+value['product_id']+"</td><td class='col2b'>"+value['product_name']+"</td><td class='col3b'>"+value['contractor_name']+"</td><td class='col4b'>"+value['product_number']/100+"</td><td class='col5b'>"+price.toFixed(2)+"</td><td class='col6b'>"+value['vat_value']+"</td><td class='col7b'>"+value['product_group_name']+"</td><td class='col8b'>"+value['product_status_name']+"</td><td class='col9b'>"+value['product_unit_short']+"</td></tr>";
        });    
        return ans;
    });
    var init = (function(){
        listeners();
    });
    
    $(document).ready(function(){
        init(); 
    });
    
}());


