$(".item-info").click(() => {
    console.log('onlick fired')
    $('.global-content').addClass('info-active')
})

$(".item-home").click(() => {
    console.log('onclick fired')
    $('.global-content').removeClass('info-active')
})


$("item-mobile-menu").click(() => {
    console.log('onclick fired')
    $('.global-content').removeClass('info-active')
})