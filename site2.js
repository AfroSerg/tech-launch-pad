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
	toggleActive('#scrollable')
	toggleActive('#cover')
	toggleActive('#roadmap')
	toggleActive('.-nav-bar')
}

function onSchedTabClick(){
	const id = this.dataset.id
	activate('.-tab-title',  id)
	activate('.-sched-container',  id)
}

function onNavItemClick(){
	const id = this.dataset.id
	console.log('id=>', id)
	activate('.-nav-item', id)
	skrrr('.-section[data-id="' + id + '"]')
}


attach('#moreInfo', 'click', toggleCover)
attach('.-nav-brand, .-nav-title', 'click', toggleCover)
attach('.-tab-title', 'click', onSchedTabClick)
attach('.-nav-item', 'click', onNavItemClick)