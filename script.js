'use strict';
 
class Tabs{
	constructor({
		wrapperAll,
		wrapperTabs,
		wrapperContent
	}) {
		this.wrapperAll = document.querySelector(wrapperAll);
		this.wrapperTabs = this.wrapperAll.querySelector(wrapperTabs);
		this.wrapperItemTabs = this.wrapperTabs.querySelectorAll('li');
		this.wrapperContent = this.wrapperAll.querySelectorAll(wrapperContent);
	}

	hideAllContent() {
		this.wrapperContent.forEach(i => {i.classList.add('active2')})
	}

	hideAllTabs() {
		this.wrapperItemTabs.forEach(i => i.classList.remove('active'));
	}

	showCurrentContent(elem) {
		elem.classList.remove('active2');
	}
	showCurrentTabs(elem) {
		elem.classList.add('active');
	}

	switcherTabs() {
		this.wrapperTabs.addEventListener('click', event => {
			event.preventDefault();
			let target = event.target;

			if(target.matches('a')) {
				let href = target.hash;
				this.hideAllTabs();
				this.showCurrentTabs(target.parentElement);
				this.hideAllContent();
				this.showCurrentContent(this.wrapperAll.querySelector(href));
			}
		});
	}


init() {
	console.dir(this);
	this.hideAllContent();
	this.showCurrentContent(this.wrapperContent[0]);
	this.showCurrentTabs(this.wrapperItemTabs[0]);
	this.switcherTabs();
	}
}