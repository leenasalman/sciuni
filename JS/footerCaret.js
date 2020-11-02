$('.demo').on('click', function(){
    if($('#demoOne, #demoTwo, #demoThree').is('.collapse.show')){
        $('#demoOne, #demoTwo, #demoThree').removeClass('show');
        $('span.caret.caret-quick-links, span.caret.caret-using-our-site, span.caret.caret-how-to-find-us').removeClass('caret-up');
    }
    $('span.caret.caret-explore').toggleClass('caret-up');
});
$('.demoOne').on('click', function(){
    if($('#demo, #demoTwo, #demoThree').is('.collapse.show')){
        $('#demo, #demoTwo, #demoThree').removeClass('show');
        $('span.caret.caret-explore, span.caret.caret-using-our-site, span.caret.caret-how-to-find-us').removeClass('caret-up');
    }
    $('span.caret.caret-quick-links').toggleClass('caret-up');
});
$('.demoTwo').on('click', function(){
    if($('#demoOne, #demo, #demoThree').is('.collapse.show')){
        $('#demoOne, #demo, #demoThree').removeClass('show');
        $('span.caret.caret-how-to-find-us, span.caret.caret-quick-links, span.caret.caret-explore').removeClass('caret-up');
    }
    $('span.caret.caret-using-our-site').toggleClass('caret-up');
});
$('.demoThree').on('click', function(){
    if($('#demoOne, #demoTwo, #demo').is('.collapse.show')){
        $('#demoOne, #demoTwo, #demo').removeClass('show');
        $('span.caret.caret-using-our-site, span.caret.caret-quick-links, span.caret.caret-explore').removeClass('caret-up');
    }
    $('span.caret.caret-how-to-find-us').toggleClass('caret-up');
});
