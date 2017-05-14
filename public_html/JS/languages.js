/**
 * Created by Marek on 2017-04-23.
 */
pageFunctions.languages = (function(){
    var init = (function(){
        listeners();
    });
    var listeners = (function(){
        $('#english').on('click', function () {
            english();
            $('.languageTrigger').html('UK');
        });

        $('#polish').on('click', function () {
            polish();
            $('.languageTrigger').html('PL');
        });
    });

    var english = function () {
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
        $('.prodIdLang').html('Product ID:');
        $('#prodNameLang').html('Name:');
        $('#priceMinLang').html('Price Min:');
        $('#priceMaxLang').html('Price Max:');
        $('#qtyMinLang').html('Qty Min:');
        $('#qtyMaxLang').html('Qty Max:');
        $('.prodNameHeaderLang').html('Name');
        $('.prodProducerHeaderLang').html('Producer');
        $('.prodQtyHeaderLang').html('Qty');
        $('.prodPriceHeaderLang').html('Price');
        $('.prodTaxHeaderLang').html('Tax[%]');
        $('.prodGroupHeaderLang').html('Group');
        $('.prodUnitHeaderLang').html('Unit');
        $('.prodDiscountHeaderLang').html('Discount[%]');
        $('.prodNetHeaderLang').html('Price net');
        $('.prodGrossHeaderLang').html('Price gross');
        $('.prodValNetHeaderLang').html('Value net');
        $('.prodValGrossHeaderLang').html('Value gross');
        $('.prodWithDiscountHeaderLang').html('With discount');
        $('.search').attr('value','Search');
        $('#PRprevious').attr('value', 'Previous');
        $('#PRnext').attr('value', 'Next');
        $('#WZprevious').attr('value', 'Previous');
        $('#WZnext').attr('value', 'Next');
        $('#FVprevious').attr('value', 'Previous');
        $('#FVnext').attr('value', 'Next');
        $('#FVConPrevious').attr('value', 'Previous');
        $('#FVConNext').attr('value', 'Next');
        $('#WZConPrevious').attr('value', 'Previous');
        $('#WZConNext').attr('value', 'Next');
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
        $('.contractorChooseLang').html('Choose contractor');
        $('.contractorNameLang').html('Name:');
        $('.contractorCityLang').html('City:');
        $('.contractorTaxNoLang').html('UTR:');
        $('.docConConHeader').html('Name');
        $('.docConTaxNoHeader').html('UTR');
        $('.docConPostCodeHeader').html('Code');
        $('.docConCityHeader').html('City');
        $('.docConStreetHeader').html('Street/No');
        $('.docConPhoneHeader').html('Phone');
        $('.cancel').html('Cancel');
        $('.create').html('Create');
        $('.addingPosition').html('Adding position');
        $('.shippingNoteLang').html('Shipping note');
        $('.contractorLang').html('Contractor:');
        $('.gross').html('GROSS: ');
        $('.net').html('NET: ');
        $('.productDetailsAddLang').attr('placeholder', "PRODUCT CODE/NAME/BARCODE");
        $('.addPositionBttLang').attr('value','Add position');
        $('.delPositionBttLang').attr('value','Delete selected position');
        $('.editPositionBttLang').attr('value','Edit selected position');
        window.localStorage.setItem('lang','en');
    }
    var polish = function(){
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
        $('.prodIdLang').html('ID produktu:');
        $('#prodNameLang').html('Nazwa:');
        $('#priceMinLang').html('Cena Min:');
        $('#priceMaxLang').html('Cena Max:');
        $('#qtyMinLang').html('Ilość Min:');
        $('#qtyMaxLang').html('Ilość Max:');
        $('.prodNameHeaderLang').html('Nazwa');
        $('.prodProducerHeaderLang').html('Producent');
        $('.prodQtyHeaderLang').html('Ilość');
        $('.prodPriceHeaderLang').html('Cena');
        $('.prodTaxHeaderLang').html('Vat[%]');
        $('.prodGroupHeaderLang').html('Grupa');
        $('.prodUnitHeaderLang').html('Jedn.');
        $('.prodDiscountHeaderLang').html('Rabat[%]');
        $('.prodNetHeaderLang').html('Cena netto');
        $('.prodGrossHeaderLang').html('Cena brutto');
        $('.prodValNetHeaderLang').html('Wartość netto');
        $('.prodValGrossHeaderLang').html('Wartość brutto');
        $('.prodWithDiscountHeaderLang').html('Z rabatem');
        $('.search').attr('value','Szukaj');
        $('#PRprevious').attr('value', 'Poprzednia');
        $('#PRnext').attr('value', 'Następna');
        $('#WZprevious').attr('value', 'Poprzednia');
        $('#WZnext').attr('value', 'Następna');
        $('#FVprevious').attr('value', 'Poprzednia');
        $('#FVnext').attr('value', 'Następna');
        $('#FVConPrevious').attr('value', 'Poprzednia');
        $('#FVConNext').attr('value', 'Następna');
        $('#WZConPrevious').attr('value', 'Poprzednia');
        $('#WZConNext').attr('value', 'Następna');
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
        $('.contractorChooseLang').html('Wybór kontrahenta');
        $('.contractorNameLang').html('Nazwa:');
        $('.contractorCityLang').html('Miasto:');
        $('.contractorTaxNoLang').html('NIP:');
        $('.docConConHeader').html('Nazwa');
        $('.docConTaxNoHeader').html('NIP');
        $('.docConPostCodeHeader').html('Kod');
        $('.docConCityHeader').html('Miasto');
        $('.docConStreetHeader').html('Ulica/Nr');
        $('.docConPhoneHeader').html('Telefon');
        $('.cancel').html('Anuluj');
        $('.create').html('Utwórz');
        $('.addingPosition').html('Dodawanie pozycji');
        $('.shippingNoteLang').html('Dokument WZ');
        $('.contractorLang').html('Nabywca:');
        $('.gross').html('BRUTTO: ');
        $('.net').html('NETTO: ');
        $('.productDetailsAddLang').attr('placeholder', "KOD TOWARU/NAZWA/KOD KRESKOWY");
        $('.addPositionBttLang').attr('value','Dodaj pozycje');
        $('.delPositionBttLang').attr('value','Usuń zaznaczoną pozycję');
        $('.editPositionBttLang').attr('value','Edytuj zaznaczoną pozycję');
        window.localStorage.setItem('lang','pl');
    }


    $(document).ready(function(){
        if(window.localStorage.getItem('lang')=='en'){
            $('.languageTrigger').html('UK');
            english();
        } else if(window.localStorage.getItem('lang')=='pl') {
            $('.languageTrigger').html('PL');
            polish();
        } else {
            $('.languageTrigger').html('PL');
            polish();
        }
        init();
    });
})();