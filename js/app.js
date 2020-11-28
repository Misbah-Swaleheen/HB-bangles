$(document).ready(function () {
    // $('.icon').toggle(
    //     function () {$('.form-control').css({'display': 'block'});},
    //     function () {$('.form-control').css({'display': 'none'});}
    // )
    
    $('.icon').click(function () {
        $('.form-control').toggle()
        $('.fa').toggleClass('fa-search fa-times')
     
        
    })
   
    

})