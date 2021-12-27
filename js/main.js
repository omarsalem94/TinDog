
// $(Window).scroll(function()  {
//     let scroll_top = $(window).scrollTop()

//     if (scroll_top > 50 )
//     {
//         $('#myBtn_up').fadeIn(500)    
//     }
//     else
//     {
//         $('#myBtn_up').fadeOut(500)
//     }

// })


$(Window).scroll(function()  {
    let scroll_top = $(window).scrollTop()

    if (scroll_top > 50 )
    {
        $('#myBtn_up').fadeIn(500)    
    }
    else
    {
        $('#myBtn_up').fadeOut(500)
    }

})