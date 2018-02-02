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

function activateOptionView(id){
	activate('.-view', id)
	f('#btnClose').classList.remove('dn')
}

function deactivateOptionView(){
	deactivate('.-view')
	f('#btnClose').classList.add('dn')
}

function optBlockClick(){
	const id = this.dataset.id
	activateOptionView(id)
}

function moreInfoClick(){
	toggleActive('.-square')
	toggleActive('#cover')
}

attach('.-block', 'click', optBlockClick)
attach('#btnClose', 'click', deactivateOptionView)
attach('#btnMoreInfo', 'click', moreInfoClick)