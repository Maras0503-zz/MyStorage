pageFunctions.creatingCharts = (function(){
    var init = (function(){
        listeners();
    });

    var listeners = (function(){
        $('#closeSellChart').on('click', function(){
            $('#productContainer').removeClass('hidden');
            $('#charts').addClass('hidden');
        });
        $('#sellByMonthChart').on('click', function(){
            var yearOptions = '';
            var dateNow = new Date().getFullYear();
            createSellByMonthChart($('#productPopupID').html(), dateNow);
            for (i = 0; i < 5; i++) { 
                yearOptions += '<option value="'+ (parseInt(dateNow)-parseInt(i)) +'">'+ (parseInt(dateNow)-parseInt(i)) +'</option>'
            }
            $('#chartYear').html(yearOptions);
            $('#productContainer').addClass('hidden');
            $('#charts').removeClass('hidden');
        });
        $('#redrawChart').on('click', function(){
            createSellByMonthChart($('#productPopupID').html(), $('#chartYear').val());
        });
    });

    var createSellByMonthChart = (function(prodId, year){
        var months = [];
        var lab = '';
        if(window.localStorage.getItem('lang') == 'pl'){
            lab = 'Sprzedanych sztuk';
            months = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
        } else {
            lab = 'Sold pieces';
            months = ["January", "February", "March", "April", "Mai", "June", "July", "August", "September", "Oktober", "November", "December"];
        }
        var ctx = $('#myChart');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: months,
                datasets: [{
                    label: lab,
                    data: getSellByMonth(prodId, year),
                    backgroundColor: [
                        'rgba(140, 140, 140, 1)',
                        'rgba(140, 140, 140, 1)',
                        'rgba(140, 140, 140, 1)',
                        'rgba(140, 140, 140, 1)',
                        'rgba(140, 140, 140, 1)',
                        'rgba(140, 140, 140, 1)',
                        'rgba(140, 140, 140, 1)',
                        'rgba(140, 140, 140, 1)',
                        'rgba(140, 140, 140, 1)',
                        'rgba(140, 140, 140, 1)',
                        'rgba(140, 140, 140, 1)',
                        'rgba(140, 140, 140, 1)'
                    ],
                    borderColor: [
                        'rgba(59, 59, 59, 1)',
                        'rgba(59, 59, 59, 1)',
                        'rgba(59, 59, 59, 1)',
                        'rgba(59, 59, 59, 1)',
                        'rgba(59, 59, 59, 1)',
                        'rgba(59, 59, 59, 1)',
                        'rgba(59, 59, 59, 1)',
                        'rgba(59, 59, 59, 1)',
                        'rgba(59, 59, 59, 1)',
                        'rgba(59, 59, 59, 1)',
                        'rgba(59, 59, 59, 1)',
                        'rgba(59, 59, 59, 1)'

                    ],
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
    });

    $(document).ready(function(){
        init(); 
    });
}());
 