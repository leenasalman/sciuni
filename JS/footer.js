$(window).on('load resize', function() {
    var widowWidth = $(window).width(); 

    if (widowWidth <= 1024){
        if(!$('#demo').hasClass('collapse')){
            $('#demo').addClass('collapse');
            $('.demo').attr('data-toggle', 'collapse');
        }
        if(!$('#demoOne').hasClass('collapse')){
            $('#demoOne').addClass('collapse');
            $('.demoOne').attr('data-toggle', 'collapse');
        }
        if(!$('#demoTwo').hasClass('collapse')){
            $('#demoTwo').addClass('collapse');
            $('.demoTwo').attr('data-toggle', 'collapse');
        }
        if(!$('#demoThree').hasClass('collapse')){
            $('#demoThree').addClass('collapse');
            $('.demoThree').attr('data-toggle', 'collapse');
        }
    } else {
        $('.demo').attr('data-toggle', '');
        $('.demoOne').attr('data-toggle', '');
        $('.demoTwo').attr('data-toggle', '');
        $('.demoThree').attr('data-toggle', '');
    }
});