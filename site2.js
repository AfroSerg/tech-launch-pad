const f = q => document.querySelector(q)
const a = q => document.querySelectorAll(q)
const attach = (q, e, f) => 
	a(q).forEach(el => el.addEventListener(e, f))

const activate = (q, id) => {
	if(id){
		a(q).forEach(el => el.classList.remove('-active'))
		f(q + '[data-id="'+ id + '"]').classList.add('-active')
	}else{
		a(q).forEach(el => el.classList.add('-active'))
	}
}

const deactivate = q => 
	a(q).forEach(el => el.classList.remove('-active'))

const toggleActive = q =>
	a(q).forEach(el => el.classList.toggle('-active'))


function onMoreInfoClick(){
	toggleActive('#cover')
	toggleActive('#rightCover')
	const cover = f('#cover')
	const moreInfo = f('#moreInfo')
	cover.classList.toggle('-slide-left')
	if(cover.classList.contains('-active')){
		moreInfo.innerHTML = 
			'More Info <span class="mdi mdi-arrow-right"></span>'
	} else {
		moreInfo.innerHTML = 
			'<span class="mdi mdi-arrow-left"></span>  Less Info'
	}

}

attach('#moreInfo', 'click', onMoreInfoClick)