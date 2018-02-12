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

const skrrr = q => {
	const target = f(q)
	const navBarHeight = 70
	if(!target) return
	scrollTo(0, target.offsetTop - navBarHeight)
}

function toggleCover(){
	deactivate('.-nav-item')
	toggleActive('#info-view')
	toggleActive('#cover')
	toggleActive('.-nav-bar')
	activate('#navInfo')
}

function onNavItemClick(){
	const id = this.dataset.id
	console.log('id=>', id)
	activate('.-nav-item', id)
	skrrr('.-section[data-id="' + id + '"]')
}


attach('#moreInfo', 'click', toggleCover)
attach('.-nav-brand, .-nav-title', 'click', () => {
	deactivate('.-view')
	deactivate('#cover')
	deactivate('.-nav-bar')
})
attach('#navFAQ', 'click', () =>{
	deactivate('.-view')
	activate('#faq-view')
	deactivate('.-nav-item')
	activate('#navFAQ')
})
attach('#navInfo', 'click', () =>{
	deactivate('.-view')
	activate('#info-view')
	deactivate('.-nav-item')
	activate('#navInfo')
})
attach('#navHome', 'click', () =>{
	deactivate('.-view')
	deactivate('#cover')
	deactivate('.-nav-bar')
})


attach('#mobMoreInfoBtn', 'click', () => {
	deactivate('#mob-cover')
	deactivate('.-mob-view')
	activate('.-mob-nav-bar')
	activate('#mob-info')
})

attach('.-stacks', 'click', () => {
	toggleActive('.-stack')
	toggleActive('.-mob-menu')
})

attach('#mobNavHome', 'click', () => {
	f('.-stacks').click()
	activate('#mob-cover')
	deactivate('.-mob-view')
	deactivate('.-mob-nav-bar')
})

attach('#mobNavInfo', 'click', () => {
	f('.-stacks').click()
	deactivate('.-mob-view')
	deactivate('#mob-cover')
	// activate('.-mob-nav-bar')
	activate('#mob-info')
})

attach('#mobNavFAQ', 'click', () => {
	f('.-stacks').click()
	deactivate('.-mob-view')
	deactivate('#mob-cover')
	// activate('.-mob-nav-bar')
	activate('#mob-faq')
})
// attach('.-nav-item', 'click', onNavItemClick)

attach('.-btn-register', 'click', () => {
	window.location.href  = 'https://docs.google.com/forms/d/e/1FAIpQLSeJjdROXqekS5ZNhXtr4piht4i9pgHcPfPvQybIRYI5igTj7A/viewform?usp=sf_link'
})