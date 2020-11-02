
$(window).on('load scroll', function(){
    var wh = $(window).scrollTop() + $(window).height();
    // >= $('.news-btn').offset().top && wh < $('.ticker-header-title').offset().top
    if (wh >= $('.section-ticker').offset().top && !$('.section-ticker').hasClass('reached')){
        $('.section-ticker').addClass('reached');
        var countersDown = document.querySelectorAll('.counterDecr');
        var countersUp = document.querySelectorAll('.counterInc');
        
        countersUp.forEach(counter => {
            counter.innerText = 0;
            
            var updateCounter = () => {
                var target = +counter.getAttribute('data-target');
                
                var c = +counter.innerText;
                
                var inc = target / 100;
                
                if(c < target){
                    counter.innerText = Math.ceil(c + inc);
                    setTimeout(updateCounter, 8);
                } else {
                    counter.innerText = target;
                }
            }
            updateCounter();
        });
        
        countersDown.forEach(counter =>{
            counter.innerText = 100;
            
            var updateCounter = () =>{
                var target = +counter.getAttribute('data-target'); // 1
                
                var c = +counter.innerText; // 100
                if(c > target){
                    counter.innerText = c - 1;
                    setTimeout(updateCounter, 8);
                } else {
                    counter.innerText = target;
                };
            }
            updateCounter();
        });
    }
});