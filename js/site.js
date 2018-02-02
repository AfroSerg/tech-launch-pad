$(".item-info").click(() => {
    console.log('onlick fired')
    $('.global-content').addClass('info-active');
    $('.global-footer').addClass('info-active');
    $('#info-section').delay(300).addClass('animate');
})

$(".item-home").click(() => {
    console.log('onclick fired')
    $('.global-content').removeClass('info-active');
    $('.global-footer').removeClass('info-active');
    $('#info-section').removeClass('animate');
})