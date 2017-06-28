import 'jquery/dist/jquery.js'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'font-awesome/css/font-awesome.css';

import './css/reset.css';
import './less/common.less';

let navigation = document.getElementById('headerNavigation');
let optHeader = document.getElementsByClassName('optimize');

window.onscroll = function() {
	let coords = navigation.getBoundingClientRect();
	if(coords.top < 0){
		Array.prototype.forEach.call(optHeader, x => (x.classList.toggle('resized', true)));
	} else {
		Array.prototype.forEach.call(optHeader, x => (x.classList.toggle('resized', false)));
	}
}
