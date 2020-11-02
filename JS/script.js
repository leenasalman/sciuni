var element = $('#searchBox');
var navbarButton = $('.container-nav-links');
var counterUp = $('.numberOne');

$('.demo').attr('data-toggle', '');
$('.demoOne').attr('data-toggle', '');
$('.demoTwo').attr('data-toggle', '');
$('.demoThree').attr('data-toggle', '');
$('.demoFour').attr('data-toggle', '');

// On click the search icon toggle transition of search box
$('#searchIcon').click(function(event){

    event.preventDefault();
    $('div.search-box-transition').toggleClass('search-box-transition-after');
    if($('div.search-box-transition').hasClass('search-box-transition-after')){
        $('body').addClass('overflowY');
    }
    if($('div.search-box-transition').hasClass('search-box-transition-after') && navbarButton.hasClass('transitionNavBar')){
        $('body').addClass('overflowY');
    }
});

// Add overflowY hidden to body when search box is shown
$('#close-search-box').click(function(){
    $('div.search-box-transition').removeClass('search-box-transition-after');
    $('body').removeClass('overflowY');
    if(!navbarButton.get().hasClass('transitionNabBar')){
        $('body').removeClass('overflowY');
    }
});

// remove classes when window on resize
$(window).resize(function(){
    navbarButton.removeClass('mobileTransition');
    navbarButton.removeClass('transitionNavBar');
    $('#demo').removeClass('collapse');
    $('#demoOne').removeClass('collapse');
    $('#demoTwo').removeClass('collapse');
    $('#demoThree').removeClass('collapse');
    $('#demoFour').removeClass('collapse');
});

$('#btn-menu').click(function(){
    if(!navbarButton.hasClass('mobileTransition')){
        navbarButton.addClass('mobileTransition');
        $('body').removeClass('overflowY');    
    }
    navbarButton.toggleClass('transitionNavBar');
    $('body').toggleClass('overflowY');
    
});


$('#searchBox').on('click', function() {
    $('#searchBox').addClass('clicked');
    if($('#searchBox').hasClass('clicked')){
        $('#searchBox').prop('placeholder', '');
    }
});

$('body').on('click', function(e){
    var target = $(e.target);
    if(!target.is('#searchBox') && $('#searchBox').hasClass('clicked')){
        $('#searchBox').removeClass('clicked');
        $('#searchBox').prop('placeholder', 'Search...');
    }
});