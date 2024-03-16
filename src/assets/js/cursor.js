
document.addEventListener('DOMContentLoaded', () => {
let cursor = document.getElementById('cursor');

document.addEventListener('mousemove', e => {
	var x = e.clientX;
	var y = e.clientY;
	cursor.style.right = (x - cursor.offsetWidth) + 'px';
  	cursor.style.bottom = (y - cursor.offsetHeight) + 'px';
	console.log(x, y);
});

document.addEventListener('click', () => {
	cursor.classList.add('expand');

	setTimeout(() => {
		cursor.classList.remove('expand');
	}, 500);
});

});
