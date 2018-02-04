$(".item-info").click(() => {
    console.log('onlick fired')
    $('.global-content').addClass('info-active');
    $('.global-footer').addClass('info-active');
    $('.nav-section.secondary>.item-info').css('display', 'none')
    $('.nav-section.secondary>.item-home').css('display', 'inline-block')
    $('#info-section').delay(300).addClass('animate');
})

$(".item-home").click(() => {
    console.log('onclick fired')
    $('.global-content').removeClass('info-active');
    $('.global-footer').removeClass('info-active');
    $('.nav-section.secondary>.item-home').css('display', 'none')
    $('.nav-section.secondary>.item-info').css('display', 'inline-block')
    $('#info-section').removeClass('animate');
})