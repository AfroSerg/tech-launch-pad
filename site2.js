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


function toggleCover(){
	toggleActive('#scrollable')
	toggleActive('#cover')
}

attach('#moreInfo', 'click', toggleCover)
attach('#lessInfo', 'click', toggleCover)