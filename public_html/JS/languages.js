/**
 * Created by Marek on 2017-04-23.
 */
pageFunctions.languages = (function(){
    var show = 0;
    var init = (function(){
        listeners();
    });
    var listeners = (function(){
        $('#settingsTrigger').on('click', function(){
            if(show==0){
                $('#settings').removeClass('settHide');
                show=1;
            }
            else{
                $('#settings').addClass('settHide');
                show=0;
            }
        });
        $('#english').on('click', function () {
            english();
        });

        $('#polish').on('click', function () {
            polish();
        });
    });

    var english = function () {
        $('#settings').addClass('settHide');
        show=0;
        $('#documentsLang').html('Documents');
        $('#productsLang').html('Products');
        $('#contractorsLang').html('Contractors');
        $('#reportsLang').html('Reports');
        $('#userLang').html('User');
        $('#shippingNotesLang').html('Shipping Notes');
        $('#invoicesLang').html('Invoices');
        $('#deliveryNotesLang').html('Delivery Notes');
        $('#addProductLang').html('Add product');
        $('#editProductLang').html('Edit product');
        $('#productCatalogLang').html('Catalog');
        $('#withdrawLang').html('Withdraw product');
        $('#changePriceLang').html('Change price');
        $('#contractorListLang').html('Contractors list');
        $('#contractorAddLang').html('Add contractor');
        $('#productSalesLang').html('Product sales');
        $('#groupSalesLang').html('Group sales');
        $('#changePasswordLang').html('Change password');
        $('#userLogoutLang').html('Logout');
        $('#prodIdLang').html('Product ID:');
        $('#prodNameLang').html('Name:');
        $('#priceMinLang').html('Price Min:');
        $('#priceMaxLang').html('Price Max:');
        $('#qtyMinLang').html('Qty Min:');
        $('#qtyMaxLang').html('Qty Max:');
        $('.prodNameHeaderLang').html('Name');
        $('.prodProducerHeaderLang').html('Producer');
        $('.prodQtyHeaderLang').html('Qty');
        $('.prodPriceHeaderLang').html('Price');
        $('.prodTaxHeaderLang').html('Tax');
        $('.prodGroupHeaderLang').html('Group');
        $('.prodUnitHeaderLang').html('Unit')
        $('.search').attr('value','Search');
        $('#PRprevious').attr('value', 'Previous');
        $('#PRnext').attr('value', 'Next');
        $('#WZprevious').attr('value', 'Previous');
        $('#WZnext').attr('value', 'Next');
        $('#FVprevious').attr('value', 'Previous');
        $('#FVnext').attr('value', 'Next');
        $('.closeBtt').attr('value','Close');
        $('#changeImageProductPopup').attr('value','Change image');
        $('.documentIdLang').html('Document ID:');
        $('.documentNoLang').html('Document Number:');
        $('.contrIdLang').html('Contractor ID:');
        $('.contrNameLang').html('Contractor name:');
        $('#newWZ').attr('value','New shipping note');
        $('#newFV').attr('value','New invoice');
        $('.acceptDoc').attr('value','Accept selected document');
        $('.delDoc').attr('value','Delete selected document');
        $('.docNoHeaderLang').html('No');
        $('.docYearHeaderLang').html('Year');
        $('.docConIdHeaderLang').html('Contr. ID');
        $('.docConNameHeaderLang').html('Contractor');
        $('.docTypeHeaderLang').html('Type');
        $('.docDateHeaderLang').html('Date');
        $('.docAcceptedHeaderLang').html('Accepted');
        $('.docCreatorHeaderLang').html('Creator');
        $('.contractorChoseLang').html('Chose contractor');
        $('.contractorNameLang').html('Name:');
        $('.contractorCityLang').html('City:');
        $('.contractorTaxNoLang').html('Tax number:');
        window.sessionStorage.setItem('lang','en');
    }
    var polish = function(){
        $('#settings').addClass('settHide');
        show=0;
        $('#documentsLang').html('Dokumenty');
        $('#productsLang').html('Produkty');
        $('#contractorsLang').html('Kontrahenci');
        $('#reportsLang').html('Raporty');
        $('#userLang').html('Użytkownik');
        $('#shippingNotesLang').html('Wydania zewnętrzne');
        $('#invoicesLang').html('Faktury');
        $('#deliveryNotesLang').html('Przyjęcie zewnętrzne');
        $('#addProductLang').html('Dodaj produkt');
        $('#editProductLang').html('Edytuj produkt');
        $('#productCatalogLang').html('Katalog');
        $('#withdrawLang').html('Wycofaj produkt');
        $('#changePriceLang').html('Zmień cenę');
        $('#contractorListLang').html('Lista kontrahentów');
        $('#contractorAddLang').html('Dodaj kontrahenta');
        $('#productSalesLang').html('Sprzedaż produktu');
        $('#groupSalesLang').html('Sprzedaż w grupie');
        $('#changePasswordLang').html('Zmień hasło');
        $('#userLogoutLang').html('Wyloguj');
        $('#prodIdLang').html('ID produktu:');
        $('#prodNameLang').html('Nazwa:');
        $('#priceMinLang').html('Cena Min:');
        $('#priceMaxLang').html('Cena Max:');
        $('#qtyMinLang').html('Ilość Min:');
        $('#qtyMaxLang').html('Ilość Max:');
        $('.prodNameHeaderLang').html('Nazwa');
        $('.prodProducerHeaderLang').html('Producent');
        $('.prodQtyHeaderLang').html('Ilość');
        $('.prodPriceHeaderLang').html('Cena');
        $('.prodTaxHeaderLang').html('Vat');
        $('.prodGroupHeaderLang').html('Grupa');
        $('.prodUnitHeaderLang').html('Jedn.');
        $('.search').attr('value','Szukaj');
        $('#PRprevious').attr('value', 'Poprzednia');
        $('#PRnext').attr('value', 'Następna');
        $('#WZprevious').attr('value', 'Poprzednia');
        $('#WZnext').attr('value', 'Następna');
        $('#FVprevious').attr('value', 'Poprzednia');
        $('#FVnext').attr('value', 'Następna');
        $('.closeBtt').attr('value','Zamknij');
        $('#changeImageProductPopup').attr('value','Zmień obraz');
        $('.documentIdLang').html('ID dokumentu:');
        $('.documentNoLang').html('Numer dokumentu:');
        $('.contrIdLang').html('ID kontrahenta:');
        $('.contrNameLang').html('Nazwa kontrahenta:');
        $('#newWZ').attr('value','Nowy dokument WZ');
        $('#newFV').attr('value','Nowa faktura');
        $('.acceptDoc').attr('value','Potwierdź zaznaczony dokument');
        $('.delDoc').attr('value','Usuń zaznaczony dokument');
        $('.docNoHeaderLang').html('Nr');
        $('.docYearHeaderLang').html('Rok');
        $('.docConIdHeaderLang').html('ID Kontr.');
        $('.docConNameHeaderLang').html('Kontrahent');
        $('.docTypeHeaderLang').html('Typ');
        $('.docDateHeaderLang').html('Data');
        $('.docAcceptedHeaderLang').html('Zaakceptowano');
        $('.docCreatorHeaderLang').html('Utworzył');
        $('.contractorChoseLang').html('Wybór kontrahenta');
        $('.contractorNameLang').html('Nazwa:');
        $('.contractorCityLang').html('Miasto:');
        $('.contractorTaxNoLang').html('NIP:');
        window.sessionStorage.setItem('lang','pl');
    }


    $(document).ready(function(){
        if(window.sessionStorage.getItem('lang')=='en'){
            english();
        } else if(window.sessionStorage.getItem('lang')=='pl') {
            polish();
        } else {
            polish();
        }
        init();
    });
})();